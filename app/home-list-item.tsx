"use client";

import { ListItem } from "konsta/react";
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
    <Link href={href ? href : "/"}>
      <ListItem
        title={title}
        media={
          color ? (
            <IconComponent size={24} style={{ color: color }} />
          ) : (
            <span>{icon || "📋"}</span>
          )
        }
      />
    </Link>
  );
}
