"use client";

import { useState } from "react";
import styles from "./task-list-client.module.css";
import { Task } from "@/app/lib/definitions";
import TaskItem from "@/app/ui/task-item";
import {
  Link,
  List,
  ListInput,
  Navbar,
  NavbarBackLink,
  Page,
} from "konsta/react";

interface TaskListClientProps {
  tasks: Task[];
  listTitle: string;
}

export default function TaskListClient({
  tasks,
  listTitle,
}: TaskListClientProps) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents refreshing the page
    if (!taskName.trim()) return;
    console.log("Adding new task");
    setTaskName(""); // clears input
  };

  const taskComponents = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        title={task.title}
        checked={false}
        favorite={false}
      />
    );
  });

  return (
    <Page>
      <Navbar title={listTitle} left={<NavbarBackLink href="/" />} />
      <List insetIos>{taskComponents}</List>
      <footer className="fixed bottom-0 left-0 w-full bg-white pb-safe border-t">
        <form onSubmit={handleSubmit}>
          <ListInput
            type="text"
            placeholder="Add a Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="!mb-0"
          />
        </form>
      </footer>
    </Page>
  );
}
