import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const enquiry = await prisma.enquiry.create({
      data: {
        fullName: body.fullName,
        business: body.business,
        phone: body.phone,
        email: body.email,
        service: body.service,
        budget: body.budget,
        message: body.message,
      },
    });

    return NextResponse.json(enquiry);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}