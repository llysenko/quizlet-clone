import { z } from 'zod';

import { UserDataSchema } from '@/features/auth/lib/definitions';

export type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData
) => Promise<T>;

export type ActionState = {
  errors?: any;
  token?: string;
  [key: string]: any;
};

export type AuthTab = 'signIn' | 'signUp';

export type AuthProps = {
  switchTab: (tab: AuthTab) => void;
  formAction: (formData: FormData) => void;
  formState: ActionState;
};

export type User = z.infer<typeof UserDataSchema>;

export type SessionData = {
  user: { id: number; role: string };
  expires: string;
};
