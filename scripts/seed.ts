import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        title: "Urdu",
        imageSrc: "./pk.svg",
      },
      {
        title: "English",
        imageSrc: "./us.svg",
      },
      {
        title: "Turkish",
        imageSrc: "./tr.svg",
      },
      {
        title: "Japanese",
        imageSrc: "./jp.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main();
