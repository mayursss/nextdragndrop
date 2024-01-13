import React from "react";
import { Draggable } from "@hello-pangea/dnd";

interface TaskProps {
  task: Task;
  index: number;
}

function Task({ task, index }: TaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`border p-2 m-2 bg-gray-100 dark:bg-gray-700 rounded ${
            snapshot.isDragging
              ? "border-l-8 border-blue-600 dark:border-blue-300"
              : "border-orange-600 dark:border-orange-300"
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
