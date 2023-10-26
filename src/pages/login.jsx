import React, { useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from '../components/googleLogin';


export default function login() {

    const { register, handleSubmit } = useForm();
    const { register: register1, handleSubmit: handleSubmit1 } = useForm();

    const [loginErr, setLoginErr] = useState(false);
    const [signupErr, setSignUpErr] = useState(false);
    const [signupSuccess, setSignUpSuccess] = useState(false);


    const [selectedTab, setSelectedTab] = useState("login");

    const { isLoggedIn, isErr, login, signup, logout, googleLogin } = useAuth();

    const router = useRouter();

    const loginUser = (data) => {
        console.log(data);
        setLoginErr(false);

        login(data.email, data.password).then((data) => {
            router.push("/app");
        }).catch((err) => {
            setLoginErr(true);
        });
    }

    const signupUser = (data) => {
        setSignUpErr(false);
        setSignUpSuccess(false);

        console.log(data);

        signup(data.name, data.email, data.password).then((data) => {
            setSignUpSuccess(true);
        }).catch((err) => {
            setSignUpErr(true);
        });
    }

    const changeTab = (value) => {
        return () => {
            setSelectedTab(value);
        }
    }

    return (
        <>
            <div className='h-screen grid lg:grid-cols-2 bg-indigo-50 text-center grid-cols-1'>
                <div className='h-full flex'>
                    <div className='p-10 m-auto'>
                        <p className='text-xl text-sky-900 font-bold'>Welcome to COPYLEADS.AI</p>
                        <p>
                            CopyLeads.ai is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta tristique velit, volutpat commodo sapien sagittis vitae. Sed sagittis, justo eget ornare commodo, felis ex porta lectus, eu feugiat purus augue vitae massa. Aenean cursus suscipit dictum. Vivamus finibus tellus faucibus justo gravida.
                        </p>
                    </div>
                </div>
                <div className='h-full flex bg-slate-50 '>
                    <div className='py-10 w-full'>
                        <h2 className='my-5 text-3xl'>Login Or Signup</h2>
                        <div>
                            <GoogleLogin></GoogleLogin>
                        </div>

                        <hr className='my-5'/>
                        <div className="tabs justify-center my-5">
                            <a className={`tab tab-bordered ${selectedTab == 'login' ? 'tab-active' : ''}`} onClick={changeTab("login")}>Login</a>
                            <a className={`tab tab-bordered ${selectedTab == 'signup' ? 'tab-active' : ''}`} onClick={changeTab("signup")}>Signup</a>
                        </div>
                        <div className='mx-auto w-full max-w-md'>
                            {
                                selectedTab == 'login' ?
                                    <form onSubmit={handleSubmit(loginUser)}>
                                        {loginErr ? <div className="alert alert-error shadow-sm">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Login Failed.</span>
                                            </div>
                                        </div> : <></>}
                                        <div className='form-control'>
                                            <label className='label'>Email</label>
                                            <input type="email" placeholder="Email Id" {...register("email")} className="input input-bordered" />
                                        </div>
                                        <div className='form-control'>
                                            <label className='label'>Password</label>
                                            <input type="password" placeholder="Password" {...register("password")} className="input input-bordered" />
                                        </div>
                                        <div className='form-control my-4'>
                                            <button className='btn' type='submit'>Login</button>
                                        </div>
                                    </form>
                                    : <form onSubmit={handleSubmit1(signupUser)}>
                                        {signupSuccess ? <div className="alert alert-success shadow-sm">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Signup Is Suceessful please Login</span>
                                            </div>
                                        </div> : <></>}
                                        {signupErr ? <div className="alert alert-error shadow-sm">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span >Signup Failed, Try with Different EmailId</span>
                                            </div>
                                        </div> : <></>}
                                        <div className='form-control'>
                                            <label className='label'>Name</label>
                                            <input type="text" placeholder="Name" {...register1("name")} className="input input-bordered" />
                                        </div>
                                        <div className='form-control'>
                                            <label className='label'>Email</label>
                                            <input type="email" placeholder="Email Id" {...register1("email")} className="input input-bordered" />
                                        </div>
                                        <div className='form-control'>
                                            <label className='label'>Password</label>
                                            <input type="password" placeholder="Password" {...register1("password")} className="input input-bordered" />
                                        </div>
                                        <div className='form-control my-4'>
                                            <button className='btn' type='submit'>Signup</button>
                                        </div>
                                    </form>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
