import {
    AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader,
    AlertDialogOverlay, Button, ButtonGroup, Input, useDisclosure, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Menu, IconButton,
    MenuButton, MenuList, MenuItem, Icon
} from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { useDroppable } from '@dnd-kit/core';
import {
    faFileText,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';


export default function Folder({ name, folderId, deleteFolder, renameFolder }) {
    const router = useRouter();


    const { isOver, setNodeRef } = useDroppable({
        id: folderId,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenRename, onOpen: onOpenRename, onClose: onCloseRename } = useDisclosure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const DotsSVG = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle cx="10" cy="4" r="2" fill="#000" />
        <circle cx="10" cy="10" r="2" fill="#000" />
        <circle cx="10" cy="16" r="2" fill="#000" />
    </svg>


    const cancelRef = React.useRef();

    return (
        <div ref={setNodeRef}
            className={`grid grid-cols-1 text-center cursor-pointer border w-52 rounded-2xl ${isOver ? "bg-[#8AB6A2] text-white" : "bg-white"}`}>
            <div className="flex justify-end mx-2">
                <Menu>
                    <MenuButton as={IconButton} icon={<BiDotsVerticalRounded className="text-xl" />} variant="ghost" />
                    <MenuList>
                        <MenuItem onClick={onOpen}>
                            <FontAwesomeIcon icon={faTrash} className="text-red-900 mr-2" />
                            Delete
                        </MenuItem>
                        <MenuItem onClick={onOpenRename}>
                            <FontAwesomeIcon icon={faFileText} className="mr-2" /> Rename
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <p className='text-gray-700 text-xl pb-5' onClick={() => router.push(`/folders/${folderId}`)}>
                <i className={`bx bx-folder mr-2`} ></i>
                {name}
            </p>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Folder
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={deleteFolder(folderId)} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <Modal isOpen={isOpenRename} onClose={onCloseRename}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Rename Folder</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div className='grid grid-cols-1 gap-2'>
                            <Input placeholder='Folder Name' size='lg' defaultValue={name}
                                {...register("folder_name", { required: true })} />
                            {errors.folder_name && <span className='text-red-800'>Folder Name is Required</span>}
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <ButtonGroup spacing='4'>
                            <Button colorScheme='blue' onClick={handleSubmit((data) => {
                                console.log(data);
                                renameFolder(folderId, data["folder_name"]);
                                onCloseRename();
                                reset();
                            })}>Save</Button>
                            <Button onClick={() => {
                                onCloseRename();
                                reset();
                            }}>Cancel</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
