import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CTAButton } from '@/components/CTAButton';
import { Source, Table } from '@/components/Page';
import { pageMeta } from '@/data/pages';
import { CATEGORY_DEFINITION, DEMO_MINUTES } from '@/lib/plans';
import { SPANISH_AREAS, SRC } from '@/lib/copy';
import { calldella } from '@/lib/utm';

const SLUG = '/about';
const CAMPAIGN = 'about';
export const metadata: Metadata = pageMeta(SLUG);

export default function About() {
  return (
    <ArticleLayout
      eyebrow="ABOUT · CALL MAREN"
      title="Who built Maren, and why"
      slug={SLUG}
      author="Andy Norman"
      date="2026-10-25"
      breadcrumbs={[{ name: 'About', href: SLUG }]}
      citations={[SRC.obj2025]}
      tldr={<p className="m-0">{CATEGORY_DEFINITION}</p>}
    >
      <h2>Why Call Maren exists</h2>
      <p>
        Because the phone rings at 9pm and nobody picks up. In Clio&apos;s 2024 secret-shopper study only 40% of law firms answered a
        prospective client&apos;s call<Source src={SRC.obj2025} />, and the services that do answer at night mostly take a name and a
        number. Call Maren was built to take the intake instead: the facts of the matter, an urgency score, the recording and the
        transcript, on the attorney&apos;s desk by dawn.
      </p>

      <h2>Who is behind it</h2>
      <p>
        Call Maren was founded by{' '}
        <a href={calldella('/about/andy-norman', CAMPAIGN, 'body')}>Andy Norman</a> and is built by Antek Automation on the Retell AI
        voice platform. Maren is the persona on the phone: an intake specialist, not a receptionist, trained on what a personal injury,
        criminal defense or immigration intake has to capture. This site and{' '}
        <a href={calldella('/', CAMPAIGN, 'body')}>callmaren.com</a> describe the same service in the same words.
      </p>

      <h2>Who you contract with</h2>
      <p>
        Call Maren. Plans are month-to-month with no setup fee, and every plan is published on{' '}
        <a href={calldella('/pricing', CAMPAIGN, 'body')}>callmaren.com/pricing</a>. Call data is encrypted in transit and at rest, your
        firm owns every recording and transcript, retention is set per firm, and your callers&apos; data is never used to train AI
        models. The full statement is on <a href={calldella('/security', CAMPAIGN, 'body')}>callmaren.com/security</a>.
      </p>

      <h2>What Maren does, and what she never does</h2>
      <Table
        caption="Maren's scope"
        head={['Maren does', 'Maren never does']}
        rows={[
          ["Answers in your firm's name, nights, weekends and holidays", 'Pretends she is not an AI when asked directly'],
          ['Takes the intake for personal injury, criminal defense and immigration', 'Gives legal advice'],
          [`Takes ${SPANISH_AREAS.join(' and ')} intake in English or Spanish`, 'Quotes fees or commits the firm to representation'],
          ['Scores urgency and alerts the attorney on call', 'Argues with callers or pressures them to sign'],
        ]}
      />
      <p>
        Your team takes the morning. Maren takes the overnight calls. The pages on this site, from the{' '}
        <Link href="/legal-answering-service">legal answering service</Link> to the{' '}
        <Link href="/best-legal-answering-services">comparison of five services</Link>, say where she is the better fit and where a
        live service is.
      </p>

      <h2>Hear her first</h2>
      <p>
        The demo takes {DEMO_MINUTES} minutes: a live Maren call for your practice area while you listen, then the dossier she files.
      </p>
      <CTAButton primary large>Book a demo</CTAButton>
    </ArticleLayout>
  );
}
