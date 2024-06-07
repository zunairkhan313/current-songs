import connectMongoDB from "../../../lib/mongodb";
import Product from "../../../models/products";
import { NextResponse } from "next/server";

import cloudinary from "cloudinary";
import config from "@/utils/config";

// Configuration
cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET,
});

export async function POST(request) {
  const { title, description, img, price, code, categoryId } =
    await request.json();
  console.log(title, description, img, price, code, categoryId);
  await connectMongoDB();
  const response = await cloudinary.uploader.upload(img[0]);
  await Product.create({
    title,
    description,
    image: response.url,
    price,
    code,
    category_id: categoryId,
  });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const Products = await Product.find();
  return NextResponse.json({ Products });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
