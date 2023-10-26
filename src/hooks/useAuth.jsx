import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserToken } from "./useApi";
import useApi from './useApi';

export default function useAuth() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const { data, isErr, isWaiting, saveDefaultUserToken, getUserToken: getCurrentUser,
        sendPost, isLoggedIn: _isLoggedIn, saveUserToken } = useApi();

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(new UserToken());

    const stopLoading = () => setLoading(false);
    const startLoading = () => setLoading(true);


    useEffect(() => {
        setLoggedIn(_isLoggedIn);
        setCurrentUser(getCurrentUser());
        stopLoading();
    }, []);


    const login = (email, passwd) => {
        const body = {
            "email": email,
            "password": passwd
        }

        return sendPost("/auth/login/", body, false)
            .then(data => {
                console.log(data);
                saveUserToken(new UserToken(data.user.first_name, data.user.email, data.token));
                setLoggedIn(_isLoggedIn());
            });
    }

    const logout = () => {
        startLoading();
        return sendPost("/auth/logout-all/", {}, true).then(data => {
            saveDefaultUserToken();
            setLoggedIn(_isLoggedIn());
            stopLoading();
        });
    }

    const signup = (name, email, passwd) => {
        const body = {
            "first_name": name,
            "email": email,
            "password": passwd
        }

        return sendPost("/auth/create-user/", body, false);
    }

    const googleLogin = (authToken) => {
        startLoading();
        const body = {
            "auth_token": authToken,
        }

        return sendPost("/auth/google/", body, false)
            .then(data => {
                saveUserToken(new UserToken(data.user.first_name, data.user.email, data.token));
                setLoggedIn(_isLoggedIn());
                stopLoading();
                return data;
            });
    }

    return { isLoggedIn, signup, login, logout, currentUser, googleLogin, isErr, isWaiting ,loading};
}
