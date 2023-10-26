import React, { useRef, useState } from 'react';
import useApi from './useApi';


export default function useProjectDetails() {

    const [projectText, setProjectText] = useState("write something here ...");

    const [projectTitle, setProjectTitle] = useState("Untitled project");

    const [projectId, setProjectId] = useState("");

    const [categorySlug, setCategorySlug] = useState("");

    const [projectSlug, setProjectSlug] = useState("");

    const [isSaving, setIsSaving] = useState(false);

    const debounceTimeoutRef = useRef(null);

    const interVal = 1000;

    const { data, sendGet, isErr, isWaiting, sendPost } = useApi();

    const saveProject = (projectText, projectName, suggestionsList) => {
        sendPost("/api/save_project", {
            "project_text": projectText,
            "category_slug": categorySlug,
            "project_slug": projectSlug,
            "project_name": projectName,
            "suggestions_list": suggestionsList
        }, true).then((data) => {
            console.log(data);
            if (data["id"])
                setProjectId(data["id"]);
            setIsSaving(false);
        })
    }

    const updateProject = (projectText, projectName, suggestionsList) => {
        sendPost("/api/update_project_details", {
            "id": projectId,
            "project_text": projectText,
            "project_name": projectName,
            "suggestions_list": suggestionsList
        }, true).then((data) => {
            console.log(data);
            setIsSaving(false);
        })
    }

    const initializeCategoryProject = ({ category_slug = "", project_slug = "", project_id = "" } = {}) => {
        setCategorySlug(category_slug);
        setProjectSlug(project_slug);
        if (project_id != "") {
           return sendPost("/api/get_project_details_by_id", {
                "project_id": project_id
            },true).then((data) => {
                setProjectId(project_id);
                setProjectTitle(data["project_name"]);
                setProjectText(data["project_text"]);
            });
        }
    }

    const saveProjectText = ({ newText = '' } = {}) => {
        setIsSaving(true);

        setProjectText(newText);
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            console.log('Saving Project Title', newText, categorySlug, projectSlug, projectId);

            if (projectId == "") {
                saveProject(newText, projectTitle, []);
            } else {
                updateProject(newText, projectTitle, []);
            }

        }, interVal);
    }

    const saveProjectTitle = (event) => {
        setIsSaving(true);

        const value = event.target.value;
        setProjectTitle(value);

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            console.log('Saving Project Title', value, categorySlug, projectSlug, projectId);

            if (projectId == "") {
                saveProject(projectText, value, []);
            } else {
                updateProject(projectText, value, []);
            }

        }, interVal);
    }

    return {
        projectText, projectId, projectTitle,
        saveProjectTitle, initializeCategoryProject,
        saveProjectText, isSaving
    };
}