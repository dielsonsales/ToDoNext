import { Circle, Star } from 'lucide-react';
import IconButton from './icon-button';
import styles from './task-item.module.css';

interface TaskItemProps {
    title: string;
    checked: boolean;
    favorite: boolean;
}

export default function TaskItem({ title, checked, favorite }: TaskItemProps) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.itemCard}>
                <div className={styles.leftView}>
                    <IconButton icon={Circle} onClick={() => console.log('Checking')} label='Toggle task' color='grey' />
                    <p>🥛 Comprar leite</p>
                </div>
                <IconButton icon={Star} onClick={() => console.log('Favoriting')} label='Favorite' color='grey' />
            </div>
        </li>
    );
}