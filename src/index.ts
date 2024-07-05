import cors from "cors";
import express from "express";
import APP_CONFIG from "./config";
import logger from "./config/logger";
import { app, testDatabaseConnection } from "./server";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function startServer() {
  await testDatabaseConnection();

  app.listen(APP_CONFIG.PORT, () => {
    logger.info(`Server running at http://localhost:${APP_CONFIG.PORT}`);
  });
}

startServer().catch((error) => {
  logger.error("Failed to start server", { error });
  process.exit(1);
});
