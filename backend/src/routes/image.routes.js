import { Router } from "express";
import { generateImage, images } from "../controller/image.controller.js";

const router = Router();

router.post("/generate", generateImage);

router.get("/", images);

export default router;
