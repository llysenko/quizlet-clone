import { z } from 'zod';

import { FlashcardSetWithCardsGetSchema } from './definitions';

export type FlashCard = {
  id: number;
  term?: string;
  definition?: string;
  [key: string]: any;
};

export type FlashcardSet = Omit<z.infer<typeof FlashcardSetWithCardsGetSchema>, 'flashcards' | 'starred'>;
