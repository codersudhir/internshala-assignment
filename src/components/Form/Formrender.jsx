import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialFormData = {
  question: 'Enter your question here',
  options: [
    { id: 'option-1', text: 'Option 1' },
    { id: 'option-2', text: 'Option 2' },
    { id: 'option-3', text: 'Option 3' },
    { id: 'option-4', text: 'Option 4' },
  ],
};

const FormWithDragAndDrop = () => {
  const [formData, setFormData] = useState(initialFormData);

  const GetFormdata=async()=>{
      const response = await fetch("https://unusual-fox-threads.cyclic.app/formdata");
      const data = await response.json();
      console.log(data);
    
  }

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const updatedOptions = [...formData.options];
    const [movedOption] = updatedOptions.splice(source.index, 1);
    updatedOptions.splice(destination.index, 0, movedOption);

    setFormData({ ...formData, options: updatedOptions });
  };

  const handleQuestionChange = (e) => {
    setFormData({ ...formData, question: e.target.value });
  };

  useEffect(()=>{
    GetFormdata()
  },[])

  return (
    <div className="p-4">
      <textarea
        className="w-full h-16 border p-2 rounded mb-4"
        placeholder="Enter your question here"
        value={formData.question}
        onChange={handleQuestionChange}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="options">
          {(provided) => (
            <ul
              className="space-y-2 gap-5"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {formData.options.map((option, index) => (
                <Draggable key={option.id} draggableId={option.id} index={index}>
                  {(provided) => (
                    <li
                      className="flex bg-gray-100 p-2 m-2 rounded cursor-pointer"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    > <span className=' mx-5'><svg class="h-4 w-4 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="6" height="6" rx="1" />  <rect x="14" y="4" width="6" height="6" rx="1" />  <rect x="4" y="14" width="6" height="6" rx="1" />  <rect x="14" y="14" width="6" height="6" rx="1" /></svg></span>
                      {option.text}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button  className="flex flex-end bg-blue-500 text-white py-2 px-4 mt-4 rounded">
        Submit Answer
      </button>
    </div>
  );
};

export default FormWithDragAndDrop;
