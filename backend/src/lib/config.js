import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

export default config;
