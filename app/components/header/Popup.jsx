'use client'
import React, {useState } from "react";
import Signup from "../auth/signup/SignUp";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import SignIn from '../auth/signin/SignIn'

function Popup({ title, bg, text, px }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const switchToSignUp = () => {
    console.log("fasle iisssssssss")
    setIsSignIn(false);
  };

  const switchToSignIn = () => {
    console.log("true isssssss")
    setIsSignIn(true);
  };
  return (
    <div>
      <Dialog className="flex items-center justify-center">
        <DialogTrigger className="flex items-center justify-center">
          <div variant="outline" style={{backgroundColor:`${bg}`, color:`${text}`}} className={`px-${px} py-[6px]`}>{title}</div>
        
        </DialogTrigger>
        <DialogContent className="flex gap-4">
          <div className="lg:block hidden">
            <Image
              src="/signin_girl.jpg"
              alt=""
              width={500}
              height={500}
              className=""
              unoptimized
            />
          </div>
          {isSignIn ? (
        <SignIn switchToSignUp={switchToSignUp} />
      ) : (
        <Signup switchToSignIn={switchToSignIn} />
      )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Popup;


