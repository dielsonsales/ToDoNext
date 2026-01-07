"use client";

import Image from "next/image";
import styles from "./user-avatar.module.css";

interface UserAvatarProps {
  src?: string;
  name: string;
  size?: number;
}

export default function UserAvatar({ src, name, size = 35 }: UserAvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2); // only the 2 first letters
  console.log("Initials: " + initials);

  return (
    <div
      className={styles.avatarContainer}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className={styles.image}
        />
      ) : (
        <div className={styles.fallback}>{initials}</div>
      )}
    </div>
  );
}
