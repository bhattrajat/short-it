import { signOut } from '@/auth';

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className="bg-black text-white rounded-md px-4 py-2">
        Sign Out
      </button>
    </form>
  );
}
