import { auth } from '../auth';

export default async function Page() {
  const session = await auth();

  return (
    <section className="px-4 mt-10 text-xl flex flex-col items-center">
      <p>Welcome to short it. This is a url shortener web application</p>
      {session ? (
        <p>
          Please click on create link to add or my links view your short links
        </p>
      ) : (
        <p>Please sign in to use the app</p>
      )}
    </section>
  );
}
