import connect from "@/helpers/db";
import Brand from "@/models/Brand";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const brands = await Brand.find({}).exec();

    return NextResponse.json(brands);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const brand = await req.json();
    console.log(brand);

    const existingBrand = await Brand.findOne({ value: brand.value });

    if (existingBrand) {
      return NextResponse.json(
        { error: "brand already exists" },
        { status: 400 }
      );
    }
    const newBrand = new Brand(brand);

    const saveBrand = await newBrand.save();

    return NextResponse.json({
      message: "Brand added successfully",
      success: true,
      saveBrand,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
