"use client";
import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { MdChevronRight } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setUserSession } from "@/utils/token";
import APP_CONFIG from '@/config';
import axios from "axios";
function EmailSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [emailValidatorResult, setEmailValidatorResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState('');
  const redirectUrl = process.env.REDIRECT_URL_SUCCESS;
  const backend_url = process.env.BACKEND_URL
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("clicked", email, password);
    axios
      .post(`${APP_CONFIG.BACKEND_URL}/signupByEmail`, {
        fname: fName,
        lname: lName,
        email: email,
        selectedValue:selectedValue,
        password: hashPassword(password),
        store_id: generateStoreId(),
      })
      .then((res) => {
        setLoading(false);
        alert(res?.data?.message);
        setUserSession(res.data.token, res.data.user);
            console.log(res.data.token)
            const queryString = new URLSearchParams({
                token: res.data.token,
                user: res.data.user
            }).toString();
            window.location.href = `${APP_CONFIG.REDIRECT_URL_SUCCESS}/?${queryString}`;
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        setError(err?.message);
      });
  };
  // setEmailValidatorResult(resultofEmailVal)
  // }
  const hashPassword = (pass) => {
    const salt = bcrypt?.genSaltSync(process.env.SALT);
    return bcrypt?.hashSync(pass, salt);
  };

  function generateStoreId() {
    // Generate a random number between 1000000 and 9999999 (inclusive)
    const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
    // Concatenate 'store_' with the random number
    const storeId = `store_${randomNumber}`;
    return storeId;
  }

  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <p className=" font-bold-md text-xl">Enter your email address below</p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Your First Name"
            onChange={(e) => setFname(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <Input
          type="email"
          placeholder="For eg. peter@myshop.eu"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          className="signup_input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="w-100">
          <Select className="w-100" onValueChange={handleChange}>
            <SelectTrigger className="w-100">
              <SelectValue placeholder="Select Your Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Product Designer">Product Designer</SelectItem>
                <SelectItem value="Software Developer">Software Developer</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="SDE-2">SDE-2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <input
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          className="text-[rgb(239,54,24)] py-2 rounded-xl border border-[rgb(239,54,24)] border-solid border-[1px] hover:text-white hover:bg-[rgb(239,54,24)] w-100"
          onClick={clickHandler}
        />
        {!emailValidatorResult && (
          <div className="">
            <p className="text-[red] flex items-center gap-2">
              <CgDanger size={20} /> Please enter a valid email address.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailSignUp;
