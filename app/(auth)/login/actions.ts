"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  let isSuccess = false;
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      throw new Error("Missing credentials");
    }
    const cookieStore = await cookies();
    cookieStore.set("session_token", "mock_user_id", {
      path: "/",
      maxAge: 3600,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    isSuccess = true;
  } catch (error) {
    // TODO: handle the error
    console.error("Login failed:", error);
  }

  if (isSuccess) {
    redirect("/");
  }
}
