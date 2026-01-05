"use client";

import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        document.cookie = "session_token=mock_user_id; path=/; max-age=3600";
        router.push('/');
    };

    return (
        <div className={styles.container}>
            <form className={styles.loginCard} onSubmit={handleLogin}>
                <h1>Welcome to ToDoNext</h1>
                <Image
                    src='/login-image.png'
                    alt='Login greeting'
                    width={304}
                    height={249}
                />
                <p>Please, sign in to manage your tasks</p>
                <input
                    type='email'
                    placeholder='Email'
                    className={styles.input}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    className={styles.input}
                    required
                />
                <button type='submit' className={styles.loginButton}>
                    Sign In
                </button>
            </form>
        </div>
    );
}