import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import { getCategoryProjects } from '../data/utils';

const formatGroupLabel = (data) => (
    <div className='text-gray-600 text-end'>
        <span>{data.label}</span>
    </div>
);

export default function TemplateSelect({changeTemplate}={}) {

    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        var category_projects = getCategoryProjects();

        setTemplates(
            category_projects.map((category, indx) => {
                return {
                    label: category.category_name,
                    options: category.projects.map((proj, indx) => {
                        return {
                            label: proj.project_name,
                            value: `${category.category_slug},${proj.project_slug}`
                        }
                    })
                };
            })
        );

    }, []);

    const handleChange = (val) => {
        const arr = val.value.split(",");
        const category_slug = arr[0];
        const template_slug = arr[1];

        changeTemplate(category_slug, template_slug);
    }

    return (
        <div className="w-80 mx-auto mt-5">
            <label className="text-gray-700 text-sm">Select Template</label>
            <Select options={templates} instanceId='select-template'
                formatGroupLabel={formatGroupLabel} onChange={handleChange} />
        </div>
    )
}
