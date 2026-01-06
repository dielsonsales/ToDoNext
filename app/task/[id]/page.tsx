"use client";

import { ChevronLeft, Ellipsis, Pencil } from 'lucide-react';
import styles from './task-detail.module.css';
import IconButton from '@/app/ui/icon-button';
import { useState } from 'react';
import Link from 'next/link';

export default function TaskDetailPage() {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents refreshing the page
        if (!taskName.trim()) return;
        console.log("Adding new task");
        setTaskName(""); // clears input
    };

    return (
        <div className={styles.container}>
            <header>
                <div className={styles.headerContainer}>
                    <Link href='/' className={styles.backLink}>
                        <ChevronLeft size={26} />
                        <p style={{fontSize: 16}}>Lists</p>
                    </Link>
                    <div className={styles.actionButtonsGroup}>
                        <IconButton icon={Pencil} label='Edit list' color='white' size={18} onClick={() => { console.log('Ellipsis') }} />
                        <IconButton icon={Ellipsis} label='More options' color='white' size={18} onClick={() => { console.log('Ellipsis') }} />
                    </div>
                </div>
            </header>
            <main className={styles.scrollContent}></main>
            <footer className={styles.bottomContainer}>
                <form className={styles.bottomForm} onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className={styles.input}
                        placeholder='Add a Task'
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </form>
            </footer>
        </div>
    );
}