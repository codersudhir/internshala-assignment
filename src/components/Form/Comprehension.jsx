import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableOption from './Draggableoptions';


const Comprehension = () => {
  const options = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  const onDragEnd = (result) => {
    // Handle reordering logic here
  };

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="options" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="m-5"
          >
          <div >
              <input class=" px-5 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder='Add A question'  />
          </div>
            {options?.map((item,index)=>{
                return <DraggableOption
                key={item.id}
                id={item.id}
                name={item.name}
                index={index}
              />
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <div className='px-5'>
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Save Question
      </button>
   </div></>
    
  );
};

export default Comprehension;
