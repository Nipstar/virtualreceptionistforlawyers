// Content manifest: one entry per URL. Titles, descriptions and dates live here only.
// Pages read metadata with pageMeta(); sitemap.ts and llms.txt are generated from it.
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/config';

export type PageEntry = {
  path: string;
  title: string; // full <title>, brand included where wanted
  description: string; // 140-160 chars
  primary: string;
  secondaries?: string[];
  section: 'core' | 'service' | 'guide' | 'compare' | 'legal';
  summary: string; // one line for llms.txt
  datePublished: string;
  dateModified: string;
  reviewer?: string;
  priority?: number;
};

const REVAMP = '2026-10-25';

export const PAGES: PageEntry[] = [
  { path: '/', title: 'Virtual Receptionist for Lawyers | Call Della', description: "Della answers your firm's calls after hours, qualifies every caller and has the dossier on your desk by dawn. An intake specialist, not a message service.", primary: 'virtual receptionist for lawyers', secondaries: ['live virtual receptionist for lawyers', 'legal intake virtual receptionist', 'virtual receptionist for law firms'], section: 'core', summary: 'What a virtual receptionist for lawyers does, and why Della takes the intake rather than a message', datePublished: REVAMP, dateModified: REVAMP, priority: 1.0 },
  { path: '/legal-answering-service', title: 'Legal Answering Service for Law Firms | Call Della', description: 'A legal answering service should do more than take messages. Della answers after hours, takes the full intake and flags urgent cases. Book a demo to hear her.', primary: 'legal answering service', secondaries: ['law firm answering service', 'answering service for lawyers', 'legal answering service for law firms', 'what is legal answering service'], section: 'service', summary: 'What a legal answering service is, the three types, and what to check before you sign', datePublished: REVAMP, dateModified: REVAMP, priority: 0.9 },
  { path: '/24-7-answering-service', title: '24/7 Answering Service for Lawyers | Call Della', description: 'A 24/7 answering service for lawyers covers the nights, weekends and holidays your office does not. Della takes the intake and alerts the attorney on call.', primary: '24 7 answering service for lawyers', secondaries: ['24 hour legal answering service', '24/7 legal answering service', 'after hours legal answering service', 'best after hours answering service for lawyers'], section: 'service', summary: 'Covering the hours a firm is closed, and how urgent calls reach the attorney on call', datePublished: REVAMP, dateModified: REVAMP, priority: 0.8 },
  { path: '/legal-intake-service', title: 'Legal Intake Services: Outsource the First Call | Call Della', description: 'Legal intake services take the first call for your firm and screen the matter. What a qualified intake contains, what stays with you, and how Della does it.', primary: 'legal intake services', secondaries: ['answering service with legal intake', 'legal intake service', 'legal intake phone services', 'outsource legal intake', 'legal intake companies', 'law firm intake services'], section: 'service', summary: 'Answering service against intake service, what a qualified intake contains and what stays with the firm', datePublished: REVAMP, dateModified: REVAMP, priority: 0.8 },
  { path: '/ai-receptionist', title: 'AI Receptionist for Law Firms | Call Della', description: 'What an AI receptionist for law firms can and cannot do on a legal call: no legal advice, recording disclosure, data handling, and when a person is better.', primary: 'ai receptionist for law firms', secondaries: ['ai receptionist for lawyers', 'ai answering service for lawyers'], section: 'service', summary: 'What an AI receptionist can and cannot do on a legal call, with the limits Della works within', datePublished: REVAMP, dateModified: REVAMP, priority: 0.8 },
  { path: '/bilingual-answering-service', title: 'Bilingual Legal Answering Service, English and Spanish | Call Della', description: 'A bilingual legal answering service for Spanish-speaking callers at night. Della takes immigration intake in English or Spanish today. The honest scope here.', primary: 'bilingual legal answering service', secondaries: ['bilingual law firm answering service', 'spanish legal answering service', 'affordable bilingual legal answering service'], section: 'service', summary: 'Spanish callers after hours, and the honest scope: Della takes Spanish on immigration intake only today', datePublished: REVAMP, dateModified: REVAMP, priority: 0.7 },
  { path: '/cost', title: 'Legal Answering Service Cost in 2026 | Call Della', description: 'What a legal answering service costs in 2026: per-minute, per-call and flat pricing, published prices checked and dated, and a missed-call sum you do yourself.', primary: 'legal answering service cost', secondaries: ['cost of attorney answering service', '24 hour legal answering service cost', 'law firm answering service pricing', 'legal intake service pricing', 'attorney answering service rates'], section: 'service', summary: 'Pricing models, published competitor prices with dates and links, and Della plans', datePublished: REVAMP, dateModified: REVAMP, priority: 0.8 },
  { path: '/best-legal-answering-services', title: 'Best Legal Answering Services for Law Firms (2026) | Call Della', description: 'A disclosed comparison of legal answering services: Call Della is ours. Every service judged on the same criteria, using published facts, checked and dated.', primary: 'best law firm answering service', secondaries: ['best attorney answering service', 'best virtual receptionist for law firms', 'best answering service for lawyers', 'best ai receptionist for law firms'], section: 'compare', summary: 'Disclosed comparison of Call Della, Smith.ai, Answering Legal, Posh and Ruby on the same criteria', datePublished: REVAMP, dateModified: REVAMP, priority: 0.8 },
  { path: '/about', title: 'About Call Della and the Team Behind Della | Call Della', description: 'Who built Della and why: Call Della is made by Antek Automation, founded by Andy Norman, for law firms that lose new clients to calls nobody answers at night.', primary: 'about call della', section: 'core', summary: 'Who built Della, who you contract with, and what Della will and will not do', datePublished: REVAMP, dateModified: REVAMP, priority: 0.5 },
  { path: '/guides', title: 'Guides to Legal Intake and Answering Services | Call Della', description: 'Plain guides for law firms on legal intake and answering services: what intake is, who should do it, and what to ask before you hire anyone to take your calls.', primary: 'legal intake guides', section: 'guide', summary: 'Guides on legal intake and answering services for law firms', datePublished: REVAMP, dateModified: REVAMP, priority: 0.5 },
  { path: '/guides/what-is-legal-intake', title: 'What Is Legal Intake, and Who Should Do It? | Call Della', description: 'What legal intake is, what a legal intake specialist does on the first call, and whether your firm should keep intake in-house, outsource it or split the hours.', primary: 'what is legal intake', secondaries: ['what is a legal intake specialist'], section: 'guide', summary: 'What legal intake is, what an intake specialist does, and who should do it', datePublished: REVAMP, dateModified: REVAMP, priority: 0.6 },
  { path: '/contact', title: 'Contact Call Della | Call Della', description: 'Ask Call Della about after-hours legal intake for your firm: practice areas, call volume, plans and setup. We reply by email, usually the same working day.', primary: 'contact call della', section: 'core', summary: 'Ask a question or request a callback by email', datePublished: '2026-10-31', dateModified: '2026-10-31', priority: 0.4 },
  { path: '/privacy', title: 'Privacy Policy | Call Della', description: 'The Call Della privacy policy: what we collect from callers and site visitors, how call recordings and transcripts are stored, and who can access them.', primary: 'privacy', section: 'legal', summary: 'Privacy policy', datePublished: '2026-05-01', dateModified: REVAMP, priority: 0.3 },
  { path: '/terms', title: 'Terms of Service | Call Della', description: 'The Call Della terms of service: plans, billing, minutes, acceptable use and the limits of the service. Della takes intake and never gives legal advice.', primary: 'terms', section: 'legal', summary: 'Terms of service', datePublished: '2026-05-01', dateModified: REVAMP, priority: 0.3 },
];

export const page = (path: string): PageEntry => {
  const p = PAGES.find((x) => x.path === path);
  if (!p) throw new Error(`No manifest entry for ${path}`);
  return p;
};

// Metadata for a page from the manifest. `absolute` keeps the title as written.
export const pageMeta = (path: string, extra: Partial<Metadata> = {}): Metadata => {
  const p = page(path);
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = '/og-default.png';
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: path },
    openGraph: { title: p.title, description: p.description, url, type: p.section === 'core' || p.section === 'service' ? 'website' : 'article', images: [{ url: image, width: 1200, height: 630, alt: p.title }] },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description, images: [image] },
    ...extra,
  };
};

// "25 October 2026" style for visible dates.
export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
