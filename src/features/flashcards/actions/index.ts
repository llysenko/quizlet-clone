'use server';

import transformZodErrors from '@/utils/transform-zod-errors';

import db from '@/lib/db';
import { AuthRequiredError, NotFoundError } from '@/lib/exceptions';

import { validateAction } from '@/features/auth/lib/middleware';
import { getSession } from '@/features/auth/lib/session';
import { FlashcardSetSchema, FlashcardsSchema } from '@/features/flashcards/lib/definitions';
import { FlashCard } from '@/features/flashcards/lib/types';

import { Flashcard } from '.prisma/client';

export async function getSetById(id: number) {
  const flashcardSet = await db.flashcardSet.findUnique({
    where: { id },
    include: {
      flashcards: {
        orderBy: { createdAt: 'asc' }
      },
      user: { select: { username: true, avatar: true } },
      _count: { select: { flashcards: true } }
    }
  });
  const starredFlashcardsCount = await db.flashcard.count({
    where: {
      flashcardSetId: id,
      isStarred: true
    }
  });

  return { ...flashcardSet, starred: starredFlashcardsCount };
}

export async function getFlashcards(conditions: Partial<Flashcard>, order = 'createdAt') {
  return db.flashcard.findMany({
    where: { ...conditions },
    orderBy: { [order]: 'asc' }
  });
}

export async function getLatestFlashcardSets() {
  const session = await getSession();

  if (!session) throw new AuthRequiredError();

  const result = await db.flashcardSet.findMany({
    where: { userId: session?.user.id },
    include: { _count: { select: { flashcards: true } }, user: { select: { username: true } } },
    orderBy: { createdAt: 'desc' },
    take: 3
  });

  if (!result.length) throw new NotFoundError();

  return result;
}

export async function createFlashcardSetWithCards(formData: FormData, allFlashcards: FlashCard[]) {
  const filledCards = allFlashcards.filter(card => card.term || card.definition);
  const validatedCards = FlashcardsSchema.safeParse(filledCards);

  if (!validatedCards.success) {
    const errors = transformZodErrors(validatedCards.error);

    return { errors: { cards: Object.values(errors).at(0) } };
  }

  return validateAction(FlashcardSetSchema, async (data, formData) => {
    try {
      const session = await getSession();
      let newSet: { id: number } | null = null;

      await db.$transaction(async prisma => {
        newSet = await prisma.flashcardSet.create({
          data: {
            ...data,
            user: { connect: { id: session?.user.id } }
          },
          select: {
            id: true
          }
        });

        await prisma.flashcard.createMany({
          data: validatedCards.data.map(card => ({
            term: card.term as string,
            definition: card.definition as string,
            flashcardSetId: newSet?.id as number
          }))
        });
      });

      return newSet;
    } catch (error: any) {
      return { errors: error.message };
    }
  })({ errors: '' }, formData);
}

export async function updateFlashcard(id: number, data: Partial<Flashcard>) {
  return db.flashcard.update({
    where: { id },
    data: { ...data }
  });
}
