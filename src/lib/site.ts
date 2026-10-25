// Per-site settings. This is the only file that differs between feeder repos (plus the pages).
export type NavLink = { href: string; label: string };

export const SITE = {
  id: 'vr',
  name: 'Virtual Receptionist for Lawyers',
  domain: 'virtualreceptionistforlawyers.com',
  // Small line under the logo.
  tagline: 'BY CALL DELLA · LEGAL INTAKE',
  // Main navigation (desktop row and mobile drawer).
  nav: [] as NavLink[],
  // Optional "Guides" dropdown.
  guides: [] as NavLink[],
  // Footer columns.
  footer: [] as { heading: string; links: NavLink[] }[],
};
