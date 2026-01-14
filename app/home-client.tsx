"use client";

import styles from "./home-client.module.css";
import { Block, List, Page } from "konsta/react";
import HomeHeader from "./ui/home-header";
import NewListButton from "./ui/new-list-button";

interface HomeClientProps {
  children: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
  return (
    <Page className="flex flex-col h-screen pb-safe">
      <HomeHeader />
      <List insetIos className="overflow-y-auto flex-1 m-2">
        {children}
      </List>
      <footer className="sticky bottom-0 w-full pb-safe">
        <div className="flex justify-center items-center h-10 p-2 bg-white">
          <NewListButton />
        </div>
      </footer>
    </Page>
  );
}
