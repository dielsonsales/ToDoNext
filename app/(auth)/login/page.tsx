"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";
import styles from "./login.module.css";
import Image from "next/image";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      <main className="flex-1 flex flex-col items-center justify-center">
        <Image
          src="/login-image.png"
          alt="Login greeting"
          width={304}
          height={249}
          loading="eager"
        />
        <h1 className="text-2xl font-bold mt-4">Welcome to ToDoNext</h1>
        <p className="text-gray-500">Please, sign in to manage your tasks</p>
        <form action={formAction} className="w-full max-w-md px-6">
          {/* Render the error message */}
          {state?.error && (
            <p className={styles.errorMessage}>{state.error}</p>
          )}
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
          <button
            type="submit"
            className="
              w-full
              p-3
              mt-2
              flex items-center justify-center
              bg-[#0070f3]
              hover:bg-[#0056b3]
              text-white
              font-bold
              rounded-[6px]
              transition-colors
              duration-200
            "
            disabled={isPending}
          >
            {isPending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </main>
    </div>
  );
}
