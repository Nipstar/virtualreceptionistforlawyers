import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta, formatDate } from '@/data/pages';
import { FAQ } from '@/components/FAQ';
import { ForwardBox } from '@/components/ForwardBox';
import { CTAButton } from '@/components/CTAButton';
import { ServiceLayout, Hero, AnswerBlock, Source, ProblemFix, PlanTable, SampleDossier, MissedCallSection, Table } from '@/components/Page';
import { COMPETITORS, competitor, FETCHED } from '@/data/competitors';
import { ALERTS, OBJECTIONS, OVERAGE, PRICE_ANSWER, SOLO, PRACTICE, SRC, forwardText } from '@/lib/copy';
import { formatPrice } from '@/lib/plans';
import { calldella } from '@/lib/utm';

export const metadata: Metadata = pageMeta('/cost');

const SLUG = '/cost';
const CAMPAIGN = 'cost';
const asOf = formatDate(FETCHED);
const posh = competitor('posh');
const smith = competitor('smith-ai');
const al = competitor('answering-legal');

const faq = [
  { q: 'Is a cheap per-minute plan better for a small firm?', a: 'Only if your calls are short and few. A proper intake runs several minutes, so a low monthly fee with a per-minute rate can cost more than a flat plan once the calls are real. Count last month\'s after-hours calls, multiply by a realistic call length, and price each plan on that, not on the entry figure.' },
  { q: 'Is there a setup fee or a contract?', a: `Not with Della. Every plan is month-to-month with no setup fee, and extra minutes are ${OVERAGE} each. Of the services compared here, ${al.name} publishes no setup fees and no long-term contracts, ${posh.name} and ${smith.name} publish month-to-month terms, and ${competitor('ruby').name} does not publish its contract length. Each fact is linked above.` },
  { q: 'What does 24 hour legal answering service cost compared with after-hours only?', a: `A 24/7 service covers your office hours too, so you pay for daytime minutes your own staff could take. Della covers nights, weekends and holidays only, which is why ${formatPrice(SOLO)} buys ${SOLO.minutes} minutes of the calls you are actually missing. If you need daytime cover as well, price a 24/7 service on your full call count.` },
  OBJECTIONS.price,
  OBJECTIONS.person,
  OBJECTIONS.software,
];

