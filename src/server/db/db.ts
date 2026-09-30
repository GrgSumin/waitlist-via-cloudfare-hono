import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

// `D1Database` is a global from worker-configuration.d.ts (`wrangler types`).
export const getDb = (binding: D1Database) => {
  return drizzle(binding, { schema });
};

export type DrizzleDb = ReturnType<typeof getDb>;
