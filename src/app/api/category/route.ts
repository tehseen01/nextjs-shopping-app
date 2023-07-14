import connect from "@/helpers/db";
import Category from "@/models/Category";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const categories = await Category.find({}).exec();

    return NextResponse.json(categories);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const category = await req.json();
    console.log(category);

    const existingCategory = await Category.findOne({ value: category.value });

    if (existingCategory) {
      return NextResponse.json(
        { error: "category already exists" },
        { status: 400 }
      );
    }
    const newCategory = new Category(category);

    const saveCategory = await newCategory.save();

    return NextResponse.json({
      message: "Category added successfully",
      success: true,
      saveCategory,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
