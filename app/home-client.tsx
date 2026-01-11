"use client";

import styles from "./home-client.module.css";
import { Block, List, ListItem, Navbar, Page } from "konsta/react";
import HomeHeader from "./ui/home-header";
import NewListButton from "./ui/new-list-button";
import Link from "next/link";
import {
  DefaultList,
  CustomTaskList,
  IconMap,
  IconName,
} from "./lib/definitions";
import { Calendar, House, Star, Sun, User } from "lucide-react";

interface HomeClientProps {
  defaultList: DefaultList[];
  taskList: CustomTaskList[];
}

export default function HomeClient({ defaultList, taskList }: HomeClientProps) {
  // const taskListItems = [
  //   { id: crypto.randomUUID(), icon: Sun, label: "My Day", color: "gray" },
  //   { id: crypto.randomUUID(), icon: Star, label: "Important", color: "pink" },
  //   {
  //     id: crypto.randomUUID(),
  //     icon: Calendar,
  //     label: "Planned",
  //     color: "darkCyan",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     icon: User,
  //     label: "Assigned to me",
  //     color: "green",
  //   },
  //   { id: crypto.randomUUID(), icon: House, label: "Tasks", color: "gray" },
  // ];

  // const taskListComponents = taskListItems.map((task) => {
  //   const IconComponent = task.icon;
  //   return (
  //     <ListItem
  //       key={task.id}
  //       title={task.label}
  //       media={<IconComponent size={24} color={task.color} />}
  //     />
  //   );
  // });

  const defaultListComponents = defaultList.map((listItem) => {
    const IconComponent = IconMap[listItem.icon as IconName] || IconMap.star;
    return (
      <Link href="/" key={listItem.id} passHref>
        <ListItem
          title={listItem.title}
          media={<IconComponent size={24} color="gray" />}
        />
      </Link>
    );
  });

  const customTaskListComponents = taskList.map((task) => {
    const iconElement = <p>{task.icon}</p>;
    return (
      <Link href={`/task/${task.id}`} key={task.id} passHref>
        <ListItem key={task.id} title={task.title} media={iconElement} />
      </Link>
    );
  });

  return (
    <Page className="flex flex-col h-full">
      <HomeHeader />
      <Block insetIos className="flex-1 overflow-y-auto">
        <List strongIos insetIos>
          {defaultListComponents}
        </List>
        <div className={styles.homeSeparator} />
        <List strongIos insetIos>
          {customTaskListComponents}
        </List>
      </Block>
      <footer className="shrink-0 pb-safe">
        <div className={styles.homeBottomBar}>
          <NewListButton />
        </div>
      </footer>
    </Page>
  );
}
