import prisma from '../../lib/prisma';

export function getPosts() {
  try {
    return prisma.post.findMany();
  } catch (error: any) {
    return { error: error.message };
  }
}
