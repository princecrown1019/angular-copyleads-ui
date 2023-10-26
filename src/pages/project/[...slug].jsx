import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Button, Flex, Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Layout from '../../components/layout';
import TemplateSelect from '../../components/TemplateSelect';

import { HIDDEN_FIELD, NUMBER_FIELD, ProjectField, SELECT_OPTION, TEXT_AREA, TEXT_FIELD } from '../../data/dtos';
import useProject from '../../hooks/useProject';
import useProjectDetails from "../../hooks/useProjectDetails";
import useProjectStructure from '../../hooks/useProjectStructure';

const JoditEditor = dynamic(() => import('jodit-react'), {
    ssr: false,
});


/**
 * 
 * @param {react hook form} register 
 * @param {detail of the field} field 
 * @returns dynamically generated input field
 */
function ProjectInput({ register, field = new ProjectField() } = {}) {
    if (field.type == TEXT_FIELD) {
        return <div >
            <label className='text-sm'>{field.displayName}</label>
            <input className='input input-bordered w-full'
                type='text'
                {...register(`${field.name}`)}
                placeholder={field.placeholder} />
        </div>
    } else if (field.type === TEXT_AREA) {
        return <div >
            <label className='text-sm'>{field.displayName}</label>
            <textarea className='textarea textarea-bordered w-full'
                type='text'
                {...register(`${field.name}`)}
                placeholder={field.placeholder} />
        </div>
    } else if (field.type == SELECT_OPTION) {
        return <div >
            <label className='text-sm'>{field.displayName}</label>
            <select className="select select-bordered w-full"
                {...register(`${field.name}`)}
                defaultValue=""
            >
                <option disabled value="">Select</option>
                {
                    field.values.map((opt, idx) => (
                        <option value={opt.value} key={idx}>{opt.displayName}</option>
                    ))
                }
            </select>
        </div>
    } else if (field.type == NUMBER_FIELD) {
        return <div >
            <label className='text-sm'>{field.displayName}</label>
            <input className='input input-bordered w-full'
                type='number' defaultValue={field.minVal}
                {...register(`${field.name}`, { min: field.minVal, max: field.maxVal })} />
        </div>
    }
    else if (field.type == HIDDEN_FIELD) {
        return <>
            <input type="hidden" value={field.value} {...register(field.name)} />
        </>
    }
    else {
        return <></>
    }
}

function HeaderComponent({ projectTitle, setProjectTitle }) {
    return <input type="text" placeholder="Project Name"
        value={projectTitle} onChange={setProjectTitle}
        className="input w-full max-w-xs mr-2" />

}

/**
 * 
 * @returns common function for all the projects
 */
