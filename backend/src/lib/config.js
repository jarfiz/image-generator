import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
};

export default config;
