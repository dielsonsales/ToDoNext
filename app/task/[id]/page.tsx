"use client";

import { ChevronLeft, Ellipsis, Pencil } from 'lucide-react';
import styles from './task-detail.module.css';
import IconButton from '@/app/ui/icon-button';

export default function TaskDetailPage() {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.headerContainer}>
                    <button className={styles.backButton}>
                        <ChevronLeft size={26} />
                        <p>Lists</p>
                    </button>
                    <div className={styles.actionButtonsGroup}>
                        <IconButton icon={Pencil} label='Edit list' color='white' size={18} onClick={() => { console.log('Ellipsis') }} />
                        <IconButton icon={Ellipsis} label='More options' color='white' size={18} onClick={() => { console.log('Ellipsis') }} />
                    </div>
                </div>
            </header>
            <main className={styles.scrollContent}></main>
            <footer className={styles.bottomContainer}>
                <button>
                    <p>Add a Task</p>
                </button>
            </footer>
        </div>
    );
}