import type { Metadata } from 'next';
import { pageMeta } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, Table } from '@/components/Page';
import { ALERTS, OVERAGE, SOLO, PRACTICE, SPANISH_AREAS, SRC, forwardText } from '@/lib/copy';
import { DEMO_MINUTES, formatPrice } from '@/lib/plans';

export const metadata: Metadata = pageMeta('/legal-answering-service');

const SLUG = '/legal-answering-service';
const PLANS_SHORT = `${formatPrice(SOLO)} for ${SOLO.minutes} minutes or ${formatPrice(PRACTICE)} for ${PRACTICE.minutes}`;

const faq = [
  { q: 'How much does a legal answering service cost?', a: `It depends on the model: per minute, per call, or a flat monthly fee. Della is ${formatPrice(SOLO)} a month with ${SOLO.minutes} minutes or ${formatPrice(PRACTICE)} with ${PRACTICE.minutes}, both with the dashboard, urgent-call alerts and the morning brief included, and extra minutes are ${OVERAGE}. The cost guide compares the models in detail.` },
  { q: 'Is a legal answering service available 24/7?', a: `Most are. The better question is what happens at 2am: who answers, what they ask, and how an urgent call reaches an attorney. Della answers every after-hours call, takes the full intake and alerts the attorney on call to anything urgent by ${ALERTS}, straight away.` },
  { q: 'Does Della give legal advice?', a: "No. Della collects facts and never advises, quotes fees or implies the firm has taken the case. You decide what happens next. She is an intake specialist, not a lawyer, and every call opens with a recording disclosure set for your state. Call Della's compliance guides cover the bar rules in detail." },
  { q: 'Do you answer in Spanish?', a: `Yes, natively, on ${SPANISH_AREAS.join(' and ')} intake: Della takes the call in English or Spanish and files the dossier for your team. Other practice areas are taken in English today, and this site will say so when that changes. The bilingual answering service page sets out the scope.` },
  { q: 'We already have an answering service. Why change?', a: 'Most answering services take a message. Della takes the intake: what happened, when, the facts your practice area needs, and an urgency score on top. Put your current service and a Della demo side by side, and compare what would reach your desk the next morning from each.' },
];

export default function LegalAnsweringService() {
  return (
    <ServiceLayout slug={SLUG} crumb="Legal answering service" serviceName="Legal answering service">
      <Hero
        slug={SLUG}
        h1="Legal answering service built for intake, not messages"
        sub="When your office closes, Della answers in your firm's name, works through the intake and leaves you a qualified case by morning, not a number to call back."
        secondary={{ href: '/best-legal-answering-services', label: 'Compare the options' }}
        trust="Built for legal intake from the first call. Never gives legal advice. Month-to-month."
      />

      <h2>What is a legal answering service?</h2>
      <AnswerBlock>
        A legal answering service answers a law firm's calls when the firm can't: after hours, at lunch, or when every line is busy. Most take
        messages. Legal intake services also screen the caller, capture the facts of the matter and route urgent calls to an attorney. Della
        is the second kind, an AI intake specialist rather than a call center.
      </AnswerBlock>
      <p>
        The need is plain in the numbers: in Clio's 2024 secret-shopper study, only 40% of law firms answered a prospective client's
        call.<Source src={SRC.obj2025} />
      </p>

      <h2>Answering service, intake service or AI intake specialist: what's the difference?</h2>
      <Table
        caption="Types of legal answering service"
        head={['Type', "What you find in the morning", "How it's usually priced"]}
        rows={[
          ['Message-taking answering service', 'A name, a number and a short message', 'Per minute or per call'],
          ['Legal intake service with live staff', 'A screened intake, scripted per practice area', 'Per call or monthly'],
          ['AI intake specialist (Della)', 'A full intake, an urgency score, the recording and transcript, by dawn', 'Flat monthly fee with minutes included'],
        ]}
      />
      <p>
        A law firm answering service, an answering service for lawyers and an attorney answering service usually mean the first row. If you
        want the second or third, ask for intake by name. <a href="/legal-intake-service">Legal intake services</a> covers the difference in
        more depth.
      </p>

      <h2>Why message-taking falls short at night</h2>
      <ul>
        <li>A message carries no case detail, so every callback starts from nothing.</li>
        <li>A caller who reached a message often rings the next firm before the office opens.</li>
        <li>You pay for the minutes and still have to chase the lead.</li>
      </ul>

      <h2>What does it cost when nobody takes the call?</h2>
      <p>
        An American Bar Association Law Practice Division study of calls to law firms found fewer than 10% of callers reached a lawyer, and
        32% went straight to voicemail.<Source src={SRC.lmnc2019} /> Clio's 2024 study found only 40% of firms answered at all.
        <Source src={SRC.obj2025} />
      </p>

      <MissedCallSection slug={SLUG} />

      <h2>What would a qualified call be worth to you?</h2>
      <ul>
        <li>If tonight's callers were screened and waiting for you at 7am, how much time would you save on callbacks?</li>
        <li>How many more cases would you take if the strong ones reached you while the caller was still deciding?</li>
      </ul>

      <h2>How Della meets it</h2>
      <ProblemFix
        rows={[
          ['You get messages, not cases', 'Works through the intake for your practice area on every call'],
          ['Callbacks start cold', 'Delivers every intake as a dossier by dawn, with the recording and transcript'],
          ['Urgent matters wait', `Alerts the attorney on call by ${ALERTS} straight away`],
          ['Per-minute bills for messages', `One monthly fee: ${PLANS_SHORT}, with the dashboard and alerts included`],
        ]}
      />
      <p>
        Della also covers <a href="/24-7-answering-service">nights, weekends and holidays</a>, and the <a href="/">home page</a> explains why
        she takes the intake rather than a message.
      </p>

      <h2>Answering service for lawyers: what to check before you sign</h2>
      <Table
        caption="Checklist with Della's answers"
        head={['Question to ask', "Della's answer"]}
        rows={[
          ["Does it answer in your firm's name?", 'Yes'],
          ['Does it take a full intake, or a message?', 'A full intake'],
          ['How do urgent calls reach the attorney on call, and how fast?', `By ${ALERTS}, straight away`],
          ['Does every call open with a recording disclosure that suits your state?', 'Yes'],
          ['Can you hear it take a live call before you buy?', `Yes, in a ${DEMO_MINUTES}-minute demo`],
          ['Is it month-to-month?', 'Yes'],
          ['Where is call data kept, for how long, and is it ever used to train models?', 'In your portal, for the period you set, and never'],
        ]}
      />

      <SampleDossier>
        <p>Book a demo and we'll run a live new-client call for your practice area while you listen, then walk you through the dossier she files. Below is a sample, with a test caller.</p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions about legal answering services" eyebrow="FAQ" />
      <p>
        More on price in <a href="/cost">what a legal answering service costs</a>, and on Spanish in the{' '}
        <a href="/bilingual-answering-service">bilingual answering service</a> page.
      </p>

      <h2>Hire Della</h2>
      <PlanTable />
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('After hours, our calls go to voicemail or a legal answering service that only takes messages, and many of those callers ring the next firm.')} />
    </ServiceLayout>
  );
}
