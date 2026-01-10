"use client";

import { useState } from "react";
import styles from "./task-list-client.module.css";
import { Task } from "@/app/lib/definitions";
import TaskItem from "@/app/ui/task-item";

interface TaskListClientProps {
  tasks: Task[];
}

export default function TaskListClient({ tasks }: TaskListClientProps) {
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
    <div>
      <main className={styles.taskDetailScrollContent}>
        <ul style={{ margin: 0, padding: 0 }}>{taskComponents}</ul>
      </main>
      <footer className={styles.taskDetailBottomContainer}>
        <form className={styles.taskDetailBottomForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.taskDetailInput}
            placeholder="Add a Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </form>
      </footer>
    </div>
  );
}
