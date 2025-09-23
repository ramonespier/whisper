import { NextResponse } from "next/server";
import * as jose from 'jose';

export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('Token');

    if (!token) {
        if (pathname.startsWith('/admin') || pathname.startsWith('/user')) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.next();
    }

    try {

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jose.jwtVerify(token.value, secret);

        const user = jose.decodeJwt(token.value);

        if (pathname.startsWith('/admin') && user.func !== 'admin') {
            return NextResponse.redirect(new URL('/user', request.url));
        }

        if (pathname.startsWith('/user') && user.func !== 'user') {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
        
        return NextResponse.next();

    } catch (err) {

        console.error("Erro na verificação do JWT:", err);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/admin/:path*', '/user/:path*'],
};