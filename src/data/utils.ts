import { Category_Projects_DTO,Project_Slug_DTO, ProjectDetails, ProjectField } from "./dtos";
import data from './data.js';
import dataSchema from './data.schema.json';
import { validate } from "jsonschema";

/** utility functions to access data from data.json */

function getProjectDetails(category:string, project:string):ProjectDetails {

    try{
        const result = validate(data,dataSchema);
        const myProjects = result.instance[category]?.projects;

        if(myProjects){
            const myProject = result.instance[category]["projects"][project];
            const myfields :ProjectField[]=[];

            myProject.fields.map((field:Object)=>{
                myfields.push(new ProjectField(field));
            });

            const myProjectDetails = new  ProjectDetails({
                fields:myfields,
                project_slug:myProject.project_id,
                purpose:myProject.purpose,
                category_slug:category,
                project_title:myProject.displayName,
                query:myProject["query"]
            });

            console.log(myProject,myProjectDetails);

            return myProjectDetails;
        }
    }catch(err){
        console.log(err);
    }
    return  new  ProjectDetails();
}

function getCategoryProjects():Category_Projects_DTO[] {
    try{
        const result = validate(data,dataSchema);
        const categorieskeys = Object.keys(result.instance);
        const categoryProjects:Category_Projects_DTO[] = [];

        categorieskeys.forEach((categoryKey)=>{
            const projs = result.instance[categoryKey]['projects'];
            const categoryObj = new Category_Projects_DTO({
                category_name:result.instance[categoryKey]['displayName'],
                category_slug:categoryKey,
                projects:[]
            });
            if(projs){
                const projectKeys = Object.keys(projs);
                projectKeys.forEach((projectKey)=>{
                    categoryObj.projects.push(new Project_Slug_DTO({
                        category_slug:categoryKey,
                        project_name:result.instance[categoryKey]['projects'][projectKey]["displayName"],
                        project_slug:projectKey,
                        project_description:result.instance[categoryKey]['projects'][projectKey]["purpose"]
                    }))
                });
            }
            categoryProjects.push(categoryObj);
        });
        return categoryProjects;
    }catch(err){
        console.log(err);
    }
    return [new Category_Projects_DTO()];
}


export {getProjectDetails, getCategoryProjects}