import { ProjectDetails } from '@/data/dtos';
import { useEffect, useState } from 'react';
import { getCategoryProjects, getProjectDetails } from '../data/utils';
import useApi from './useApi';


export default function useProjectStructure() {
    const [projectStructure, setProjectStructure] = useState(new ProjectDetails());
    const [isReady, setReady] = useState(false);

    const [treeData, setTreeData] = useState([
        {
            label: "category",
            children: [
                {
                    label: "project name",
                    link: "/link-to-project",
                },
            ],
        }
    ]);

    useEffect(() => {
        var category_projects = getCategoryProjects();

        // initialize tree structure
        setTreeData(
            category_projects.map((category, indx) => {
                return {
                    label: category.category_name,
                    children: category.projects.map((proj, indx) => {
                        return {
                            label: proj.project_name,
                            link: `/project/${proj.category_slug}/${proj.project_slug}`
                        }
                    })
                };
            }));
    },[]);

    const initializeProjectStructure = (slug:Array<string>) => {
        if (slug.length == 2 || slug.length ==3) {
            const projectDetails = getProjectDetails(slug[0], slug[1]);
            if (projectDetails) {
                setProjectStructure(projectDetails);
                setReady(true);
            }
        }
    }

    return { projectStructure, isReady, treeData, initializeProjectStructure };
}