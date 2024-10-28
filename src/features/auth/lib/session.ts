import { compare } from 'bcryptjs';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

const secretKey = new TextEncoder().encode(process.env.AUTH_SECRET);

export type SessionData = {
  user: { id: number };
  expires: string;
};

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

export function getSession() {
  const session = cookies().get('session')?.value;

  if (!session) return null;

  return verifyToken(session);
}

export async function verifyToken(input: string) {
  const { payload } = await jwtVerify(input, secretKey, { algorithms: ['HS256'] });

  return payload as SessionData;
}

export async function createSession(userId: number) {
  const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session: SessionData = {
    user: { id: userId! },
    expires: expiresInOneDay.toISOString()
  };
  const encryptedSession = await signToken(session);

  cookies().set('session', encryptedSession, {
    expires: expiresInOneDay,
    httpOnly: true,
    secure: true,
    sameSite: 'lax'
  });
}

export async function deleteSession() {
  cookies().delete('session');
}
