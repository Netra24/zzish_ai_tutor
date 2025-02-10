import { json } from '@sveltejs/kit';
import 'dotenv/config';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
const API_KEY = process.env.GEMINI_API_KEY;

export async function POST({ request }) {
    const { userInput } = await request.json();

    const response = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: `You are an expert French language tutor. ${userInput}` }] }]
        })
    });

    const data = await response.json();
    return json({ reply: data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand." });
}
