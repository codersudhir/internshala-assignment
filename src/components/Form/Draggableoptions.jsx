import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const DraggableOption = ({ id, name, index }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-2 m-2 flex border border-gray-300 rounded cursor-pointer ${
            snapshot.isDragging ? 'bg-gray-100' : ''
          }`}
        >
     <span className=' mx-5'><svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="14" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" /></svg></span>
          {name}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableOption;
