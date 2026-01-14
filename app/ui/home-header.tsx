"use client";

import UserAvatar from "./user-avatar";
import { Navbar } from "konsta/react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div className="top-0 sticky m-2">
      <Navbar
        title="David Nogueira"
        left={
          <Link href="/" onClick={() => console.log("Left view")}>
            <UserAvatar name="David Nogueira" />
          </Link>
        }
        right={
          <Link href="/" onClick={() => console.log("Search")}>
            <Search size={22} />
          </Link>
        }
      />
    </div>
  );
}
