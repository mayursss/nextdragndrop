"use client";

import { useState } from "react";
import initialData from "./initialdata";
import Column from "./Column";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";

export default function Home() {
  const [taskColumns, setTaskColumns] = useState(initialData);
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return; // if use drag and drop outside column do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      // if user drag and drop to same location do nothing
      return;

    // else if user drag and drop to other location in column
    // get column where user dropped
    const startColumn = taskColumns.columns[source.droppableId];
    const finishColumn = taskColumns.columns[destination.droppableId];

    // if user drop in same column
    if (startColumn === finishColumn) {
      // get the new list of task id from column and create new array
      const newTaskIds = Array.from(startColumn.taskIds);

      // remove the item from source column
      newTaskIds.splice(source.index, 1);
      // add item to destination column
      newTaskIds.splice(destination.index, 0, draggableId);

      // recreate column with updated index of item
      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      // update state with updated column
      const newState = {
        ...taskColumns,
        columns: {
          ...taskColumns.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTaskColumns(newState);
      return;
    }

    // if user drop in other column
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(source.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    // update state with updated column
    const newState = {
      ...taskColumns,
      columns: {
        ...taskColumns.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setTaskColumns(newState);
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-wrap">
          {taskColumns.columnOrder.map((colid) => {
            const column = taskColumns.columns[colid];
            const tasks = column.taskIds.map(
              (taskid) => taskColumns.tasks[taskid]
            );
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </div>
      </DragDropContext>
    </>
  );
}
