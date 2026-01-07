// app/api/blogs/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
console.log(body);
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
export async function GET() {
  return NextResponse.json({ message: "Blogs API working" });
}
