import { z } from 'zod';

export const IdentifierSchema = z.coerce
  .number({ message: 'Identifier should be a number' })
  .positive({ message: 'Identifier should be a positive number' });

export const UsernameSchema = z.string().min(1, { message: 'Username is required' }).trim();
