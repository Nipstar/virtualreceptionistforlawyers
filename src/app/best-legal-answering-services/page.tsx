import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta, formatDate } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { CompareTable } from '@/components/compare/CompareTable';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, Table, SampleDossier, DemoCTA, MissedCallSection } from '@/components/Page';
import { COMPETITORS, CRITERIA, competitor, FETCHED } from '@/data/competitors';
import { ALERTS, OVERAGE, SOLO, PRACTICE, SPANISH_AREAS, SRC, forwardText } from '@/lib/copy';
import { DEMO_MINUTES, formatPrice } from '@/lib/plans';
import { calldella } from '@/lib/utm';

export const metadata: Metadata = pageMeta('/best-legal-answering-services');

const SLUG = '/best-legal-answering-services';
const CAMPAIGN = 'best-legal-answering-services';
const asOf = formatDate(FETCHED);
const smith = competitor('smith-ai');
const al = competitor('answering-legal');
const posh = competitor('posh');
const ruby = competitor('ruby');

// One line per service on who it suits, using only what each publishes on its own site (see competitors.ts).
const fits: [string, string, string][] = [
  ['Call Della', 'AI intake specialist, after hours only', 'Personal injury, criminal defense and immigration firms that cover the day themselves and want every night caller qualified, not greeted'],
  [al.name, 'Live, U.S.-based, lawyers only', 'Firms that want a person on every call, day and night, with direct Clio Grow, MyCase or Lead Docket links, and will take a quote by contact form'],
  [ruby.name, 'Live, with AI-assisted call flows', 'Firms on Clio that want one live service for calls and website chat around the clock'],
  [posh.name, 'Live, with optional AI-enabled plans', 'Firms that want the lowest published entry price and a trial before they commit'],
  [smith.name, 'Human-first, AI-first or hybrid', 'Firms that want to choose between live receptionists and AI, or mix them, on one account'],
];

// Objections FAQ: the five from the launch plan, answer first, plus who wrote the list.
const faq = [
  { q: 'We already have an answering service. Why read this?', a: 'Because most answering services take a message, and a message is where the case goes cold. Put what reached your desk from last night beside a Della dossier: the facts of the matter, an urgency score, the recording and the transcript. If your current service already delivers that, keep it. The table below shows which ones publish that depth.' },
  { q: 'Our callers want a person. Is an AI the wrong choice?', a: `Sometimes, and this page says so. For existing clients with case questions, or a practice outside personal injury, criminal defense and immigration, ${al.name}, ${ruby.name} or ${posh.name} put a live receptionist on every call. For a new injury caller at 9pm, what matters is whether the facts are taken and the attorney is alerted. Della does both and tells callers she is an AI if asked.` },
  { q: 'Is this allowed under bar rules?', a: `Yes, if the service collects facts and never advises. Della never gives legal advice, quotes fees or implies the firm has taken the case, and every call opens with a recording disclosure set for your state. Call Della's compliance guides cover ABA Formal Opinion 512 and consent by state in detail.` },
  { q: 'What does it cost, and which service is cheapest?', a: `As of ${asOf}, ${posh.name} had the lowest published live plan at $65 a month and ${smith.name} published a free AI-first tier. Della is ${formatPrice(SOLO)} a month with ${SOLO.minutes} minutes or ${formatPrice(PRACTICE)} with ${PRACTICE.minutes}, extra minutes ${OVERAGE}. ${al.name} does not publish prices. Run your own call counts through each before you compare headline figures.` },
  { q: 'Does it work with our case management software?', a: `${al.name}, ${ruby.name}, ${posh.name} and ${smith.name} each list Clio or other legal software links on their own sites. Della offers a CRM webhook on the Group plan and no native Clio or MyCase integration today. If a ready-made integration decides it, one of the four is the better fit, and the table links each claim to its source.` },
  { q: 'Who wrote this list, and is it fair?', a: `Call Della wrote it, and Call Della is one of the five services on it. Every service is scored on the same ten criteria, every competitor fact comes from that company's own site, linked and dated ${asOf}, and there are no star ratings or quoted reviews, because a company rating its competitors is not a neutral source.` },
];

