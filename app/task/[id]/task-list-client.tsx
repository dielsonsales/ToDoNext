"use client";

import { useRef, useState } from "react";
import { Task } from "@/app/lib/definitions";
import TaskItem from "@/app/ui/task-item";
import { List, ListInput, Navbar, NavbarBackLink, Page } from "konsta/react";
import { createTaskAction } from "./actions";

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
      <footer className="shrink-0 bg-white pb-safe border-t">
        <form ref={formRef} action={clientAction}>
          <ListInput
            name="title"
            type="text"
            placeholder="Add a Task"
            className="!mb-0"
          />
        </form>
      </footer>
    </Page>
  );
}
