import { Task } from "../interfaces";

export const saveTasksInLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}