export default function project() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { suggestions, fetchSuggestions, isWaiting, fetchSuggestion2 } = useProject();
    const { projectStructure, isReady, initializeProjectStructure } = useProjectStructure();
    const { projectText, projectTitle,
        saveProjectText, isSaving, saveProjectTitle, initializeCategoryProject } = useProjectDetails();

    const router = useRouter();

    const remove_n = (text) => text.replace("\n\n", "");

    const changeTemplate = (category_slug,template_slug)=>{
        initializeProjectStructure([category_slug,template_slug]);
    }

    const copyClipBoard = (index) => () => {
        navigator.clipboard.writeText(remove_n(suggestions[index]));
        toast.success('Copied 🎉', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const downLoadAs = async (name, response) => {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const generatePdf = async () => {
        const response = await fetch("/api/getPDF", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ html: projectText }),
        });

        if (response.ok) {
            await downLoadAs(`${projectTitle}.pdf`, response);
        }
    };

    const generateDocx = async () => {
        const response = await fetch("/api/getWord", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ html: projectText }),
        });

        if (response.ok) {
            await downLoadAs(`${projectTitle}.docx`, response);
        }
    };

    // const editor = useRef(null);

    useEffect(() => {
        if (!router.isReady) return;

        // find type of project
        const { slug } = router.query;
        console.log(slug);

        initializeProjectStructure(slug);
        if (slug.length == 2) {
            initializeCategoryProject({ category_slug: slug[0], project_slug: slug[1] });
        } else if (slug.length == 3) {
            initializeCategoryProject({
                category_slug: slug[0], project_slug: slug[1],
                project_id: parseInt(slug[2])
            });
        }

    }, [router.isReady]);

    const fetchSuggestionsList = (data) => {
        // fetch suggestions from gpt3
        fetchSuggestion2(projectStructure.query, data, data["variations"]);
    }

    return (
        <Layout shouldOpen={false} headerComponent={
            <HeaderComponent projectTitle={projectTitle}
                setProjectTitle={saveProjectTitle} isSaving={isSaving} exportPDF={generatePdf}
                exportWord={generateDocx}
            />
        }
            displaySearch={false}
        >
            {isReady ?
                <div className="h-screen">
                    <div className='flex justify-between my-2 mx-2 flex-wrap gap-2 items-center'>
                        <div>
                            <TemplateSelect changeTemplate={changeTemplate}></TemplateSelect>
                        </div>
                        <Flex gap={2}>
                            <p className='place-items-center'>{isSaving ? "saving..." : "saved"}</p>
                            <Menu >
                                <MenuButton colorScheme='blue' as={Button} rightIcon={<ChevronDownIcon />}>
                                    Export
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={generatePdf}>As PDF</MenuItem>
                                    <MenuItem onClick={generateDocx}>As Docx</MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </div>
                    <div className='flex h-full items-start lg:flex-nowrap flex-wrap'>

                        <div className='p-2 mx-2 border rounded-2xl lg:w-1/2 w-full overflow-y-scroll h-full mb-2 bg-slate-50'>
                            <p className='p-1 text-center text-slate-700 text-xl '>
                                {projectStructure.project_title}
                            </p>
                            <p className='p-1 text-center text-slate-700 text-base'>
                                {projectStructure.purpose}
                            </p>
                            <form onSubmit={handleSubmit(fetchSuggestionsList)}>
                                {projectStructure.fields.map((field, index) =>
                                (<div className='p-1' key={index}>
                                    <ProjectInput register={register} field={field}></ProjectInput>
                                </div>))}
                                <div className='p-1'>
                                    <label className='text-sm'>Variations</label>
                                    <input className='input input-bordered w-full'
                                        type='number' defaultValue={1}
                                        {...register('variations', { min: 1, max: 10 })} />
                                </div>
                                <div className='flex justify-end'>
                                    {
                                        isWaiting ?
                                            <button className="btn loading" type='button'>loading</button> :
                                            <button type='submit' className='btn object-right'>submit</button>
                                    }
                                </div>
                            </form>
                            {
                                suggestions.map((suggestion, indx) =>
                                    <div className='m-1 border rounded-md px-4 py-2 shadow-sm bg-slate-50' key={indx}>
                                        <div dangerouslySetInnerHTML={{ __html: suggestion }} />
                                        <div className='flex justify-end'>
                                            <button className='btn btn-sm btn-primary' onClick={copyClipBoard(indx)}>
                                                <i className='bx bxs-copy  pr-2'></i>
                                                copy
                                            </button>
                                        </div>
                                    </div>)
                            }
                        </div>

                        <div className="lg:w-1/2 mx-2 grid grid-flow-row h-full w-full">

                            <JoditEditor
                                className='h-full overflow-y-scroll'
                                config={{
                                    height: '100%',
                                    readonly: false,
                                    toolbarAdaptive: true,
                                    buttonsMD: 'undo,redo,bold,italic,underline,fontsize,|,ul,ol',
                                    buttonsSM: 'undo,redo,bold,italic,underline,fontsize,|,ul,ol',
                                    buttonsXS: 'undo,redo,bold,italic,underline,fontsize,|,ul,ol',
                                    // toolbar: true, //if you really want more fields keep it true otherwise below properties will be shown --kashif
                                    buttons: 'undo,redo,bold,italic,underline,fontsize,|,ul,ol',
                                    askBeforePasteFromWord: false,
                                    askBeforePasteHTML: false
                                }}
                                // ref={editor}
                                value={projectText}
                                onBlur={newText => saveProjectText({ newText: newText })}
                            />
                        </div>
                    </div>
                </div>

                : <>Sorry ☹️, Template Not Found</>}
        </Layout>
    )
}
