"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const cookieStore = await cookies();
    cookieStore.set("session_token", "mock_user_id", {
        path: "/",
        maxAge: 3600,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    });
    redirect("/");
}