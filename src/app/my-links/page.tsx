import { generateShortLink } from '@/actions/createLink';
import { auth, signIn } from '@/auth';
import { ShortenedLinks } from './shortened-links';

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user?.email) {
    signIn();
    return;
  }

  return <ShortenedLinks email={session.user.email} />;
}
