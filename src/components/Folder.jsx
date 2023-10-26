import { faFileText, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDroppable } from "@dnd-kit/core";

import React from 'react'

export default function Folder({ name, id, deleteFolder ,key}) {
  return (
    <div className='grid grid-cols-1 text-center w-fit cursor-pointer' >
      <div className="dropdown">
        <label tabIndex={0} ><i className='bx bxs-folder text-8xl text-gray-700' ></i></label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-slate-200 rounded-box w-52">
          <li><a>Open</a></li>
          <li><a><FontAwesomeIcon icon={faFileText}/> Rename</a></li>
          <li onClick={deleteFolder(id)}><a><FontAwesomeIcon icon={faTrash} className="text-red-900"/> Delete</a></li>
        </ul>
      </div>
      <p>{name}</p>
    </div>
  )
}
