"use server";

import Parse from "@/app/lib/parse-server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  let isSuccess = false;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Missing credentials");
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
    isSuccess = true;
  } catch (error: any) {
    // TODO: handle the error
    console.error("Login failed:", error);
    return;
  }

  if (isSuccess) {
    redirect("/");
  }
}
