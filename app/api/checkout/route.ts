import { NextResponse } from "next/server";
import Stripe from "stripe";

// Define Product Type
interface Product {
  name: string;
  image?: string;
  price: number;
  quantity: number;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
  console.log("API HIT: /api/checkout");

  try {
    const { products }: { products: Product[] } = await req.json(); 

    console.log("Received products:", products);

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products found" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            images: product.image ? [product.image] : [],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    console.log("Session Created:", session.url);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
