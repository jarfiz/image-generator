import { GoogleGenAI, Modality } from "@google/genai";
import config from "./config.js";

const ai = new GoogleGenAI({
  apiKey: config.GOOGLE_API_KEY,
});

export { ai, Modality };
