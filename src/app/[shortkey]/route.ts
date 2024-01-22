import { kv } from '@vercel/kv';
import { notFound, redirect } from 'next/navigation';

export async function GET(
  request: Request,
  { params }: { params: { shortkey: string } }
) {
  const longUrl = await kv.get(params.shortkey);
  if (!longUrl) {
    notFound();
  }
  redirect(longUrl as string);
}
