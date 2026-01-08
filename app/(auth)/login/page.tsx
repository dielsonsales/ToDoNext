import { loginAction } from "./actions";
import styles from "./login.module.css";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.loginCard} action={loginAction}>
        <h1>Welcome to ToDoNext</h1>
        <Image
          src="/login-image.png"
          alt="Login greeting"
          width={304}
          loading="eager"
          height={249}
        />
        <p>Please, sign in to manage your tasks</p>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.loginButton}>
          Sign In
        </button>
      </form>
    </div>
  );
}
