import db from '@/lib/db';

import { getSession } from '@/features/auth/lib/session';

export async function getUser() {
  const sessionData = await getSession();

  if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') return null;

  if (new Date(sessionData.expires) < new Date()) return null;

  return db.user.findUnique({ where: { id: sessionData.user.id } });
}
