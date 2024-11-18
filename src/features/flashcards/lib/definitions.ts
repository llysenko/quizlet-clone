import { z } from 'zod';

export const FlashcardSchema = z
  .object({
    term: z.string().max(930).optional(),
    definition: z.string().max(1850).optional()
  })
  .refine(data => data.term || data.definition, { message: 'Required' });

export const FlashcardsSchema = z.array(FlashcardSchema).min(2, { message: 'You need two cards to create a set.' });

export const FlashcardSetSchema = z.object({
  title: z.string().min(1, { message: 'Title is required.' }),
  description: z.string()
});
