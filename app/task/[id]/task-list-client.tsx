"use client";

import { useRef, useState } from "react";
import { Task } from "@/app/lib/definitions";
import TaskItem from "@/app/ui/task-item";
import { List, ListInput, Navbar, NavbarBackLink, Page } from "konsta/react";
import { createTaskAction } from "./actions";
import { Plus } from "lucide-react";

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
  // const [taskName, setTaskName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    formData.append("listId", listId);
    await createTaskAction(formData);
    formRef.current?.reset(); // clear input
  };

  const taskComponents = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        title={task.title}
        checked={task.done}
        favorite={false}
      />
    );
  });

  return (
    <Page className="flex flex-col h-screen">
      <Navbar
        title={listTitle}
        className="text-white"
        left={<NavbarBackLink href="/" />}
      />
      <List insetIos className="flex-1 overflow-y-auto">{taskComponents}</List>
      <footer className="shrink-0 pb-safe px-2 mb-4">
        <div className="bg-black/20 rounded-2xl p-2 backdrop-blur-md shadow-lg">
          <form ref={formRef} action={clientAction}>
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
