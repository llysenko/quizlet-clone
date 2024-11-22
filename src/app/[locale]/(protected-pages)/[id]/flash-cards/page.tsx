import { Button } from '@nextui-org/react';
import Image from 'next/image';

import transformZodErrors from '@/utils/transform-zod-errors';

import Footer from '@/components/footer';
import Heading2 from '@/components/headings/heading-2';
import Heading3 from '@/components/headings/heading-3';

import { IdentifierSchema } from '@/lib/definitions';
import { NotFoundError, ValidationError } from '@/lib/exceptions';

import { getSetById } from '@/features/flashcards/actions';
import FlashcardList from '@/features/flashcards/components/flashcard-sets/flashcard-list';
import FlashcardListFilters from '@/features/flashcards/components/flashcard-sets/flashcard-list-filters';
import FlashcardListItem from '@/features/flashcards/components/flashcard-sets/flashcard-list-item';
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
      <div className="max-w-[77.125rem] m-auto px-10 pt-6">
        <Heading2 className="mb-4">{set?.title}</Heading2>

        <section className="py-8 flex items-center justify-between flex-wrap">
          <FlashcardSetData set={set} />
          <FlashcardSetActions />
        </section>

        <section className="flex items-center justify-between mb-6">
          <Heading3>Terms in this set ({set?._count.flashcards})</Heading3>
          <FlashcardListFilters />
        </section>

        <FlashcardList>{set?.flashcards.map(card => <FlashcardListItem key={card.id} card={card} />)}</FlashcardList>

        <div className="flex justify-center mb-10">
          <Button size="lg" variant="ghost" radius="sm" className="text-gray-600 font-semibold hover:bg-grey-3">
            Add or remove terms
            <Image src="/static/images/icon__pencil.svg" alt="Edit the set" width={16} height={16} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
