import { Task } from "@/app/lib/definitions";

export type TaskAction =
  | { type: "add"; payload: string }
  | { type: "toggle"; payload: string }
  | { type: "delete"; payload: string };

export function taskReducer(state: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: `task-${crypto.randomUUID()}`,
          title: action.payload,
          done: false,
        },
      ];
    case "toggle":
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task,
      );
    case "delete":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}
