import { useState } from 'react';
import useApi from './useApi';


export default function useProject() {
    const [suggestions, setSuggestions] = useState([]);
    const { data, sendGet, isErr, isWaiting, sendPost } = useApi();

    const [projectList, setProjectList] = useState([{
        id: 1,
        project_name: "",
        category_name: "",
        last_updated: "",
        delete: ""
    }]);

    const fetchSuggestions = (category_slug, project_slug, nResults, data) => {

        const body = {
            "category_slug": category_slug,
            "project_slug": project_slug,
            "number_of_responses": parseInt(nResults),
            "data": data
        }

        return sendPost("/api/get_suggestions", body, true).then(data => {
            setSuggestions(data["descriptions"]);
            return data["descriptions"];
        })
    }

    const getProjectList = () => {
        return sendGet("/api/get_list_projects_by_user", true).then(data => {
            console.log(data);
            return data;
        });
    }

    function replacePlaceholders(query, data) {
        for (let key in data) {
            const placeholder = `{${key}}`;
            query = query.replace(placeholder, data[key]);
        }
        return query;
    }

    const fetchSuggestion2 = (query, data, nResults) => {
        var myQuery = replacePlaceholders(query, data);
        console.log(myQuery);
        myQuery = " [[NOTE : generate formatted html, you can use tags like <br>,<li>,<ul>,<b> etc]] "+myQuery;

        const body = {
            "query": myQuery,
            "number_of_responses": parseInt(nResults),
        }

        return sendPost("/api/get_suggestions2", body, true).then(data => {
            setSuggestions(data["descriptions"]);
            return data["descriptions"];
        })
    }

    return { projectList, suggestions, fetchSuggestions, isErr, isWaiting, getProjectList, fetchSuggestion2 };
}