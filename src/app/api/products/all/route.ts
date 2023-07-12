import connect from "@/helpers/db";
import Product from "@/models/Product";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      colors,
      sizes,
      highlights,
      discountPrice,
    } = reqBody;

    console.log(reqBody);

    //check if product already exists
    const product = await Product.findOne({ title });

    if (product) {
      return NextResponse.json(
        { error: "Product already exists" },
        { status: 400 }
      );
    }

    const newProduct = new Product({
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
      images,
      colors,
      sizes,
      highlights,
      discountPrice,
    });

    const saveProduct = await newProduct.save();

    return NextResponse.json({
      message: "Product created successfully",
      success: true,
      saveProduct,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams;
    const page = parseInt(q.get("page")) || 1;
    const limit = parseInt(q.get("limit")) || 2;

    const brand = q.getAll("brand");
    const category = q.getAll("category");

    const totalProducts = await Product.countDocuments();

    const totalPages = Math.ceil(totalProducts / limit);
    const skip = (page - 1) * limit;

    // const products = await Product.find({
    //   $or: [{ brand: brand }, { category: category }],
    // });
    const products = await Product.find().skip(skip).limit(limit);

    return NextResponse.json({ products, page, totalPages, totalProducts });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
