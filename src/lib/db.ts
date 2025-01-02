import { PrismaClient } from '@prisma/client';

import { parsedEnv } from '@/env';

const prismaClientSingleton = () =>
  new PrismaClient({
    omit: {
      user: {
        password: true
      }
    }
  });

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton();

export default db;

if (parsedEnv.NODE_ENV !== 'production') globalThis.prismaGlobal = db;
