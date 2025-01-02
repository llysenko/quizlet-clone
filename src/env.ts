import { z } from 'zod';

const envSchema = z.object({
  AUTH_SECRET: z.string().min(1),
  CACHE_PORT: z.coerce.number().int().positive(),
  DATABASE_NAME: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_URL: z.string().url().min(1),
  DATABASE_USER: z.string().min(1),
  NODE_ENV: z.string().min(1),
  SALT_ROUNDS: z.coerce.number().int().positive(),
  KV_URL: z.string().url().min(1),
  KV_REST_API_READ_ONLY_TOKEN: z.string().min(1),
  KV_REST_API_TOKEN: z.string().min(1),
  KV_REST_API_URL: z.string().url().min(1)
});

export const parsedEnv = envSchema.parse(process.env);
