import { z } from 'zod';

export const FlashcardSchema = z
  .object({
    id: z.number().optional(),
    term: z.string().max(930).optional(),
    definition: z.string().max(1850).optional()
  })
  .refine(data => data.term || data.definition, { message: 'Required' });

export const FlashcardsSchema = z.array(FlashcardSchema).min(2, { message: 'You need two cards to create a set.' });

export const FlashcardSetSchema = z.object({
  title: z.string().min(1, { message: 'Title is required.' }),
  description: z.string()
});

export const FlashcardGetSchema = z
  .object({
    id: z.number().optional(),
    term: z.string().max(930).optional(),
    definition: z.string().max(1850).optional(),
    imagePath: z.string().optional().nullable(),
    isStarred: z.boolean(),
    flashcardSetId: z.number().int().positive(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
  .required();

export const FlashcardSetGetSchema = z
  .object({
    id: z.number().int().positive(),
    title: z.string().min(1, { message: 'Title is required.' }),
    description: z.string(),
    userId: z.number().int().positive(),
    folderId: z.number().int().positive().optional(),
    createdAt: z.date(),
    updatedAt: z.date()
  })
  .required();

export const FlashcardSetWithCardsGetSchema = FlashcardSetGetSchema.extend({
  flashcards: z.array(FlashcardGetSchema),
  user: z.object({
    username: z.string(),
    avatar: z.string().optional().nullable()
  }),
  _count: z.object({
    flashcards: z.number().int()
  }),
  starred: z.number().int()
});
