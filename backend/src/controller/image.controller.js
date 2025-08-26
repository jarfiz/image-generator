import fs from "fs";
import { ai, Modality } from "../lib/ai.js";
import prisma from "../lib/prisma.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: prompt,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");

        const imageName = `image-${Date.now()}.png`;
        const location = "public/generated";

        if (!fs.existsSync(location)) {
          fs.mkdirSync(location, { recursive: true });
        }

        fs.writeFileSync(`${location}/${imageName}`, buffer);

        const protocol = req.protocol;
        const host = req.get("host");
        const url = `${protocol}://${host}/public/generated/${imageName}`;

        // save to database, so it can be use in frontend
        await prisma.image.create({
          data: {
            prompt,
            url,
          },
        });

        const image = "Image saved as " + imageName;
        res.status(201).json({ message: "Success", image, url });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
