import React, { useState } from 'react';
import { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialFormData = [
  { id: '1', value:"",ans:"" },
  { id: '2',value:"",ans:'' },
];

const FormBuilder = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [data,senddata]=useState({question:"",answer:[]})
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedData = Array.from(formData);
    const [movedItem] = reorderedData.splice(result.source.index, 1);
    reorderedData.splice(result.destination.index, 0, movedItem);

    setFormData(reorderedData);
  };

  const handleInputChange = (index, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index].value = value;
    setFormData(updatedFormData);
  };
  const handleSelectChange = (index, ans) => {
    const updatedFormData = [...formData];
    updatedFormData[index].ans = ans;
    setFormData(updatedFormData);
  };
  
const handleSubmit=()=>{
  console.log(data);
}
  return (
   
   <>
    <div className='flex '>
       
       <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId=" ">
        
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-gray-100 p-4 w-full "
          >
            
          <div >
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder='Add A question' onChange={(e)=>{senddata({question:e.target.value,answer:formData})}} />
          </div>
            {formData.map((formElement, index) => (
              <Draggable key={formElement.id} draggableId={formElement.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="flex bg-white p-4 rounded-md shadow-md mb-4"
                  >
                   

                    <div className="p-2 py-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                   </svg></div>
                    <input
                      type="text"
                      placeholder="enter"
                      className="border border-gray-400 p-2 rounded-md w-full"
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                    
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="border border-danger ">
        
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-gray-100 p-4 w-full "
          >
           
         
            {formData.map((formElement, index) => (
              <Draggable key={formElement.id} draggableId={formElement.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="flex bg-white p-4 rounded-md shadow-md mb-4"
                  >
                   

                    <div className="p-2 py-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                   </svg></div>
                   <select  onChange={(e) => handleSelectChange(index, e.target.value)} class="py-3 px-4 pe-9 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
  
                 <option>1</option>
                <option>2</option>
               <option>3</option>
               </select>
                    
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <div className="flex justify-end w-25 p-5" onClick={(e)=>{setFormData([...formData, { id: String(formData.length+1), type: 'text', label: 'text Input', placeholder: 'Enter text' },])}}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

    </div>
   
   <div className='px-5'>
   <button onClick={(e)=>{handleSubmit(e)}} className="bg-blue-500 text-white py-2 px-4 rounded">
        Save Question
      </button>
   </div>
   </>
  );
};

export default FormBuilder;
