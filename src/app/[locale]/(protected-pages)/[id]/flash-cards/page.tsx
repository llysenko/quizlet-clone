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

export default async function Page({ params }: { params: { id: number } }) {
  const validatedParam = IdentifierSchema.safeParse(+params.id);

  if (!validatedParam.success) {
    const errors = transformZodErrors(validatedParam.error);

    throw new ValidationError(Object.values(errors).at(0) as string);
  }

  const set = await getSetById(validatedParam.data);

  if (!set) throw new NotFoundError();

  return (
    <>
      <Container size="sm">
        <Heading2 className="mb-12">{set?.title}</Heading2>

        <section>
          <FlashcardStudyModeList>
            {STUDY_MODES.map(mode => (
              <FlashcardStudlyModeListItem key={mode.id} mode={mode} />
            ))}
          </FlashcardStudyModeList>
          <FlashcardCarousel set={set} />
        </section>

        <section className="flex flex-wrap items-center justify-between py-8">
          <FlashcardSetData set={set} />
          <FlashcardSetActions set={set} />
        </section>

        <FlashcardList set={set} />
      </Container>

      <Footer />
    </>
  );
}
