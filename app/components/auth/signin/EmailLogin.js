"use client"
import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "@/utils/token";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { Input } from "@/components/ui/input";
import APP_CONFIG from '@/config';

function EmailSignIn({ switchToSignUp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const [emailValidatorResult, setEmailValidatorResult] = useState(true);

    
    const clickHandler = async (e) => {
        e.preventDefault();
        console.log("signinByEmail",process.env)
        setLoading(true);
        await axios.post(`${APP_CONFIG.BACKEND_URL}/signinByEmail`, {
            email: email,
            password: password,
        })
        .then((response) => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            console.log(response.data.token)
            const queryString = new URLSearchParams({
                token: response.data.token,
                user: response.data.user
            }).toString();
            window.location.href = `${APP_CONFIG.REDIRECT_URL_SUCCESS}/?${queryString}`;
        })
        .catch((error) => {
            console.log("error", error)
            setLoading(false);
            setError(error.response.data.message);
        });
    };

  return (
    <div className='px-3'>
        <div className='flex flex-col gap-5'>
            <p className='font-bold-md text-xl'>Signing In</p>
            <Input type="email" placeholder="For eg. peter@myshop.eu" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Enter your password" className="signup_input" onChange={(e) => setPassword(e.target.value)} />
                <input
                type="submit"
                value={loading ? "Loading..." : "Submit"}
                className="text-[rgb(239,54,24)] py-2 rounded-xl border border-[rgb(239,54,24)] border-solid border-[1px] hover:text-white hover:bg-[rgb(239,54,24)]"
                onClick={clickHandler}
              />
            {!emailValidatorResult && (
                <div className=''>
                    <p className='text-[red] flex items-center gap-2'><CgDanger size={20} /> Please enter a valid email address.</p>
                </div>
            )}
           {/* <span className="text-[rgb(239,54,24)] text-center">Or, Have an account</span> */}
            
            
            
        </div>
    </div>
  )
}

export default EmailSignIn