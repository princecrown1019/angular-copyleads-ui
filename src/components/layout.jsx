import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import useAuth from "../hooks/useAuth";
import useNumberOfTokens from '@/hooks/useNumerOfTokens';
import { InputGroup, InputLeftElement, Input, IconButton } from '@chakra-ui/react';
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Sidebar from './Sidebar';
import Header from './Header';

function SessionExpired() {
    return <div className='text-center text-white pt-20 h-screen text-2xl'>
        <p>Session Is Expired Please <Link href="/login" className='text-blue-500'>Login Again</Link></p>
    </div>
}

function PageLayOut({ children, logout, shouldOpen, headerComponent, searchBtn = true } = {}) {

    const [isNavOpen, setNavOpen] = useState(shouldOpen);

    const { nTokens, isErr } = useNumberOfTokens();

    const router = useRouter();

    const toggleSideBar = () => {
        setNavOpen(!isNavOpen);
    }
    const logoutUser = () => {
        logout().then(data => {
            router.push("/login");
        }).catch(err => {
            router.push("/login");
        });
    }

    return (
        isErr ? <SessionExpired></SessionExpired> : <>
            <div id="body-pd" className={`mr-0 bg-zinc-100 rounded-tl-3xl rounded-bl-3xl ${isNavOpen ? 'desktop:ml-56 ml-20' : 'desktop:ml-20'}`}>
                <header id="header" className={`w-full px-5 py-2 flex place-items-center gap-8 justify-between`}>
                    <button className="btn btn-circle text-xl bg-slate-50 text-gray-800 border-0 shadow-md hover:bg-slate-100 hover:text-gray-900" onClick={toggleSideBar}>
                        <i className={`bx bx-menu ${isNavOpen ? 'bx-x' : ''}`} id="header-toggle"></i>
                    </button>
                    {headerComponent}
                    {searchBtn ?
                        <div className='flex gap-2'>

                            <InputGroup borderRadius="full" bg="white">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<SearchIcon color="gray.300" />}
                                />
                                <Input
                                    type="text"
                                    placeholder="Search..."
                                    borderRadius="full"
                                />
                            </InputGroup>
                            <IconButton
                                icon={<BellIcon style={{ fontSize: '24px', color: "white" }} />}
                                aria-label="Search database"
                                variant="outline"
                                borderRadius="full"
                                style={{ backgroundColor: '#8AB6A2' }}
                            />


                        </div> : <></>
                    }
                </header>

                <div className={`l-navbar ${isNavOpen ? 'show ' : ''}`} id="nav-bar">
                    <nav className="nav">
                        <div>
                            <a href="#" className="nav__logo">
                                <i className='bx bx-layer nav__logo-icon'></i>
                                <span className="nav__logo-name">CopyLeads Ai</span>
                            </a>

                            <div className="nav__list">
                                <Link href="/app" className={`nav__link ${router.pathname == "/app" ? "active bg-slate-800 rounded-md" : ""}`} >
                                    <i className='bx bx-grid-alt nav__icon' ></i>
                                    <span className="nav__name">Dashboard</span>
                                </Link>

                                <Link href="/app/templates" className={`nav__link ${router.pathname == "/app/templates" ? "active bg-slate-800 rounded-md" : ""}`}>
                                    <i className='bx bx-layout nav__icon' ></i>
                                    <span className="nav__name">Templates</span>
                                </Link>

                                <Link href="/app/profile" className={`nav__link ${router.pathname == "/app/profile" ? "active bg-slate-800 rounded-md" : ""}`}>
                                    <i className='bx bx-user nav__icon' ></i>
                                    <span className="nav__name">My Profile</span>
                                </Link>

                                <Link href="/app/settings" className={`nav__link ${router.pathname == "/app/settings" ? "active bg-slate-800 rounded-md" : ""}`}>
                                    <i className='bx bx-cog nav__icon' ></i>
                                    <span className="nav__name">Settings</span>
                                </Link>
                                {isNavOpen ? <p className='text-center text-slate-100'> Token Usage : {nTokens}</p> : <></>}

                            </div>
                        </div>
                        <div className='text-center'>
                            {isNavOpen ?
                                <Button variant="outline" colorScheme="whiteAlpha" leftIcon={<i className='bx bx-user-plus' ></i>}>
                                    Invite a Teammate
                                </Button>
                                : <></>}
                            <a href="#" className="nav__link" onClick={logoutUser}>
                                <i className='bx bx-log-out nav__icon' ></i>
                                <span className="nav__name">Log Out</span>
                            </a>
                        </div>

                    </nav>
                </div>

                <main className='min-h-screen px-4'>
                    {children}
                </main>
                <footer className="footer p-10 bg-base-200 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

function LoginMsg() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login")
    }, []);

    return <p>
        Please Login from <Link href="/login" className='text-blue-500'>here</Link>
    </p>
}

function Loading() {

    return (<div className="flex items-center justify-center text-white flex-col h-screen">
        <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            ></span>
        </div>
        Loading ...
    </div>)
}

function Layout1({ children, shouldOpen = true, headerComponent = <></>, displaySearch = true } = {}) {


    const { isLoggedIn, login, logout, googleLogin, loading } = useAuth();


    return (
        loading ? <Loading /> :
            isLoggedIn ?
                <PageLayOut children={children} logout={logout} shouldOpen={shouldOpen}
                    headerComponent={headerComponent} searchBtn={displaySearch}></PageLayOut> :
                <LoginMsg />
    )
}

const Layout = ({ children, shouldOpen = true, headerComponent = false, displaySearch = true } = {}) => {
    const { isLoggedIn, login, logout, googleLogin, loading } = useAuth();
    const router = useRouter();
    
    const logoutUser = () => {
        logout().then(data => {
            router.push("/login");
        }).catch(err => {
            router.push("/login");
        });
    }
    const { nTokens, isErr } = useNumberOfTokens();

    return (
        loading ? <Loading /> :
            isLoggedIn ?
                isErr ? <SessionExpired></SessionExpired> :
                    <div className=" flex bg-[#636D78] ">
                        <div className=" md:block hidden h-screen 2xl:flex-[0.2] flex-[0.25] ">
                            <Sidebar nTokens={nTokens} logoutUser={logoutUser}/>
                        </div>
                        <div className="flex-1 bg-[#F3F3F2] md:overflow-auto overflow-y-scroll rounded-none md:rounded-l-[30px] h-screen">
                            <Header nTokens={nTokens} logoutUser={logoutUser} headerComponent={headerComponent}/>
                            {children}
                        </div>
                    </div> :
                <LoginMsg />
    )
}


export default Layout;