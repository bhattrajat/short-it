'use server';

import { z } from 'zod';
import { customAlphabet } from 'nanoid';
import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { headers } from 'next/headers';
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz$+!*';
const schema = z.object({
  url: z.string().url({
    message: 'Invalid Url',
  }),
});

export async function generateShortLink(_: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error('You must be signed in to perform this action');
  }
  const email = session.user.email;
  const validatedFields = schema.safeParse({
    url: formData.get('url'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors.url ?? null,
      generatedShortLink: null,
    };
  }

  const url = validatedFields.data.url;
  const nanoid = customAlphabet(alphabet, 8);
  const key = nanoid(8);
  await kv.set(key, url);
  await kv.rpush(email, key);

  revalidatePath('/my-links');
  const header = headers();
  const hostUrl = header.get('host');
  const shortUrl = `${hostUrl}/${key}`;
  return {
    generatedShortLink: shortUrl,
    errors: null,
  };
}
