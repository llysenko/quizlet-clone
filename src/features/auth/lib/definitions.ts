import { UserRole } from '@prisma/client';
import { z } from 'zod';

export const EmailSchema = z.string().email({ message: 'Invalid email address' }).max(256).trim();
export const PasswordSchema = z
  .string()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:/?.><])(?=.{6,})/, {
    message: 'Password should include at least 6 characters, 1 uppercase letter, 1 number, 1 character'
  })
  .trim();
export const UsernameSchema = z.string().min(1, { message: 'Your username cannot be blank' }).trim();
const isoDateSchema = z.string({ message: 'Please enter your birthday' }).refine(
  dateStr => {
    const date = new Date(dateStr);

    return !isNaN(date.getTime()) && dateStr === date.toISOString();
  },
  { message: 'Invalid date format. Must be an ISO string (e.g., 2024-10-31T23:59:59.000Z).' }
);
export const SignUpFormSchema = z
  .object({
    email: EmailSchema,
    username: UsernameSchema,
    password: PasswordSchema,
    policyAccepted: z.coerce.boolean().refine(value => value, {
      message: 'You must accept the policy'
    }),
    remindersAccepted: z.coerce.boolean().default(false),
    birthday: isoDateSchema
  })
  .required();

export const UserUniqueIdentifierSchema = z.string().min(1, { message: 'Your username cannot be blank.' }).trim();
export const PasswordSignInSchema = z.string().min(1, { message: 'Your password cannot be blank.' }).trim();
export const SignInFormSchema = z
  .object({
    userUniqueIdentifier: UserUniqueIdentifierSchema,
    password: PasswordSignInSchema
  })
  .required();

export const UserDataSchema = z
  .object({
    id: z.number().positive(),
    email: EmailSchema,
    username: UsernameSchema,
    password: PasswordSignInSchema,
    policyAccepted: z.literal<boolean>(true),
    remindersAccepted: z.boolean(),
    birthday: z.date(),
    role: z.enum(['student', 'teacher']),
    createdAt: z.date(),
    updatedAt: z.date()
  })
  .required();
