'use client';
import { generateShortLink } from '@/actions/createLink';
import { useFormState } from 'react-dom';
import { SubmitButton } from './submit-button';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

type state = {
  errors: string[] | null;
  generatedShortLink: string | null;
};
const initialState: state = {
  errors: null,
  generatedShortLink: null,
};

export function CreateLink() {
  const [state, generateLinkAction] = useFormState(
    generateShortLink,
    initialState
  );
  return (
    <>
      <form
        action={generateLinkAction}
        className="flex max-w-lg mx-auto h-20 mt-20 p-4 flex-col items-start gap-2"
      >
        <h2 className="text-2xl">Create your shorten link</h2>
        <label htmlFor="url">Enter URL to short:</label>
        <input className="rounded min-w-full" id="url" name="url" type="url" />
        <SubmitButton />
        {state.generatedShortLink && (
          <div>
            <p>Your shortlink has been successfully generated</p>
            <p>
              Your shortlink is{' '}
              <a
                className="border-b-2 inline-flex items-center border-black"
                href={state.generatedShortLink}
                target="_blank"
              >
                {state.generatedShortLink}{' '}
                <ArrowTopRightOnSquareIcon className="w-4 ml-2 h-4" />
              </a>
            </p>
          </div>
        )}
      </form>
    </>
  );
}
