'use server';

import db from '@/lib/db';
import { AuthRequiredError } from '@/lib/exceptions';

import { validateAction } from '@/features/auth/lib/middleware';
import { getSession } from '@/features/auth/lib/session';
import { TitleSchema } from '@/features/folders/lib/definitions';

export const create = validateAction(TitleSchema, async (data, formData) => {
  const session = await getSession();

  if (!session?.user) throw new AuthRequiredError();

  try {
    return db.folder.create({ data: { ...data, user: { connect: { id: session?.user.id } } } });
  } catch (error: any) {
    return { errors: error.message };
  }
});
