"use client";
require("dotenv").config();
import React, { useState, Suspense } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook, MdOutlineEmail, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import EmailLogin from "./EmailSignUp";
import GoogleAuth from "./GoogleAuth";
import { SessionProvider } from "next-auth/react";

function signup({ switchToSignIn }) {
  const [emailLogin, setEmailLogin] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);
  const [facebookLogin, setFacebookLogin] = useState(false);

  const emailHandler = () => {
    setEmailLogin(true);
  };
  console.log("these are comps", process.env.GOOGLE_CLIENT_SECRET);

  return (
    <div className="">
      <div className="flex gap-4">
        <div className="flex lg:p-10 sm:px-5 md:p-5 py-20 mt-10 w-full">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl">Welcome to</h1>
            <div className="">
              <Image
                src="/signin_logo.jpg"
                alt="logo"
                width={500}
                height={500}
                optimized
              />
            </div>
            {/* <Image src='/signin_logo.jpg' alt='logo' width={800} height={600} unoptimized /> */}
            <div className="border-t-2 border-slate-300 border-solid"></div>

            <EmailLogin />

            <div className="flex flex-col gap-5">
              <p className="text-xl font-bold">Get Started by Signing Up</p>
              <SessionProvider>
      <GoogleAuth />
    </SessionProvider>
            </div>

            <div className="border-t-2 border-gray-300 border-solid"></div>
            <div className="flex flex-col gap-5 ">
              <button onClick={switchToSignIn} className="">
                <div className="whitespace-nowrap flex gap-2 items-center justify-center text-[rgb(239,54,24)] py-2 rounded-xl border border-[rgb(239,54,24)] border-solid border-[1px] hover:text-white hover:bg-[rgb(239,54,24)]">
                  Already a user? Login here <MdChevronRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;


// function SignUp() {
//   return (
//     <SessionProvider>
//                 <GoogleAuth />
//               </SessionProvider>
//   )
// }