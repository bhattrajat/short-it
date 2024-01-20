import { auth } from '@/auth';

export default async function Dashboard() {
  const session = await auth();
  return <h1>Welcome user</h1>;
}
