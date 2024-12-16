import { cookies } from 'next/headers';
import { compare } from 'bcryptjs';
import { jwtVerify, SignJWT } from 'jose';

import { USER_SESSION_NAME } from '@/features/auth/lib/constants';
import { SessionData, User } from '@/features/auth/lib/types';

const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function comparePasswords(plainTextPassword: string, hashedPassword: string) {
  return compare(plainTextPassword, hashedPassword);
}

export async function signToken(payload: SessionData) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 day from now')
    .sign(secretKey);
}

export async function getSession() {
  const session = (await cookies()).get(USER_SESSION_NAME)?.value;

  if (!session) return null;

  return verifyToken(session);
}

export async function verifyToken(input: string) {
  const { payload } = await jwtVerify(input, secretKey, { algorithms: ['HS256'] });

  return payload as SessionData;
}

export async function createSession(user: Partial<User>) {
  const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session: SessionData = {
    user: { id: user.id!, role: user.role! },
    expires: expiresInOneDay.toISOString()
  };
  const encryptedSession = await signToken(session);

  (await cookies()).set(USER_SESSION_NAME, encryptedSession, {
    expires: expiresInOneDay,
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });

  return encryptedSession;
}

export async function deleteSession() {
  (await cookies()).delete(USER_SESSION_NAME);
}
