
import { GoogleGenAI, Type } from "@google/genai";
import { AIInsight } from "../types";

export const getCourseInsight = async (courseName: string): Promise<AIInsight | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Explain the importance of the course "${courseName}" in the Bachelor of Information Communication Technology Education (BICTE) program. Provide an overview, key topics, and potential career paths.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            courseName: { type: Type.STRING },
            overview: { type: Type.STRING },
            keyTopics: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            careerPath: { type: Type.STRING }
          },
          required: ["courseName", "overview", "keyTopics", "careerPath"]
        }
      }
    });

    const text = response.text.trim();
    return JSON.parse(text) as AIInsight;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
