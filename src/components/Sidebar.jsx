import React, { useState } from "react"
import { useRouter } from 'next/router';
import Modal from "react-modal"
import useNumberOfTokens from '@/hooks/useNumerOfTokens';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faXmark } from "@fortawesome/free-solid-svg-icons";

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

const Sidebar = ({nTokens,logoutUser}={}) => {
    const router = useRouter();


    const [InviteOpen, setInviteOpen] = useState()
    function openModal() {
        setInviteOpen(true)
    }
    const copyToClipboard = (text) => {
        const tempInput = document.createElement("input")
        tempInput.value = text
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput)
        handleClick()
    }
    const [copySuccess, setCopySuccess] = useState(false)

    const handleClick = () => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 3000)
    }
    const copyText = "copyleads.ai/invite/542364"
    const customStyles = {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    }
    return (
        <div className="grid pr-5 overflow-hidden h-full">
            <div className="hidden md:block md:flex-shrink-0">
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
                                <button onClick={openModal} className="flex  items-center">
                                    <div>
                                        <i className='bx bxs-user-voice text-white text-lg' ></i>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-normal text-base leading-6 text-white">
                                            Invite Friends
                                        </p>
                                    </div>
                                </button>
                            </a>
                            <Modal
                                shouldCloseOnOverlayClick={true}
                                center
                                overlayClassName=""
                                className="bg-transparent flex items-center justify-center mx-auto fixed right-0 left-0 z-50 bottom-0 top-0"
                                isOpen={InviteOpen}
                                onRequestClose={() => setInviteOpen(false)}
                                style={{
                                    overlay: {
                                        backgroundColor: "rgb(0 0 0 / 12%)",
                                    },
                                    content: customStyles,
                                }}
                                contentLabel="upgrade Modal"
                            >
                                <div className="flex z-50 items-center justify-center mx-auto">
                                    <div className="bg-[#F3F3F2] rounded-[18px] px-6 py-6 w-[100%] lg:w-[400px] md:w-[400px]">
                                        <div className="flex items-center mt-2 justify-between">
                                            <h4 className=" text-base font-medium leading-6 text-[#48535F]">
                                                Invite Friends and earn credits
                                            </h4>
                                            <FontAwesomeIcon icon={faXmark} className="cursor-pointer"  onClick={() => setInviteOpen(false)}/>
                                        </div>
                                        <h3 className="font-normal text-sm leading-[21px] text-[#48535F]">
                                            Share on Social Media
                                        </h3>
                                        <div className="py-2 flex space-x-2 mt-4">
                                            <a
                                                target="black"
                                                href="https://www.facebook.com/"
                                                className="bg-[#8AB6A2] px-2 py-1 rounded-[6px]"
                                            >
                                                <i className='bx bxl-facebook text-white text-4xl'></i>
                                            </a>
                                            <a
                                                target="black"
                                                href="https://www.facebook.com/"
                                                className="bg-[#8AB6A2] px-2 py-1 rounded-[6px]"
                                            >
                                                <i className='bx bxl-instagram text-white text-4xl'></i>
                                            </a>
                                            <a
                                                target="black"
                                                href="https://www.facebook.com/"
                                                className="bg-[#8AB6A2] px-2 py-1 rounded-[6px]"
                                            >
                                                <i className='bx bxl-twitter text-white text-4xl'></i>
                                            </a>
                                        </div>
                                        <h4 className="font-medium text-base leading-6 text-[#48535F]">
                                            Or
                                        </h4>
                                        <div className="flex mt-2 flex-col ">
                                            <h4 className="font-normal text-sm leading-[21px] text-[#48535F]">
                                                Copy link directly :
                                            </h4>
                                            <div className="bg-white mt-2 flex items-center justify-between py-1 px-4 rounded-md ">
                                                <h4 className="font-light text-sm leading-[21px] text-[#48535F]">
                                                    copyleads.ai/invite/542364
                                                </h4>
                                                <button
                                                    onClick={() => copyToClipboard(copyText)}
                                                    className="bg-[#8AB6A2] px-3 py-2 rounded-md"
                                                >
                                                    <i className='bx bx-clipboard text-white text-lg' ></i>
                                                </button>
                                            </div>
                                            <a
                                                className="font-light text-center mt-3 text-[10px] leading-[15px] text-[#48535F]"
                                                href=""
                                            >
                                                Read Terms & conditions carefully
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                        <div className="flex items-center justify-center py-2 mx-auto">
                            <a href="/app/settings" className="flex-shrink-0 block w-full group">
                                <div className="flex items-center">
                                    <div>
                                        <i className='bx bx-cog nav__icon text-white text-lg' ></i>
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
                                        <i className='bx bx-log-out nav__icon text-white text-lg' ></i>
                                    </div>
                                    <div className="ml-3" onClick={logoutUser}>
                                        <p className="font-normal text-base leading-6 text-white">
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
    )
}

export default Sidebar;
