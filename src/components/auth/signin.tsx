import { signIn } from '@/auth';

export function SignIn({
  provider,
}: { provider?: string } & React.ComponentPropsWithRef<'button'>) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(provider);
      }}
    >
      <button className="bg-black text-white rounded-md px-4 py-2">
        Sign In
      </button>
    </form>
  );
}
