import axios from 'axios';
import { useState } from 'react';

const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;

export class UserToken{
    constructor(name='',email='',token=''){
        this.name = name;
        this.email = email;
        this.token = token;
    }
}

export default function useApi() {
    const authTokenKey = "AuthToken";
    const defaultTokenValue = {};
    const [data, setData] = useState([]);
    const [isErr, setErr] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    const sendPost = (url, body,sendToken) => {
        setErr(false); setIsWaiting(true);

        var headers={}
        if(sendToken){
            headers = {
                Authorization:`Token ${getUserToken().token}`
            }
        }

        return axios
            .post(`${API_ROOT}${url}`, body,{
                headers: headers
            })
            .then(res => {
                setIsWaiting(false);
                setData(res.data);
                // console.log(res.data);
                return res.data;
            })
            .catch(err => {
                setIsWaiting(false);
                setErr(true);
                // console.log(err);
                throw err;
            });
    }

    const sendGet = (url,sendToken) => {
        setErr(false); setIsWaiting(true);

        var headers={}
        if(sendToken){
            headers = {
                Authorization:`Token ${getUserToken().token}`
            }
        }

        return axios
            .get(`${API_ROOT}${url}`,{
                headers: headers
            })
            .then(res => {
                setIsWaiting(false);
                setData(res.data);
                // console.log(res.data);
                return res.data;
            })
            .catch(err => {
                setIsWaiting(false);
                setErr(true);
                // console.log(err);
                throw err;
            });
    }

    const saveUserToken = (userToken)=>{
        window.localStorage.setItem(authTokenKey,JSON.stringify(userToken));
    }

    const saveDefaultUserToken = ()=>{
        saveUserToken(defaultTokenValue);
    }

    const getUserToken = ()=>{
        var userToken = new UserToken();
        var savedToken = JSON.parse(window.localStorage.getItem(authTokenKey,defaultTokenValue));
       
        if(savedToken){
            userToken.name = savedToken.name;
            userToken.email = savedToken.email;
            userToken.token = savedToken.token;
        }

        return userToken;
    }

    const isLoggedIn = ()=>{
        var myToken = JSON.parse(window.localStorage.getItem(authTokenKey))||defaultTokenValue;
        if(myToken.token){
            return  true;
        }
        console.log(myToken);
        return false;
    }

    return { data, isErr,sendGet, isWaiting,saveDefaultUserToken, sendPost,isLoggedIn, saveUserToken,getUserToken };
}