export default function BestLegalAnsweringServices() {
  return (
    <ServiceLayout slug={SLUG} crumb="Best legal answering services">
      <Hero
        slug={SLUG}
        h1="Best legal answering services for law firms in 2026"
        sub="Five services on one set of criteria, every fact from the vendor's own site. Della is ours, and this page says where the others are the better choice."
        secondary={{ href: '#comparison', label: 'See the comparison' }}
        trust="Written by Call Della. No ratings, no quoted reviews, no prices from memory."
      />

      <h2>What is the best legal answering service for a law firm?</h2>
      <AnswerBlock>
        The best legal answering service is the one that answers at the hours you are closed and leaves a usable intake behind, not a
        message. In Clio&apos;s 2024 secret-shopper study only 40% of law firms answered a prospective client&apos;s call
        <Source src={SRC.obj2025} />. Below, Call Della, Smith.ai, Answering Legal, Posh and Ruby are scored on the same ten criteria.
      </AnswerBlock>
      <p>
        Call Della wrote this page and is one of the five services on it. Every competitor fact comes from that company&apos;s own site,
        is linked, and is dated {asOf}.
      </p>

      <h2>Where do your after-hours calls go now?</h2>
      <ul>
        <li>The phone rings at 9pm and goes to voicemail. The caller does not leave a message.</li>
        <li>A service picks up, takes a name and a number, and the callback starts from nothing the next morning.</li>
        <li>A Spanish speaker calls at night and reaches someone who cannot take the facts.</li>
        <li>The associate on call takes the phone home, and the good calls still arrive as a text to ring back.</li>
      </ul>

      <h2>What does it cost when nobody takes the call?</h2>
      <p>
        An American Bar Association Law Practice Division study of calls to law firms found fewer than 10% of callers reached a lawyer,
        and 32% went straight to voicemail.<Source src={SRC.lmnc2019} /> Clio&apos;s 2024 study found only 40% of firms answered at
        all.<Source src={SRC.obj2025} /> The caller who hits voicemail is usually still on Google, and the next firm on the page is one
        tap away. The ad spend behind that call is gone with it.
      </p>

      <MissedCallSection slug={SLUG} />

      <h2>What would it be worth if every one of those calls was qualified?</h2>
      <ul>
        <li>If every after-hours caller was screened and waiting on your desk at 7am, how many of them would you sign?</li>
        <li>Whose evenings come back, yours or the associate&apos;s?</li>
        <li>What would you do with the callback hours your team spends chasing names and numbers?</li>
      </ul>

      <h2>How Della meets it</h2>
      <ProblemFix
        rows={[
          ['Calls go to voicemail after hours', "Answers in your firm's name every night, weekend and holiday"],
          ['The service only takes a name and number', 'Works through the intake for your practice area and files a dossier by dawn, with the recording and transcript'],
          ['Spanish speakers call at night', `Takes ${SPANISH_AREAS.join(' and ')} intake in English or Spanish`],
          ['The associate on call carries the phone', `Alerts the attorney on call by ${ALERTS} only when a call is urgent`],
        ]}
      />
      <p>
        That is what Della does. Whether she is the best fit for your firm depends on who you want answering, at which hours, in which
        practice area. The rest of this page puts her beside the four services a law firm is most likely to be weighing.
      </p>

      <h2 id="comparison" className="scroll-mt-24">How do the best law firm answering services compare?</h2>
      <p>
        Each of the ten criteria is a question a managing partner asks before signing, and each service gets the answer its own website
        gives. Where a site does not state a fact, the table says &quot;not published&quot; rather than guessing. Call Della&apos;s column
        comes from the same plan configuration as the <Link href="/cost">cost page</Link>, so it cannot drift from what we charge. On a
        phone the table scrolls sideways inside its frame.
      </p>
      <ol>
        {CRITERIA.map((c) => (
          <li key={c.key}>{c.label}</li>
        ))}
      </ol>
      <CompareTable competitors={COMPETITORS} caption="Call Della, Smith.ai, Answering Legal, Posh and Ruby on the same ten criteria." />

      <h2>Which is the best answering service for lawyers who want a person on every call?</h2>
      <p>
        Three of the five put live receptionists on the line: {al.name}, {ruby.name} and {posh.name}. {smith.name} lets you choose live,
        AI or a mix. Della is AI on every call and says so if asked. If a human voice on every call is the deciding factor, start with
        the three live services and compare them on hours, intake depth and integrations rather than on price alone.
      </p>
      <Table caption="Who each service suits, from its own published facts" head={['Service', 'Who answers', 'Best fit']} rows={fits} />

      <h2>Which is the best virtual receptionist for law firms by price?</h2>
      <p>
        Published prices only, as read on {asOf}. Per-minute and per-call plans look cheap until the calls are long, and flat plans look
        dear until you count what is included, so run your own call volume through each before deciding.
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
        <Link href="/cost">What a legal answering service costs</Link> explains the three pricing models in detail.
      </p>

      <h2>Which is the best AI receptionist for law firms?</h2>
      <p>
        Four of the five now use AI somewhere. {smith.name} sells an AI-first tier, {posh.name} offers AI-enabled plans and {ruby.name}{' '}
        uses AI-assisted call flows, each as part of a receptionist service that answers any call for any business. Della is different
        in scope: an AI intake specialist built for personal injury, criminal defense and immigration calls after hours, with a dossier,
        urgency score, recording and transcript on every call. If you want AI for daytime reception across any practice area, start with
        the first three. If you want the night calls for one of those three practice areas qualified by morning, see{' '}
        <Link href="/ai-receptionist">what an AI receptionist can and cannot do on a legal call</Link>.
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
        of setup fees. <Link href="/legal-answering-service">Legal answering service</Link> explains the difference between a message and
        an intake, and <Link href="/">the home page</Link> explains why Della takes the second.
      </p>

      <SampleDossier>
        <p>
          The quickest way to judge any service on this list is to hear it take a call. Book a {DEMO_MINUTES}-minute demo and we run a
          live Della call for your practice area while you listen, then walk you through the dossier she files. Below is a sample, with
          a test caller.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions firms ask before choosing" eyebrow="Objections, answered" />

      <h2>Read the one-to-one comparisons</h2>
      <p>Each competitor has its own page on calldella.com, with pricing in detail and when each side is the better fit.</p>
      <ul>
        {COMPETITORS.map((c) => (
          <li key={c.slug}>
            <a href={calldella(`/compare/${c.slug}`, CAMPAIGN, 'compare-list')}>{c.name} vs Call Della</a>
          </li>
        ))}
      </ul>

      <DemoCTA>If you practice personal injury, criminal defense or immigration, the quickest comparison is to hear Della take a call.</DemoCTA>
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('After hours our calls go to voicemail or to a service that only takes a message, and I have compared the five main fixes on one page.')} />
    </ServiceLayout>
  );
}
