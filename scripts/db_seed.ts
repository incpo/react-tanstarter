import { sql } from "drizzle-orm";
import { db } from "../src/lib/db";

async function seedDb() {
  try {
    // Drop all tables in the public schema
    await db.execute(
      sql`
    INSERT INTO "plan" (id, code, name, monthly_word_quota, max_words_per_request, price_cents, rollover, created_at)
VALUES
  ('plan_starter', 'STARTER','Starter',  5000,  500,  1000, false, now()),
  ('plan_growth',  'GROWTH', 'Growth',  15000, 1500,  3000, false, now()),
  ('plan_pro',     'PRO',    'Pro',     30000, 3000,  6000, false, now())
ON CONFLICT (code) DO NOTHING;
      `,
    );

    console.log("All tables in public schema seeded successfully!");
  } catch (error) {
    console.error("Error during database seed:", error);
    process.exit(1);
  } finally {
    // Force exit since drizzle doesn't expose connection pool cleanup
    process.exit(0);
  }
}

seedDb();
