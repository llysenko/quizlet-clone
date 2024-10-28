'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

import db from '@/lib/db';

import { SignInFormSchema, SignUpFormSchema, User } from '@/features/auth/lib/definitions';
import { validateAction } from '@/features/auth/lib/middleware';
import { comparePasswords, createSession } from '@/features/auth/lib/session';

export async function signup(user: User) {
  const validatedFields = SignUpFormSchema.safeParse(user);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const prisma = db.$extends({
    query: {
      user: {
        $allOperations({ operation, args, query }: any) {
          if (['create', 'update'].includes(operation) && args.data['password']) {
            args.data['password'] = bcrypt.hashSync(args.data['password'], process.env.SALT_ROUNDS);
          }
          return query(args);
        }
      }
    }
  });
  const { day, month, year, ...rest } = validatedFields.data;

  try {
    await prisma.user.create({ data: { ...rest, birthday: new Date(`${day}-${month}-${year}`) } });
    // TODO:
    // 4. Create user session
    // 5. Redirect user
  } catch (error: any) {
    return { errors: error.message };
  }
}

export const signIn = validateAction(SignInFormSchema, async (data, formData) => {
  const { userUniqueIdentifier, password } = data;
  const foundUser = await db.user.findFirst({
    where: {
      OR: [{ email: userUniqueIdentifier }, { username: userUniqueIdentifier }]
    }
  });

  if (!foundUser) {
    return { error: 'Invalid credentials. Please try again.' };
  }

  const isPasswordValid = await comparePasswords(password, foundUser.password);

  if (!isPasswordValid) {
    return { error: 'Invalid credentials. Please try again.' };
  }

  await Promise.all([createSession(foundUser.id)]);

  redirect('/about');
});