export default function Cost() {
  return (
    <ServiceLayout slug={SLUG} crumb="Cost" serviceName="Legal answering service">
      <Hero
        slug={SLUG}
        h1="What a legal answering service costs in 2026"
        sub="Three pricing models, every published price checked and dated, and a missed-call sum you do yourself before you look at any of them."
        secondary={{ href: '#published-prices', label: 'See the prices' }}
        trust="Competitor prices from their own sites, dated. No prices from memory. Della's price is at the end, after the sum."
      />

      <h2>What does a legal answering service cost?</h2>
      <AnswerBlock>
        As of {asOf}, published prices for legal answering services ran from{' '}
        <a href={posh.facts.price.url} rel="nofollow noopener">$65 a month at {posh.name}</a> to{' '}
        <a href={smith.facts.price.url} rel="nofollow noopener">$2,100 a month at {smith.name}</a>, with per-minute or per-call charges
        on top of most plans. Some services, including {al.name}, publish no price at all. The right comparison is cost per qualified
        call, not the monthly fee.
      </AnswerBlock>

      <h2>Where does the money go now?</h2>
      <ul>
        <li>You pay per minute for a service that takes a name and a number, then pay staff to make the callback.</li>
        <li>The overage line on the invoice is bigger than the plan.</li>
        <li>You pay for ads that make the phone ring at 9pm, and nobody answers it.</li>
      </ul>

      <h2>What does a missed call cost against any of these prices?</h2>
      <p>
        Before comparing fees, put a number on the other side of the ledger. In Clio&apos;s 2024 secret-shopper study only 40% of law
        firms answered a prospective client&apos;s call<Source src={SRC.obj2025} />, and an American Bar Association Law Practice
        Division study found 32% of calls to law firms went straight to voicemail.<Source src={SRC.lmnc2019} /> One signed matter
        usually pays for a year of any service on this page.
      </p>

      <MissedCallSection slug={SLUG} heading="Do the sum for your own firm" />

      <h2>What would it be worth to pay one predictable fee for qualified calls?</h2>
      <ul>
        <li>If the monthly bill were the same every month, what would you stop checking?</li>
        <li>If every after-hours caller arrived qualified at 7am, how many would you sign, and what is one of those worth?</li>
      </ul>

      <h2>How Della meets it</h2>
      <ProblemFix
        rows={[
          ['Per-minute bills for messages', `One monthly fee with the dashboard, ${ALERTS} alerts and the morning brief included`],
          ['Overage surprises', `Extra minutes at ${OVERAGE} each, stated up front`],
          ['Ad spend rings a phone nobody answers at night', "Answers in your firm's name every night, weekend and holiday, and takes the intake"],
        ]}
      />

      <h2>How do legal answering services charge? The three pricing models</h2>
      <Table
        caption="Pricing models for law firm answering services"
        head={['Model', 'How it works', 'What to watch']}
        rows={[
          ['Per minute', 'A monthly plan with a minute allowance, then a per-minute rate', 'A real intake runs several minutes, so the allowance goes fast. Check the overage rate and whether hold time counts'],
          ['Per call', 'A monthly plan with a call allowance, then a per-call rate', 'Short calls cost the same as long ones. Check what counts as a call: wrong numbers, hang-ups, existing clients'],
          ['Flat monthly', 'One fee with minutes included and the features stated', 'Check what is included and what each extra minute costs. Della is priced this way'],
        ]}
      />

      <h2 id="published-prices" className="scroll-mt-24">Attorney answering service rates, as published on {asOf}</h2>
      <p>
        Each fact below is from the company&apos;s own pricing page, linked, read on {asOf}. &quot;Not published&quot; means the page
        does not state it. Re-check before you sign, because prices change.
      </p>
      <Table
        caption="Published price, overage and contract terms by service"
        head={['Service', 'Published price', 'Overage', 'Contract terms']}
        rows={COMPETITORS.map((c) => [
          c.name,
          <>
            {c.facts.price.text} <a href={c.facts.price.url} rel="nofollow noopener">(source)</a>
          </>,
          <>
            {c.facts.overage.text} <a href={c.facts.overage.url} rel="nofollow noopener">(source)</a>
          </>,
          <>
            {c.facts.contract.text} <a href={c.facts.contract.url} rel="nofollow noopener">(source)</a>
          </>,
        ])}
      />
      <p>
        The <Link href="/best-legal-answering-services">full comparison</Link> scores the same services on ten criteria, including who
        answers and how deep the intake goes.
      </p>

      <h2>What drives the cost of an attorney answering service up?</h2>
      <ul>
        <li>Call length. Intake calls are longer than message calls, and per-minute plans charge for every one of them.</li>
        <li>Add-ons. {smith.name} publishes a Spanish line at $1.00 per call and $0.50 per call for each CRM after the first; check each service&apos;s own page for its extras.</li>
        <li>Overage. The rate past the allowance is where a cheap plan stops being cheap.</li>
        <li>Daytime minutes. A 24/7 plan charges for calls your own staff could have taken.</li>
      </ul>

      <h2>Legal intake service pricing: what should be included?</h2>
      <Table
        caption="What to expect in the fee, with Della's answers"
        head={['Should be included', "Della's answer"]}
        rows={[
          ['An intake built for your practice area, not a message script', 'Yes, for personal injury, criminal defense and immigration'],
          ['Every call delivered as a file you can act on', 'A dossier per call: summary, urgency score, recording and transcript'],
          ['Urgent-call alerts to the attorney on call', `Yes, by ${ALERTS}`],
          ['A recording disclosure set for your state', 'Yes'],
          ['A stated overage rate', `${OVERAGE} per extra minute`],
          ['No setup fee, no long contract', 'Month-to-month, no setup fee'],
        ]}
      />

      <SampleDossier>
        <p>
          Price what you would get, not what you would pay. Book a demo and we run a live call for your practice area while you listen,
          then walk you through the dossier. Below is a sample, with a test caller.
        </p>
      </SampleDossier>

      <FAQ items={faq} heading="Questions about price" eyebrow="Objections, answered" />

      <h2>What does Della cost?</h2>
      <p>{PRICE_ANSWER}</p>
      <PlanTable />
      <p>
        For the sum behind the price, calldella.com has a{' '}
        <a href={calldella('/operations/cost-per-signed-case-calculator', CAMPAIGN, 'body')}>cost per signed case calculator</a> and a{' '}
        <a href={calldella('/operations/after-hours-intake-comparison', CAMPAIGN, 'body')}>comparison of after-hours intake options</a>,
        including voicemail and in-house night staff.
      </p>
      <CTAButton primary large>Book a demo</CTAButton>

      <ForwardBox text={forwardText(`After hours our calls go to voicemail or to a per-minute service that only takes messages, and I have priced the options: ${formatPrice(SOLO)} or ${formatPrice(PRACTICE)} a month flat is the one I want to look at.`)} />
    </ServiceLayout>
  );
}
