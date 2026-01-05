import { LucideIcon } from 'lucide-react';
import styles from './special-task-list-item.module.css';

interface SpecialTaskListItemProps {
    icon: LucideIcon;
    label: string;
    color: string;
}

export default function SpecialTaskListItem({
    icon: Icon,
    label,
    color,
}: SpecialTaskListItemProps) {
    return (
        <li>
            <div className={styles.wrapper}>
                <Icon color={color} size={20} />
                <p>{label}</p>
            </div>
        </li>
    );
}