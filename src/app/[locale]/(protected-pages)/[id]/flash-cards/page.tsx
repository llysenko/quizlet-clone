import { Button } from '@nextui-org/react';
import Image from 'next/image';

import transformZodErrors from '@/utils/transform-zod-errors';

import Footer from '@/components/footer';
import Heading2 from '@/components/headings/heading-2';

import { IdentifierSchema } from '@/lib/definitions';
import { NotFoundError, ValidationError } from '@/lib/exceptions';

import { getSetById } from '@/features/flashcards/actions';
import FlashcardList from '@/features/flashcards/components/flashcard-sets/flashcard-list';
import FlashcardSetActions from '@/features/flashcards/components/flashcard-sets/flashcard-set-actions';
import FlashcardSetData from '@/features/flashcards/components/flashcard-sets/flashcard-set-data';

export default async function Page({ params }: { params: { id: number } }) {
  const validatedParam = IdentifierSchema.safeParse(+params.id);

  if (!validatedParam.success) {
    const errors = transformZodErrors(validatedParam.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  const set = await getSetById(validatedParam.data);

  if (!set) throw new NotFoundError();

  return (
    <div>
      <div className="m-auto max-w-[77.125rem] px-10 pt-6">
        <Heading2 className="mb-4">{set?.title}</Heading2>

        <section className="flex flex-wrap items-center justify-between py-8">
          <FlashcardSetData set={set} />
          <FlashcardSetActions />
        </section>

        <FlashcardList set={set} />

        <div className="mb-10 flex justify-center">
          <Button
            size="lg"
            variant="ghost"
            radius="sm"
            className="font-semibold text-dark-electric-blue hover:bg-bright-gray">
            Add or remove terms
            <Image src="/static/images/icon__pencil.svg" alt="Edit the set" width={16} height={16} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
