// Post-build checks on out/: copy rules, phone numbers, UTMs, FAQ schema = visible text, descriptions.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'out';
const BANNED = ['leverage', 'seamless', 'robust', 'cutting-edge', 'revolutionary', 'solutions', 'game-changer', 'unlock', 'ai-powered', 'next-generation'];
const UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];

const files = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return f.startsWith('_') ? [] : files(p);
    return (/\.html$/.test(f) && !/^(404|_not-found)\.html$/.test(f)) || /^(llms.*|robots)\.txt$/.test(f) ? [p] : [];
  });

const decode = (s) =>
  s.replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

const visible = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');

const errors = [];
const fail = (f, msg) => errors.push(`${f}: ${msg}`);
const words = (s) => s.trim().split(/\s+/).length;

for (const f of files(OUT)) {
  const raw = readFileSync(f, 'utf8');
  const isHtml = f.endsWith('.html');
  const text = isHtml ? visible(raw) : raw;
  // Hostnames and paths (e.g. ruby.com/solutions/...) are source labels, not copy.
  const copy = text.replace(/\b[\w-]+(\.[\w-]+)+(\/[\w./-]*)?/g, ' ');

  if (/tel:/i.test(raw)) fail(f, 'tel: link');
  const phone = text.match(/(\+?1[\s.-]?)?\(?\b\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/);
  if (phone) fail(f, `phone number "${phone[0]}"`);
  if (/—|&mdash;/.test(raw)) fail(f, 'em dash');
  const bang = copy.match(/.{0,30}!.{0,10}/);
  if (bang) fail(f, `exclamation mark "${bang[0]}"`);
  for (const w of BANNED) if (new RegExp(`\\b${w}\\b`, 'i').test(copy)) fail(f, `banned word "${w}"`);
  if (raw.includes('TODO(')) fail(f, 'TODO( left in');
  if (!isHtml) continue;

  for (const [, href] of raw.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const u = decode(href);
    if (/^https?:\/\/(www\.)?calldella\.com/.test(u)) {
      const q = new URL(u).searchParams;
      const missing = UTM.filter((k) => !q.get(k));
      if (missing.length) fail(f, `calldella link without ${missing.join(', ')}: ${u}`);
    }
  }

  const desc = raw.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) fail(f, 'no meta description');
  else if (decode(desc).length < 140 || decode(desc).length > 160) fail(f, `meta description ${decode(desc).length} chars`);

  if ((raw.match(/<h1[\s>]/g) ?? []).length !== 1) fail(f, 'not exactly one h1');

  for (const [, json] of raw.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(json);
    if (/"@type":"(Review|AggregateRating)"/.test(json)) fail(f, 'review schema');
    for (const node of data['@graph'] ?? [data]) {
      if (node['@type'] !== 'FAQPage') continue;
      const n = node.mainEntity.length;
      if (n < 5 || n > 8) fail(f, `${n} FAQs (want 5-8)`);
      for (const q of node.mainEntity) {
        const a = q.acceptedAnswer.text;
        if (!text.includes(a)) fail(f, `FAQ answer not visible verbatim: "${a.slice(0, 50)}..."`);
        if (!text.includes(q.name)) fail(f, `FAQ question not visible: "${q.name}"`);
        if (words(a) < 40 || words(a) > 80) fail(f, `FAQ answer ${words(a)} words: "${q.name}"`);
      }
    }
  }

  const answer = raw.match(/class="answer-block[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/)?.[1];
  if (answer && (words(visible(answer)) < 40 || words(visible(answer)) > 60)) fail(f, `answer block ${words(visible(answer))} words`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log('check: all pages pass');
