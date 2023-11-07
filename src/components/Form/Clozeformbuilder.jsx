// src/components/ClozeFormBuilder.js

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialWords = ['Drag', 'and', 'drop', 'here'];

const ClozeFormBuilder = () => {
  const [words, setWords] = useState(initialWords);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedWords = Array.from(words);
    const [removed] = reorderedWords.splice(result.source.index, 1);
    reorderedWords.splice(result.destination.index, 0, removed);

    setWords(reorderedWords);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Cloze Form Builder</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="wordList" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mb-4"
            >
              {words.map((word, index) => (
                <Draggable key={word} draggableId={word} index={index}>
                  {(provided) => (
                    <span
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="inline-block bg-yellow-200 p-2 m-1"
                    >
                      {word}
                    </span>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Save Question
      </button>
    </div>
  );
};

export default ClozeFormBuilder;
