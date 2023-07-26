import { Cart } from "@/lib/interface";
import Product from "@/models/Product";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2022-11-15",
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req: NextRequest) {
  const { cart } = await req.json();
  // const { _id, quantity } = data;
  try {
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    cart.forEach((cartItem: Cart) => {
      line_items.push({
        quantity: cartItem.quantity,
        price_data: {
          currency: "INR",
          product_data: {
            name: cartItem.title,
          },
          unit_amount: cartItem.price * 100,
        },
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.PAYMENT_URL}/orders?success=true`,
      cancel_url: `${process.env.PAYMENT_URL}/orders?canceled=true`,
    });

    // NextResponse.redirect();
    return NextResponse.json(
      { url: session.url },
      {
        headers: corsHeaders,
      }
    );
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
