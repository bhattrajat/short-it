'use client';
import toast from 'react-hot-toast';
import { ClipboardIcon } from '@heroicons/react/24/outline';
export function CopyButton({ copyText }: { copyText: string }) {
  const copyTextToClipboard = async () => {
    await navigator.clipboard.writeText(copyText);
    toast.success('Link copied successfully');
  };
  return (
    <>
      <button
        onClick={copyTextToClipboard}
        type="button"
        title="Copy shortened url"
      >
        <span className="sr-only">Copy shortened url</span>
        <ClipboardIcon className="w-8 h-8" />
      </button>
    </>
  );
}
