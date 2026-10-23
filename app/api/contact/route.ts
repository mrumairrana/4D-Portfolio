import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Body {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;

  console.log("EmailJS Config:", {
    hasPublicKey: !!publicKey,
    hasPrivateKey: !!privateKey,
    hasServiceId: !!serviceId,
    hasTemplateId: !!templateId,
  });

  if (!publicKey || !privateKey || !serviceId || !templateId) {
    return NextResponse.json(
      { error: "EmailJS is not configured. Please add environment variables." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          from_name: name,
          from_email: email,
          budget: budget || "Not specified",
          message: message,
          to_email: process.env.EMAILJS_TO_EMAIL || email,
          current_date: new Date().toLocaleDateString(),
        },
      }),
    });

    const responseData = await response.text();

    if (!response.ok) {
      console.error("EmailJS API error:", responseData);
      return NextResponse.json(
        { error: `Failed to send email: ${responseData}` },
        { status: response.status }
      );
    }

    console.log("Email sent successfully:", responseData);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    console.error("EmailJS error:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error?.message || "Unknown error"}` },
      { status: 500 }
    );
  }
}
