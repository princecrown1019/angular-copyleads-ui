import React, { useEffect, useRef, useState } from "react"
const sidebardata = [
    {
        title: "Dashboard",
        link: "/app",
        icon: (<i className='bx bx-grid-alt nav__icon text-white text-lg' ></i>),
    },
    {
        title: "Templates",
        link: "/app/templates",
        icon: (<i className='bx bx-layout nav__icon text-white text-lg' ></i>),
    },
]
import { useRouter } from 'next/router';
import Image from 'next/image';


const Header = ({ nTokens, logoutUser, headerComponent } = {}) => {
    const router = useRouter();

    const [sidebaropen, setSidebarOpen] = useState()
    const [Notificationopen, setNotificationOpen] = useState()
    const wrapperRef = useRef(null)

    // below is the same as componentDidMount and componentDidUnmount
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false)
        return () => {
            document.removeEventListener("click", handleClickOutside, false)
        }
    }, [])

    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setSidebarOpen(false)
            setNotificationOpen(false)
        }
    }

    return (
        <div
            ref={wrapperRef}
            className="flex items-center px-6 py-4 justify-between"
        >
            {
                headerComponent ?
                    headerComponent :
                    <div className="hidden md:block" />
            }
            <div
                onClick={() => {
                    setSidebarOpen(!sidebaropen)
                    setNotificationOpen(false)
                }}
                className=" mr-2 md:hidden  bg-[#8AB6A2] w-12 max-[425px]:w-[65px] h-12 flex items-center justify-center rounded-full"
            >
                <i className='bx bx-menu text-white text-2xl'></i>
            </div>
            {sidebaropen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="bg-[#00000046] absolute block z-30 md:hidden top-0 w-full right-0 bottom-0 left-0 "
                >
                    <div className="absolute block z-50 md:hidden top-0 w-[250px] right-0 bottom-0 left-0">
                        <div className=" flex h-screen bg-[#636D78]">
                            <div className="flex flex-col h-full">
                                <div className="flex flex-col flex-grow pt-5 overflow-y-autoborder-r border-gray-50">
                                    <div className="flex flex-col items-center flex-shrink-0 px-4">
                                        <a href="/" className="px-8 text-left focus:outline-none">
                                            <h2 className="block p-2 text-2xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900">
                                                CopyLeads
                                            </h2>
                                        </a>
                                    </div>
                                    <div className="flex flex-col flex-grow px-0 ml-6 mt-14">
                                        <nav className="flex-1 space-y-1 ">
                                            <ul>
                                                {sidebardata.map((value, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={value.link}
                                                            className={`inline-flex hover:border-l-2 hover:bg-[#D9D9D912] hover:border-[#37404A] items-center  w-full px-4 py-3 mt-1 text-base text-gray-900 ${router.pathname === value.link
                                                                ? "bg-[#D9D9D912] border-[#37404A]  border-l-2"
                                                                : null
                                                                }  rounded-r-lg  focus:shadow-outline`}
                                                        >
                                                            {value.icon}
                                                            <span className="ml-4 text-white text-base font-medium leading-6">
                                                                {" "}
                                                                {value.title}
                                                            </span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex items-center justify-center mx-auto">
                                                <h4 className="text-[12px] font-[400] text-center text-white mt-4 leading-[18px]  w-[70%] rounded-[6px] py-2 bg-[#48535F]">
                                                    Tokens Used: <span>{nTokens}</span>
                                                </h4>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="flex items-center border px-5 hover:bg-[#8AB6A2] transition-all hover:border-none  rounded-[6px] justify-center py-2 mx-auto">
                                        <a href="#" className="flex-shrink-0 block w-full group">
                                            <div className="flex  items-center">
                                                <div>
                                                    <i className='bx bxs-user-voice text-white text-2xl' ></i>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="font-normal text-base leading-6 text-white">
                                                        Invite Friends
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center py-2 mx-auto">
                                        <a
                                            href="settings"
                                            className="flex-shrink-0 block w-full group"
                                        >
                                            <div className="flex items-center">
                                                <div>
                                                    <i className='bx bx-cog nav__icon text-white text-xl' ></i>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="font-normal text-base leading-6 text-white">
                                                        Settings
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center mx-auto mb-2 py-4 ">
                                        <a href="#" className="flex-shrink-0 block w-full group">
                                            <div className="flex items-center">
                                                <div>
                                                    <i className='bx bx-log-out nav__icon text-white text-xl' ></i>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="font-normal text-base leading-6 text-white" onClick={logoutUser}>
                                                        Logout
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {
                headerComponent ? <></> :
                    <div className="flex items-center gap-2">
                        <div className="relative bg-white focus:outline-none focus:shadow-outline rounded-full py-2 px-4 block w-full appearance-none leading-normal">
                            <i className='bx bx-search-alt text-[#8AB6A2] text-xl'></i>

                            <input
                                className="ml-7 md:w-auto w-[50%] outline-none border-none"
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <div className="">
                            <div
                                onClick={() => {
                                    setNotificationOpen(!Notificationopen)
                                    setSidebarOpen(false)
                                }}
                                className="bg-[#8AB6A2] cursor-pointer w-12 h-12 flex items-center justify-center rounded-full"
                            >
                                <i className='bx bx-bell text-white text-xl'></i>
                            </div>
                            {Notificationopen && (
                                <div className="absolute z-[999]  scroll-bar overflow-y-scroll max-h-[35%] right-6 max-w-[314px] bg-white rounded-[18px] py-4 top-[75px]">
                                    <div className="">
                                        <h3 className="text-[#434B54] px-4  text-[18px] font-normal leading-6">
                                            Notifications
                                        </h3>
                                        {Array(1, 2, 3, 4, 5, 6, 7, 8).map((value, index) => (
                                            <div className="hover:bg-[#F3F3F2] duration-300 mx-4 cursor-pointer rounded-xl p-2">
                                                <p className="text-[14px] font-normal leading-[126%] text-[#434B54]">
                                                    Amet minim mollit non deserunt ullamco est sit aliqua
                                                    dolor do amet sint.{" "}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[#434B54B5] gap-1 flex items-center">
                                                        <i className='bx bx-time-five text-[#434B54B5] text-[14px]'></i>
                                                        <span>5m</span>
                                                    </span>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="">
                            <div className="w-12 h-12">
                                <Image
                                    src="/images/Avator.png"
                                    alt="Picture of the author"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Header
