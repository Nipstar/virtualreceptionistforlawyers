import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { CompareTable, CompareCTA } from '@/components/compare/CompareTable';
import { Source, Table } from '@/components/Page';
import { COMPETITORS, CRITERIA, competitor, competitorCitations, FETCHED } from '@/data/competitors';
import { pageMeta, formatDate } from '@/data/pages';
import { SOLO, PRACTICE, SPANISH_AREAS, SRC } from '@/lib/copy';
import { formatPrice } from '@/lib/plans';
import { calldella } from '@/lib/utm';

const SLUG = '/best-legal-answering-services';
const CAMPAIGN = 'best-legal-answering-services';
export const metadata: Metadata = pageMeta(SLUG);

const asOf = formatDate(FETCHED);
const smith = competitor('smith-ai');
const al = competitor('answering-legal');
const posh = competitor('posh');
const ruby = competitor('ruby');

const citations = [...COMPETITORS.flatMap(competitorCitations), SRC.obj2025];

// One line per service on who it suits, using only what each publishes on its own site (see competitors.ts).
const fits: [string, string, string][] = [
  ['Call Della', 'AI intake specialist, after hours only', 'Personal injury, criminal defense and immigration firms that cover the day themselves and want every night caller qualified, not greeted'],
  [al.name, 'Live, U.S.-based, lawyers only', 'Firms that want a person on every call, day and night, with direct Clio Grow, MyCase or Lead Docket links, and will take a quote by contact form'],
  [ruby.name, 'Live, with AI-assisted call flows', 'Firms on Clio that want one live service for calls and website chat around the clock'],
  [posh.name, 'Live, with optional AI-enabled plans', 'Firms that want the lowest published entry price and a trial before they commit'],
  [smith.name, 'Human-first, AI-first or hybrid', 'Firms that want to choose between live receptionists and AI, or mix them, on one account'],
];

const faqs = [
  {
    q: 'Who wrote this list, and is it fair?',
    a: `Call Della wrote it, and Call Della is one of the five services on it. To keep the list honest, every service is scored on the same ten criteria, every competitor fact comes from that company's own site, is linked and is dated ${asOf}, and the page says plainly where a live answering service is the better choice.`,
  },
  {
    q: 'What is the best answering service for lawyers?',
    a: 'There is no single best. A firm that wants a person on every call and a Clio or MyCase link is better served by Answering Legal or Ruby. A firm that wants the lowest entry price should look at Posh. A personal injury, criminal defense or immigration firm that wants its night calls qualified rather than noted down is the firm Della was built for.',
  },
  {
    q: 'Which legal answering service is cheapest?',
    a: `As of ${asOf}, Posh had the lowest published live plan at $65 a month, and Smith.ai published a free AI-first tier. Della is ${formatPrice(SOLO)} a month with ${SOLO.minutes} minutes or ${formatPrice(PRACTICE)} with ${PRACTICE.minutes}. Answering Legal does not publish prices. Compare on your own call counts and lengths, not the headline figure.`,
  },
  {
    q: 'Is an AI receptionist good enough for a law firm?',
    a: 'For intake, yes, if it is built for the practice area and never advises. Della asks the questions a personal injury, criminal defense or immigration intake needs, tells callers she is an AI if asked, and hands the facts and an urgency score to the attorney. For existing clients with case questions, a live receptionist is still the safer choice.',
  },
  {
    q: 'Why are there no star ratings or quoted reviews?',
    a: 'Because a company rating its own competitors is not a neutral source. This page lists what each service publishes about itself and which kind of firm it fits. Read reviews elsewhere with the ten criteria in mind, and ask each service the questions in the table before you sign.',
  },
  {
    q: 'Does Della answer in Spanish?',
    a: `On ${SPANISH_AREAS.join(' and ')} intake, yes, natively. Other practice areas are taken in English today. Answering Legal, Posh and Ruby all publish bilingual answering, and Smith.ai sells a Spanish line as an add-on; the table links each claim to its source page.`,
  },
];

