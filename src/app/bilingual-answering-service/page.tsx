import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta, formatDate } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, Table } from '@/components/Page';
import { COMPETITORS, FETCHED } from '@/data/competitors';
import { ALERTS, OBJECTIONS, SPANISH_AREAS, SRC, forwardText } from '@/lib/copy';
import { FLAGS } from '@/lib/plans';

export const metadata: Metadata = pageMeta('/bilingual-answering-service');

const SLUG = '/bilingual-answering-service';
const asOf = formatDate(FETCHED);
const spanish = SPANISH_AREAS.join(' and ');

// Spanish scope per practice area, read from FLAGS so the page changes when the flows do.
const scope: [string, string][] = [
  ['Personal injury', FLAGS.spanishPI ? 'English and Spanish' : 'English today'],
  ['Criminal defense', FLAGS.spanishCriminal ? 'English and Spanish' : 'English today'],
  ['Immigration', FLAGS.spanishImmigration ? 'English and Spanish' : 'English today'],
];

const faq = [
  { q: 'Do you take personal injury or criminal defense calls in Spanish?', a: `Not today. Della takes ${spanish} intake in English or Spanish. Personal injury and criminal defense callers are taken in English, and this page will say so the day that changes. If most of your night callers are Spanish speakers in those practice areas, a live bilingual service is the better fit for now, and the comparison below names them.` },
  { q: 'Which hours is Spanish available?', a: `The same hours as English: nights, weekends and holidays. There is no separate Spanish line and no window when Spanish callers get a different service. Della answers every after-hours call in your firm's name and takes ${spanish} intake in whichever language the caller uses.` },
  OBJECTIONS.person,
  OBJECTIONS.bar,
  OBJECTIONS.software,
  OBJECTIONS.price,
];

export default function BilingualAnsweringService() {
  return (
    <ServiceLayout slug={SLUG} crumb="Bilingual answering service" serviceName="Bilingual legal answering service">
      <Hero
        slug={SLUG}
        h1="Bilingual legal answering service, English and Spanish"
        sub="When a Spanish speaker calls your firm at night, Della takes the immigration intake in Spanish and has the dossier on your desk by dawn. The honest scope is on this page."
        trust={`Spanish on ${spanish} intake today. Never gives legal advice. Month-to-month.`}
      />

      <h2>What is a bilingual legal answering service?</h2>
      <AnswerBlock>
        A bilingual legal answering service answers a law firm&apos;s calls in English and Spanish and takes the caller&apos;s details
        in either. Most take a message. Della takes the {spanish} intake in either language after hours. In Clio&apos;s 2024
        secret-shopper study only 40% of law firms answered a prospective client&apos;s call.<Source src={SRC.obj2025} />
      </AnswerBlock>

      <h2>What happens when a Spanish speaker calls your firm at 9pm?</h2>
      <ul>
        <li>The call goes to voicemail, and the greeting is in English.</li>
        <li>The answering service takes a name and a number, and nobody who speaks Spanish is in until Monday.</li>
        <li>A paralegal who speaks Spanish ends up on call every night, unpaid for it.</li>
      </ul>

      <h2>What does an unanswered Spanish call cost?</h2>
      <p>
        The same as any other. An American Bar Association Law Practice Division study found fewer than 10% of callers to law firms
        reached a lawyer, and 32% went straight to voicemail.<Source src={SRC.lmnc2019} /> A caller who gets an English greeting at
        night and no way through rings the next firm that advertises in Spanish.
      </p>

      <MissedCallSection slug={SLUG} matter="matter" />

      <h2>What would it be worth if those calls were taken in the caller&apos;s language?</h2>
      <ul>
        <li>How many Spanish-speaking callers reached you last month, and how many reached voicemail?</li>
        <li>If every one of them were qualified and on your desk at 7am, how many would you call back first?</li>
        <li>Who on your team gets their evenings back?</li>
      </ul>

      <h2>How Della meets it</h2>
      <ProblemFix
        rows={[
          ['Spanish speakers reach an English voicemail', `Takes ${spanish} intake in English or Spanish, every night, weekend and holiday`],
          ['The service only takes a name and number', 'Works through the intake and files a dossier by dawn, with the recording and transcript'],
          ['A bilingual paralegal is on call every night', `Alerts the attorney on call by ${ALERTS} only when a call is urgent`],
        ]}
      />

      <h2>Which practice areas does Della take in Spanish?</h2>
      <Table caption="Spanish scope by practice area" head={['Practice area', 'Languages Della takes intake in']} rows={scope} />
      <p>
        That is the whole scope, and this page changes the day it does. Firms outside {spanish} that need Spanish on every call are
        better served by a live bilingual service for now, and the next section shows what each publishes.
      </p>

      <h2>Spanish legal answering service options: what each publishes</h2>
      <p>
        From each company&apos;s own site, read on {asOf}. An affordable bilingual legal answering service is one where Spanish does not
        cost extra and is not limited to office hours, so read the terms, not the headline.
      </p>
      <Table
        caption="Spanish coverage as published by each service"
        head={['Service', 'Spanish, as published']}
        rows={[
          ['Call Della', `Spanish on ${spanish} intake, nights, weekends and holidays`],
          ...COMPETITORS.map((c) => [
            c.name,
            <>
              {c.facts.spanish.text}{' '}
              <a href={c.facts.spanish.url} rel="nofollow noopener">(source)</a>
            </>,
          ]),
        ]}
      />
      <p>
        The <Link href="/best-legal-answering-services">full comparison</Link> scores all five on ten criteria, and{' '}
        <Link href="/cost">the cost page</Link> covers the pricing models.
      </p>

      <SampleDossier>
        <p>
          Book a demo and we run a live call for your practice area while you listen, in Spanish if you ask, then walk you through the
          dossier she files. Below is a sample, with a test caller, in English.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions about Spanish callers" eyebrow="Objections, answered" />

      <h2>Hire Della</h2>
      <PlanTable />
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('After hours our Spanish-speaking callers reach an English voicemail or a service that only takes a name and number.')} />
    </ServiceLayout>
  );
}
