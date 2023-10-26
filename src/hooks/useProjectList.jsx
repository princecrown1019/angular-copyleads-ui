import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import useApi from './useApi';


export default function useProjectList() {
    const { data, sendGet, isErr, isWaiting, sendPost } = useApi();

    const [isLoading, setLoading] = useState(true);

    const [projectList, setProjectList] = useState([{
        id: 1,
        project_name: "",
        project_slug: "",
        category_slug: "",
        project_id: "",
        last_updated: "",
    }]);

    const getProjectList = ({ folderId = null } = {}) => {
        var body = {}
        if (folderId != null) {
            body = {
                "folder_id": parseInt(folderId)
            }
        }

        return sendPost("/api/get_project_list_by_folder", body, true).then(data => {
            var newProjectlist = [];
            for (var i = 0; i < data.length; i++) {
                newProjectlist.push({
                    id: i + 1,
                    project_id: data[i].id,
                    project_slug: data[i].project_slug,
                    project_name: data[i].project_name,
                    category_slug: data[i].category_slug,
                    last_updated: (new Date(data[i].updated_at)).toLocaleString('en-US', { timeZone: 'UTC' }),
                });
            }
            console.log(data);
            setProjectList(newProjectlist);
            setLoading(false);
            return data;
        }).catch((err) => {
            console.error(err);
        });
    }

    const deleteProject = (project_id) => {
        return () => sendPost("/api/delete_project", {
            "project_id": parseInt(project_id)
        }, true).then((data) => {
            fetchProjects();
            return data;
        }).catch((err) => {
            console.error(err);
            return err;
        });
    }

    const fetchProjects = () => {
        setLoading(true);
        getProjectList().then((res) => {
            setLoading(false);
        });
    }

    const fetchProjectByFolderId = (id) => {
        setLoading(true);
        getProjectList({folderId:id}).then((res) => {
            setLoading(false);
        });
    }

    return { projectList, deleteProject, isLoading, fetchProjects ,fetchProjectByFolderId};
}