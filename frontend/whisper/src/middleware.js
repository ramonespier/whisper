import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('Token');

    const protectedRoutes = ['/admin', '/user'];

    if (protectedRoutes.includes(pathname)) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin', '/user'],
  };