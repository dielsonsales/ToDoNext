"use client";

import UserAvatar from "./user-avatar";
import { Link, Navbar } from "konsta/react";
import { Search } from "lucide-react";

export default function HomeHeader() {
  return (
    <Navbar
      title="David Nogueira"
      className="top-0 sticky"
      left={
        <Link iconOnly onClick={() => console.log("Left view")}>
          <UserAvatar name="David Nogueira" />
        </Link>
      }
      right={
        <Link iconOnly onClick={() => console.log("Search")}>
          <Search size={22} />
        </Link>
      }
    />
  );
}
