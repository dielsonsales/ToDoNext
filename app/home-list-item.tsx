"use client";

import { ListItem } from "konsta/react";
import { IconMap, IconName } from "./lib/definitions";

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
    <ListItem
      link
      linkProps={href ? { href } : { href: "/" }}
      title={title}
      media={
        color ? (
          <IconComponent size={24} style={{ color: color }} />
        ) : (
          <span>{icon || "📋"}</span>
        )
      }
    />
  );
}
