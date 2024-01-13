import React from "react";
import Task from "./task";
import { Droppable } from "@hello-pangea/dnd";

interface ColumnProps {
  column: Column;
  tasks: Task[];
}

function Column({ column, tasks }: ColumnProps) {
  return (
    <>
      <div className="m-5 p-2 flex flex-col grow w-px border border-black dark:border-gray-700 rounded">
        <h3>{column.title}</h3>
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <div
              className={`py-2 grow min-h-28 transition-colors ${
                snapshot.isDraggingOver
                  ? "bg-blue-300 dark:bg-blue-950 "
                  : "bg-transperent"
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}

export default Column;
