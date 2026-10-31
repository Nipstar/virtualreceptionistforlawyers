import type { Metadata } from 'next';
import { pageMeta } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, Table } from '@/components/Page';
import { ALERTS, OBJECTIONS, SRC, forwardText } from '@/lib/copy';
import { DEMO_MINUTES } from '@/lib/plans';

export const metadata: Metadata = pageMeta('/24-7-answering-service');

const SLUG = '/24-7-answering-service';

const faq = [
  { q: 'Does Della cover the daytime too?', a: "Della is an overnight specialist. She takes the calls your firm can't: nights, weekends, holidays, and any call you forward when nobody answers. Your team keeps the daytime phone. If you forward on no-answer, Della also catches the calls that ring out at lunch or while every line is busy, so nothing reaches voicemail." },
  { q: 'How does an urgent call reach the attorney on call?', a: `Della scores every caller for urgency as the call ends. When a call is urgent, the attorney on call gets an ${ALERTS} alert straight away with the summary, so they can decide whether to call back that night. Everything else waits in the morning brief, sorted so the strongest cases sit at the top.` },
  OBJECTIONS.price,
  OBJECTIONS.person,
  OBJECTIONS.bar,
  OBJECTIONS.forwarding,
];

export default function TwentyFourSeven() {
  return (
    <ServiceLayout slug={SLUG} crumb="24/7 answering service" serviceName="24/7 answering service for lawyers">
      <Hero
        slug={SLUG}
        h1="24/7 answering service for lawyers: nights, weekends and holidays"
        sub="Della takes the overnight calls. Your team takes the morning. Every after-hours caller is answered in your firm's name, qualified and on your desk by dawn."
        trust="Built for legal intake from the first call. Never gives legal advice. Month-to-month."
      />

      <h2>What is a 24/7 answering service for lawyers?</h2>
      <AnswerBlock>
        A 24/7 answering service for lawyers answers a firm's phone in the hours nobody is in the office. A firm open nine to five on weekdays
        staffs 40 of the 168 hours in a week, under a quarter. The other 128 hours are nights, weekends and holidays, and that is when a
        24-hour legal answering service earns its fee.
      </AnswerBlock>

      <h2>Where do your calls go when the office is closed?</h2>
      <ul>
        <li>To voicemail, where the caller hangs up and tries the next firm.</li>
        <li>To a message service that passes on a name and a number, but nothing about the matter.</li>
        <li>To your own cell phone, at dinner, at 11pm and at weekends, for as long as you can keep it up.</li>
      </ul>

      <h2>What does an after-hours call cost if nobody takes it?</h2>
      <p>
        An ABA Law Practice Division study, with calls placed during and after business hours, found fewer than 10% of callers reached a
        lawyer and 32% went straight to voicemail. In 42% of cases the lawyer took three or more days to reply.<Source src={SRC.lmnc2019} />{' '}
        A caller with an arrest, a crash or a deadline rarely waits three days.
      </p>

      <MissedCallSection slug={SLUG} intro="Start with your after-hours calls: count the ones that reach voicemail between closing and opening." />

      <h2>What would full coverage be worth to you?</h2>
      <ul>
        <li>If every call from last weekend was qualified and on your desk on Monday at 7am, how many would you sign?</li>
        <li>Whose evenings come back, yours or your team's?</li>
        <li>How much sooner would you reach the urgent matters if you heard about them the same night?</li>
      </ul>

      <h2>How does a 24 hour legal answering service handle urgent calls?</h2>
      <p>
        A 24 hour legal answering service handles urgent calls by deciding, on the call, which ones can't wait, and getting those to a lawyer
        that night. That is harder than it sounds. A message-taking service treats every call the same, so a family calling about an arrest
        sits in the same pile as a billing question. Della scores every caller for urgency from one to five as the intake runs. A call that
        scores as urgent goes to the attorney on call by {ALERTS} straight away, with the summary attached, so they can judge it in a minute
        rather than call back blind. The rest wait in the morning brief, sorted with the strongest cases first. You tell us who is on call
        during setup. Della never tells a caller the firm has taken the case, and she never gives advice. She takes
        the facts and makes sure the right person sees them.
      </p>

      <h2>After hours legal answering service: what should you compare?</h2>
      <p>
        An after hours legal answering service should be compared on what reaches you, not on the hours it claims. Almost every service says
        24/7. The useful questions are who answers at 2am, what they ask, and what you find in the morning. Ask whether the service answers in
        your firm's name, whether it takes a full intake for your practice area or a message, how an urgent call reaches the attorney on call,
        and whether every call opens with a recording disclosure for your state. Then ask about price: per minute, per call or flat, and what
        happens in a month with more calls than usual. Finally, ask to hear it take a live call before you sign. For a side-by-side of
        published facts on five services, including the best after hours answering service for lawyers by your own criteria, see the{' '}
        <a href="/best-legal-answering-services">disclosed comparison</a>.
      </p>

      <h2>How Della covers the 128 hours</h2>
      <ProblemFix
        rows={[
          ['Calls go to voicemail at night', "Answers in your firm's name, every night, weekend and holiday"],
          ['Messages arrive with no case detail', 'Takes the full intake for your practice area, with the best callback number and window'],
          ['The urgent call waits with the rest', `Scores every caller for urgency and alerts the attorney on call by ${ALERTS} straight away`],
          ['Mornings start with callbacks in the dark', 'Delivers every call as a dossier by dawn: summary, urgency, recording and transcript'],
          ['You carry the phone home', 'Takes the overnight shift, so your days start with a sorted list'],
        ]}
      />
      <Table
        caption="Who covers which hours"
        head={['Hours', 'Who answers']}
        rows={[
          ['Office hours, weekdays', 'Your team, as now'],
          ['Weekday nights', 'Della'],
          ['Weekends and holidays', 'Della'],
          ['Daytime calls nobody picks up', 'Della, if you forward on no-answer'],
        ]}
      />
      <p>
        See also the <a href="/legal-answering-service">legal answering service</a> page for the types of service, and{' '}
        <a href="/legal-intake-service">legal intake services</a> for what a full intake contains. The <a href="/">home page</a> covers why
        Della takes the intake rather than a message.
      </p>

      <SampleDossier>
        <p>
          Book a {DEMO_MINUTES}-minute demo and we'll run a live after-hours call for your practice area while you listen, then walk you
          through the dossier she files. Below is a sample brief from a test caller.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions about 24/7 answering" eyebrow="FAQ" />

      <h2>Hire Della</h2>
      <PlanTable />
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('Our nights, weekends and holidays go to voicemail or a message service, and many of those callers ring the next firm.')} />
    </ServiceLayout>
  );
}
