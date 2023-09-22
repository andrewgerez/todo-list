import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { Store } from "../interfaces";
import { saveTasksInLocalStorage } from "../services/storage";

export const useStore = create<Store>((set) => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  return {
    tasks: storedTasks,

    addTask: (taskContent: string) =>
      set((state) => {
        const newTask = {
          id: uuid(),
          content: taskContent,
          completed: false,
        };
        const updateTasks = [...state.tasks, newTask];
        saveTasksInLocalStorage(updateTasks);
        return { tasks: updateTasks };
      }),
    deleteTask: (taskId: string) =>
      set((state) => {
        const updateTasks = state.tasks.filter((task) => task.id !== taskId);
        saveTasksInLocalStorage(updateTasks);
        return { tasks: updateTasks };
      }),
    completeTask: (taskId: string) =>
      set((state) => {
        const updateTasks = state.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: true,
            };
          }
          return task;
        });
        saveTasksInLocalStorage(updateTasks);
        return { tasks: updateTasks };
      }),
    resetTask: (taskId: string) =>
      set((state) => {
        const updateTasks = state.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: false,
            };
          }
          return task;
        });
        saveTasksInLocalStorage(updateTasks);
        return { tasks: updateTasks };
      }),
  };
});
