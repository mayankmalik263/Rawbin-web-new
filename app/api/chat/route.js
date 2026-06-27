import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Cache the knowledge base in memory after first read
let knowledgeBase = null;

function getKnowledgeBase() {
  if (!knowledgeBase) {
    const filePath = path.join(process.cwd(), 'rawbin-knowledge.md');
    knowledgeBase = fs.readFileSync(filePath, 'utf-8');
  }
  return knowledgeBase;
}

const SYSTEM_PROMPT = `You are "Ask Rawbin" — a friendly, knowledgeable, and concise AI product concierge for Rawbin, India's first smart home composter made by Newcycl.

## Your Rules:
1. ONLY answer questions using the knowledge base provided below. Do NOT make up, guess, or hallucinate any information.
2. If a question is not covered in the knowledge base, politely say: "I don't have that information right now, but you can reach our team at compost@rawbin.in for help!"
3. Keep responses concise — 2 to 4 sentences maximum. Be warm, helpful, and enthusiastic about composting.
4. Use Indian English conventions (₹ for currency, "kg" for weight, etc.).
5. When mentioning prices, always specify the model (Rawbin S/M/L) and the price clearly.
6. Never discuss competitors by name. If asked, redirect to Rawbin's unique features.
7. For purchase/order queries, direct users to the waitlist: https://forms.gle/w8PioSB3WnWCgR8z8
8. For compost drop-off queries, mention the email: compostdrop@newcycl.com
9. You can use emojis sparingly to keep the tone friendly (🌱, ♻️, 💚).
10. DO NOT use markdown characters like bold stars (`**`), bullet stars (`*`), or dashes (`-`) for lists. Output ONLY plain text. For lists, use simple numbers (e.g. 1., 2.) or bullet emojis, and place each item on a clean new line.

## Knowledge Base:
`;

export async function POST(request) {
  try {
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { reply: "I didn't catch that. Could you please rephrase your question?" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey === 'your_groq_api_key_here') {
      return NextResponse.json(
        { reply: "I'm currently being set up! Please check back soon or email compost@rawbin.in for help. 🌱" },
        { status: 503 }
      );
    }

    // Build the messages array for the Groq API
    const knowledge = getKnowledgeBase();
    const systemMessage = SYSTEM_PROMPT + knowledge;

    const messages = [
      { role: 'system', content: systemMessage },
      // Include conversation history (last 10 exchanges to stay within context limits)
      ...history.slice(-20),
      { role: 'user', content: message }
    ];

    // Call Groq API (OpenAI-compatible endpoint)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: messages,
        temperature: 0.3,
        max_tokens: 300,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API error:', response.status, errorData);
      return NextResponse.json(
        { reply: "I'm having a little trouble right now. Please try again in a moment or email compost@rawbin.in for help! 🌱" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { reply: "I couldn't generate a response. Please try asking your question differently!" },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: "Something went wrong on our end. Please try again or reach out to compost@rawbin.in! 💚" },
      { status: 500 }
    );
  }
}
