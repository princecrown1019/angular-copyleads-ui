import {
  AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button,
  useDisclosure, Menu,IconButton,
  MenuButton, MenuList, MenuItem, Icon
} from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

import { DragHandleIcon } from '@chakra-ui/icons'
import { useDraggable } from '@dnd-kit/core';
import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



// file card component
export default function FileCard({ goToProject, projectName, deleteProject,
  lastUpdated, category, fileId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: fileId,
    shouldStartDrag: (event) => {
      // this checks if the grab icon was clicked
      return event.target.classList.contains('my--drag');
    },
  });

  const Transformstyle = transform
    ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
    : undefined;

  const deleteFile = () => {
    deleteProject();
    onClose();
  }

  const handleMouseDown = (event) => {
    if (event.target.closest('.my--dragable')) {
      listeners.onPointerDown(event);
    }
  };

  return <div
    ref={setNodeRef}
    style={{ ...Transformstyle }}
    {...listeners}
    {...attributes}
    id={fileId}
    onPointerDown={handleMouseDown}
  >

    {
      isDragging ? <div className="rounded-2xl hover:bg-slate-50 shadow-sm border px-4 py-3 max-w-sm bg-white">
        <div className='text-center hover:cursor-grab  my--dragable'>
          <DragHandleIcon transform="rotate(90deg)"></DragHandleIcon>
        </div>
        <div className='cursor-pointer flex my-2 justify-between '>
          <p className='text-xl'>{projectName}</p>
        </div>
      </div> :
        <div className="rounded-2xl hover:bg-slate-50 shadow-sm border px-4 py-3 max-w-sm bg-white">
          <div className='text-center hover:cursor-grab  my--dragable'>
            <DragHandleIcon transform="rotate(90deg)"></DragHandleIcon>
          </div>
          <div>
            <div className='cursor-pointer flex my-2 justify-between '>
              <p className='text-2xl' onClick={goToProject}>{projectName}</p>
              <Menu>
                <MenuButton as={IconButton} icon={<BiDotsVerticalRounded className="text-xl"/>} variant="ghost"/>
                <MenuList>
                  <MenuItem onClick={onOpen}>Delete</MenuItem>
                </MenuList>
              </Menu>
              {/* <FontAwesomeIcon icon={faTrash}  /> */}
            </div>
            <div className='bg-[#8AB6A2] w-fit px-2 rounded-lg text-white my-2 text-base'>
              {category}
            </div>
            <p className='text-gray-700 text-xs'>
              Last modified :  {lastUpdated}
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
    }

  </div>
}