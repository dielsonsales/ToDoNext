"use client";

import { IconMap, IconName } from "./lib/definitions";
import Link from "next/link";

interface HomeListItemProps {
  id: string;
  title: string;
  icon: string;
  color?: string;
  href?: string;
}

export default function HomeListItem({
  id,
  title,
  icon,
  color,
  href,
}: HomeListItemProps) {
  const IconComponent = IconMap[icon as IconName] || IconMap.star;
  return (
    <Link href={href ? href : "/"} className="flex items-center gap-3">
      <div className="w-8 h-8 flex items-center justify-center">
        {color ? (
          <IconComponent size={24} style={{ color: color }} />
        ) : (
          <span>{icon || "📋"}</span>
        )}
      </div>
      <span className="text-[16px] font-normal text-black truncate">
        {title}
      </span>
    </Link>
  );
}
