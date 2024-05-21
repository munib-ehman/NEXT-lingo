import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema.ts",
  out: "./database/drizzle.ts",
  driver: "aws-data-api",
  dbCredentials: {
    // @ts-ignore
    url: process.env.DATABASE_URL!,
  },
});
