import { z } from 'zod';

export const EmailSchema = z.string().email({ message: 'Invalid email address' }).max(256).trim();
export const PasswordSchema = z
  .string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:/?.><])(?=.{6,})/, {
    message: 'Password should include at least 6 characters, 1 uppercase letter, 1 number, 1 character'
  })
  .trim();
export const UsernameSchema = z.string().min(1).trim();
export const SignUpFormSchema = z
  .object({
    email: EmailSchema,
    username: UsernameSchema,
    password: PasswordSchema,
    policyAccepted: z.literal<boolean>(true),
    remindersAccepted: z.boolean().default(false),
    month: z
      .string()
      .regex(/^[1-9]\d*$/)
      .refine(value => Number(value) >= 1 && Number(value) <= 12),
    day: z
      .string()
      .regex(/^[1-9]\d*$/)
      .refine(value => Number(value) >= 1 && Number(value) <= 31),
    year: z
      .string()
      .regex(/^[1-9]\d*$/)
      .refine(value => Number(value) >= 1895)
  })
  .required();

export type User = z.infer<typeof SignUpFormSchema>;

export const UserUniqueIdentifierSchema = z.string().min(1, { message: 'Your username cannot be blank.' }).trim();
export const PasswordSignInSchema = z.string().min(1, { message: 'Your password cannot be blank.' }).trim();
export const SignInFormSchema = z
  .object({
    userUniqueIdentifier: UserUniqueIdentifierSchema,
    password: PasswordSignInSchema
  })
  .required();
