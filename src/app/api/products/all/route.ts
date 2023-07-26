import connect from "@/helpers/db";
import Product from "@/models/Product";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    //check if product already exists
    const product = await Product.findOne({ title: reqBody.title });

    if (product) {
      return NextResponse.json(
        { error: "Product already exists" },
        { status: 400 }
      );
    }

    const newProduct = new Product(reqBody);

    const saveProduct = await newProduct.save();

    return NextResponse.json({
      message: "Product added successfully",
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
    const page = parseInt(q.get("page")!) || 1;
    const limit = parseInt(q.get("limit")!) || 10;

    const brand = q.getAll("brand");
    const category = q.getAll("category");
    const rating = q.get("rating");
    const offer = q.get("discountPercentage");
    const sort = q.get("sort");
    const order = q.get("order");

    const filter: Record<string, any> = {};

    let query = Product.find(filter);
    let totalDocQuery = Product.find(filter);

    if (category.length > 0) {
      query = query.find({
        category: { $in: category.map((cat) => new RegExp(cat, "i")) },
      });
      totalDocQuery = totalDocQuery.find({
        category: { $in: category.map((cat) => new RegExp(cat, "i")) },
      });
    }

    if (brand.length > 0) {
      totalDocQuery = totalDocQuery.find({
        brand: { $in: brand.map((item) => new RegExp(item, "i")) },
      });
      query = query.find({
        brand: { $in: brand.map((item) => new RegExp(item, "i")) },
      });
    }

    if (rating) {
      totalDocQuery = totalDocQuery.find({ rating: { $gt: rating } });
      query = query.find({ rating: { $gt: rating } });
    }

    if (offer) {
      totalDocQuery = totalDocQuery.find({
        discountPercentage: { $gt: offer },
      });
      query = query.find({ discountPercentage: { $gt: offer } });
    }

    const totalProducts = await totalDocQuery.countDocuments().exec();

    const totalPages = Math.ceil(totalProducts / limit);
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    const products = await query.exec();

    return NextResponse.json({ products, page, totalPages, totalProducts });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
