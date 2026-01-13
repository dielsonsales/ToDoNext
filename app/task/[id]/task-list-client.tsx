"use client";

import { useRef } from "react";
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
        id={task.id}
        listId={listId}
        title={task.title}
        checked={task.done}
      />
    );
  });

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
        left={<NavbarBackLink href="/" />}
      />
      <List insetIos className="mt-0 z-10">
        {taskComponents}
      </List>
      <footer className="sticky bottom-4 left-0 w-full px-2 z-30 mt-auto">
        <div className="bg-black/30 rounded-2xl p-2 backdrop-blur-xl shadow-lg">
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
