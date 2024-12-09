import { z } from 'zod';

export const TitleSchema = z
  .object({
    title: z.string().min(1, { message: 'required' }).max(255)
  })
  .required();
