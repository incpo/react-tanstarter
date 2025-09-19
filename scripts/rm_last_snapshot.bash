#!/bin/bash

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../drizzle"

# Change to the script directory (where migration files should be)
cd "$SCRIPT_DIR"

echo $(ls -1)

# Get the last migration file number
last_migration=$(ls -1 [0-9]*.sql 2>/dev/null | sort -n | tail -n 1 | cut -d'_' -f1)

if [ -z "$last_migration" ]; then
    echo "No migration files found in $SCRIPT_DIR"
    exit 1
fi

# Remove the last migration SQL file
rm -f ${last_migration}*.sql

# Remove the corresponding snapshot file in meta folder
rm -f ./meta/${last_migration}*.json

# Remove the last entry from _journal.json
cp ./meta/_journal.json ./meta/_journal.json.tmp

# Use Node.js to remove last entry
node -e "
const fs = require('fs');
const journal = require('./meta/_journal.json');
journal.entries.pop();
fs.writeFileSync('./meta/_journal.json.tmp', JSON.stringify(journal, null, 2));
"

# Replace original file
mv ./meta/_journal.json.tmp ./meta/_journal.json

echo "Successfully removed migration ${last_migration}"