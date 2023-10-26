import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import useApi from './useApi';
import { toast } from 'react-toastify';


export default function useProfile(changeProfile) {
    const { data, sendGet, isErr, isWaiting, sendPost } = useApi();

    const [email,setEmail]=useState("");

    const ToastConfig = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };




    const saveProfile = (profile) =>{
        return sendPost("/auth/changeName/",profile,true).then((data) =>{
            console.log(data);
            toast.success("Saved Successfully",ToastConfig );
        }).catch((err) =>{
            toast.error("Failed To Save",ToastConfig );
        });
    }

    useEffect(()=>{
        sendPost("/auth/profile/",{},true).then((data)=>{
            console.log(data);
            changeProfile(data);
            setEmail(data.email);
        })
    }, []);

    return { saveProfile,email};
}