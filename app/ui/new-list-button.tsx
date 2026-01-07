"use client";

import styles from "./new-list-button.module.css";
import { List, ListPlus, Plus } from "lucide-react";

interface NewListButtonProps {}

export default function NewListButton() {
  return (
    <button
      className={styles.newListButton}
      onClick={() => console.log("Adding new task")}
      aria-label="New List"
    >
      <div className={styles.newListButtonTitleWrapper}>
        <Plus color="blue" />
        <p className={styles.newListButtonText}>New List</p>
      </div>
      <ListPlus color="blue" />
    </button>
  );
}
