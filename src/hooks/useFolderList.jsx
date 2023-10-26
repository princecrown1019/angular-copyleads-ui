import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import useApi from './useApi';


export default function useFolderList() {
    const { data, sendGet, isErr, isWaiting, sendPost } = useApi();

    const [isLoading, setLoading] = useState(true);

    const [folderList, setFolderList] = useState([{
        id: 1,
        folderName: "default",
    }]);

    const getFolders = () => {
        return sendPost("/api/list_folders", {}, true).then(data => {
            console.log(data);
            var myFolderList = [];
            myFolderList = data["child_folders"];

            var newFolderList = [];

            for (var i = 0; i < myFolderList.length; i++){
                newFolderList.push({
                    id:myFolderList[i].id,
                    folderName:myFolderList[i].folder_name
                })
            }

            setFolderList(newFolderList);
            return data;
        }).catch((err) => {
            console.error(err);
            return err;
        });
    }

    const deleteFolder = (folder_id) => ()=>{
        return sendPost("/api/delete_folder",{
            "id":folder_id,
        },true).then((data)=>{
            fetchFolders();
        }).catch((err) => {
            console.error(err);
            return err;
        });
    }

    const fetchFolders = ()=>{
        setLoading(true);
         getFolders().then((res) => {
            setLoading(false);
        }).catch((err) => {
            console.error(err);
            return err;
        });
    }

    const saveFolder=(folderName)=>{
        return sendPost("/api/create_folder",folderName,true).then((data) => {
            fetchFolders();
        }).catch((err) => {
            console.error(err);
            return err;
        });
    }

    const putProjectInFolder=(project_id,folder_id)=>{
        return sendPost("/api/put_project_in_folder",{
            "project_id":project_id,
            "folder_id":folder_id
        },true)
        .catch((err) => {
            console.error(err);
            return err;
        });
    }

    const renameFolder=(folder_id,folder_name)=>{
        return sendPost("/api/rename_folder",{
            "folder_id":folder_id,
            "folder_name":folder_name
        },true)
        .then((data)=>{
            fetchFolders();
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
    }

    useEffect(fetchFolders, []);

    return { isLoading, folderList,deleteFolder,saveFolder,isErr,putProjectInFolder,renameFolder };
}