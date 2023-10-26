import React from 'react'
import Layout from '../../components/layout'
import useProjectList from '../../hooks/useProjectList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';


// breadcrumb component
function BreadCrumb({ folderName }) {
    return (<div className="text-sm breadcrumbs">
        <ul>
            <li>
                <a href='/app'>
                    <i className='bx bx-folder mr-2'></i>
                    Home
                </a>
            </li>
            <li>
                <a>
                    <i className='bx bx-folder mr-2'></i>
                    {folderName}
                </a>
            </li>
        </ul>
    </div>)
}

// file card component
function FileCard({ goToProject, projectName, deleteProject,
    lastUpdated, category }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();


    const deleteFile = () => {
        deleteProject();
        onClose();
    }

    return <div>
        <div className="rounded-2xl hover:bg-slate-50 shadow-sm border px-4 py-3 max-w-sm bg-white">
            <div>
                <div className='cursor-pointer flex my-2 justify-between '>
                    <p className='text-2xl' onClick={goToProject}>{projectName}</p>
                    <FontAwesomeIcon icon={faTrash} onClick={onOpen} />
                </div>
                <div className='w-fit px-2 rounded-lg bg-[#8AB6A2] my-2 text-white'>
                    {category}
                </div>
                <p className='text-gray-700 text-xs'>
                    Last modified : {lastUpdated}
                </p>
            </div>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete File
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={deleteFile} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    </div>
}

export default function FolderInfo() {
    const { projectList, deleteProject, isLoading, fetchProjectByFolderId } = useProjectList();
    const router = useRouter();
    const navigate2project = (category_slug, project_slug, project_id) => () =>
        router.push(`/project/${category_slug}/${project_slug}/${project_id}`);

    useEffect(() => {
        if (!router.isReady) return;
        // find type of project
        const { slug } = router.query;
        try {
            var folderId = parseInt(slug[0]);
            console.log("===>", folderId);
            if (folderId) {
                fetchProjectByFolderId(folderId);
            } else {
                router.push('/404');
            }
        } catch (error) {
            router.push('/404');
        }

    }, [router.isReady])

    return (
        <Layout>
            <div className='mt-5'>
                {
                    isLoading ?
                        <div>Loading...</div> :

                        <div className="lg:mx-10 mx-3">
                            <BreadCrumb folderName={"My Folder"} />
                            <div className='flex justify-between'>
                                <p className='text-2xl py-2'>Copies</p>

                            </div>
                            {projectList.length > 0 ?
                                <div className="flex flex-wrap gap-2">
                                    {projectList.map((project, idx) =>
                                        <FileCard key={idx}
                                            fileId={project.project_id}
                                            deleteProject={deleteProject(project.project_id)}
                                            goToProject={navigate2project(project.category_slug, project.project_slug, project.project_id)}
                                            projectName={project.project_name}
                                            lastUpdated={project.last_updated}
                                            category={project.category_slug}
                                        >
                                        </FileCard>
                                    )}
                                </div>
                                : <p className='text-center'> You Don't have Any Projects Yet</p>
                            }
                        </div>
                }
            </div>
        </Layout>
    )
}
