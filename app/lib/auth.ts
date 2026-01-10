import { cookies } from "next/headers";
import Parse from "./parse-server";

/**
 * Returns the current Parse.User based on the session token.
 * @returns the current Parse User or null if the sessio is invalid.
 */
export async function getCurrentSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("session_token")?.value;
}
