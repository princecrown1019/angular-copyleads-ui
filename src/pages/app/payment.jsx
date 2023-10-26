import React from 'react'
import { useState } from 'react'
import Image from 'next/image'


const paymentData = [
  { type: "Annual", price: "$135", Title: "Monthly" },
  { type: "Monthly", price: "$165", Title: "Year" },
]


export default function Payment() {
  const [PaymentOption, setPaymentOption] = useState()
  console.log(PaymentOption)
  return (
    <div className="flex md:flex-row flex-col-reverse bg-white">
      <div className="flex-[0.9] mt-6 md:mt-0 relative hidden lg:block">
        <div className="">
          <Image src="/images/PaymentCover.png" fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" className="h-screen w-full" alt='' />

        </div>
        <div className="absolute text-white px-4 lg:px-24 md:px-8  bottom-24">
          <h6 className="text-center text-[22px] leading-[42px] font-medium">
            Join Us
          </h6>
          <p className="md:text-lg text-[16px] font-normal text-center md:text-justify">
            CopyLeads.ai is a Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse porta tristique velit, volutpat commodo sapien
            sagittis vitae. Sed sagittis, justo eget ornare commodo, felis ex
            porta lectus, eu feugiat purus augue vitae massa. Aenean cursus
            suscipit dictum. Vivamus finibus tellus faucibus justo gravida.
          </p>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="bg-logo flex w-3/5 md:w-2/5 rounded-2xl py-2 my-8 items-center justify-center mx-auto">
          <h4 className=" font-medium text-3xl leading-[45px] text-justify text-white">
            Copyleads.Ai
          </h4>
        </div>
        <div className="md:px-12 2xl:px-44 px-6">
          <h5 className="font-medium text-lg md:text-2xl leading-9 text-black">
            Access your 7 day free trial
          </h5>
          <div className="bg-[#636D78] px-8 py-6 rounded-2xl">
            <h5 className="font-medium text-white text-lg md:text-2xl leading-9 underline">
              {` Business ${PaymentOption === 0 ? "year" : "month"} plan`}
            </h5>
            <h3 className="not-italic py-1 font-medium text-sm md:text-base leading-6 text-white">
              The plan includes :
            </h3>
            <div className="space-y-1 mt-1">
              <span className="flex items-center gap-4">
                <svg
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464467C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM1 4.5L20 4.5L20 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
                <h4 className="font-medium text-xs md:text-sm leading-[21px] text-white">
                  50,000 words/mo
                </h4>
              </span>
              <span className="flex items-center gap-4">
                <svg
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464467C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM1 4.5L20 4.5L20 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
                <h4 className="font-medium  text-xs md:text-sm leading-[21px] text-white">
                  Access to 70+ templates
                </h4>
              </span>
              <span className="flex items-center gap-4">
                <svg
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464467C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM1 4.5L20 4.5L20 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
                <h4 className="font-medium text-xs md:text-sm leading-[21px] text-white">
                  5 user seats
                </h4>
              </span>
              <span className="flex items-center gap-4">
                <svg
                  width="21"
                  height="8"
                  viewBox="0 0 21 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464467C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM1 4.5L20 4.5L20 3.5L1 3.5L1 4.5Z"
                    fill="white"
                  />
                </svg>
                <h4 className="font-medium text-xs md:text-sm leading-[21px] text-white">
                  25 project folders for better collaboration
                </h4>
              </span>
            </div>
            <div className="flex mt-4 md:flex-row flex-col space-x-0 space-y-4 md:space-y-0 md:space-x-6">
              {paymentData.map((value, index) => (
                <div
                  onClick={() => setPaymentOption(index)}
                  className={`bg-[#8AB6A2] ${PaymentOption === index ? "border-4 border-white" : ""
                    }  cursor-pointer flex-1 border-4 duration-300 border-[#8AB6A2] pb-1 rounded-[6px] `}
                >
                  <div className="flex items-center space-x-4 px-6 py-2 mt-1">
                    <h4 className="not-italic font-medium text-xs leading-[18px] text-white">
                      {value.type}
                    </h4>
                    <div className="bg-white text-[#8AB6A2] font-medium text-[10px] rounded-md py-1 px-3">
                      3 Months free
                    </div>
                  </div>
                  <div className="px-6 py-1">
                    <h4 className="font-semibold text-[22px] leading-[22px] text-white">
                      {value.price} <span className="font-medium">/month</span>
                    </h4>
                  </div>
                  <div className="flex px-6 py-2">
                    <h4 className="font-medium text-[10px] leading-3 text-[#F3F3F2]">
                      $1254 billed annually
                    </h4>
                    <h5 className="font-medium text-[10px] leading-3 text-[#F3F3F2]">
                      ($456 Saving)
                    </h5>
                  </div>
                </div>
              ))}
              {/* <div className="bg-[#fff] flex-1 pb-1 rounded-[6px] ">
                <div className="flex items-center space-x-4 px-6 py-3">
                  <h4 className="not-italic font-medium text-xs leading-[18px] text-black">
                    Monthly
                  </h4>
                 
                </div>
                <div className="px-6 py-1">
                  <h4 className="font-semibold text-[22px] leading-[22px] text-[#8AB6A2]">
                    $165 <span className="font-medium">/month</span>
                  </h4>
                </div>
                
              </div> */}
            </div>
            <div className="mt-4">
              <h4 className="not-italic font-medium text-xs leading-[18px] text-white">
                All plans includes 7-day free trial
              </h4>
              <div className="relative">
                <input
                  placeholder="Enter Coupon code"
                  type="text"
                  className="my-2 bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg pl-4  block w-full px-2.5 py-4 "
                />
                <button className="bg-[#8AB6A2] py-1 rounded-md  not-italic font-normal text-sm leading-[21px] text-white absolute top-3 right-6 px-6 ">
                  Apply
                </button>
              </div>
            </div>
            <div className="flex object-contain py-2 items-center space-x-3">
              <Image
                className=" w-8 md:w-[43.64px]"
                src="/images/PaymentIcon/visa.svg"
                width={8} height={8}
                alt=""
              />
              <Image
                className="w-8 md:w-[43.64px]"
                src="/images/PaymentIcon/Discover.svg"
                alt=""
                width={8} height={8}

              />
              <Image
                className="w-8 md:w-[43.64px]"
                src="/images/PaymentIcon/MasterCard.svg"
                alt=""
                width={8} height={8}

              />
              <Image
                className="w-8 md:w-[43.64px]"
                src="/images/PaymentIcon/Amex.svg"
                alt=""
                width={8} height={8}

              />
              <Image
                className="w-8 md:w-[43.64px]"
                src="/images/PaymentIcon/ApplePay.svg"
                alt=""
                width={8} height={8}

              />
              <Image
                className="w-8 md:w-[43.64px]"
                src="/images/PaymentIcon/AmazonPay.svg"
                alt=""
                width={8} height={8}

              />
            </div>
            <div className="py-1">
              <div className="relative">
                <svg
                  className="absolute top-4 left-3"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15.7221C0 16.7343 0.821181 17.5554 1.83333 17.5554H20.1667C21.1788 17.5554 22 16.7343 22 15.7221V8.99989H0V15.7221ZM7.33333 13.1249C7.33333 12.8728 7.53958 12.6666 7.79167 12.6666H12.9861C13.2382 12.6666 13.4444 12.8728 13.4444 13.1249V14.6527C13.4444 14.9048 13.2382 15.111 12.9861 15.111H7.79167C7.53958 15.111 7.33333 14.9048 7.33333 14.6527V13.1249ZM2.44444 13.1249C2.44444 12.8728 2.65069 12.6666 2.90278 12.6666H5.65278C5.90486 12.6666 6.11111 12.8728 6.11111 13.1249V14.6527C6.11111 14.9048 5.90486 15.111 5.65278 15.111H2.90278C2.65069 15.111 2.44444 14.9048 2.44444 14.6527V13.1249ZM22 2.27767V4.111H0V2.27767C0 1.26552 0.821181 0.444336 1.83333 0.444336H20.1667C21.1788 0.444336 22 1.26552 22 2.27767Z"
                    fill="#48535F"
                  />
                </svg>

                <input
                  placeholder="Card Number"
                  type="text"
                  className="my-2 bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg pl-12  block w-full px-2.5 py-4 "
                />
                <div className="md:absolute space-x-4 md:space-x-0 relative justify-end items-end flex top-0 right-0">
                  <input
                    maxLength={5}
                    placeholder="MM/YY"
                    type="text"
                    className=" bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg block pl-4 w-full md:w-[30%] px-2.5 py-4 "
                  />
                  <input
                    maxLength={3}
                    placeholder="CVV"
                    type="text"
                    className=" bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg   block pl-4 w-full md:w-[30%] px-2.5 py-4 "
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="py-3 border-[1.5px] border-[#8AB6A2]  mt-1 rounded-[6px] hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] duration-500 hover:text-[#000] text-base leading-5 font-medium text-white bg-[#8AB6A2] px-6 md:px-12"
            >
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
