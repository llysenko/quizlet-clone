import { z } from 'zod';

import transformZodErrors from '@/utils/transform-zod-errors';

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (data: z.infer<S>, formData: FormData) => Promise<T>;

export type ActionState = {
  errors?: string;
  success?: string;
  [key: string]: any;
};

export function validateAction<S extends z.ZodType<any, any>, T>(schema: S, action: ValidatedActionFunction<S, T>) {
  return async (prevState: ActionState, formData: FormData): Promise<T> => {
    const result = schema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      const errors = transformZodErrors(result.error);

      return { errors, data: result.data } as T;
    }

    return action(result.data, formData);
  };
}
