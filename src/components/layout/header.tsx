import { auth } from '@/auth';
import Link from 'next/link';
import { SignIn } from '../auth/signin';
import { SignOut } from '../auth/signout';

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link href="/">Short It</Link>
      </h1>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex flex-col lg:flex-row items-center gap-8">
            {session ? (
              <>
                <li>
                  <Link href="/links/create">Create Link</Link>
                </li>
                <li>
                  <Link href="/my-links">My Links</Link>
                </li>
                <li>
                  <SignOut />
                </li>
              </>
            ) : (
              <li>
                <SignIn />
              </li>
            )}
          </ul>
        </nav>
        {session?.user?.image && (
          <img
            className="w-10 h-10 rounded-full"
            alt="profile"
            src={session?.user?.image}
          />
        )}
      </div>
    </header>
  );
}
