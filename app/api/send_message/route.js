import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

export async function POST(req) {
  const { name, email, phone, company, message } = await req.json();

  if (!name || !email || !phone || !company || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const now = new Date();
  const formattedTime = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} | ${new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Phnom_Penh",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now)}`;

  const formattedMessage = `
📢 Date: ${formattedTime}

├────────────────
├ • Name    : ${name}
├ • Email    : ${email}
├ • Phone   : ${phone}
├ • Company    : ${company}
├ • Message : ${message}
├────────────────
`;

  const telegramURL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: formattedMessage }),
    });

    if (response.ok) {
      return NextResponse.json({ status: "Message sent successfully!" });
    } else {
      const error = await response.json();
      return NextResponse.json(
        { error: "Failed to send message", details: error },
        { status: 500 }
      );
    }
  } catch (error) {
    let errorMessage = "An error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
