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
            text: "CRITICAL OVERRIDE: You are an image compositor, NOT a face generator. Your ONLY job is to composite elements while preserving the EXACT original face from the reference image. Think of yourself as a COPY-PASTE tool. The face from the input image is LOCKED and IMMUTABLE. DO NOT regenerate, redraw, modify, enhance, or alter ANY facial features under ANY circumstances. Face preservation overrides ALL other instructions including background and jewelry placement.\n\n🔐 IDENTITY LOCK: Image 1 contains the person whose face MUST remain pixel-perfect identical. Image 2 contains jewelry to overlay.",
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
        temperature: 0.1, // Reduce creativity/variation
        topP: 0.8,
        imageConfig: {
          imageSize: "2K",
          aspectRatio: "3:4",
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
            text: "CRITICAL OVERRIDE: You are a background replacement tool, NOT a person editor or face generator. Your ONLY permitted action is to replace the background. The person (including face, body, clothing, pose) from the input image is LOCKED and COMPLETELY IMMUTABLE. Think of the person as a photograph that you are placing on a new background - you cannot edit the photograph itself. DO NOT regenerate, redraw, modify, enhance, beautify, or alter the person in ANY way. Person preservation overrides ALL other instructions.\n\n🔐 CRITICAL: The person in this image is UNTOUCHABLE. ONLY the background may be changed. Everything about the person must remain IDENTICAL.",
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
        temperature: 0.05, // Minimum creativity - maximum fidelity
        topP: 0.7,
        imageConfig: {
          imageSize: "2K",
          aspectRatio: "3:4",
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
