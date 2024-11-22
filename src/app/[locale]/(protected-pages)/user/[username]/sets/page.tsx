import transformZodErrors from '@/utils/transform-zod-errors';

import { UsernameSchema } from '@/lib/definitions';
import { NotFoundError, ValidationError } from '@/lib/exceptions';

import { getUserByName } from '@/features/auth/actions/auth';

export default async function Page({ params }: { params: { username: string } }) {
  const validatedParam = UsernameSchema.safeParse(params.username);

  if (!validatedParam.success) {
    const errors = transformZodErrors(validatedParam.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  const user = await getUserByName(validatedParam.data);

  if (!user) throw new NotFoundError();

  return <div>{user.username}</div>;
}
