import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[rgb(9,10,25)] pt-[3rem] sm:pt-[3rem] md:pt-[5rem] lg:pt-[5rem]">
      <div className="container text-white">
        <div className="text-slate-300 text-sm">
          <div className="flex flex-col">
            <div className="">
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row ">
                <div className="flex flex-col gap-3 flex-1">
                  <Image src={"/icon_logo.png"} height={50} width={50} />
                  <p className="text-sm text-slate-300">
                    Supercharge commerce with plug-and-play copilots
                  </p>
                </div>
                <div className="flex justify-between py-10 flex-1">
                  <div className="">
                    <ul className="flex flex-col gap-5">
                      <li className="">Overview</li>
                      <li className="">Features</li>
                      <li className="">Pricing</li>
                      <li className="">Book a Demo</li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="flex flex-col gap-5">
                      <li className="">About</li>
                      <li className="">Careers</li>
                      <li className="">Partners</li>
                      <li className="">Blog</li>
                    </ul>
                  </div>
                  <div className="">
                    <ul className="flex flex-col gap-5">
                      <li className="">Contact</li>
                      <li className="">Help Center</li>
                      <li className="">FAQs</li>
                      <li className="">Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-20">
              <div className="flex justify-between">
                <div className="">
                  <p> &copy; 2024 supershop inc.</p>
                </div>
                <div className="">
                  <ul className="flex gap-10">
                    <li className="">Cookies</li>
                    <li className="">Terms</li>
                    <li className="">Privacy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
