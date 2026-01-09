import styles from "./home.module.css";
import NewListButton from "./ui/new-list-button";
import HomeHeader from "./ui/home-header";
import SpecialTaskListItem from "./ui/special-task-list-item";
import { Calendar, House, Star, Sun, User } from "lucide-react";
import Link from "next/link";
import Parse from "./lib/parse-server";
import { getCurrentSessionToken } from "./lib/auth";
import ParseObject from "parse/types/ParseObject";

export default async function Home() {
  const sessionToken = await getCurrentSessionToken();
  const query = new Parse.Query("TaskList");
  query.ascending("title");

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

  var customTaskListItems: ParseObject[] = [];
  try {
    customTaskListItems = await query.find({ sessionToken });
    console.log(`Fetched ${customTaskListItems.length} items`);
  } catch (error) {
    console.error("Failed to fetch lists:", error);
  }

  const customTaskListComponents = customTaskListItems.map((task) => {
    return (
      <Link
        href={`/task/${task.id}`}
        key={task.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <li key={task.id} className={styles.homeCustomListItem}>
          <p>{task.get("icon") || "📋"}</p>
          <p>{task.get("title")}</p>
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
