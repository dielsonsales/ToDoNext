import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

/**
 * This file runs in the Edge Runtime.
 * We can't use Parse.User.current() or the standard Parse SDK here because the SDK requires Node.js globals that aren't
 * available in the Edge. Instead, we use a standard fetch call to the Parse REST API.
 */
export default async function proxy(request: NextRequest) {
  const sessionToken = request.cookies.get("session_token")?.value;
  const { pathname } = request.nextUrl;

  // 1. Logic for Login Page: 
  // If I'm on /login AND I'm already logged in, take me to Home.
  if (pathname === "/login" && sessionToken) {
    const isValid = await verifyParseSession(sessionToken);
    if (isValid) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // 2. Logic for Protected Routes:
  const isProtectedRoute = pathname === "/" || pathname.startsWith("/task");
  
  if (isProtectedRoute) {
    if (!sessionToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const isValid = await verifyParseSession(sessionToken);
    if (!isValid) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("session_token");
      return response;
    }
  }

  // 3. If none of the above triggered a redirect, proceed normally
  return NextResponse.next();
}

async function verifyParseSession(token: string): Promise<boolean> {
  try {
    const res = await fetch("https://parseapi.back4app.com/users/me", {
      headers: {
        "X-Parse-Application-Id": process.env.PARSE_APP_ID!,
        "X-Parse-REST-API-Key": process.env.PARSE_REST_KEY!,
        "X-Parse-Session-Token": token,
      }
    });
    return res.ok;
  } catch (error) {
    return false;
  }
}

// Only run middleware in these pages
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
