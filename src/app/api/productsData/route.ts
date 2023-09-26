import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await axios.get("https://dummyjson.com/products");
  return NextResponse.json(products);
}
