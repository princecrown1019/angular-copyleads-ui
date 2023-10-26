import React, { useState } from 'react';
import Layout from '../../components/layout';

export default function Settings() {
  const [comfirmation, setConfirmation] = useState(false)
  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <Layout>
      <div className=" flex items-center mb-12 md:mb-0 justify-center md:px-0 px-6  ">
        <div className="bg-white w-full sm:w-[80%] md:w-[80%] xl:w-[621px] py-5 rounded-lg px-4 md:px-8">
          <h3 className="text-[20px] font-semibold leading-8 text-[#48535F]">
            Account Settings
          </h3>
          <div className="">
            <h4 className="text-[18px] font-medium leading-[27px] py-2 text-[#48535F]">
              Subscription
            </h4>
            <p className="text-[14px] font-normal leading-[21px] w-[100%] md:w-[50%] text-[#48535F]">
              Your workspace was created on Mar 18, 2023. You are currently on the
              monthly Free Plan plan.
            </p>
            <div className="flex items-center justify-between mt-3">
              <h5 className="text-[14px] font-normal leading-[21px] py-2 text-[#48535F]">
                Credits Spent
              </h5>
              <h6 className="text-[14px] font-normal leading-[21px]  py-2 text-[#48535F]">
                <span>944</span> / <span>2,000</span>
              </h6>
            </div>
            <div className="flex">
              <div className="bg-[#F3F3F2] w-full h-3 rounded-[3px] relative">
                <div className="absolute top-0 bg-[#8AB6A2] h-3 rounded-[3px] !w-[60%] left-0" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="md:text-[14px] text-[12px] font-normal leading-[21px] py-2 text-[#48535F]">
                Credits usage resets on Apr 18, 2023
              </h5>
              <h6 className="underline">
                <a
                  className="md:text-[14px] text-[12px] font-normal leading-[21px] py-2 text-[#48535F]"
                  href="#"
                >
                  View Credit history
                </a>
              </h6>
            </div>
            <button className="py-3 rounded-[6px] border-[1.5px] border-[#8AB6A2] hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] transition-all hover:text-[#000] text-base leading-5 font-medium text-white bg-[#8AB6A2] px-6">
              Upgrade Plan
            </button>
          </div>
          <div className="">
            <h4 className="text-[18px] mt-4 font-medium leading-[27px]  text-[#48535F]">
              Change Password
            </h4>
            <div className="">
              <input
                placeholder="Password"
                type="text"
                className="my-2 bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg pl-4  block w-full p-2.5 "
              />
            </div>
            <div className="">
              <input
                placeholder="Confirm Password"
                type="text"
                className="my-2 pl-4 bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg   block w-full p-2.5 "
              />
            </div>
            <button className="py-3 border-[1.5px] border-[#8AB6A2]  mt-1 rounded-[6px] hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] transition-all hover:text-[#000] text-base leading-5 font-medium text-white bg-[#8AB6A2] px-6">
              Save Changes
            </button>
          </div>
          <div className="">
            <h4 className="text-[18px] mt-2 font-medium leading-[27px] py-2 text-[#48535F]">
              Delete Account
            </h4>
            <p className="text-[14px] font-normal leading-[21px] w-[90%] text-[#48535F]">
              This cannot be undone. This will permanently delete your account,
              files, and personal data from our systems.
            </p>
            <button
              className="py-3 mt-2 rounded-[6px] text-[14px] leading-5 font-normal text-[#FF0000] bg-[#FF69692B] px-6"
            >
              Delete my account
            </button>

          </div>
        </div>
      </div>
    </Layout>
  )
}
