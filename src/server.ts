import express, { Express } from "express";
import mysql from "mysql2/promise";
import APP_CONFIG from "./config";
import logger from "./config/logger";

export const app: Express = express();

const pool = mysql.createPool({
  host: APP_CONFIG.DB_HOST,
  user: APP_CONFIG.DB_USER,
  password: APP_CONFIG.DB_PASSWORD,
  database: APP_CONFIG.DB_NAME,
  connectionLimit: APP_CONFIG.DB_CONNECTION_LIMIT,
});

export async function testDatabaseConnection(): Promise<void> {
  try {
    const connection = await pool.getConnection();
    logger.info("Database connected successfully");
    connection.release();
  } catch (error: unknown) {
    logger.error("Unable to connect to the database", { error });
    process.exit(1);
  }
}
