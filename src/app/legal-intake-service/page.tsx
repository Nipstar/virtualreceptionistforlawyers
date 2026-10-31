import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, Table } from '@/components/Page';
import { ALERTS, OBJECTIONS, SPANISH_AREAS, SRC, forwardText } from '@/lib/copy';
import { DEMO_MINUTES } from '@/lib/plans';

export const metadata: Metadata = pageMeta('/legal-intake-service');

const SLUG = '/legal-intake-service';

// What Della captures on a personal injury intake, from calldella.com's vertical configuration.
const PI_FIELDS = [
  'Incident type, date, time and place',
  'State and statute of limitations exposure',
  'Injury severity: ER visit, hospitalization, ongoing treatment',
  'Fault narrative and police report number',
  'Other party insurance carrier and contact',
  'Prior or current legal representation',
  'Caller name, callback phone, email and best time',
  'Urgency score',
];

const faq = [
  { q: 'If we outsource legal intake, do we lose control of which cases we take?', a: 'No. An intake service collects and screens; the firm decides. Della asks the questions your practice area needs, scores urgency and files the facts. Whether to call back, run a conflicts check or sign the client stays with the attorney. You set what counts as urgent, and you can hear every recording.' },
  { q: 'Do legal intake phone services cover daytime calls?', a: 'Many do, and if your team cannot take the first call at 11am, look at a service that covers business hours. Della covers nights, weekends and holidays only: your team takes the morning. If you need day and night from one vendor, the comparison page names the live services that publish 24/7 coverage.' },
  OBJECTIONS.person,
  OBJECTIONS.bar,
  OBJECTIONS.software,
  OBJECTIONS.price,
];

export default function LegalIntakeService() {
  return (
    <ServiceLayout slug={SLUG} crumb="Legal intake services" serviceName="Legal intake service">
      <Hero
        slug={SLUG}
        h1="Legal intake services for the calls your team can't take"
        sub="When the first call comes in after hours, Della takes the intake for your practice area and leaves a screened matter on your desk by dawn, not a name and a number."
        trust="Built for legal intake from the first call. Never gives legal advice. Month-to-month."
      />

      <h2>What are legal intake services?</h2>
      <AnswerBlock>
        Legal intake services take the first call, screen the matter against the firm&apos;s criteria and hand the attorney a qualified
        lead. An answering service takes a message; an intake service takes the facts. In Clio&apos;s 2024 secret-shopper study only
        40% of law firms answered a prospective client&apos;s call.<Source src={SRC.obj2025} />
      </AnswerBlock>

      <h2>Where does the first call go when your team can&apos;t take it?</h2>
      <ul>
        <li>The intake coordinator is on another call, and the new caller reaches voicemail.</li>
        <li>After 6pm an answering service takes a name and a number, and the callback starts from nothing the next morning.</li>
        <li>The associate on call takes the facts on a notepad, and half of them never reach the file.</li>
        <li>A Spanish speaker calls at night and nobody can take the intake.</li>
      </ul>

      <h2>What does a missed first call cost?</h2>
      <p>
        An American Bar Association Law Practice Division study of calls to law firms found fewer than 10% of callers reached a lawyer,
        32% went straight to voicemail, and 42% waited three days or more for a reply.<Source src={SRC.lmnc2019} /> A prospective
        client who reaches voicemail is usually still on Google, and the next firm on the page gets the second call. The money spent
        to make the phone ring is spent either way.
      </p>

      <MissedCallSection slug={SLUG} matter="matter" />

      <h2>What would it be worth if the first call were done by the time you arrived?</h2>
      <ul>
        <li>If every overnight caller were screened and waiting at 7am, how many would you call back first?</li>
        <li>How many hours a week does your team spend on first calls that go nowhere?</li>
        <li>What would the intake coordinator do with the mornings that no longer start with a backlog of voicemails?</li>
      </ul>

      <h2>How Della meets it</h2>
      <ProblemFix
        rows={[
          ['New callers reach voicemail', "Answers in your firm's name every night, weekend and holiday"],
          ['The service only takes a message', 'Works through the intake for your practice area and files a dossier by dawn, with the recording and transcript'],
          ['Facts go missing between the call and the file', 'Every answer is in the dossier, with the recording to check against'],
          ['Urgent matters wait for the morning', `Alerts the attorney on call by ${ALERTS} straight away`],
        ]}
      />

      <h2>Answering service with legal intake, or a legal intake service: what&apos;s the difference?</h2>
      <Table
        caption="Three kinds of first-call service"
        head={['Type', 'What you find in the morning', 'Where it falls short']}
        rows={[
          ['Message-taking answering service', 'A name, a number and a short message', 'Every callback starts from nothing'],
          ['Answering service with legal intake', 'A short screening script, the same for every practice area', 'Thin on the facts a case needs; urgent calls often wait'],
          ['Legal intake service built for the practice (Della)', 'A full intake, an urgency score, the recording and transcript, by 7am', 'After hours only; your team takes the day'],
        ]}
      />
      <p>
        A <Link href="/legal-answering-service">legal answering service</Link> usually means the first row. Ask for intake by name and ask
        what the morning file contains.
      </p>

      <h2>What does a qualified intake contain?</h2>
      <p>
        Enough for the attorney to decide whether to call back first, and enough for the paralegal to open the file without a second
        call. On a personal injury call Della captures:
      </p>
      <ul>
        {PI_FIELDS.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <p>
        Criminal defense and immigration intakes capture the equivalents: the defendant, charges, holding facility, bond and hearing
        time; or the person&apos;s status, detention, family in the US and filing deadlines. Immigration callers are taken in English or
        Spanish.
      </p>

      <h2>What stays with the firm?</h2>
      <p>
        The decisions. Della collects facts and scores urgency; she never gives legal advice, quotes fees, runs your conflicts check or
        tells a caller the firm has taken the case. The attorney reads the dossier, decides, and makes the call that signs the client.
        Outsourcing legal intake should move the first ten minutes of every matter off your desk, not the judgment.
      </p>

      <h2>Outsource legal intake: what to ask a legal intake company before you sign</h2>
      <Table
        caption="Checklist with Della's answers"
        head={['Question to ask', "Della's answer"]}
        rows={[
          ['Is the intake script built for our practice area, or generic?', 'Built for personal injury, criminal defense and immigration'],
          ['What reaches us in the morning?', 'A dossier per call: summary, urgency score, recording and transcript, by 7am'],
          ['How do urgent calls reach the attorney on call, and how fast?', `By ${ALERTS}, straight away`],
          ['Which hours are covered?', 'Nights, weekends and holidays'],
          ['Do you take Spanish callers?', `Yes, on ${SPANISH_AREAS.join(' and ')} intake`],
          ['Can we hear a live call before we buy?', `Yes, in a ${DEMO_MINUTES}-minute demo`],
          ['Is it month-to-month?', 'Yes'],
        ]}
      />

      <SampleDossier>
        <p>
          Book a demo and we run a live first call for your practice area while you listen, then walk you through the dossier she files.
          Below is a sample, with a test caller.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions about outsourcing legal intake" eyebrow="Objections, answered" />
      <p>
        See also the <Link href="/24-7-answering-service">24/7 answering service for lawyers</Link> page on the hours covered, and{' '}
        <Link href="/cost">what a legal answering service costs</Link>.
      </p>

      <h2>Hire Della</h2>
      <PlanTable />
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('After hours our new-client calls go to voicemail or to a service that only takes a name and number, so every callback starts from nothing.')} />
    </ServiceLayout>
  );
}
