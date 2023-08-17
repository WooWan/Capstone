import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const res = await prisma.music.findMany();
  return NextResponse.json(res);
}
