#!/bin/bash

# Automated migration generator with timestamp support
# This script wraps drizzle-kit generate to automatically use timestamps

set -e

# Configuration
DRIZZLE_DIR="./drizzle"
JOURNAL_FILE="$DRIZZLE_DIR/meta/_journal.json"

echo "🚀 Generating migration..."

# Fix id and prevId chain in existing snapshot files BEFORE running drizzle-kit
echo "🔗 Fixing migration chain in snapshot files first..."

python3 -c "
import json
import os
import glob

drizzle_meta_dir = '$DRIZZLE_DIR/meta'

# Find all existing snapshot files
snapshot_files = sorted(glob.glob(f'{drizzle_meta_dir}/*_snapshot.json'))

if not snapshot_files:
    print('No snapshot files found')
else:
    # Read and fix each snapshot file in order
    for i, snapshot_file in enumerate(snapshot_files):
        with open(snapshot_file, 'r') as f:
            snapshot_data = json.load(f)
        
        # Update prevId in snapshot
        if i == 0:
            # First migration
            snapshot_data['prevId'] = '00000000-0000-0000-0000-000000000000'
        else:
            # Get the id from the previous snapshot
            prev_snapshot_file = snapshot_files[i-1]
            with open(prev_snapshot_file, 'r') as f:
                prev_snapshot_data = json.load(f)
            snapshot_data['prevId'] = prev_snapshot_data['id']
        
        # Write back the updated snapshot
        with open(snapshot_file, 'w') as f:
            json.dump(snapshot_data, f, indent=2)
        
        basename = os.path.basename(snapshot_file)
        # print(f'✅ Fixed snapshot: {basename}')

    print(f'✅ Processed {len(snapshot_files)} snapshot files')
"

# Count migrations before generation
MIGRATIONS_BEFORE=$(ls -1 "$DRIZZLE_DIR"/*.sql 2>/dev/null | wc -l)

# Run drizzle-kit generate
echo "📝 Running drizzle-kit generate..."
npx drizzle-kit generate

# Count migrations after generation to check if new one was created
MIGRATIONS_AFTER=$(ls -1 "$DRIZZLE_DIR"/*.sql 2>/dev/null | wc -l)

if [ "$MIGRATIONS_AFTER" -eq "$MIGRATIONS_BEFORE" ]; then
    echo "✅ No schema changes detected - no new migration generated"
    exit 0
fi

# Find the most recent migration (should be the one just created)
LATEST_MIGRATION=$(ls -1 "$DRIZZLE_DIR"/*.sql | sort -V | tail -1)
LATEST_SNAPSHOT=$(ls -1 "$DRIZZLE_DIR/meta/"*_snapshot.json | sort -V | tail -1)

if [ -z "$LATEST_MIGRATION" ]; then
    echo "❌ No migration file found after generation"
    exit 1
fi

# Extract the current migration number and name
MIGRATION_BASENAME=$(basename "$LATEST_MIGRATION")
MIGRATION_NUM=$(echo "$MIGRATION_BASENAME" | grep -o '^[0-9]*')
MIGRATION_NAME=$(echo "$MIGRATION_BASENAME" | sed "s/^${MIGRATION_NUM}_//")

# Always convert the latest migration to use real timestamp

echo "📋 Found new migration: $MIGRATION_BASENAME"
echo "🔄 Converting to timestamp format..."

# Generate timestamp from file creation date
case "$OSTYPE" in
    darwin*)
        # macOS
        TIMESTAMP=$(stat -f %B "$LATEST_MIGRATION")
        ;;
    linux*)
        # Linux
        TIMESTAMP=$(stat -c %W "$LATEST_MIGRATION" 2>/dev/null || stat -c %Y "$LATEST_MIGRATION")
        ;;
    *)
        # Fallback - use current timestamp
        TIMESTAMP=$(date +%s)
        echo "⚠️  Unknown OS, using current timestamp"
        ;;
esac

echo "📅 Using file creation timestamp: $TIMESTAMP ($(date -d @$TIMESTAMP 2>/dev/null || date -r $TIMESTAMP))"

# Create backup of journal
cp "$JOURNAL_FILE" "${JOURNAL_FILE}.backup"

# Define new filenames
NEW_SQL_FILE="$DRIZZLE_DIR/${TIMESTAMP}_${MIGRATION_NAME}"
OLD_SNAPSHOT_FILE="$DRIZZLE_DIR/meta/${MIGRATION_NUM}_snapshot.json"
NEW_SNAPSHOT_FILE="$DRIZZLE_DIR/meta/${TIMESTAMP}_snapshot.json"

# Extract the tag name without extension
OLD_TAG="${MIGRATION_NUM}_$(echo "$MIGRATION_NAME" | sed 's/\.sql$//')"
NEW_TAG="${TIMESTAMP}_$(echo "$MIGRATION_NAME" | sed 's/\.sql$//')"

echo "🏷️  Updating tags: $OLD_TAG -> $NEW_TAG"

# Update journal file using Python for reliable JSON parsing
python3 -c "
import json

# Read the journal file
with open('$JOURNAL_FILE', 'r') as f:
    data = json.load(f)

# Find and update the entry with the old tag
for entry in data['entries']:
    if entry['tag'] == '$OLD_TAG':
        entry['tag'] = '$NEW_TAG'
        entry['idx'] = $TIMESTAMP
        print(f'✅ Updated entry: idx {entry[\"idx\"]} -> {$TIMESTAMP}')
        break

# Write back the updated JSON
with open('$JOURNAL_FILE', 'w') as f:
    json.dump(data, f, indent=2)
"

# Rename files
mv "$LATEST_MIGRATION" "$NEW_SQL_FILE"
echo "📁 Renamed SQL: $(basename "$LATEST_MIGRATION") -> $(basename "$NEW_SQL_FILE")"

if [ -f "$OLD_SNAPSHOT_FILE" ]; then
    mv "$OLD_SNAPSHOT_FILE" "$NEW_SNAPSHOT_FILE"
    echo "📁 Renamed snapshot: $(basename "$OLD_SNAPSHOT_FILE") -> $(basename "$NEW_SNAPSHOT_FILE")"
fi

echo ""
echo "✨ Migration generation completed successfully!"
echo "🕐 Timestamp: $TIMESTAMP"
echo "📄 SQL file: $(basename "$NEW_SQL_FILE")"
echo "📄 Snapshot: $(basename "$NEW_SNAPSHOT_FILE")"
echo ""
echo "🎯 Ready to commit:"
echo "  git add $NEW_SQL_FILE $NEW_SNAPSHOT_FILE $JOURNAL_FILE"
echo "  git commit -m 'Add migration: $(echo "$MIGRATION_NAME" | sed 's/\.sql$//')'"

# Clean up backup file
rm -f "${JOURNAL_FILE}.backup"
echo "🧹 Cleaned up backup file" 