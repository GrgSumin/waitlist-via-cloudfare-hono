import { Hono } from "hono";
import { accessAuth } from "./middleware/auth";
import { insertSubscriber } from "./db/query";

const app = new Hono<{ Bindings: Env }>();

app.use("/api/health", accessAuth);

app.get("/api/health", (c) => c.json("Healthy🔥"));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/subscribe", async (c) => {
  const body = await c.req.json<{ email?: unknown }>().catch(() => null);

  if (!body || typeof body.email !== "string") {
    return c.json({ error: "An email address is required." }, 400);
  }

  const email = body.email.trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return c.json({ error: "That email address doesn't look valid." }, 400);
  }

  const subscriber = await insertSubscriber(c.env.DB, { email });

  if (!subscriber) {
    return c.json({ message: "You're already on the list." }, 200);
  }

  return c.json({ message: "You're on the list." }, 201);
});

export default app;
