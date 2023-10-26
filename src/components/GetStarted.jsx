import React, { useEffect, useState } from 'react'
import { Project_Slug_DTO } from '../data/dtos';
import { getCategoryProjects } from '../data/utils';
import { useRouter } from 'next/router';

export default function GetStarted() {

    const router = useRouter();

    const [templateList, setTemplateList] = useState([new Project_Slug_DTO]);

    const navigateToPage = (category_slug, project_slug) => {
        return () => {
            console.log(category_slug, project_slug);
            router.push(`/project/${category_slug}/${project_slug}`);
        }
    }
    useEffect(() => {
        const categoryProjects = getCategoryProjects();

        var myProjList = [];

        var total = 0;

        categoryProjects.forEach((c) => {
            if (total >= 3) return;
            myProjList = myProjList.concat(c.projects);
            total += c.projects.length;
        });

        setTemplateList(myProjList);
    }, []);
    return (
        <div>
            <div className='grid md:grid-cols-[repeat(4,1fr)] grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-4'>
                {
                    templateList.map((project, indx) =>
                        indx < 4 &&
                        <div className='block max-w-sm p-6 bg-white border border-[#8AB6A266] rounded-[18px] cursor-pointer'
                            onClick={navigateToPage(project.category_slug, project.project_slug)}
                            key={indx}
                        >
                            <div>
                                <p className='not-italic px-3 rounded-[6px] py-2 bg-[#8AB6A2] font-normal text-[12px] leading-3 text-white w-fit'>{project.category_slug}</p>
                            </div>
                            <div className='not-italic py-2 font-medium text-xs leading-[18px] text-[#434B54]'>
                                {indx + 1}. {project.project_name}
                            </div>
                            <div className="not-italic pb-2 font-normal text-[10px] leading-[15px] text-[#434B54]">
                                {project.project_description}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
