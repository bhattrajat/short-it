# About Short It

- It is a url shortener application like bitly & dub.sh.
- Created using Next.js 14, React Server components and Server actions.
- Uses Redis (Vercel KV) to store the urls. Since It is an in memory database it queries data much faster than Disk based databases.
- Uses Next auth & github Oauth to implement authentication. It has also implemented protected routes so anonymous user can't access it.
- It also uses Next.js dynamic routes & route handlers to implement the redirect logic 

## How it works
- It requires authentication to generate shortened links
- Once authenticated user can add links and behind the scene a server action is executed to generate a unique uuid using nanoid and stores the long url as key, value pairs.
- It uses dynamic routes to redirect the shortened url to it's associated long url with HTTP 307 status code.

Hosted on vercel here [https://short-it-rajat.vercel.app/](https://short-it-rajat.vercel.app/)
