import { GoogleGenAI } from "@google/genai";
import {
  MODEL_NAME,
  TET_PROMPT_TEMPLATE,
  BACKGROUND_CHANGE_PROMPT_TEMPLATE,
} from "../constants";

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

  // Split prompt into system instruction and main prompt with reminder
  const finalPrompt = `
    ${TET_PROMPT_TEMPLATE}

    BACKGROUND & ATMOSPHERE:
    ${backgroundDescription}

    🚨🚨🚨 FINAL REMINDER - CRITICAL 🚨🚨🚨
    ABOVE ALL ELSE: The face from Image 1 must remain EXACTLY THE SAME.
    DO NOT change, alter, modify, or regenerate ANY facial features.
    The person's identity must be 100% preserved and recognizable.
    If you changed the face in any way, you FAILED this task.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          {
            text: "🔐 SYSTEM INSTRUCTION: Your PRIMARY OBJECTIVE is to preserve the person's face from Image 1 EXACTLY. Do not alter facial features under ANY circumstances. Face preservation is MORE IMPORTANT than background, jewelry, or any other aspect.",
          },
          {
            text: "Image 1: The Person (FACE MUST REMAIN UNCHANGED). Image 2: The Jewelry to be worn by the person.",
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

export const generateBackgroundChange = async (
  personBase64: string,
  personMimeType: string,
  backgroundDescription: string,
): Promise<string> => {
  // Use API key from environment variable
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Split prompt with final reminder after background description
  const finalPrompt = `
    ${BACKGROUND_CHANGE_PROMPT_TEMPLATE}

    BACKGROUND & ATMOSPHERE:
    ${backgroundDescription}

    🚨🚨🚨 FINAL REMINDER - CRITICAL 🚨🚨🚨
    ONLY CHANGE THE BACKGROUND. NOTHING ELSE.
    The ENTIRE PERSON (face, body, clothing, pose) from Image 1 must remain EXACTLY THE SAME.
    DO NOT change, alter, modify, or regenerate the person in ANY way.
    The person's identity must be 100% preserved and recognizable.
    If you changed the person in any way, you FAILED this task.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: {
        parts: [
          {
            text: "🔐 SYSTEM INSTRUCTION: Your PRIMARY OBJECTIVE is to ONLY change the background. The person from Image 1 must remain COMPLETELY UNCHANGED - same face, same body, same clothing, same pose. Person preservation is MORE IMPORTANT than the new background.",
          },
          {
            text: "Image: The Person (PERSON MUST REMAIN 100% UNCHANGED - ONLY background will change).",
          },
          {
            inlineData: {
              mimeType: personMimeType,
              data: personBase64,
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
