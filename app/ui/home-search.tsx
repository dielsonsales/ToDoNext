"use client";

import styles from "./home-search.module.css";
import IconButton from "./icon-button";
import { Search } from "lucide-react";

interface HomeSearchProps {}

export default function HomeSearch() {
  return (
    <div>
      <IconButton
        icon={Search}
        label="search"
        onClick={() => console.log("Doing a search")}
        color="blue"
      />
    </div>
  );
}