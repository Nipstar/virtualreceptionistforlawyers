import type { Metadata } from 'next';
import Link from 'next/link';
import { PAGES, pageMeta, formatDate } from '@/data/pages';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CTAButton } from '@/components/CTAButton';

const SLUG = '/guides';

export const metadata: Metadata = pageMeta(SLUG);

const guides = PAGES.filter((p) => p.path.startsWith(`${SLUG}/`));

const SERVICES = [
  { href: '/legal-intake-service', label: 'Legal intake services', note: 'what to ask a provider before you outsource the first call' },
  { href: '/legal-answering-service', label: 'Legal answering service', note: 'the three types, and what each leaves on your desk' },
  { href: '/24-7-answering-service', label: '24/7 answering service for lawyers', note: 'covering nights, weekends and holidays' },
  { href: '/cost', label: 'Legal answering service cost', note: 'published prices, checked and dated' },
  { href: '/best-legal-answering-services', label: 'Best legal answering services', note: 'a disclosed comparison on the same criteria' },
];

export default function GuidesHub() {
  return (
    <ArticleLayout
      eyebrow="GUIDES"
      title="Guides to legal intake and answering services"
      slug={SLUG}
      author="Andy Norman"
      date="2026-11-22"
      breadcrumbs={[{ name: 'Guides', href: SLUG }]}
      tldr={
        <p className="m-0">
          Plain guides for law firms on legal intake and answering services. Start with what intake is and who should do it, then compare
          the services that can take your calls when the office is closed. Every guide is dated, cites its sources and says plainly
          where Call Maren is ours.
        </p>
      }
    >
      <h2>Guides</h2>
      <ul>
        {guides.map((g) => (
          <li key={g.path}>
            <Link href={g.path}>{g.title.replace(/ \| Call Maren$/, '')}</Link>: {g.summary}. Updated{' '}
            <time dateTime={g.dateModified}>{formatDate(g.dateModified)}</time>.
          </li>
        ))}
      </ul>

      <h2>Before you hire anyone to take your calls</h2>
      <ul>
        {SERVICES.map((s) => (
          <li key={s.href}>
            <Link href={s.href}>{s.label}</Link>: {s.note}
          </li>
        ))}
      </ul>

      <CTAButton primary large>Book a demo</CTAButton>
    </ArticleLayout>
  );
}
