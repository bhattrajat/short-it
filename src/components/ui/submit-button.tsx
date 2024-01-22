'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-black rounded text-white px-4 py-2"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? 'Generating ...' : 'Generate Short link'}
    </button>
  );
}
