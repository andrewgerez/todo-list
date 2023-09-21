import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { Store } from "../interfaces";

export const useStore = create<Store>((set) => {
  return {
    tasks: [],

    addTask: (taskContent: string) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: uuid(),
            content: taskContent,
            completed: false,
          },
        ],
      })),
    deleteTask: (taskId: string) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
    completeTask: (taskId: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: true,
            };
          }

          return task;
        }),
      })),
      resetTask: (taskId: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              completed: false,
            };
          }

          return task;
        }),
      })),
    };
});
