import { z } from 'zod';

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (data: z.infer<S>, formData: FormData) => Promise<T>;

export type ActionState = {
  error?: string;
  success?: string;
  [key: string]: any;
};

export function validateAction<S extends z.ZodType<any, any>, T>(schema: S, action: ValidatedActionFunction<S, T>) {
  return async (prevState: ActionState, formData: FormData): Promise<T> => {
    const result = schema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return { error: result.error.errors.at(0)?.message } as T;
    }

    return action(result.data, formData);
  };
}
