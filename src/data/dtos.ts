import React from 'react'

const TEXT_FIELD = 'TEXT_FIELD';
const TEXT_AREA = 'TEXT_AREA';
const SELECT_OPTION = 'SELECT_OPTION';
const NUMBER_FIELD = 'NUMBER_FIELD';
const HIDDEN_FIELD = 'HIDDEN_FIELD';

class ProjectFieldValue {
    value: string;
    placeholder: string;

    constructor({ value = '', placeholder = '' } = {}) {
        this.value = value;
        this.placeholder = placeholder;
    }
}


class ProjectField {

    name: string;
    displayName: string;
    placeholder: string;
    type: string;
    value: string;
    values: ProjectFieldValue[]=[]

    minVal:number;
    maxVal:number;

    constructor({
        name = '', displayName = '',
        placeholder = '', type = TEXT_FIELD, values = [new ProjectFieldValue()],
        value = '',minVal=0,maxVal=1
    } = {}) {
        this.name = name;
        this.displayName = displayName;
        this.placeholder = placeholder;
        this.type = type;
        this.values = values;
        this.value = value;
        this.minVal = minVal;
        this.maxVal = maxVal;
    }
}

class ProjectDetails {
    query:string;
    purpose: string;
    project_id: string;
    category_slug: string;
    project_slug: string;
    fields: ProjectField[]=[];
    project_title:string;

    constructor({ purpose = '',project_title='', project_id = '',project_slug='', query='',
     fields = [new ProjectField()],category_slug='' } = {}) {
        this.purpose = purpose;
        this.fields = fields;
        this.project_id = project_id;
        this.category_slug = category_slug;
        this.project_slug = project_slug;
        this.project_title = project_title;
        this.query = query;
    }
}

class Category_Projects_DTO {
    category_name: string;
    category_slug: string;
    projects: Project_Slug_DTO[] = [];

    constructor({ category_name = '', category_slug = '', projects = [new Project_Slug_DTO()] } = {}) {
        this.projects = projects;
        this.category_name = category_name;
        this.category_slug = category_slug;
    }
}

class Project_Slug_DTO {
    project_slug: string;
    category_slug: string;
    project_name: string;
    project_description: string;

    constructor({ project_name = '', project_slug = '',
    category_slug='',project_description='' } = {}) {
        this.project_name = project_name;
        this.project_slug = project_slug;
        this.category_slug = category_slug;
        this.project_description = project_description;
    }
}

export { Category_Projects_DTO, Project_Slug_DTO, ProjectField, ProjectDetails,
     NUMBER_FIELD,TEXT_FIELD, TEXT_AREA, SELECT_OPTION, HIDDEN_FIELD };