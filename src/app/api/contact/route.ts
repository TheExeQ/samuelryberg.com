import { ContactFormInfo } from "@/types/contact";

export async function POST(request: Request) {
  const { name, email, message }: ContactFormInfo = await request.json();

  const webhookUrl = process.env.DISCORD_WEBHOOK;
  const payload = {
    username: "Contact Form Bot",
    embeds: [
      {
        title: "Contact Form Submission",
        fields: [
          { name: "Name", value: name, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Message", value: message },
        ],
        color: 3447003,
      },
    ],
  };

  if (!webhookUrl) {
    return new Response("ERROR", { status: 500 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return new Response("ERROR", { status: 400 });
    }
  } catch (error) {
    return new Response("ERROR", { status: 500 });
  }

  return new Response("OK");
}
