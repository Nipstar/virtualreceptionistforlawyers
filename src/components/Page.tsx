// Building blocks for the service pages, in the plan's SPIN order. Server components only;
// the calculator, forward box and booking buttons are the only client code.
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PaperTexture } from './PaperTexture';
import { Breadcrumbs } from './Breadcrumbs';
import { CTAButton } from './CTAButton';
import { Eyebrow, Body } from './Typography';
import { DossierMockup } from './DossierMockup';
import { JsonLd } from './JsonLd';
import { MissedCallCalculator, DEFAULT_EXAMPLE, type MissedCallExample } from './MissedCallCalculator';
import { page, formatDate } from '@/data/pages';
import { graph, serviceNode } from '@/lib/schema';
import { PLANS, INCLUDES, GROUP_EXTRAS, DEMO_MINUTES, formatPrice } from '@/lib/plans';
import { OVERAGE, GROUP } from '@/lib/copy';
import { calldella } from '@/lib/utm';

export const campaign = (slug: string) => (slug === '/' ? 'home' : slug.replace(/^\//, '').replace(/\//g, '-'));

export const ServiceLayout = ({
  slug,
  crumb,
  serviceName,
  children,
}: {
  slug: string;
  crumb?: string;
  serviceName?: string;
  children: React.ReactNode;
}) => {
  const entry = page(slug);
  return (
    <div className="relative min-h-screen flex flex-col">
      {serviceName && <JsonLd data={graph(serviceNode({ path: slug, name: serviceName, description: entry.description }))} />}
      <PaperTexture />
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-8 pt-10 pb-16 max-w-[1180px] mx-auto w-full article-body feeder-main feeder-main-860">
          {crumb && <Breadcrumbs items={[{ name: crumb, href: slug }]} />}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

const HERO_DOSSIER = {
  intakeId: 'SAMPLE-0001',
  timestamp: 'SAMPLE · TUESDAY · 9:42 PM',
  callerName: 'Test Caller A',
  duration: '6M 05S',
  agentTag: 'DELLA',
  matterLine: 'RE: REAR-END COLLISION · URGENCY 4 OF 5',
  quote: 'Neck and back pain, ER visit the same night. Other driver at fault, police report filed. Other driver’s insurer named. Callback number captured.',
  actionLine: 'Sample brief with a test caller. Call back first thing: treatment started, fault clear.',
};

// Same shape as calldella.com's HomeHero: copy left, sample dossier right, one column under md.
export const Hero = ({
  slug,
  eyebrow = 'After-hours intake specialist',
  h1,
  sub,
  trust,
  secondary = { href: '#dossier', label: 'See the dossier' },
}: {
  slug: string;
  eyebrow?: string;
  h1: string;
  sub: string;
  trust?: string;
  secondary?: { href: string; label: string };
}) => {
  const entry = page(slug);
  return (
    <section className="col-wide pt-4 md:pt-8 pb-12 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[36px] md:text-[54px] font-semibold text-[var(--ink)] font-serif tracking-[-0.03em] leading-[1.05] m-0">{h1}</h1>
          <div className="mt-7 max-w-[540px]">
            <Body size={18}>{sub}</Body>
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton primary large>Book a demo</CTAButton>
            <a
              href={secondary.href}
              className="inline-flex items-center min-h-[48px] px-6 font-mono uppercase font-bold tracking-[0.14em] text-[13px] border-[1.5px] border-[var(--ink)] text-[var(--ink)] !no-underline"
            >
              {secondary.label}
            </a>
          </div>
          <p className="mt-4 !text-[12px] text-[var(--ink-soft)] font-mono tracking-[0.08em] !m-0 !mt-4">
            {trust ?? `The demo takes ${DEMO_MINUTES} minutes: a live Della call for your practice area.`}
          </p>
          <p className="!text-[11px] text-[var(--ink-faint)] font-mono uppercase tracking-[0.1em] !m-0 !mt-2">
            Last updated <time dateTime={entry.dateModified}>{formatDate(entry.dateModified)}</time>
          </p>
        </div>
        <figure className="m-0">
          <DossierMockup variant="hero" data={HERO_DOSSIER} />
          <figcaption className="mt-3 text-[10px] text-[var(--ink-faint)] font-mono tracking-[0.14em] uppercase text-center">
            Sample dossier. A test caller, not a real one.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
export const AnswerBlock = ({ label = 'The short answer', children }: { label?: string; children: React.ReactNode }) => (
  <div className="answer-block bg-[var(--paper)] border-[1.5px] border-[var(--rule)] p-6 md:p-8 mt-8 mb-6 shadow-[6px_6px_0_var(--rule)] relative">
    <div className="absolute top-[-1px] left-[22px] bg-[var(--paper-edge)] border-[1.5px] border-[var(--rule)] border-b-0 px-3 py-[3px] text-[9.5px] font-bold tracking-[0.16em] font-mono uppercase -translate-y-full">
      {label}
    </div>
    <p className="!m-0 italic">{children}</p>
  </div>
);

export const Source = ({ src }: { src: { name: string; url: string; publisher: string; year: string } }) => (
  <>
    {' '}(<a href={src.url} rel="noopener">{src.publisher}, {src.year}</a>)
  </>
);

export const ProblemFix = ({ rows, caption = 'How Della meets it' }: { rows: [string, string][]; caption?: string }) => (
  <div className="overflow-x-auto">
    <table>
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>
          <th scope="col">If this is happening</th>
          <th scope="col">What Della does</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b]) => (
          <tr key={a}>
            <td>{a}</td>
            <td>{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Table = ({ head, rows, caption }: { head: string[]; rows: React.ReactNode[][]; caption: string }) => (
  <div className="overflow-x-auto">
    <table>
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row" className="!font-serif !normal-case !tracking-normal !text-[15px]">{c}</th> : <td key={j}>{c}</td>))}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

// "What you get": every price on the site comes with what's included, from plans.ts.
export const PlanTable = () => {
  const priced = PLANS.filter((p) => p.price !== null);
  return (
    <>
      <Table
        caption="What you get on each plan"
        head={['', ...priced.map((p) => p.name)]}
        rows={[
          ['Price', ...priced.map((p) => `${formatPrice(p)} a month`)],
          ['Minutes included', ...priced.map((p) => String(p.minutes))],
          ['Built for', ...priced.map((p) => p.audience)],
          ...INCLUDES.map((i) => [i, ...priced.map(() => 'Yes')]),
          ['Extra minutes', ...priced.map(() => `${OVERAGE} each`)],
        ]}
      />
      <p>
        {GROUP.name}: {GROUP_EXTRAS.map((g) => g.toLowerCase()).join(', ')}. Every plan is month-to-month with no setup fee.
      </p>
    </>
  );
};

export const SampleDossier = ({ heading = 'Hear Della take a call', children }: { heading?: string; children: React.ReactNode }) => (
  <section id="dossier" className="scroll-mt-24">
    <h2>{heading}</h2>
    {children}
    <DossierMockup
      variant="hero"
      data={HERO_DOSSIER}
    />
  </section>
);

export const DemoCTA = ({ children }: { children: React.ReactNode }) => (
  <aside className="my-14 border-[1.5px] border-[var(--rule)] bg-[var(--paper-edge)] p-6 md:p-8">
    <p>{children}</p>
    <p className="font-mono !text-[11px] uppercase tracking-[0.1em] text-[var(--ink-soft)]">
      {DEMO_MINUTES} minutes · a live Della call for your practice area
    </p>
    <CTAButton primary>Book a demo</CTAButton>
  </aside>
);

// Shared missed-call section, mirroring calldella.com's MissedCallSection: the same calculator on
// every sales page. `matter` tunes the wording; `intro` adds a page-specific line; the formula never changes.
export const MissedCallSection = ({
  slug,
  heading = 'What are missed calls costing your firm?',
  matter = 'case',
  intro,
  example = DEFAULT_EXAMPLE,
}: {
  slug: string;
  heading?: string;
  matter?: string;
  intro?: React.ReactNode;
  example?: MissedCallExample;
}) => (
  <section id="missed-call-cost" className="scroll-mt-24">
    <h2>{heading}</h2>
    <p>
      {intro && <>{intro} </>}The cost of a missed call is the fee from the {matter} that caller would have signed. Work it out for your own
      firm: <strong>missed calls a month &times; share that are new matters &times; your sign rate &times; your average fee</strong>. The
      sliders start on example figures. Move them to your own numbers.
    </p>
    <MissedCallCalculator example={example} />
    <p>
      For the method and what to count as a missed call, see the{' '}
      <a href={calldella('/operations/missed-call-cost-calculator', campaign(slug), 'calculator')}>full missed-call cost calculator on calldella.com</a>.
    </p>
  </section>
);
