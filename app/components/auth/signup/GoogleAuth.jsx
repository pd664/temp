"use client";

import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function GoogleAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();


  async function handleClick() {
    await signIn("google");
  }

  return (
    <div>
      <button
        className="hover:border hover:border-[rgb(239,54,24)] whitespace-nowrap inline-block px-4 py-2 rounded-lg flex gap-2 items-center justify-center border border-gray-300 w-full"
        onClick={handleClick}
      >
        <FcGoogle /> Continue with Google
      </button>
    </div>
  );
}

export default GoogleAuth;

