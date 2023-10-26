import { faAd, faBlog, faBorderAll, faCartShopping, faEnvelope, faGlobe, faHandSparkles, faHashtag, faMagicWandSparkles, faQuestion, faSprayCanSparkles, faSquareParking, faSquarePollHorizontal, faSquarePollVertical, faTag, faVideo, faWandSparkles } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { Project_Slug_DTO } from '../../data/dtos';
import { getCategoryProjects } from '../../data/utils';
import { background } from '@chakra-ui/react';

const AllCategory = {
    name: "All",
    slug: "all"
}

const fontAwesome = (icon) => <FontAwesomeIcon icon={icon} className="mr-1" />

const boxIcon = (icon) => <i className={`${icon} mr-1`} ></i>

const categoryIcons = {
    "quizzes": fontAwesome(faQuestion),
    "all": fontAwesome(faBorderAll),
    "offers": fontAwesome(faTag),
    "surveys": fontAwesome(faSquarePollHorizontal),
    "blogs": fontAwesome(faBlog),
    "emails": fontAwesome(faEnvelope),
    "ads": fontAwesome(faAd),
    "e-commerce": fontAwesome(faCartShopping),
    "frameworks": fontAwesome(faHashtag),
    "marketing": fontAwesome(faWandSparkles),
    "website": fontAwesome(faGlobe),
    "video": fontAwesome(faVideo),
}

const getCategoryIcon = (slug) => {
    if (slug in categoryIcons) {
        return categoryIcons[slug];
    } else {
        return <></>
    }
}

export default function Templates() {
    const router = useRouter();

    const [CategoryProjects, setCategoryProjects] = useState({});

    const [selectedCategory, setSelectedCategory] = useState(AllCategory.slug);

    const [categoriesList, setCategoriesList] = useState([{ name: "", slug: "" }]);

    const [projectsList, setProjectsList] = useState([new Project_Slug_DTO]);

    const selectCategory = (category) => {
        return () => {
            setSelectedCategory(category);
            setProjectsList(CategoryProjects[category])
        }
    }

    const navigateToPage = (category_slug, project_slug) => {
        return () => {
            console.log(category_slug, project_slug);
            router.push(`/project/${category_slug}/${project_slug}`);
        }
    }
    useEffect(() => {
        const categoryProjects = getCategoryProjects();

        const myCategoryProjects = {};

        var mycategoryList = [AllCategory];
        myCategoryProjects[AllCategory.slug] = [];

        categoryProjects.forEach((c) => {
            mycategoryList.push({ name: c.category_name, slug: c.category_slug });
            myCategoryProjects[c.category_slug] = c.projects;
            myCategoryProjects[AllCategory.slug] = myCategoryProjects[AllCategory.slug].concat(c.projects);
        });
        setCategoriesList(mycategoryList);
        setCategoryProjects(myCategoryProjects);
        setProjectsList(myCategoryProjects[AllCategory.slug]);
    }, []);
    return (
        <Layout>
            <div className='md:pl-12 mb-9 md:mb-0 pl-6 pr-6 md:pr-7'>

                <p className='not-italic font-medium text-xl leading-[30px] text-[#434B54]'>Templates</p>
                <div className='flex w-[100%] overflow-y-scroll scrollbar md:overflow-auto md:space-x-4 space-x-4 items-center text-[#48535F] py-4 md:w-full justify-between'>
                    {
                        categoriesList.map((category, indx) =>
                            <div key={indx} className={`rounded-lg px-3 min-w-fit cursor-pointer ${selectedCategory == category.slug ? "bg-[#8AB6A2] text-slate-50" : " text-slate-700"}`}
                                onClick={selectCategory(category.slug)}
                            >
                                {/* {getCategoryIcon(category.slug)} */}
                                {category.name}
                            </div>
                        )
                    }
                </div>
                <div className='grid md:grid-cols-[repeat(4,1fr)] grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-4'>
                    {
                        projectsList.map((project, indx) =>
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

        </Layout>
    )
}
