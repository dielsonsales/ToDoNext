"use client";

import HomeHeader from "./ui/home-header";
import NewListButton from "./ui/new-list-button";

interface HomeClientProps {
  children: React.ReactNode;
}

export default function HomeClient({ children }: HomeClientProps) {
  return (
    <div className="flex flex-col h-dvh pb-safe bg-white">
      <HomeHeader />
      <main className="flex-1 overflow-y-auto px-4 py-2">
        <div className="space-y-1">{children}</div>
      </main>
      <footer className="sticky bottom-0 w-full pb-safe">
        <div className="flex justify-center items-center h-10 p-2 bg-white">
          <NewListButton />
        </div>
      </footer>
    </div>
  );
}