export default function BestLegalAnsweringServices() {
  return (
    <ArticleLayout
      eyebrow="COMPARE · WRITTEN BY CALL DELLA"
      title="Best legal answering services for law firms in 2026"
      slug={SLUG}
      author="Andy Norman"
      date={FETCHED}
      breadcrumbs={[{ name: 'Best legal answering services', href: SLUG }]}
      citations={citations}
      tldr={
        <>
          <p className="mb-2">
            The best legal answering service is the one that answers at the hours you are closed and leaves a usable intake behind, not
            a message. In Clio&apos;s 2024 secret-shopper study only 40% of law firms answered a prospective client&apos;s call
            <Source src={SRC.obj2025} />. Below, Call Della, Smith.ai, Answering Legal, Posh and Ruby are scored on the same ten
            criteria.
          </p>
          <p className="m-0">
            Every competitor fact comes from that company&apos;s own site, dated {asOf}. Call Della wrote this page and is one of the
            five services on it.
          </p>
        </>
      }
    >
      <h2>How is every service on this list judged?</h2>
      <p>
        The same way. Each of the ten criteria is a question a managing partner asks before signing, and each service gets the answer
        its own website gives. Where a site does not state a fact, the table says &quot;not published&quot; rather than guessing. Call
        Della&apos;s column comes from the same plan configuration as the <a href="/cost">cost page</a>, so it cannot drift from what we
        charge.
      </p>
      <ol>
        {CRITERIA.map((c) => (
          <li key={c.key}>{c.label}</li>
        ))}
      </ol>
      <p>
        There are no star ratings and no quoted reviews. A company scoring its own competitors is not a neutral judge, so this page
        sticks to published facts and says which kind of firm each service fits.
      </p>

      <h2>How do the best law firm answering services compare?</h2>
      <p>
        All five side by side. On a phone the table scrolls sideways inside its frame. Every competitor fact links to the page it was
        read from on {asOf}.
      </p>
      <CompareTable competitors={COMPETITORS} caption="Call Della, Smith.ai, Answering Legal, Posh and Ruby on the same ten criteria." />

      <h2>Which is the best answering service for lawyers who want a person on every call?</h2>
      <p>
        Three of the five put live receptionists on the line: {al.name}, {ruby.name} and {posh.name}. {smith.name} lets you choose
        live, AI or a mix. Della is AI on every call and says so if asked. If a human voice on every call is the deciding factor, start
        with the three live services and compare them on hours, intake depth and integrations rather than on price alone.
      </p>
      <Table
        caption="Who each service suits, from its own published facts"
        head={['Service', 'Who answers', 'Best fit']}
        rows={fits}
      />

      <h2>Which is the best virtual receptionist for law firms by price?</h2>
      <p>
        Published prices only, as read on {asOf}. Per-minute and per-call plans look cheap until the calls are long, and flat plans
        look dear until you count what is included, so run your own call volume through each before deciding.
      </p>
      <Table
        caption="Published price and contract terms, from each company's own site"
        head={['Service', 'Published price', 'Contract terms']}
        rows={[
          ['Call Della', `${formatPrice(SOLO)} a month for ${SOLO.minutes} minutes, ${formatPrice(PRACTICE)} for ${PRACTICE.minutes}`, 'Month-to-month, no setup fee'],
          ...COMPETITORS.map((c) => [c.name, c.facts.price.text, c.facts.contract.text]),
        ]}
      />
      <p>
        <a href="/cost">What a legal answering service costs</a> explains the three pricing models and includes a missed-call sum you
        do yourself.
      </p>

      <h2>Which is the best AI receptionist for law firms?</h2>
      <p>
        Four of the five now use AI somewhere. {smith.name} sells an AI-first tier, {posh.name} offers AI-enabled plans and {ruby.name}{' '}
        uses AI-assisted call flows, each as part of a receptionist service that answers any call for any business. Della is different
        in scope: an AI intake specialist built for personal injury, criminal defense and immigration calls after hours, with a dossier,
        urgency score, recording and transcript on every call. If you want AI for daytime reception across any practice area, start with
        the first three. If you want the night calls for one of those three practice areas qualified by morning, see{' '}
        <a href="/ai-receptionist">what an AI receptionist can and cannot do on a legal call</a>.
      </p>

      <h2>When is a live legal answering service the better choice?</h2>
      <p>
        When you need daytime cover, a practice area outside personal injury, criminal defense and immigration, a person on complex or
        sensitive calls, or a ready-made Clio, MyCase or Lead Docket link. All four competitors answer 24/7 with live staff and list
        legal software integrations on their own sites. Della covers nights, weekends and holidays only, offers a CRM webhook on the
        Group plan rather than native integrations, and takes Spanish on {SPANISH_AREAS.join(' and ')} intake only. A family law or
        estate planning firm, or a firm whose existing clients ring with case questions, will usually do better with one of the four.
      </p>

      <h2>When is Call Della the better fit?</h2>
      <p>
        When your team covers the day, your practice is personal injury, criminal defense or immigration, and the problem is what
        happens to the 9pm caller. Della answers in your firm&apos;s name, works through the intake for that practice, alerts the
        attorney on call to anything urgent, and has the dossier on your desk by 7am. Every plan is published, month-to-month and free
        of setup fees. <a href="/legal-answering-service">Legal answering service</a> explains the difference between a message and an
        intake, and <Link href="/">the home page</Link> explains why Della takes the second.
      </p>

      <CompareCTA line="If you practice personal injury, criminal defense or immigration, the quickest comparison is to hear Della take a call." />

      <h2>Read the one-to-one comparisons</h2>
      <p>Each competitor has its own page on calldella.com, with pricing in detail and when each side is the better fit.</p>
      <ul>
        {COMPETITORS.map((c) => (
          <li key={c.slug}>
            <a href={calldella(`/compare/${c.slug}`, CAMPAIGN, 'compare-list')}>{c.name} vs Call Della</a>
          </li>
        ))}
      </ul>

      <FAQ items={faqs} eyebrow="COMPARE" heading="Questions about this list" />
    </ArticleLayout>
  );
}
