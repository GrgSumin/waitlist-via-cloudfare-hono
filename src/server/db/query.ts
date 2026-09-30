import { D1Database } from "@cloudflare/workers-types";
import * as schema from "./schema";
import { getDb } from "./db";
import type { NewSubscriber } from "./schema";

export const insertSubscriber = async (
  D1Database: D1Database,
  NewSubscriber: NewSubscriber,
) => {
  const db = getDb(D1Database);
  const [result] = await db
    .insert(schema.subscribers)
    .values(NewSubscriber)
    .returning();
  return result;
};
