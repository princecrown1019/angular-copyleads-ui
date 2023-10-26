import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import useApi from './useApi';
import { toast } from 'react-toastify';


export default function useNumberOfTokens() {
    const { data, sendGet, isErr, isWaiting, sendPost } = useApi();

    const [nTokens,setNTokens] = useState(0);


    useEffect(()=>{
        sendPost("/api/number_of_words",{},true).then((data)=>{
            console.log(data);
            setNTokens(data["n_words"]);
        }).catch(err=>{
            console.log(err);
        })
    }, []);

    return {nTokens,isErr};
}