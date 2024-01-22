import { CopyButton } from '@/components/ui/copy-button';
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
              className="mb-4 border-black border-2 rounded p-4 flex gap-4 items-center justify-between"
              key={url.shortKey}
            >
              <div className="flex flex-col">
                <div>
                  Shortened Link:
                  <a
                    className="border-black ml-4 text-lg border-b-2"
                    target="_blank"
                    href={shortUrl}
                  >
                    {shortUrl}
                  </a>
                </div>
                <div>
                  Redirects to:
                  <a
                    target="_blank"
                    className="border-black ml-4 border-b-2"
                    href={url.longUrl}
                  >
                    {url.longUrl}
                  </a>
                </div>
              </div>
              <CopyButton copyText={shortUrl} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
