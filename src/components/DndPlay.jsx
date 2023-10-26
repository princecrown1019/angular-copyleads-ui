import React from "react";
// npm install @dnd-kit/cores
import { DndContext } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip } from "@fortawesome/free-solid-svg-icons";

function DndPlay() {
  const files = ["file1", "file2", "file3", "file4", "file5", "file6"];
  const folders = [
    "folder1",
    "folder2",
    "folder3",
    "folder4",
    "folder5",
    "folder6",
  ];

  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "20px",
  };

  return (
    <DndContext id={"area"} onDragEnd={handleDragEnd}>
      <div className="mx-5">
        <div className="flex gap-2 flex-wrap my-5">
          {files.map((file) => (
            <Draggable key={file} id={file}>
              {file}
            </Draggable>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap my-5" >
          {folders.map((folder) => (
            <Droppable key={folder} id={folder}>
              {folder}
            </Droppable>
          ))}
        </div>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;
    if (over) {
      console.log(event);

      console.log(
        `${event.active.id} was dropped onto ${event.over.id}`
      );
    }
  }
}



function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: props.id,
  });

  const handleMouseDown = (event) => {
    if (event.target.closest('.my--dragable')) {
      listeners.onPointerDown(event);
    }
  };
  

  const Transformstyle = transform
    ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={{ ...Transformstyle }}
      {...attributes}
      onPointerDown={handleMouseDown}
      id={props.id}
      className={`text-slate-800 w-fit cursor-pointer border px-5 py-2 rounded-md shadow ${isDragging ? "bg-green-200" : "bg-white"} `}
    >
      <div className='text-center hover:cursor-grab my--dragable bg-yellow-200'>
        <i className="bx bx-grid-horizontal"></i>
      </div>
      <p>{props.children}</p>
    </div>
  );
}




function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
    width: "100px",
    height: "100px",
    display: "grid",
    placeItems: "center",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className='grid grid-cols-1 text-center w-fit cursor-pointer' >
        <label tabIndex={0} ><i className={`bx ${isOver ? "bxs-folder-open" : "bxs-folder"} text-8xl text-gray-700`} ></i></label>
        <p>{props.children}</p>
      </div>
    </div>
  );
}
export default DndPlay;
