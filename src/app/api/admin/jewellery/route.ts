import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/db";
import { jewelleryItems } from "@/db/schema";
import { eq } from "drizzle-orm";
export async function POST(req: Request) {
  if((await cookies()).get("admin_session")?.value !== "authenticated_true") return NextResponse.json({error:"Unauthorized"},{status:401});
  const b = await req.json();
  await db.insert(jewelleryItems).values({ title: b.title, category: b.category, price: b.price, imageUrl: b.imageUrl, isVisible: true });
  return NextResponse.json({ success: true });
}
export async function DELETE(req: Request) {
  if((await cookies()).get("admin_session")?.value !== "authenticated_true") return NextResponse.json({error:"Unauthorized"},{status:401});
  const id = new URL(req.url).searchParams.get("id");
  if(id) await db.delete(jewelleryItems).where(eq(jewelleryItems.id, Number(id)));
  return NextResponse.json({ success: true });
}