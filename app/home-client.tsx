"use client";

import styles from "./home-client.module.css";
import { Block, List, ListItem, Navbar, Page } from "konsta/react";
import HomeHeader from "./ui/home-header";
import NewListButton from "./ui/new-list-button";
import Link from "next/link";
import { CustomTaskList } from "./lib/definitions";
import SpecialTaskListItem from "./ui/special-task-list-item";
import { Calendar, House, Star, Sun, User } from "lucide-react";

interface HomeClientProps {
  taskList: CustomTaskList[];
}

export default function HomeClient({ taskList }: HomeClientProps) {
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
    const IconComponent = task.icon;
    return (
      <ListItem
        key={task.id}
        title={task.label}
        media={<IconComponent size={24} color={task.color} />}
      />
    );
  });

  const customTaskListComponents = taskList.map((task) => {
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
    <Page>
      <HomeHeader />
      <List strongIos insetIos>
        {taskListComponents}
      </List>
      <Block>
        <main className={styles.homeScrollContent}>
          <div className={styles.homeSeparator} />
          <ul className={styles.homeTaskLists}>{customTaskListComponents}</ul>
        </main>
        <footer className={styles.homeBottomBar}>
          <NewListButton />
        </footer>
      </Block>
    </Page>
  );
}
