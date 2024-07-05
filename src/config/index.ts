import dotenv from "dotenv";

dotenv.config();

const APP_CONFIG = {
  PORT: process.env.PORT || 8000,
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_CONNECTION_LIMIT: parseInt(process.env.DB_CONNECTION_LIMIT || "10"),
};

export default APP_CONFIG;
