"use server";

import Parse from "@/app/lib/parse-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Missing credentials" };
  }

  try {
    const user = await Parse.User.logIn(email, password);
    const sessionToken = user.getSessionToken() as string;

    const cookieStore = await cookies();
    cookieStore.set("session_token", sessionToken, {
      path: "/",
      maxAge: 3600,
      httpOnly: true, // XSS protection
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
  } catch (error: any) {
    return { error: "Invalid email or password" };
  }

  redirect("/");
}
