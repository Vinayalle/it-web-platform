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
export async function GET(req: Request) {
  // const { searchParams } = new URL(req.url);
  // const page = searchParams.get("page") ?? "0";

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/v1/blogs`,
    { cache: "no-store" }
  );


  const data = await res.json();


  // ✅ IMPORTANT FIX
  const blogs = data.content ?? data; 

  return NextResponse.json({
    blogs: blogs,
    // meta: {
    //   totalPages: data.totalPages,
    //   totalElements: data.totalElements,
    // },
  });
}
