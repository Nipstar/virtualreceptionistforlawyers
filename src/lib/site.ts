// Per-site settings. This is the only file that differs between feeder repos (plus the pages).
import { calldella } from './utm';

export type NavLink = { href: string; label: string };

const cd = (path: string, label: string): NavLink => ({ href: calldella(path, 'footer', 'footer'), label });

export const SITE = {
  id: 'vr',
  name: 'Virtual Receptionist for Lawyers',
  domain: 'virtualreceptionistforlawyers.com',
  // Small line under the logo.
  tagline: 'BY CALL DELLA · LEGAL INTAKE',
  // Main navigation (desktop row and mobile drawer).
  nav: [
    { href: '/legal-answering-service', label: 'Legal answering service' },
    { href: '/24-7-answering-service', label: '24/7' },
    { href: '/ai-receptionist', label: 'AI receptionist' },
    { href: '/cost', label: 'Cost' },
    { href: '/best-legal-answering-services', label: 'Compare' },
    { href: '/about', label: 'About' },
  ] as NavLink[],
  // Optional "Guides" dropdown.
  guides: [
    { href: '/guides', label: 'All guides' },
    { href: '/guides/what-is-legal-intake', label: 'What is legal intake?' },
  ] as NavLink[],
  // Footer columns.
  footer: [
    {
      heading: 'This site',
      links: [
        { href: '/', label: 'Virtual receptionist for lawyers' },
        { href: '/legal-answering-service', label: 'Legal answering service' },
        { href: '/24-7-answering-service', label: '24/7 answering service' },
        { href: '/legal-intake-service', label: 'Legal intake services' },
        { href: '/ai-receptionist', label: 'AI receptionist for law firms' },
        { href: '/bilingual-answering-service', label: 'Bilingual answering service' },
        { href: '/cost', label: 'Answering service cost' },
        { href: '/best-legal-answering-services', label: 'Best legal answering services' },
        { href: '/guides', label: 'Guides' },
        { href: '/about', label: 'About' },
      ],
    },
    {
      heading: 'Call Della',
      links: [
        cd('/', 'calldella.com'),
        cd('/how-it-works', 'How it works'),
        cd('/pricing', 'Pricing'),
        cd('/personal-injury', 'Personal injury'),
        cd('/criminal-defense', 'Criminal defense'),
        cd('/immigration', 'Immigration'),
        cd('/security', 'Security'),
        cd('/compliance', 'Compliance guides'),
      ],
    },
  ] as { heading: string; links: NavLink[] }[],
};
