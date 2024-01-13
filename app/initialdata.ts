const initialData: TaskList = {
  tasks: {
    "task-1": { id: "task-1", content: "task1 content" },
    "task-2": { id: "task-2", content: "task2 content" },
    "task-3": { id: "task-3", content: "task3 content" },
    "task-4": { id: "task-4", content: "task4 content" },
    "task-5": { id: "task-5", content: "task5 content" },
    "task-6": { id: "task-6", content: "task6 content" },
    // "task-7": { id: "task-7", content: "task7 content" },
  },
  columns: {
    "col-1": {
      id: "col-1",
      title: "to do",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5","task-6"],
    },
    "col-2": {
      id: "col-2",
      title: "done",
      taskIds: [],
    },
    "col-3": {
      id: "col-3",
      title: "on hold",
      taskIds: [],
    },
  },
  columnOrder: ["col-1", "col-2", "col-3"],
};

export default initialData;
