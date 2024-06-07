import connectMongoDB from "../../../lib/mongodb";
import Checkout from "../../../models/checkout";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, name, country, address, userId } = await request.json();
  console.log(email, name, country, address, userId);
  await connectMongoDB();
  await Checkout.create({ email, name, country, address, user_id: userId });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const Checkouts = await Checkout.find();
  return NextResponse.json({ Checkouts });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Checkout.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
