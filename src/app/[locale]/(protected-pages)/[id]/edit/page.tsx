import transformZodErrors from '@/utils/transform-zod-errors';

import { IdentifierSchema } from '@/lib/definitions';
import { NotFoundError, ValidationError } from '@/lib/exceptions';

import { getSetById } from '@/features/flashcards/actions';
import SetPage from '@/features/flashcards/components/create-set/set-page';
import { FlashcardSetWithCardsGetSchema } from '@/features/flashcards/lib/definitions';

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const validatedParam = IdentifierSchema.safeParse(id);

  if (!validatedParam.success) {
    const errors = transformZodErrors(validatedParam.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  const set = await getSetById(validatedParam.data);

  if (!set) throw new NotFoundError();

  const validatedSet = FlashcardSetWithCardsGetSchema.safeParse(set);

  if (!validatedSet.success) {
    const errors = transformZodErrors(validatedSet.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  return <>{validatedSet.success ? <SetPage set={validatedSet.data} /> : <p>Error</p>}</>;
}
