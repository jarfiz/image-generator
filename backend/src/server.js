import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cors from "cors";
import config from "./lib/config.js";
import imageRoutes from "./routes/image.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// use public/generated: location of the generated image as static so it can be view
// this will become  http://localhost:3000/public/generated/...filename
app.use(
  "/public/generated",
  express.static(path.join(__dirname, "../public/generated"))
);

app.use("/api/images", imageRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
