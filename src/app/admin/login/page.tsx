'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminLogin() {
  const [u, setU] = useState(""); const [p, setP] = useState(""); const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form onSubmit={async(e)=>{e.preventDefault(); const res=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,password:p})}); if(res.ok) router.push("/admin/dashboard"); else alert("Invalid credentials");}} className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Owner Login</h2>
        <input type="text" placeholder="Username" value={u} onChange={e=>setU(e.target.value)} className="w-full p-2 mb-3 border rounded" required />
        <input type="password" placeholder="Password" value={p} onChange={e=>setP(e.target.value)} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="w-full bg-amber-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}