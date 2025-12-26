
// Fix: Ignore missing generated Prisma types during type checking
// @ts-ignore
import { PrismaClient } from '@prisma/client';

// Use globalThis instead of global to fix "Cannot find name 'global'" error for better environment compatibility
// @ts-ignore
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
