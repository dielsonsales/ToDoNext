import styles from "./home.module.css";
import NewListButton from "./ui/new-list-button";
import HomeHeader from "./ui/home-header";
import SpecialTaskListItem from "./ui/special-task-list-item";
import { Calendar, House, Star, Sun, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const taskListItems = [
    { id: crypto.randomUUID(), icon: Sun, label: "My Day", color: "gray" },
    { id: crypto.randomUUID(), icon: Star, label: "Important", color: "pink" },
    {
      id: crypto.randomUUID(),
      icon: Calendar,
      label: "Planned",
      color: "darkCyan",
    },
    {
      id: crypto.randomUUID(),
      icon: User,
      label: "Assigned to me",
      color: "green",
    },
    { id: crypto.randomUUID(), icon: House, label: "Tasks", color: "gray" },
  ];

  const taskListComponents = taskListItems.map((task) => {
    return (
      <SpecialTaskListItem
        key={task.id}
        icon={task.icon}
        label={task.label}
        color={task.color}
      />
    );
  });

  const customTaskListItems = [
    { id: crypto.randomUUID(), icon: "🍷", title: "List 1" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 2" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 3" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 4" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 5" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 6" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 7" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 8" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 9" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 10" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 11" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 12" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 13" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 14" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 15" },
    { id: crypto.randomUUID(), icon: "🍷", title: "List 16" },
  ];

  const customTaskListComponents = customTaskListItems.map((task) => {
    return (
      <Link
        href={`/task/${task.id}`}
        key={task.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <li key={task.id} className={styles.homeCustomListItem}>
          <p>{task.icon}</p>
          <p>{task.title}</p>
        </li>
      </Link>
    );
  });

  return (
    <div className={styles.homeContainer}>
      <header>
        <HomeHeader />
      </header>
      <main className={styles.homeScrollContent}>
        <ul className={styles.homeTaskLists}>{taskListComponents}</ul>
        <div className={styles.homeSeparator} />
        <ul className={styles.homeTaskLists}>{customTaskListComponents}</ul>
      </main>
      <footer className={styles.homeBottomBar}>
        <NewListButton />
      </footer>
    </div>
  );
}
