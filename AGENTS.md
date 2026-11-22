# AGENTS.md — jonathanmccallum-ur (Urdu mirror of jonathanmccallum.com)

Urdu mirror site. Same theme and design as the main site (Paper Light),
content translated into Urdu, meaning-first. Repo: streamjonathan/jonathanmccallum-ur.
Live (when approved): ur.jonathanmccallum.com. Proof: jonathanmccallum-ur.pages.dev.

## Mission

Mirror jonathanmccallum.com in Urdu — every article translated for meaning,
not word for word, in Jonathan's voice: plain short sentences, friendly, positive,
never preachy. An average person interested in Jesus, not an expert or theologian.

## Roles

- **Bobby (Muse) is the lead builder.** He coordinates, builds, pushes to GitHub
  and deploys to Cloudflare. He is the ONLY one who pushes or deploys.
- **Claude advises and reviews** translation quality. He does not push or deploy.
- **Helper Muses translate** one article at a time, drafts only.

## The one rule above all

**Never publish or alter live production assets without Jonathan's clear
permission.** The Urdu site goes live on ur.jonathanmccallum.com only when
he says so, after reading the pilot article(s). Drafts stay drafts until he
approves them. Work on a branch, never straight on main. Give Bobby a preview URL.

## Translation rules

- English repo (streamjonathan.github.io) is the source of truth. Articles are
  translated from the English Markdown, keeping the same date, slug, source_video
  and shareImage. Only the title and body are translated.
- Lewis quotations: use the published Urdu translation where one exists
  (cite it); otherwise translate fresh and mark it "translated for this site".
- Bible verses: use the exact text from the standard public-domain Urdu Bible (URD) by chapter and verse, and flag any verse that cannot be found there. Never re-translate from the English article.
- Names (never vary): یسوع, خدا, اصلان, نارنیا, ڈگوری, پولی, جیڈس, لیوس (سی ایس لیوس on first mention); Peter = پطرس. Book titles are transliterations (no published Urdu titles found): دی کرونیکلز آف نارنیا, دی لاسٹ بیٹل, دی میجیشنز نیفیو.
- Voice: Shahmukhi script, right-to-left. Plain, warm, honest; short sentences; "آپ" for the reader throughout, never "تم"; first person "میں"; no preaching.
- No emojis, no newsletter form, no links the English article does not have.
- Never invent facts, dates, links or details.

## Site facts

- Eleventy 3, Cloudflare Pages, Paper Light theme (Fraunces + Newsreader).
- No Ask chat and no note Worker on this site yet — search (Pagefind) works,
  Ask and notes come later. The Ask floating button and ask.js are removed.
- CSS is preloaded, not inlined (CSP blocks inline style). Bump the `?v=` query
  on any CSS/JS file you change.
