import {
  Button, ButtonGroup, Input,
  Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { DndContext } from '@dnd-kit/core';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../components/layout';
import useFolderList from '../../hooks/useFolderList';
import useProjectList from '../../hooks/useProjectList';
import Folder from '../../components/dashboard/Folder';
import GetStarted from '../../components/GetStarted';
import FileCard from '../../components/dashboard/FileCard';

export default function IndexPage() {

  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { projectList, deleteProject, isLoading, fetchProjects } = useProjectList();
  const { isLoading: isFolderLoading, folderList,
    deleteFolder, saveFolder, putProjectInFolder, renameFolder } = useFolderList();

  const navigate2project = (category_slug, project_slug, project_id) => () =>
    router.push(`/project/${category_slug}/${project_slug}/${project_id}`);

  const navigate2templates = () => router.push(`/app/templates`);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchProjects();
  }, []);

  function handleDragEnd(event) {
    const { over } = event;
    console.log(event);
    if (over) {
      var project_id = event.active.id;
      var folder_id = event.over.id;
      // console.log(event)
      putProjectInFolder(project_id, folder_id)
        .then((data) => {
          fetchProjects();
          toast.success('Folder Moved Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      console.log(
        `File [${event.active.id}] was dropped onto Folder[${event.over.id}]`
      );
    }
  }

  return <Layout>
    {/* modal for creating folder */}
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='grid grid-cols-1 gap-2'>
              <Input placeholder='Folder Name' size='lg' {...register("folder_name", { required: true })} />
              {errors.folder_name && <span className='text-red-800'>Folder Name is Required</span>}
            </div>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup spacing='4'>
              <Button colorScheme='blue' onClick={handleSubmit((data) => {
                saveFolder(data);
                onClose();
                reset();
              })}>Save</Button>
              <Button onClick={onClose}>Cancel</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

    <div className='lg:mx-10 mx-3 my-3 '>
      <div className="flex items-center justify-between">
        <h4 className="text-[#434B54] text-[20px] font-medium leading-8">
          Get Started
        </h4>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={navigate2templates}>
          <h6 className="text-[#434B54] text-[12px] md:text-[14px] font-normal leading-5">
            Explore all templates
          </h6>
          <svg
            width="32"
            height="8"
            viewBox="0 0 32 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35356C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464468C27.9763 0.269206 27.6597 0.269206 27.4645 0.464468C27.2692 0.659731 27.2692 0.976313 27.4645 1.17158L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53554C27.6597 7.7308 27.9763 7.7308 28.1716 7.53554L31.3536 4.35356ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
              fill="#434B54"
            />
          </svg>
        </div>
      </div>
      <GetStarted></GetStarted>
    </div>
    <DndContext id={"area"} onDragEnd={handleDragEnd}>


      {/* list of folders */}
      <div className='lg:mx-10 mx-3 my-3 '>
        <h4 className="text-[#434B54] text-[20px] font-medium leading-8">
          Folders
        </h4>

        <div className='flex flex-wrap gap-2'>
          <div className='cursor-pointer bg-[#8AB6A2] flex items-center max-w-full md:max-w-sm p-6  border border-[#8AB6A266] rounded-[18px] shadow'
            onClick={onOpen}>
            <p className='text-white'><i className='bx bx-folder-plus mr-2'></i>Create Folder</p>
          </div>
          {
            isFolderLoading ? <>Loading...</> :
              <>
                {
                  folderList.map((folder, idx) =>
                    <div key={idx}>
                      <Folder name={folder.folderName} folderId={folder.id}
                        deleteFolder={deleteFolder} renameFolder={renameFolder} />
                    </div>)
                }
              </>
          }
        </div>
      </div>

      {/* list of projects */}
      {

        isLoading ? <>Loading...</> :
          <div className='lg:mx-10 mx-3 my-3'>
            <div className='flex justify-between'>
              <p className='text-[#434B54] text-[20px] font-medium leading-8'>Projects</p>
              <button className='btn btn-sm' onClick={navigate2templates}>
                <i className='bx bx-plus text-lg mr-2'></i>Create Copy
              </button>
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

    </DndContext>

  </Layout>
}