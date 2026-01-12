"use client";

import styles from "./home-client.module.css";
import { Block, List, ListItem, Navbar, Page } from "konsta/react";
import HomeHeader from "./ui/home-header";
import NewListButton from "./ui/new-list-button";

interface HomeClientProps {
  children: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
  return (
    <Page className="flex flex-col h-full">
      <HomeHeader />
      <Block insetIos className="flex-1 overflow-y-auto">
        <List>{children}</List>
      </Block>
      <footer className="shrink-0 pb-safe">
        <div className={styles.homeBottomBar}>
          <NewListButton />
        </div>
      </footer>
    </Page>
  );
}
