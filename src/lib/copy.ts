// Copy strings built from plans.ts and FLAGS, so a price or flag change reaches every page.
import { FLAGS, OVERAGE_PER_MINUTE, planByID, formatPrice } from './plans';
import type { Citation } from './schema';

export const SOLO = planByID('solo');
export const PRACTICE = planByID('practice');
export const GROUP = planByID('group');

export const ALERTS = (['email', FLAGS.smsAlerts && 'SMS', FLAGS.slackAlerts && 'Slack'].filter(Boolean) as string[]).join(' and ');
export const OVERAGE = `$${OVERAGE_PER_MINUTE.toFixed(2)}`;

export const SPANISH_AREAS = [
  FLAGS.spanishPI && 'personal injury',
  FLAGS.spanishCriminal && 'criminal defense',
  FLAGS.spanishImmigration && 'immigration',
].filter(Boolean) as string[];

// "Solo is $329 a month with 300 minutes, built for solo lawyers. Practice is ..."
export const PRICE_ANSWER = `${SOLO.name} is ${formatPrice(SOLO)} a month with ${SOLO.minutes} minutes, built for solo lawyers. ${PRACTICE.name} is ${formatPrice(PRACTICE)} a month with ${PRACTICE.minutes} minutes. Both include the Call Della dashboard, urgent-call ${ALERTS} alerts and a morning brief by 7am. ${GROUP.name} is priced to your volume. Extra minutes are ${OVERAGE} each. Month-to-month, no setup fee.`;

export const FROM_PRICE = `From ${formatPrice(SOLO)} a month`;

export const forwardText = (opening: string) =>
  `${opening} Della, from Call Della, answers them in our name, takes the full intake and has a dossier on our desks by dawn, with urgent cases sent to the attorney on call. ${FROM_PRICE} with the dashboard and alerts included, month-to-month. See a demo: virtualreceptionistforlawyers.com`;

// Sources fetched and read on 25 Oct 2026. Pages quote only what each source says.
export const SRC = {
  obj2025: {
    name: 'Answering the Call: Why Responsiveness Is Critical for Law Firm Success',
    url: 'https://www.okbar.org/answering-the-call-why-responsiveness-is-critical-for-law-firm-success/',
    publisher: 'Oklahoma Bar Journal',
    year: '2025',
  },
  lmnc2019: {
    name: 'How Your Telephone is Costing You Clients',
    url: 'https://www.lawyersmutualnc.com/blog/how-your-telephone-is-costing-you-clients',
    publisher: 'Lawyers Mutual NC',
    year: '2019',
  },
} satisfies Record<string, Citation>;

// Objection answers shared by the service pages (40 to 80 words each, verbatim in FAQ schema).
export const OBJECTIONS = {
  price: { q: 'What does Della cost?', a: PRICE_ANSWER },
  person: { q: 'Will callers mind speaking to an AI?', a: "Della introduces herself by name, speaks calmly and asks one question at a time. If a caller asks whether she's an AI, she tells them. Every call is recorded, so you can hear exactly how each caller was treated. Book a demo and judge the conversation for yourself." },
  bar: { q: 'Is this allowed under bar rules?', a: "Della never gives legal advice, never quotes fees and never implies the firm has taken the case. She collects facts, and you decide what happens next. Every call opens with a recording disclosure set for your state. Call Della's compliance guides on calldella.com cover the detail, including ABA Formal Opinion 512 on lawyers' use of AI." },
  software: { q: 'Does it work with our case management software?', a: "Every call reaches you as a dossier in the Call Della dashboard, so Della works alongside any case management system. There is no direct Clio, MyCase or Filevine integration today. The Group plan includes a CRM webhook that can pass each dossier to your own system, and the demo is a good place to ask which fields you need." },
  forwarding: { q: 'How do calls reach Della?', a: "You forward your office line to Della after hours, when nobody answers, or both. Your number doesn't change. Setup is short: answer a few questions about your practice, get your own Della number, make a test call, then switch on forwarding when you are ready to go live." },
};
