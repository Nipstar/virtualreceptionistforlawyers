import type { Metadata } from 'next';
import { pageMeta } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, campaign } from '@/components/Page';
import { ALERTS, PRICE_ANSWER, SPANISH_AREAS, SRC, forwardText } from '@/lib/copy';
import { DEMO_MINUTES } from '@/lib/plans';
import { calldella } from '@/lib/utm';

export const metadata: Metadata = pageMeta('/');

const SLUG = '/';
const C = campaign(SLUG);

const faq = [
  { q: 'Is Della a person?', a: "No. Della is an AI intake specialist. She introduces herself by name, works through your practice area's intake protocol, never gives legal advice, and tells any caller who asks that she's an AI. Callers hear a calm voice that asks one question at a time, and you can hear exactly what they heard in the recording." },
  { q: 'How is this different from an answering service?', a: `An answering service usually takes a message. Della takes the intake and scores urgency, so you start the morning with a qualified case rather than a number to chase. Each call arrives as a dossier with a summary, the recording and the transcript, and anything urgent goes to the attorney on call by ${ALERTS} straight away.` },
  { q: 'What does it cost?', a: PRICE_ANSWER },
  { q: 'Where does call data go?', a: "Every recording, transcript and dossier belongs to your firm and sits in your Call Della portal for the retention period you set. Call Della does not use your callers' recordings, transcripts or dossiers to train AI models. Call data is encrypted in transit and at rest, and the Call Della security page sets out the detail." },
  { q: 'Is this allowed under bar rules?', a: "Della never gives legal advice, never quotes fees and never implies the firm has taken the case. She collects facts, and you decide what happens next. Every call opens with a recording disclosure set for your state. Call Della's compliance guides on calldella.com cover the detail, including ABA Formal Opinion 512 on lawyers' use of AI." },
  { q: 'How do calls reach Della?', a: "You forward your office line to Della after hours, when nobody answers, or both. Your number doesn't change. Setup is short: answer a few questions about your practice, get your own Della number, make a test call, then switch on forwarding when you are ready to go live." },
];

export default function Home() {
  return (
    <ServiceLayout slug={SLUG} serviceName="Virtual receptionist for lawyers">
      <Hero
        slug={SLUG}
        h1="A virtual receptionist for lawyers that takes the intake, not a message"
        sub="Della answers your firm's calls at night and at weekends, qualifies every caller and has a triage-ready dossier on your desk by dawn."
        trust="Built for legal intake from the first call. Never gives legal advice. Month-to-month."
      />

      <h2>What does a virtual receptionist for lawyers do?</h2>
      <AnswerBlock>
        A virtual receptionist for lawyers answers a firm's phone remotely when the office is busy or closed. The basic service takes a name, a
        number and a message. An intake specialist goes further, asking the questions that tell an attorney whether there is a case, and
        flagging the calls that can't wait until morning.
      </AnswerBlock>
      <p>
        It matters because the phone often goes unanswered. In Clio's 2024 secret-shopper study, only 40% of law firms answered a call from a
        prospective client, down from 56% in 2019.<Source src={SRC.obj2025} />
      </p>

      <h2>Receptionist or intake specialist?</h2>
      <p>
        Most lawyers who search for a virtual receptionist are really looking for intake. A receptionist answers the phone. An intake
        specialist answers the question you ask the next morning: is there a case here, and how soon do I need to call back?
      </p>
      <p>
        Della is an AI intake specialist, built for personal injury, criminal defense and immigration calls. She works through the full intake
        every time, and doesn't have off nights. If you searched for a live virtual receptionist, the plain answer is that Della is not a
        person, and she tells any caller who asks. A live receptionist at a call center is the better fit when most of your calls need
        judgment no intake protocol can supply, such as complex commercial matters.
      </p>

      <h2>What happens to your calls after hours?</h2>
      <ul>
        <li>They go to voicemail, and the caller tries the next firm.</li>
        <li>A message service takes a name and a number, and nothing that tells you whether there's a case.</li>
        <li>Spanish-speaking callers reach an English-only line and give up.</li>
        <li>The phone comes home with you, and you answer it at dinner.</li>
      </ul>

      <h2>What does an unanswered call cost a law firm?</h2>
      <p>
        Clio's 2024 secret-shopper study found only 40% of law firms answered, and 48% couldn't be reached by phone at all, neither answering
        nor returning the message.<Source src={SRC.obj2025} /> People with a legal problem rarely call one firm and wait. They keep calling
        until someone answers.
      </p>

      <MissedCallSection slug={SLUG} heading="What are unanswered after-hours calls costing your firm?" />

      <h2>What would it change if every call was answered?</h2>
      <ul>
        <li>How many of last month's after-hours callers do you think hired someone else?</li>
        <li>If each one was qualified and waiting for you at 7am, which would you call first?</li>
        <li>What would you do with the time you now spend returning cold voicemails?</li>
      </ul>

      <h2>How Della works for your firm</h2>
      <ProblemFix
        rows={[
          ['Calls go unanswered after hours', "Answers in your firm's name, every night and weekend"],
          ['Messages say nothing about the case', "Takes a full intake for your practice area and the caller's best callback number and window"],
          ['Urgent calls wait until morning', `Alerts the attorney on call by ${ALERTS} straight away`],
          ['Spanish speakers hang up', `Takes ${SPANISH_AREAS.join(' and ')} intake natively in English or Spanish`],
          ['The phone follows you home', 'Takes the overnight shift, so you start the day with a sorted list'],
        ]}
      />
      <p>If you have an intake team, Della covers the hours they aren't there. If it's just you, she covers the hours you can't.</p>
      <p>
        <strong>Practice areas.</strong> For personal injury firms, injury intake has its own site at{' '}
        <a href="https://personalinjuryansweringservice.com/">personalinjuryansweringservice.com</a>. For criminal defense and immigration, see{' '}
        <a href={calldella('/criminal-defense', C, 'practice-areas')}>Della for criminal defense</a> and{' '}
        <a href={calldella('/immigration', C, 'practice-areas')}>Della for immigration</a> on calldella.com.
      </p>

      <h2>Where should you read next?</h2>
      <ul>
        <li><a href="/legal-answering-service">Legal answering service</a>: the three types, and what to check before you sign</li>
        <li><a href="/24-7-answering-service">24/7 answering service for lawyers</a>: nights, weekends and holidays</li>
        <li><a href="/legal-intake-service">Legal intake services</a>: outsourcing the first call</li>
        <li><a href="/ai-receptionist">AI receptionist for law firms</a>: what one can and can't do on a legal call</li>
        <li><a href="/bilingual-answering-service">Bilingual legal answering service</a>: English and Spanish</li>
        <li><a href="/cost">What a legal answering service costs</a>, with published prices</li>
        <li><a href="/best-legal-answering-services">Best legal answering services</a>, a disclosed comparison</li>
      </ul>

      <SampleDossier>
        <p>
          Book a {DEMO_MINUTES}-minute demo and we'll run a live new-client call for your practice area while you listen. You'll hear exactly
          what your callers would hear. Below is a sample brief from a test caller, the kind of dossier Della files after every call.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions lawyers ask" eyebrow="FAQ" />

      <h2>Hire Della</h2>
      <p>What you get on each plan:</p>
      <PlanTable />
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText('After hours, our calls go to voicemail or a message service, and many of those callers ring the next firm.')} />
    </ServiceLayout>
  );
}
