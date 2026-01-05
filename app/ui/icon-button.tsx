'use client';

import { LucideIcon } from 'lucide-react';
import styles from './icon-button.module.css';

interface IconButtonProps {
    icon: LucideIcon;
    onClick: () => void;
    label: string;
    color?: string;
    size?: number;
}

export default function IconButton({
    icon: Icon,
    onClick,
    label,
    color = "currentColor",
    size = 20
}: IconButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            aria-label={label}
        >
            <Icon color={color} size={size} strokeWidth={2} />
        </button>
    );
}