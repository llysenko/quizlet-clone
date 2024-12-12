import transformZodErrors from '@/utils/transform-zod-errors';

import { IdentifierSchema } from '@/lib/definitions';
import { ValidationError } from '@/lib/exceptions';

export default function SingleFolderPage({ params }: { params: { id: number } }) {
  const validatedParam = IdentifierSchema.safeParse(+params.id);

  if (!validatedParam.success) {
    const errors = transformZodErrors(validatedParam.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  return <p>Folder id {validatedParam.data}</p>;
}
