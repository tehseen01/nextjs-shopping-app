import connect from "@/helpers/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exist please login!" },
        { status: 400 }
      );
    }

    const newUser = new User(data);

    const user = await newUser.save();

    return NextResponse.json({ user }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("email");

    const user = await User.findOne({ email: q });

    return NextResponse.json({ user }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
