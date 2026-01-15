"use client";

import { useOptimistic, useRef, useTransition } from "react";
import { Task } from "@/app/lib/definitions";
import TaskItem from "@/app/ui/task-item";
import { List, ListInput, Navbar, Page } from "konsta/react";
import { createTaskAction, deleteTaskAction, toggleTask } from "./actions";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";
import { taskReducer } from "./task-reducer";

interface TaskListClientProps {
  tasks: Task[];
  listTitle: string;
  listId: string;
}

export default function TaskListClient({
  tasks,
  listTitle,
  listId,
}: TaskListClientProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    taskReducer,
  );

  const handleToggle = async (taskId: string, isDone: boolean) => {
    startTransition(async () => {
      addOptimisticTask({ type: "toggle", payload: taskId })
      await toggleTask(taskId, isDone, listId);
    });
  };

  const handleDelete = async (taskId: string, title: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"`,
    );
    if (!confirmed) return;
    startTransition(async () => {
      addOptimisticTask({ type: "delete", payload: taskId })
      await deleteTaskAction(taskId, listId);
    });
  };

  const handleCreate = async (formData: FormData) => {
    const title = formData.get("title") as string;
    if (!title) return;

    formRef.current?.reset(); // clear input

    startTransition(async () => {
      addOptimisticTask({ type: "add", payload: title });
      formData.append("listId", listId);
      await createTaskAction(formData);
    });
  };

  return (
    <Page className="overflow-auto h-screen relative pb-safe">
      {/* The Background Plate for the Navbar */}
      <div
        className="fixed top-0 left-0 w-full z-20"
        style={{
          height: "50px",
          backgroundColor: "rgb(200, 105, 101)",
        }}
      />
      <Navbar
        title={listTitle}
        large
        className="sticky top-0 z-30 text-white"
        left={
          <Link href={"/"}>
            <ChevronLeft size={27} />
          </Link>
        }
      />
      <List className="mt-0 z-10">
        {optimisticTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            checked={task.done}
            onToggle={() => handleToggle(task.id, task.done)}
            onDelete={() => handleDelete(task.id, task.title)}
          />
        ))}
      </List>
      <footer className="sticky bottom-4 left-0 w-full px-2 z-30 mt-auto">
        <div className="bg-black/30 rounded-2xl p-2 backdrop-blur-xl shadow-lg">
          <form ref={formRef} action={handleCreate}>
            <ListInput
              name="title"
              type="text"
              placeholder="Add a Task"
              media={<Plus className="text-white/70" size={20} />}
              className="!bg-white/20 rounded-lg !border-none"
              inputClassName="!text-white placeholder:!text-white/50"
              outline={false}
            />
          </form>
        </div>
      </footer>
    </Page>
  );
}
