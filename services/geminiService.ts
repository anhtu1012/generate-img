import { GoogleGenAI } from "@google/genai";
import { MODEL_NAME, TET_PROMPT_TEMPLATE } from "../constants";

export const generateTetImage = async (
  personBase64: string,
  personMimeType: string,
  jewelryBase64: string,
  jewelryMimeType: string,
  backgroundDescription: string,
): Promise<string> => {
  // Use API key from environment variable
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey });

  const finalPrompt = `
    ${TET_PROMPT_TEMPLATE}

    BACKGROUND & ATMOSPHERE:
    ${backgroundDescription}
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          {
            text: "Image 1: The Person. Image 2: The Jewelry to be worn by the person.",
          },
          {
            inlineData: {
              mimeType: personMimeType,
              data: personBase64,
            },
          },
          {
            inlineData: {
              mimeType: jewelryMimeType,
              data: jewelryBase64,
            },
          },
          {
            text: finalPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          imageSize: "2K", // High quality output
          aspectRatio: "3:4", // Good for portrait photography
        },
      },
    });

    // Extract image from response
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image generated in the response.");
  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    // Handle the specific "Requested entity was not found" error for API keys
    if (
      error.message &&
      error.message.includes("Requested entity was not found")
    ) {
      throw new Error("API_KEY_INVALID");
    }
    throw error;
  }
};
