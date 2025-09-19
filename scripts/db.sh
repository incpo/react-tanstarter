#!/bin/bash

# Database management script for unified database operations
# Usage: bun db [command] [options]

set -e

# Get the command (first argument)
COMMAND=$1
shift # Remove first argument so $@ contains only remaining args

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

case "$COMMAND" in
    "reset")
        cd "$PROJECT_ROOT"
        bun run "$SCRIPT_DIR/db_reset.ts"
        bunx drizzle-kit migrate
        ;;

    "generate")
        cd "$PROJECT_ROOT"
        bash "$SCRIPT_DIR/generate-migration.sh"
        ;;

    "rollback")
        cd "$PROJECT_ROOT"
        bash "$SCRIPT_DIR/rm_last_snapshot.bash"
        ;;
    "seed")
        cd "$PROJECT_ROOT"
        bun run "$SCRIPT_DIR/db_seed.ts"
        ;;

    *)
        # Pass through to drizzle-kit for any other commands
        cd "$PROJECT_ROOT"
        bunx drizzle-kit "$COMMAND" "$@"
        ;;
esac
