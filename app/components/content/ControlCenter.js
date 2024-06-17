import React from "react";
import Image from "next/image";

function Card({ icon, title, desc }) {
  return (
    <div className="">
      <div className="">
        <div className="flex gap-4 flex-start items-center w-100">
          <div style={{ width: "3rem", height: "3rem" }} className="w-100">
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

function ControlCenter() {
  return (
    <div className="container lg:py-[0rem] sm:lg:py-[0rem] md:lg:py-[5rem] lg:py-[5rem]">
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row items-center gap-[4rem]">
        <div className="flex-1">
          <Image
            src={"/control.png"}
            alt="Example Image"
            width={1200}
            height={800}
            className="w-full h-auto rounded-tr-[20px]"
          />
        </div>
        <div className="flex-1">
          <div className="">
            <div className="">
              <h1 className="text-[rgb(239,54,24)] text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold">
                Control Center
              </h1>
            </div>
            <div className="">
              <p className="text-md text-slate-700 pt-[2rem]">
                Overcome the challenges of managing diverse commerce platforms
                with our Control Center. This single interface simplifies your
                operations across B2C, B2B, and D2C models.
              </p>
            </div>
            <div className="flex flex-col gap-5 py-5">
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
                  title={"Global PIM: "}
                  desc={
                    "Centralize product information management, ensuring accuracy and consistency across all platforms."
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
                  title={"Unified Commerce: "}
                  desc={
                    "Seamlessly merge B2C, B2B, and D2C commerce within one system for streamlined operations."
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
                      <g clip-path="url(#clip0_628_1130)">
                        <path
                          d="M12.7917 13.8333C12.7917 12.3376 14.0042 11.125 15.5 11.125C16.9958 11.125 18.2083 12.3376 18.2083 13.8333C18.2083 15.3291 16.9958 16.5417 15.5 16.5417C14.0042 16.5417 12.7917 15.3291 12.7917 13.8333Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 12C0 5.37258 5.37258 0 12 0H24C30.6274 0 36 5.37258 36 12V24C36 30.6274 30.6274 36 24 36H12C5.37258 36 0 30.6274 0 24V12ZM9.3677 21.0344C10.11 20.292 11.1169 19.875 12.1667 19.875H18.8333C19.8831 19.875 20.89 20.292 21.6323 21.0344C22.3746 21.7767 22.7917 22.7835 22.7917 23.8333V25.5C22.7917 25.8452 22.5118 26.125 22.1667 26.125C21.8215 26.125 21.5417 25.8452 21.5417 25.5V23.8333C21.5417 23.115 21.2563 22.4262 20.7484 21.9183C20.2405 21.4103 19.5516 21.125 18.8333 21.125H12.1667C11.4484 21.125 10.7595 21.4103 10.2516 21.9183C9.74367 22.4262 9.45833 23.115 9.45833 23.8333V25.5C9.45833 25.8452 9.17851 26.125 8.83333 26.125C8.48816 26.125 8.20833 25.8452 8.20833 25.5V23.8333C8.20833 22.7835 8.62537 21.7767 9.3677 21.0344ZM15.5 9.875C13.3139 9.875 11.5417 11.6472 11.5417 13.8333C11.5417 16.0195 13.3139 17.7917 15.5 17.7917C17.6861 17.7917 19.4583 16.0195 19.4583 13.8333C19.4583 11.6472 17.6861 9.875 15.5 9.875ZM24.0615 20.4521C24.1478 20.1179 24.4887 19.9169 24.8229 20.0032C25.6721 20.2224 26.4244 20.7175 26.9618 21.4107C27.4991 22.1038 27.791 22.9558 27.7917 23.8329V25.5C27.7917 25.8452 27.5118 26.125 27.1667 26.125C26.8215 26.125 26.5417 25.8452 26.5417 25.5V23.8338C26.5412 23.2338 26.3415 22.6507 25.9738 22.1765C25.6062 21.7022 25.0914 21.3635 24.5104 21.2135C24.1762 21.1272 23.9752 20.7863 24.0615 20.4521ZM21.4884 10.0029C21.154 9.91725 20.8135 10.1189 20.7279 10.4533C20.6422 10.7877 20.8439 11.1282 21.1783 11.2138C21.7609 11.363 22.2772 11.7018 22.646 12.1768C23.0147 12.6519 23.2149 13.2361 23.2149 13.8375C23.2149 14.4389 23.0147 15.0231 22.646 15.4982C22.2772 15.9732 21.7609 16.312 21.1783 16.4612C20.8439 16.5468 20.6422 16.8873 20.7279 17.2217C20.8135 17.5561 21.154 17.7578 21.4884 17.6721C22.3398 17.4541 23.0945 16.9589 23.6334 16.2646C24.1723 15.5703 24.4649 14.7164 24.4649 13.8375C24.4649 12.9586 24.1723 12.1047 23.6334 11.4104C23.0945 10.7161 22.3398 10.2209 21.4884 10.0029Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_628_1130">
                          <rect
                            width="36"
                            height="36"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={"Cross-Platform Synchronization:"}
                  desc={
                    "Ensure seamless data flow and consistency across all commerce platforms with our advanced syncing capabilities."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlCenter;
