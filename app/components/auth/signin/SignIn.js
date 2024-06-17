import React from "react";
import EmailSignIn from "./EmailLogin";
import Image from "next/image";
import { SessionProvider } from "next-auth/react";
import GoogleAuth from "../signup/GoogleAuth";
function SignIn({ switchToSignUp }) {
  return (
    <div>
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
      {/* <SessionProvider>
          <GoogleAuth />
        </SessionProvider> */}
      <EmailSignIn switchToSignUp={switchToSignUp} />
      <div className="flex flex-col gap-5 pt-5">
              <p className="text-xl font-bold">Or, Get Started by Signing Up</p>
              <SessionProvider>
      <GoogleAuth />
    </SessionProvider>
            </div>
            <div className="w-100 pt-5">
                <div className="btn_signup w-100">
                    <button className="text-[rgb(239,54,24)] py-2 rounded-xl border border-[rgb(239,54,24)] border-solid border-[1px] hover:text-white hover:bg-[rgb(239,54,24)] w-[28rem]" onClick={switchToSignUp}>
                    New User? Sign Up
                </button>
                
                </div>
            </div>
    </div>
  );
}
export default SignIn;
