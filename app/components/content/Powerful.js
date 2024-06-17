import React from "react";
import Image from "next/image";
// import { div } from "lucide-react";

function Card({ icon, title, desc }) {
  return (
    <div className="">
      <div className="">
        <div className="flex gap-4 flex-start items-center w-100">
          <div className="text-md">
            {icon}
          </div>
          <div className="text-md">
            <span className="whitespace-nowrap font-bold-md py-4 font-bold">
              {title}
            </span>{" "}
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

function Powerful() {
  return (
    <div className="container py-[8rem]">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center gap-3">
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <div className="text-[rgb(239,54,24)] flex flex-col gap-5 text-4xl sm:text-4xl md:text-6xl lg:text-6xl">
              <h1 className=" font-bold">Powerful B2B</h1>
              <h1 className=" font-bold">Commerce Engine</h1>
            </div>
            <div className="">
              <p className="text-md text-slate-700">
                Tackle fragmented sales systems by consolidating all channels
                into one robust platform. Our solution simplifies complex
                integrations and enhances efficiency.
              </p>
            </div>
            <div className="">
              <div className="flex gap-5 flex-col">
                <div className="text-lg">
                  <Card
                    icon={
                      <svg
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_628_1108)">
                          <path
                            d="M18 17.3012L11.0642 13.8333L18 10.3654L24.9358 13.8333L18 17.3012Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 0C5.37258 0 0 5.37258 0 12V24C0 30.6274 5.37258 36 12 36H24C30.6274 36 36 30.6274 36 24V12C36 5.37258 30.6274 0 24 0H12ZM18.2795 9.10765C18.1036 9.01967 17.8964 9.01967 17.7205 9.10765L9.38716 13.2743C9.17542 13.3802 9.04167 13.5966 9.04167 13.8333C9.04167 14.0701 9.17542 14.2865 9.38716 14.3924L17.7205 18.559C17.8964 18.647 18.1036 18.647 18.2795 18.559L26.6128 14.3924C26.8246 14.2865 26.9583 14.0701 26.9583 13.8333C26.9583 13.5966 26.8246 13.3802 26.6128 13.2743L18.2795 9.10765ZM9.10765 21.8872C9.26202 21.5784 9.63744 21.4533 9.94618 21.6077L18 25.6346L26.0538 21.6077C26.3626 21.4533 26.738 21.5784 26.8923 21.8872C27.0467 22.1959 26.9216 22.5713 26.6128 22.7257L18.2795 26.8924C18.1036 26.9803 17.8964 26.9803 17.7205 26.8924L9.38716 22.7257C9.07842 22.5713 8.95328 22.1959 9.10765 21.8872ZM9.94618 17.441C9.63744 17.2866 9.26202 17.4118 9.10765 17.7205C8.95328 18.0292 9.07842 18.4046 9.38716 18.559L17.7205 22.7257C17.8964 22.8137 18.1036 22.8137 18.2795 22.7257L26.6128 18.559C26.9216 18.4046 27.0467 18.0292 26.8923 17.7205C26.738 17.4118 26.3626 17.2866 26.0538 17.441L18 21.4679L9.94618 17.441Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_628_1108">
                            <rect
                              width="36"
                              height="36"
                              fill="currentColor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    title={" Unified Sales Channels:"}
                    desc={
                      "Seamlessly manage all your sales channels in one place"
                    }
                  />
                </div>

                <div className="">
                  <Card
                    icon={
                      <svg
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_628_1108)">
                          <path
                            d="M18 17.3012L11.0642 13.8333L18 10.3654L24.9358 13.8333L18 17.3012Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 0C5.37258 0 0 5.37258 0 12V24C0 30.6274 5.37258 36 12 36H24C30.6274 36 36 30.6274 36 24V12C36 5.37258 30.6274 0 24 0H12ZM18.2795 9.10765C18.1036 9.01967 17.8964 9.01967 17.7205 9.10765L9.38716 13.2743C9.17542 13.3802 9.04167 13.5966 9.04167 13.8333C9.04167 14.0701 9.17542 14.2865 9.38716 14.3924L17.7205 18.559C17.8964 18.647 18.1036 18.647 18.2795 18.559L26.6128 14.3924C26.8246 14.2865 26.9583 14.0701 26.9583 13.8333C26.9583 13.5966 26.8246 13.3802 26.6128 13.2743L18.2795 9.10765ZM9.10765 21.8872C9.26202 21.5784 9.63744 21.4533 9.94618 21.6077L18 25.6346L26.0538 21.6077C26.3626 21.4533 26.738 21.5784 26.8923 21.8872C27.0467 22.1959 26.9216 22.5713 26.6128 22.7257L18.2795 26.8924C18.1036 26.9803 17.8964 26.9803 17.7205 26.8924L9.38716 22.7257C9.07842 22.5713 8.95328 22.1959 9.10765 21.8872ZM9.94618 17.441C9.63744 17.2866 9.26202 17.4118 9.10765 17.7205C8.95328 18.0292 9.07842 18.4046 9.38716 18.559L17.7205 22.7257C17.8964 22.8137 18.1036 22.8137 18.2795 22.7257L26.6128 18.559C26.9216 18.4046 27.0467 18.0292 26.8923 17.7205C26.738 17.4118 26.3626 17.2866 26.0538 17.441L18 21.4679L9.94618 17.441Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_628_1108">
                            <rect
                              width="36"
                              height="36"
                              fill="currentColor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    title={"Custom Pricing and Promotion Rules:"}
                    desc={
                      "Implement and manage intricate pricing structures and promotions."
                    }
                  />
                </div>

                <div className="">
                  <Card
                    icon={
                      <svg
                        width="3rem"
                        height="3rem"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_628_1136)">
                          <path
                            d="M16.125 19.875V16.125H19.875V19.875H16.125Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13 11.9583C12.4247 11.9583 11.9583 12.4247 11.9583 13V23C11.9583 23.5753 12.4247 24.0417 13 24.0417H23C23.5753 24.0417 24.0417 23.5753 24.0417 23V13C24.0417 12.4247 23.5753 11.9583 23 11.9583H13ZM15.5 14.875C15.1548 14.875 14.875 15.1548 14.875 15.5V20.5C14.875 20.8452 15.1548 21.125 15.5 21.125H20.5C20.8452 21.125 21.125 20.8452 21.125 20.5V15.5C21.125 15.1548 20.8452 14.875 20.5 14.875H15.5Z"
                            fill="currentColor"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 12C0 5.37258 5.37258 0 12 0H24C30.6274 0 36 5.37258 36 12V24C36 30.6274 30.6274 36 24 36H12C5.37258 36 0 30.6274 0 24V12ZM10.7083 20.2917V23C10.7083 24.2657 11.7343 25.2917 13 25.2917H14.875V27.1667C14.875 27.5118 15.1548 27.7917 15.5 27.7917C15.8452 27.7917 16.125 27.5118 16.125 27.1667V25.2917H19.875V27.1667C19.875 27.5118 20.1548 27.7917 20.5 27.7917C20.8452 27.7917 21.125 27.5118 21.125 27.1667V25.2917H23C24.2657 25.2917 25.2917 24.2657 25.2917 23V20.2917H27.1667C27.5118 20.2917 27.7917 20.0118 27.7917 19.6667C27.7917 19.3215 27.5118 19.0417 27.1667 19.0417H25.2917V16.125H27.1667C27.5118 16.125 27.7917 15.8452 27.7917 15.5C27.7917 15.1548 27.5118 14.875 27.1667 14.875H25.2917V13C25.2917 11.7343 24.2657 10.7083 23 10.7083H21.125V8.83333C21.125 8.48816 20.8452 8.20833 20.5 8.20833C20.1548 8.20833 19.875 8.48816 19.875 8.83333V10.7083H16.125V8.83333C16.125 8.48816 15.8452 8.20833 15.5 8.20833C15.1548 8.20833 14.875 8.48816 14.875 8.83333V10.7083H13C11.7343 10.7083 10.7083 11.7343 10.7083 13V14.875H8.83333C8.48816 14.875 8.20833 15.1548 8.20833 15.5C8.20833 15.8452 8.48816 16.125 8.83333 16.125H10.7083V19.0417H8.83333C8.48816 19.0417 8.20833 19.3215 8.20833 19.6667C8.20833 20.0118 8.48816 20.2917 8.83333 20.2917H10.7083Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_628_1136">
                            <rect
                              width="36"
                              height="36"
                              fill="currentColor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    title={"100+ Integrations:"}
                    desc={
                      "Easily integrate with over 100 B2B tools and applications."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="">
            <Image
              src={"/powerful.png"}
              alt="Example Image"
              width={1600}
              height={900}
              className="w-full h-auto rounded-tr-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Powerful;
