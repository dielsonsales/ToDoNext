"use client";

import UserAvatar from "./user-avatar";
import { Navbar } from "konsta/react";
import { Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../context/auth-context";

export default function HomeHeader() {
  const { user } = useAuth();
  const displayName = user?.username || "Guest";
  return (
    <div className="top-0 sticky m-2">
      <Navbar
        title={displayName}
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
