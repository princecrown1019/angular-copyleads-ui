import React, { useState } from 'react'
import useAuth from "../hooks/useAuth";
import Script from "next/script";
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function GoogleLogin() {

    const { isLoggedIn, isErr, login, signup, logout, googleLogin } = useAuth();

    const [user, setUser] = useState(null);

    const [loginErr, setLoginErr] = useState(false);
    
    const router = useRouter();

    function handleSignIn(response) {
        googleLogin(response.credential).then((data) => {
            router.push("/app");
        }).catch((err) => {
            console.error(err);
            setLoginErr(true);
        });
        console.log(response);
    }

    function parseJwt(token) {
        return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    }

    function handleLoading() {
        // https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
        // Follow the guide above for more information
        window.google.accounts.id.initialize({
            client_id:
                process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleSignIn,
        });

        // confgiure as per the choice https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration
        window.google.accounts.id.renderButton(
            document.getElementById("google_signin"),
            { theme: "filled_blue", shape: "pill" }
        );

        // This will prompt in top right corner, THIS IS SO COOL
        setTimeout(() => {
            console.log("hello👋")
            window.google.accounts.id.prompt();
        }, 1000);
    }

    return (
        <div>
            <Script
                src="https://accounts.google.com/gsi/client"
                strategy="lazyOnload"
                onReady={handleLoading}
            ></Script>
            <div className='max-w-xs mx-auto'>
                {loginErr ? <div className="alert alert-error shadow-sm">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Failed To Login Please Try Again.</span>
                    </div>
                </div> : <></>}
                <div id="google_signin" />
            </div>
        </div>
    )
}
