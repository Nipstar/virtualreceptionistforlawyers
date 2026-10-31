import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, Table } from '@/components/Page';
import { ALERTS, OBJECTIONS, SPANISH_AREAS, SRC, forwardText } from '@/lib/copy';
import { DEMO_MINUTES } from '@/lib/plans';
import { calldella } from '@/lib/utm';

export const metadata: Metadata = pageMeta('/ai-receptionist');

const SLUG = '/ai-receptionist';
const CAMPAIGN = 'ai-receptionist';

const faq = [
  { q: 'Does Della tell callers she is an AI?', a: 'Yes, whenever a caller asks. She introduces herself by name, speaks calmly and asks one question at a time, and she never pretends to be a person. Every call is recorded, so you can hear exactly how each caller was treated before you decide anything.' },
  { q: 'When is a person better than an AI receptionist?', a: 'For existing clients with questions about their case, for sensitive calls that need judgment, and for practice areas Della is not built for. Della takes new-client intake for personal injury, criminal defense and immigration after hours. For daytime reception across any practice area, a live service is the better choice, and the comparison page names them.' },
  OBJECTIONS.person,
  OBJECTIONS.bar,
  OBJECTIONS.software,
  OBJECTIONS.price,
];

export default function AiReceptionist() {
  return (
    <ServiceLayout slug={SLUG} crumb="AI receptionist" serviceName="AI receptionist for law firms">
      <Hero
        slug={SLUG}
        h1="AI receptionist for law firms, built only for legal intake"
        sub="Firms search for a receptionist. What the 9pm caller needs is intake. Della answers in your firm's name, takes the facts of the matter and has a dossier on your desk by dawn."
        trust="Built for legal intake from the first call. Never gives legal advice. Tells callers she is an AI if asked."
      />

      <h2>What is an AI receptionist for law firms?</h2>
      <AnswerBlock>
        An AI receptionist for law firms is software that answers the phone in the firm&apos;s name and talks to the caller. Most take
        a message. Della takes the intake: facts, urgency score, recording and transcript. In Clio&apos;s 2024 secret-shopper study only
        40% of law firms answered a prospective client&apos;s call.
        <Source src={SRC.obj2025} />
      </AnswerBlock>

      <h2>Where do your calls go after hours now?</h2>
      <ul>
        <li>The phone rings at 9pm and goes to voicemail. The caller does not leave a message.</li>
        <li>An answering service takes a name and a number, and the morning starts with a cold callback.</li>
        <li>Someone on the team carries the phone home and takes the facts on a notepad.</li>
      </ul>

      <h2>What does an unanswered call cost a law firm?</h2>
      <p>
        An American Bar Association Law Practice Division study of calls to law firms found fewer than 10% of callers reached a lawyer,
        and 32% went straight to voicemail.<Source src={SRC.lmnc2019} /> The caller who hits voicemail is usually still on Google, and
        the next firm on the page is one tap away.
      </p>

      <MissedCallSection slug={SLUG} />

      <h2>What would it change if every after-hours call was taken properly?</h2>
      <ul>
        <li>If every overnight caller were qualified and on your desk at 7am, how many would you sign?</li>
        <li>Whose evenings come back, yours or the associate&apos;s?</li>
        <li>What would you do with the hours your team spends returning calls that go nowhere?</li>
      </ul>

      <h2>How Della meets it</h2>
      <ProblemFix
        rows={[
          ['Calls go to voicemail after hours', "Answers in your firm's name every night, weekend and holiday"],
          ['The service only takes a message', 'Works through the intake for your practice area and files a dossier by dawn, with the recording and transcript'],
          ['Someone carries the phone home', `Alerts the attorney on call by ${ALERTS} only when a call is urgent`],
        ]}
      />

      <h2>What can an AI receptionist do on a legal call, and what can&apos;t it?</h2>
      <Table
        caption="What Della does and does not do on a call"
        head={['Della does', 'Della never does']}
        rows={[
          ["Answers in your firm's name and introduces herself", 'Pretends she is not an AI when asked directly'],
          ['Asks the questions your practice area needs, one at a time', 'Gives legal advice'],
          ['Scores urgency and alerts the attorney on call', 'Quotes fees or commits the firm to representation'],
          ['Files the recording, transcript and summary by 7am', 'Argues with callers or pressures them to sign'],
        ]}
      />
      <p>
        The line is the same one a good intake coordinator keeps: collect the facts, make no promises, get the right matter to the
        right attorney fast. Della is a specialist, not a receptionist, which is why{' '}
        <Link href="/">this site calls her a virtual receptionist for lawyers who takes the intake, not a message</Link>.
      </p>

      <h2>Does an AI receptionist for lawyers give legal advice?</h2>
      <p>
        Della does not. She collects facts and never advises, never quotes fees, never runs your conflicts check and never tells a
        caller the firm has taken the case. Every call opens with a recording disclosure set for your state. The attorney reads the
        dossier and decides. Call Della&apos;s guide to{' '}
        <a href={calldella('/compliance/aba-formal-opinion-512-explained', CAMPAIGN, 'body')}>ABA Formal Opinion 512</a> covers the bar
        rules in detail.
      </p>

      <h2>What happens to the recording and the caller&apos;s data?</h2>
      <p>
        Four things, and nothing else. Call data is encrypted in transit and at rest. Your firm owns every recording, transcript and
        dossier. Retention is set per firm, to your own file retention policy. Your callers&apos; recordings, transcripts and dossiers
        are never used to train AI models. Call Della does not claim HIPAA compliance, because whether HIPAA applies to a firm&apos;s
        intake call depends on the firm and the matter. The full statement is on{' '}
        <a href={calldella('/security', CAMPAIGN, 'body')}>calldella.com/security</a>.
      </p>

      <h2>AI answering service for lawyers: what to check before you sign</h2>
      <Table
        caption="Checklist with Della's answers"
        head={['Question to ask', "Della's answer"]}
        rows={[
          ['Does it say it is an AI when a caller asks?', 'Yes'],
          ['Is the intake built for our practice area, or generic?', 'Built for personal injury, criminal defense and immigration'],
          ['What reaches us in the morning?', 'A dossier per call: summary, urgency score, recording and transcript, by 7am'],
          ['How do urgent calls reach the attorney on call?', `By ${ALERTS}, straight away`],
          ['Does it take Spanish callers?', `On ${SPANISH_AREAS.join(' and ')} intake, yes`],
          ['Is our call data used to train models?', 'Never'],
          ['Can we hear it take a live call before we buy?', `Yes, in a ${DEMO_MINUTES}-minute demo`],
        ]}
      />

      <SampleDossier>
        <p>
          The only fair test of an AI receptionist is to hear it. Book a demo and we run a live call for your practice area while you
          listen, then walk you through the dossier she files. Below is a sample, with a test caller.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions firms ask about AI on the phone" eyebrow="Objections, answered" />
      <p>
        See also the <Link href="/legal-answering-service">legal answering service</Link> page on messages against intake, and{' '}
        <Link href="/best-legal-answering-services">the comparison of five services</Link>, including the live ones.
      </p>

      <h2>Hire Della</h2>
      <PlanTable />
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('After hours our calls go to voicemail or to a service that only takes a message, and I have been looking at an AI receptionist built for legal intake.')} />
    </ServiceLayout>
  );
}
