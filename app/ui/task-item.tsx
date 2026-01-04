import { Task } from '@/app/lib/definitions';
import styles from './task-item.module.css'

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task } : TaskItemProps) {
    return (
        <li className={styles.taskItem}>
            <p>{task.icon}</p>
            <p>{task.title}</p>
        </li>
    );
}