import transformZodErrors from '@/utils/transform-zod-errors';

import { IdentifierSchema } from '@/lib/definitions';
import { ValidationError } from '@/lib/exceptions';

type Params = Promise<{ id: string }>;

export default async function SingleFolderPage({ params }: { params: Params }) {
  const { id } = await params;
  const validatedParam = IdentifierSchema.safeParse(id);

  if (!validatedParam.success) {
    const errors = transformZodErrors(validatedParam.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  return <p>Folder id {validatedParam.data}</p>;
}
