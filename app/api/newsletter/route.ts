import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = newsletterSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if already exists
    const existing = await db.newsletter.findUnique({
      where: { email: validated.data.email },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 }
      );
    }

    await db.newsletter.create({
      data: {
        email: validated.data.email,
        isActive: true,
      },
    });

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("NEWSLETTER_API_ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
