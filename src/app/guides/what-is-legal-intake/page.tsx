import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/data/pages';
import { ArticleLayout } from '@/components/ArticleLayout';
import { FAQ } from '@/components/FAQ';
import { CTAButton } from '@/components/CTAButton';
import { Source, Table } from '@/components/Page';
import { ALERTS, OBJECTIONS, SPANISH_AREAS, SRC } from '@/lib/copy';
import { callmaren } from '@/lib/utm';

const SLUG = '/guides/what-is-legal-intake';
const CAMPAIGN = 'guides-what-is-legal-intake';

export const metadata: Metadata = pageMeta(SLUG);

const faq = [
  { q: 'What is the difference between legal intake and a consultation?', a: 'Intake collects the facts and screens the matter; the consultation is where an attorney gives an opinion on the case. Intake can be handled by staff or a service, because it involves no legal advice. The consultation cannot be handed off that way. Keeping the two apart protects the firm, and a clean intake makes the consultation shorter because the attorney starts with the facts already on the page.' },
  { q: 'What questions should a legal intake cover?', a: "The caller's name and best callback number, who the matter concerns, what happened and when, where it happened, and whether anyone already represents them. Then the practice-area questions: injuries and insurance for personal injury, charges and custody for criminal defense, status and deadlines for immigration. Finish with urgency, because a deadline or a court date changes who should call back and how fast." },
  { q: 'How fast should a firm follow up after intake?', a: 'As soon as an attorney can make a sensible call, and the same day where a deadline or custody is involved. The intake record should say which matters can wait for the morning and which cannot. A caller who has told their story once and then heard nothing may sign elsewhere, so set a callback standard for the team and check the intake log against it every week.' },
  { q: 'Is a legal intake specialist the same as a receptionist?', a: 'No. A receptionist answers the phone, greets visitors and passes on messages for everyone in the firm. A legal intake specialist works through the questions a new matter needs, judges urgency and hands the attorney a screened file. Some firms combine the two roles during the day. After hours the difference matters most, because a message taken at 9pm leaves the whole intake waiting for the morning.' },
  OBJECTIONS.bar,
  OBJECTIONS.person,
];

