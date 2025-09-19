import { sql } from "drizzle-orm";
import { db } from "../src/lib/db";

async function truncateDb() {
  try {
    // Drop all tables in the public schema
    await db.execute(
      sql`
        DO $$
        DECLARE
            r RECORD;
        BEGIN
            FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public')
            LOOP
                EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
            END LOOP;
        END $$;
      `,
    );

    // Drop all enum types in the public schema
    await db.execute(
      sql`
        DO $$
        DECLARE
            r RECORD;
        BEGIN
            FOR r IN (SELECT typname FROM pg_type WHERE typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public') AND typtype = 'e')
            LOOP
                EXECUTE 'DROP TYPE IF EXISTS ' || quote_ident(r.typname) || ' CASCADE';
            END LOOP;
        END $$;
      `,
    );

    // Drop the entire drizzle schema (including __drizzle_migrations table)
    await db.execute(sql`DROP SCHEMA IF EXISTS drizzle CASCADE`);

    console.log(
      "All tables and enum types in public schema deleted and drizzle schema dropped successfully!",
    );
  } catch (error) {
    console.error("Error during database reset:", error);
    process.exit(1);
  } finally {
    // Force exit since drizzle doesn't expose connection pool cleanup
    process.exit(0);
  }
}

truncateDb();
