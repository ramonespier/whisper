import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('Token');

    const protectedRoutes = ['/admin', '/user'];

    if (!protectedRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const user = jwt.verify(token.value, process.env.JWT_SECRET);

        if (pathname.startsWith('/admin') && user.func !== 'admin') {
            return NextResponse.redirect(new URL('/user', request.url));
        }

        if (pathname.startsWith('/user') && user.func !== 'user') {
            return NextResponse.redirect(new URL('/admin', request.url));
        }

        return NextResponse.next();

    } catch (err) {
        console.error("Erro no JWT:", err.name, err.message);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/admin/:path*', '/user/:path*'],
};