export default function WhatIsLegalIntake() {
  return (
    <ArticleLayout
      eyebrow="GUIDE · LEGAL INTAKE"
      title="What is legal intake, and who should do it?"
      slug={SLUG}
      author="Andy Norman"
      date="2026-11-22"
      breadcrumbs={[
        { name: 'Guides', href: '/guides' },
        { name: 'What is legal intake?', href: SLUG },
      ]}
      citations={[SRC.obj2025, SRC.lmnc2019]}
      tldr={
        <p className="m-0">
          Legal intake is the first conversation between a law firm and a prospective client: collecting the facts, screening the matter
          against the firm&apos;s criteria and deciding who calls back. A caller who reaches voicemail can ring the next firm on the list.
          In Clio&apos;s 2024 secret-shopper study, only 40% of law firms answered the phone.<Source src={SRC.obj2025} />
        </p>
      }
    >
      <h2>What is legal intake?</h2>
      <p>
        Legal intake is everything that happens between a prospective client&apos;s first contact and the firm&apos;s decision to take or
        decline the matter. On the first call that means four jobs. Identify the caller and the person the matter concerns. Collect the
        facts the practice area needs: for an injury, the incident date, place, injuries and insurance; for an arrest, the charges, the
        holding facility and the next court date. Screen the matter against the firm&apos;s criteria, including the statute of limitations
        and any existing representation. Then route it: book a consultation, flag it for an attorney, or decline it politely and say why
        the firm can&apos;t help. Intake is not the consultation, and it is not legal advice. The person taking intake gathers facts and
        sets expectations; an attorney decides whether the firm takes the case. A good intake leaves the attorney able to decide without
        a second call to ask the same questions again.
      </p>

      <h2>What does a legal intake specialist do?</h2>
      <p>
        A legal intake specialist is the person, or the service, whose job is the first call. The role sits between reception and the
        attorneys. A receptionist answers and passes messages; an intake specialist works through a structured set of questions for the
        practice area, records the answers and judges how urgent the matter is. In a personal injury firm that might mean spotting a
        statute of limitations that runs out next month. In a criminal defense firm it means knowing that a client in custody needs a
        call before the bond hearing, not after it. Intake specialists also manage the caller. People ring law firms after a crash, an
        arrest or a detention, often frightened and sometimes in a hurry. The specialist keeps them calm, gets the facts in order and
        tells them honestly what happens next. Many firms also give the role the follow-up calls and the handoff into case management.
      </p>

      <h2>Why does the first call matter so much?</h2>
      <p>
        Because the caller is still deciding. A prospective client who reaches voicemail is usually still looking at the search results,
        and the next firm on the page is one tap away. The research on how firms handle that call is not flattering. An American Bar
        Association Law Practice Division study of calls to law firms found fewer than 10% of callers reached a lawyer, 32% went to
        voicemail and 42% waited three days or more for a reply.<Source src={SRC.lmnc2019} /> Clio&apos;s 2024 secret-shopper study found
        only 40% of firms answered at all.<Source src={SRC.obj2025} /> Every unanswered call is marketing money already spent: the ad,
        the referral or the years of reputation that made the phone ring. Intake is where that spend either becomes a client or leaks
        away, and the first call is the easiest place to lose it.
      </p>

      <h2>Should your firm keep intake in-house, outsource it or split the hours?</h2>
      <p>
        Most firms end up with one of three setups, and the right one depends on call volume and the hours the phone rings. In-house
        intake gives the firm full control and the deepest knowledge of its own criteria, but it costs a salary and still stops when the
        team goes home. Outsourced intake covers more hours for less money, but quality varies widely: some services take a full intake,
        many take only a name and a number. A split keeps daytime intake with the team that knows the firm and hands nights, weekends and
        holidays to a service built for it. For most small and mid-size firms the split is where the numbers work, because the costly gap
        is the evening and the weekend, not the middle of a Tuesday. Whatever you choose, ask to see what lands on the attorney&apos;s desk
        the next morning before you sign anything.
      </p>
      <Table
        caption="Three ways to staff legal intake"
        head={['Setup', 'Good at', 'Watch for']}
        rows={[
          ['In-house intake team', 'Knowledge of the firm, control, follow-up', 'Salary cost; stops when the office closes'],
          ['Outsourced intake service', 'Hours covered, cost per call', 'Scripts vary; many take messages, not intake'],
          ['Split: your team by day, a service after hours', 'Coverage without a night shift', 'Two handoffs to manage; check the morning file'],
        ]}
      />
      <p>
        If you are weighing <Link href="/legal-intake-service">outsourcing legal intake</Link>, that page lists the questions to ask a
        provider before you sign. For the difference between a message service and an intake service, see{' '}
        <Link href="/legal-answering-service">what a legal answering service does</Link>, and for prices, see{' '}
        <Link href="/cost">what a legal answering service costs</Link>.
      </p>

      <h2>Where does Maren fit?</h2>
      <p>
        Maren is an after-hours intake specialist for law firms: personal injury, criminal defense and immigration. She covers nights,
        weekends and holidays, which is the split setup above with the evening shift handed to her. She answers in your firm&apos;s name,
        works through the intake for the practice area, scores urgency and files a dossier with the recording and transcript before 7am.
        Urgent matters reach the attorney on call by {ALERTS} straight away. Callers on {SPANISH_AREAS.join(' and ')} intake can be taken
        in English or Spanish. She never gives legal advice, quotes fees or tells a caller the firm has taken the case; the decisions stay
        with you. Your team takes the morning. Book a demo and we run a live intake call for your practice area while you listen,
        then walk you through the dossier she files. For intake checklists by practice area, see the{' '}
        <a href={callmaren('/intake-playbook', CAMPAIGN, 'body-playbook')}>intake playbook on callmaren.com</a>.
      </p>
      <CTAButton primary large>Book a demo</CTAButton>

      <FAQ items={faq} heading="Questions about legal intake" eyebrow="Asked by firms" />
    </ArticleLayout>
  );
}
