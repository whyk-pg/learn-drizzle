import { drizzle } from "drizzle-orm/tidb-serverless";

export const db = drizzle({ connection: process.env.DATABASE_URL ?? "" });
