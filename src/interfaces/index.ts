export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface Store {
  tasks: Task[];
  addTask: (taskContent: string) => void;
  deleteTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
  resetTask: (taskId: string) => void;
}