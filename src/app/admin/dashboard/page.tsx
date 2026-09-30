import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { jewelleryItems } from "@/db/schema";
export default async function Dashboard() {
  if((await cookies()).get("admin_session")?.value !== "authenticated_true") redirect("/admin/login");
  const items = await db.select().from(jewelleryItems);
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Owner Jewellery Manager</h1>
      <div className="space-y-2">{items.map(i => <div key={i.id} className="p-3 bg-white border rounded flex justify-between"><span>{i.title} ({i.category})</span></div>)}</div>
    </div>
  );
}