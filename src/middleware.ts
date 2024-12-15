import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore
import createMiddleware from 'next-intl/middleware';

import { limit } from '@/lib/rate-limit';

import { USER_SESSION_NAME } from '@/features/auth/lib/constants';
import { deleteSession, signToken, verifyToken } from '@/features/auth/lib/session';

import { routing } from './i18n/routing';

const protectedRoutes = ['/create-set', '/latest', '/achievements', '/flash-cards', '/sets'];
const nextIntlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const sessionCookie = req.cookies.get(USER_SESSION_NAME);
  const isProtectedRoute = protectedRoutes.some(route => pathname.includes(route));

  if (isProtectedRoute && !sessionCookie) return NextResponse.redirect(new URL('/', req.url));

  let res = NextResponse.next();

  if (sessionCookie) {
    try {
      const parsed = await verifyToken(sessionCookie.value);
      const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);

      res.cookies.set({
        name: USER_SESSION_NAME,
        value: await signToken({ ...parsed, expires: expiresInOneDay.toISOString() }),
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        expires: expiresInOneDay
      });
    } catch (error: any) {
      await deleteSession();

      if (isProtectedRoute) return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Rate limit
  if (req.method === 'POST') {
    const ip = req.ip ?? req.headers.get('X-Forwarded-For') ?? 'unknown';
    const isRateLimited = limit(ip);

    if (isRateLimited) return NextResponse.json({ error: 'rate limited' }, { status: 429 });
  }

  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
