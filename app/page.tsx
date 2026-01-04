"use client";

import styles from './ui/home.module.css';
import TaskItem from "./ui/task-item";
import NewListButton from "./ui/new-list-button";
import HomeHeader from "./ui/home-header";

export default function Home() {
  const tasks = [
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
    {id: crypto.randomUUID(), icon: "🍷", title: "Tarefa"},
  ];

  const taskItems = tasks.map(task => {
    return (
      <TaskItem key={task.id} task={task}/>
    );
  });

  return (
    <div>
      <HomeHeader />
      <div>
        <ul className={styles.tasksList}>
          {taskItems}
        </ul>
      </div>
      <div className={styles.bottomBar}>
        <NewListButton />
      </div>
    </div>
  );
}
