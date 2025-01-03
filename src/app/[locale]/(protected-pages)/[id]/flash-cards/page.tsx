import { Suspense } from 'react';

import transformZodErrors from '@/utils/transform-zod-errors';

import Container from '@/components/container';
import Footer from '@/components/footer';
import Heading2 from '@/components/headings/heading-2';

import { IdentifierSchema } from '@/lib/definitions';
import { NotFoundError, ValidationError } from '@/lib/exceptions';

import { getSetById } from '@/features/flashcards/actions';
import FlashcardCarousel from '@/features/flashcards/components/flashcard-sets/flashcard-carousel';
import FlashcardList from '@/features/flashcards/components/flashcard-sets/flashcard-list';
import FlashcardSetActions from '@/features/flashcards/components/flashcard-sets/flashcard-set-actions';
import FlashcardSetData from '@/features/flashcards/components/flashcard-sets/flashcard-set-data';
import FlashcardStudyModeList from '@/features/flashcards/components/flashcard-sets/flashcard-study-mode-list';
import FlashcardStudlyModeListItem from '@/features/flashcards/components/flashcard-sets/flashcard-study-mode-list-item';
import { STUDY_MODES } from '@/features/flashcards/lib/constants';
import { FlashcardSetWithCardsGetSchema } from '@/features/flashcards/lib/definitions';
import { getFolders } from '@/features/folders/actions';

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

  const folders = getFolders();

  return (
    <>
      <Container size="sm">
        <Heading2 className="mb-12">{validatedSet.data?.title}</Heading2>

        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <FlashcardStudyModeList>
              {STUDY_MODES.map(mode => (
                <FlashcardStudlyModeListItem key={mode.id} mode={mode} />
              ))}
            </FlashcardStudyModeList>
            <FlashcardCarousel set={validatedSet.data} />
          </section>

          <section className="flex flex-wrap items-center justify-between py-8">
            <FlashcardSetData set={validatedSet.data} />
            <FlashcardSetActions set={validatedSet.data} folders={folders} />
          </section>

          <FlashcardList set={validatedSet.data} />
        </Suspense>
      </Container>

      <Footer />
    </>
  );
}
