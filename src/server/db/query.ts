import * as schema from "./schema";
import { getDb } from "./db";
import type { NewSubscriber } from "./schema";

/**
 * Adds a subscriber to the waitlist.
 *
 * Returns the new row, or `undefined` when that email was already on the
 * list — a repeat signup is a no-op rather than an error.
 */
export const insertSubscriber = async (
  binding: D1Database,
  subscriber: NewSubscriber,
) => {
  const db = getDb(binding);
  const [result] = await db
    .insert(schema.subscribers)
    .values(subscriber)
    .onConflictDoNothing({ target: schema.subscribers.email })
    .returning();

  return result;
};
