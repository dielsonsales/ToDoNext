import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const session = request.cookies.get('session_token');
    const { pathname } = request.nextUrl;
    if (pathname === '/' && !session) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (pathname === '/login' && session) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
}

// Only run middleware in these pages
export const config = {
    matcher: ['/', '/login'],
};