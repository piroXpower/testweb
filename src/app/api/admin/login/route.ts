import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set("admin_session", "authenticated_true", { httpOnly: true, secure: process.env.NODE_ENV === "production", maxAge: 86400, path: "/" });
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false }, { status: 401 });
}