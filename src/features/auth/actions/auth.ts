'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

import db from '@/lib/db';

import { SignInFormSchema, SignUpFormSchema } from '@/features/auth/lib/definitions';
import { validateAction } from '@/features/auth/lib/middleware';
import { comparePasswords, createSession, deleteSession } from '@/features/auth/lib/session';

export const signUp = validateAction(SignUpFormSchema, async (data, formData) => {
  const prisma = db.$extends({
    query: {
      user: {
        $allOperations({ operation, args, query }: any) {
          if (['create', 'update'].includes(operation) && args.data['password']) {
            args.data['password'] = bcrypt.hashSync(args.data['password'], Number(process.env.SALT_ROUNDS));
          }
          return query(args);
        }
      }
    }
  });

  try {
    const newUser = await prisma.user.create({ data, select: { id: true } });

    await createSession(newUser.id);

    return { success: 'Sign up successful!' };
  } catch (error: any) {
    return { errors: error.message };
  }
});

export const signIn = validateAction(SignInFormSchema, async (data, formData) => {
  const { userUniqueIdentifier, password } = data;
  const foundUser = await db.user.findFirst({
    where: {
      OR: [{ email: userUniqueIdentifier }, { username: userUniqueIdentifier }]
    }
  });

  if (!foundUser) return { errors: 'Invalid credentials. Please try again.' };

  const isPasswordValid = await comparePasswords(password, foundUser.password);

  if (!isPasswordValid) return { errors: 'Invalid credentials. Please try again.' };

  await createSession(foundUser.id);

  return { success: 'Sign in successful!' };
});

export async function signOut() {
  await deleteSession();
  redirect('/');
}
