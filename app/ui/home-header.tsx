"use client";

import UserAvatar from "./user-avatar";
import { Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "../context/auth-context";
import IconButton from "./icon-button";

export default function HomeHeader() {
  const { user } = useAuth();
  const displayName = user?.username || "Guest";
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 h-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" onClick={() => console.log("Left view")}>
          <UserAvatar name="David Nogueira" />
        </Link>
        <h1 className="text-lg font-semibold text-black">{displayName}</h1>
      </div>
      <IconButton icon={Search} label="search" />
    </header>
  );
}
