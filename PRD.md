# Portfolio Site — PRD
**dhairyagulati.co.in**
Owner: Dhairya Gulati · Status: Live, documenting v1.2 · Last updated: 23 Jul 2026

## Why this document exists

This isn't a greenfield brief — the site's already live. I'm writing this after the fact because I keep making small changes without writing down why, and because I hand PRDs to clients as part of my own process (it's literally step 6 on this site). Worth having a real one for my own project instead of just Figma comments and vibes. Treat this as the spec I should've written in month one, cleaned up to match what actually shipped, plus what I still owe it.

## The job this site has to do

One thing: turn a stranger's five minutes of attention into a WhatsApp message. Not a newsletter signup, not a contact-us email that sits in an inbox for four days. A hotel owner an hour outside Saharanpur finds this through a referral or a late-night Google search, decides in under two minutes whether I'm legit, and either taps the WhatsApp button or closes the tab. Everything on the page serves that decision window.

Anything that doesn't move someone toward the WhatsApp tap is scope creep — including things I personally think are cool (case-study micro-animations, a filterable project grid, a dark/light toggle). All three got cut from v1 for exactly this reason.

## Who's landing here

Three types of visitor, roughly in order of frequency:

1. **The small business owner** — restaurant, hotel, gym, or salon owner, referred by someone or found via search, on their phone, deciding fast. The hero and the WhatsApp CTA are built for this person specifically.
2. **The bigger client or founder** — evaluating me for a heavier app project, probably on desktop, will actually read the case studies and check tech-stack tags before reaching out. Slower decision, higher ceiling.
3. **Other designers, curious people** — checking out process and tooling. Not who I'm optimizing for, but a fine side effect of the Process and Toolkit sections.

Groups 1 and 2 want different things from the same page — the phone-first quick-decider and the desktop due-diligence reader — and that's resolved by putting the WhatsApp CTA in the hero before anyone has to scroll, while still giving group 2 full case-study depth further down. Deliberate trade-off, not an oversight.

## What's actually on the page (v1.2, current)

**Hero** — name, one-line positioning ("Crafting Apps That Scale Local Businesses"), three trust numbers (10+ live apps, 99% satisfaction, Figma UI/UX master), two CTAs — scroll to Explore Portfolio, and a direct WhatsApp link with a pre-filled message — plus rotating project thumbnails.

**About** — positioning statement, quick-fact grid: education (Chitkara University, Chandigarh), location (Saharanpur, UP — available worldwide), target sectors, design focus.

**Projects** — four case studies:
- Boutique Hotel Operations Manager (room management + check-in, 15–40 room hotels)
- Power Bank IoT Rental App (scan-to-unlock for hardware-connected kiosks)
- Artisan Handloom Storefront (mobile-first store connecting weaving clusters to retail buyers)
- Spice Bistro Restaurant System (table ordering + reservation management)

Each card carries a tech-stack tag list and two link types: "View Breakdown" and "Developer Spec."

**Services** — seven tiles: Mobile App Design, UI/UX Architecture, Figma Design Systems, Dashboard & Analytics, Restaurant App Systems, Gym & Fitness Apps, Local Business Digital Storefronts.

**Process** — six numbered steps, Discovery through Developer Handoff, each with a one-line summary and a supporting detail.

**Toolkit** — software (Figma, Framer, Adobe XD, Illustrator, Photoshop) and expertise tags (design systems, IA, conversion optimization, usability testing).

**Testimonials** — three client quotes with name and role, one citing a hard number (30% increase in table-booking conversions for The Spice Bistro).

**Contact** — form with Name, Email, Business/Brand Name, a Project Type dropdown, and Details, which routes into a WhatsApp message rather than a backend or inbox.

## What this site is deliberately not doing

- **No blog.**
- **No CMS.** Content is hardcoded into the page.
- **No e-commerce, no payments, no client login.**
- **No multi-language version.**

## Success metrics

- WhatsApp click-throughs, hero CTA vs. contact-form CTA
- Form submissions by Project Type
- Inquiry-to-paid-client rate, tracked manually for now

## Version history

- v1.0 — hero, about, three case studies, contact form
- v1.1 — added Services and Process
- v1.2 — added Testimonials and Toolkit (current)
