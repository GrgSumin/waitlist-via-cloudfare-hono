import { it, expect, mock, beforeEach } from "bun:test";
import { insertSubscriber } from "./query";
import type { D1Database } from "@cloudflare/workers-types";
import type { NewSubscriber } from "./schema";
import { getTestDb } from "../../../test/get-test-db";
import { reset } from "drizzle-seed";
import * as schema from "./schema";

mock.module("./db.ts", () => {
  return {
    getDb: () => getTestDb(),
  };
});

beforeEach(async () => {
  const db = getTestDb();
  await reset(db, schema);
});

it("insert a new subsciber into the database", async () => {
  const newSub: NewSubscriber = { email: "test@test.com" };
  const subscribers = await insertSubscriber({} as D1Database, newSub);
  expect(subscribers.email).toBe(newSub.email);
  expect(subscribers.id).toBeDefined();
  expect(subscribers.createdAt).toBeDefined();
});

it("ignores a duplicate email instead of throwing", async () => {
  const newSub: NewSubscriber = { email: "test@test.com" };
  const first = await insertSubscriber({} as D1Database, newSub);
  const second = await insertSubscriber({} as D1Database, newSub);

  expect(first).toBeDefined();
  expect(second).toBeUndefined();
});

it("throws an error when inserting a invalid email", async () => {
  const newSub: NewSubscriber = { email: "testtest.com" };
  await expect(insertSubscriber({} as D1Database, newSub)).rejects.toThrow();
});
