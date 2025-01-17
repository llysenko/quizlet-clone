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

export async function getFolders() {
  const session = await getSession();

  if (!session) throw new AuthRequiredError();

  return db.folder.findMany({
    where: { userId: session?.user.id },
    include: { user: { select: { username: true } }, flashcardSets: { select: { id: true } } },
    orderBy: { createdAt: 'desc' }
  });
}
