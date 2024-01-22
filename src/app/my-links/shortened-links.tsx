import { CopyButton } from '@/components/ui/copy-button';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { kv } from '@vercel/kv';
import { headers } from 'next/headers';

export async function ShortenedLinks({ email }: { email: string }) {
  const header = headers();
  const shortKeys = await kv.lrange(email, 0, -1);
  const urls = await Promise.all(
    shortKeys.map(async (key) => {
      const longUrl = (await kv.get(key)) as string;
      return { shortKey: key, longUrl };
    })
  );
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  return (
    <section className="p-4 lg:max-w-xl mx-auto">
      <h2 className="text-2xl mb-4">Your shortened links</h2>
      {urls.length === 0 && <p>No short links generated</p>}
      <ul>
        {urls.map((url) => {
          const shortUrl = `${protocol}://${header.get('host')}/${
            url.shortKey
          }`;
          return (
            <li
              className="mb-4 border-black border-2 rounded p-4 flex flex-col lg:flex-row gap-4 items-center justify-between"
              key={url.shortKey}
            >
              <div className="flex basis-3/4 grow-0 flex-col gap-2">
                <a
                  className="underline ml-4 text-lg"
                  target="_blank"
                  href={shortUrl}
                >
                  {shortUrl}
                </a>
                <div className="flex justify-center">
                  <ArrowDownCircleIcon className="w-6 h-6" />
                </div>
                <a
                  target="_blank"
                  className="underline ml-4"
                  href={url.longUrl}
                >
                  {url.longUrl}
                </a>
              </div>
              <CopyButton copyText={shortUrl} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
