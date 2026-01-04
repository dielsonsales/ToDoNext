import { LucideIcon } from 'lucide-react';
import styles from './task-list-item.module.css';

interface TaskListItemProps {
    icon: LucideIcon;
    label: string;
    color: string;
}

export default function TaskListItem({
    icon: Icon,
    label,
    color,
}: TaskListItemProps) {
    return (
        <li>
            <div className={styles.wrapper}>
                <Icon color={color} size={20} />
                <p>{label}</p>
            </div>
        </li>
    );
}