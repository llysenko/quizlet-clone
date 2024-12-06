'use server';

import { Prisma } from '@prisma/client';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

import db from '@/lib/db';

import { SignInFormSchema, SignUpFormSchema } from '@/features/auth/lib/definitions';
import { validateAction } from '@/features/auth/lib/middleware';
import { comparePasswords, createSession, deleteSession } from '@/features/auth/lib/session';

export const signUp = validateAction(SignUpFormSchema, async (data, formData) => {
  const prisma = db.$extends({
    query: {
      user: {
        $allOperations({
          operation,
          args,
          query
        }: {
          operation: string;
          args: Prisma.MiddlewareParams['args'];
          query: (args: Prisma.MiddlewareParams['args']) => Promise<any>;
        }) {
          if (['create', 'update'].includes(operation) && args.data['password']) {
            args.data['password'] = bcrypt.hashSync(args.data['password'], Number(process.env.SALT_ROUNDS));
          }
          return query(args);
        }
      }
    }
  });

  try {
    const newUser = await prisma.user.create({ data, select: { id: true, role: true } });

    return { token: await createSession(newUser) };
  } catch (error: any) {
    return { errors: error.message };
  }
});

export const signIn = validateAction(SignInFormSchema, async (data, formData) => {
  const { userUniqueIdentifier, password } = data;
  const foundUser = await db.user.findFirst({
    where: {
      OR: [{ email: userUniqueIdentifier }, { username: userUniqueIdentifier }]
    },
    select: { id: true, role: true, password: true }
  });

  if (!foundUser) return { errors: 'Invalid credentials. Please try again.' };

  const isPasswordValid = await comparePasswords(password, foundUser.password);

  if (!isPasswordValid) return { errors: 'Invalid credentials. Please try again.' };

  return { token: await createSession(foundUser) };
});

export async function signOut() {
  await deleteSession();
  redirect('/');
}

export async function getUserByName(username: string) {
  return db.user.findUnique({ where: { username } });
}
