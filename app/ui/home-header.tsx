"use client";

import styles from "./home-header.module.css";
import IconButton from "./icon-button";
import { Search } from "lucide-react";
import UserAvatar from "./user-avatar";

interface HomeHeaderProps {}

export default function HomeHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftView}>
        <UserAvatar name={"David Nogueira"} size={35} />
        <h1 className={styles.homeHeaderText}>David Nogueira</h1>
      </div>
      <IconButton
        icon={Search}
        label="search"
        onClick={() => console.log("Doing a search")}
        color="blue"
      />
    </div>
  );
}
