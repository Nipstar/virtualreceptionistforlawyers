'use client';

import { useState } from 'react';

// Arms the champion: a prefilled note for the managing partner, with copy and email buttons.
export const ForwardBox = ({ text, subject = 'After-hours calls: a fix to look at' }: { text: string; subject?: string }) => {
  const [copied, setCopied] = useState(false);
  const btn =
    'inline-flex items-center min-h-[48px] px-5 py-[11px] text-[11.5px] font-mono uppercase font-bold tracking-[0.14em] border-[1.5px] border-[var(--ink)] text-[var(--ink)] bg-transparent cursor-pointer !no-underline';
  return (
    <aside className="my-14 border-[1.5px] border-dashed border-[var(--rule)] bg-[var(--paper)] p-6 md:p-8" aria-labelledby="forward-h">
      <h2 id="forward-h" className="!mt-0 !text-[22px]">Forward this to your managing partner</h2>
      <p className="!text-[14px] text-[var(--ink-soft)]">If it&apos;s just you, save it for later.</p>
      <p className="italic border-l-[3px] border-[var(--rule)] pl-4">{text}</p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className={btn}
          onClick={() => {
            navigator.clipboard?.writeText(text).then(() => setCopied(true), () => setCopied(false));
          }}
        >
          {copied ? 'Copied' : 'Copy text'}
        </button>
        <a className={btn} href={`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`}>
          Email it
        </a>
      </div>
    </aside>
  );
};
