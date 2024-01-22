import { auth, signIn } from '@/auth';
import { CreateLink } from '@/components/ui/create-link';

export default async function CreateLinkPage() {
  const session = await auth();
  if (!session?.user?.email) {
    signIn();
    return;
  }
  return <CreateLink />;
}
