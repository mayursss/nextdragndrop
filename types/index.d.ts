type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

type Task = {
  id: string;
  content: string;
};

type TaskMap = {
  [key: string]: Task;
};

type ColumnMap = {
  [key: string]: Column;
};

type TaskList = {
  tasks: TaskMap;
  columns: ColumnMap;
  columnOrder: string[];
};
