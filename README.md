# Dr. Frank-Valere Yussa — Website

Next.js 14 site for Dr. Frank-Valere Yussa, PhD (corporate lawyer, economist,
investment banker).

## Editing content

- **Email, social links, languages, regions, testimonials:** `lib/site.ts`.
  Social icons appear automatically once a link is filled in; the testimonials
  section appears on the homepage once at least one testimonial is added.
- **Page text:** each page lives in `app/<page>/page.tsx` (homepage: `app/page.tsx`).
- **Colours and typography:** design tokens at the top of `app/globals.css`.
- **Photos:** `public/images/`. All images are stored locally; nothing is
  loaded from the old WordPress site.

Fonts (Libre Caslon and Hanken Grotesk) are installed as npm packages and
served from the site itself.

## Contact form (email delivery)

Messages are sent with [Resend](https://resend.com) (free tier: 3,000 emails
a month). In Coolify → the application → Environment Variables, add:

| Variable | Required | Value |
|---|---|---|
| `RESEND_API_KEY` | yes | API key from resend.com → API Keys |
| `CONTACT_TO_EMAIL` | no | Inbox that receives messages (defaults to the email in `lib/site.ts`) |
| `CONTACT_FROM_EMAIL` | recommended | e.g. `Frank Yussa Website <contact@frankyussa.com>` — requires verifying the domain in Resend |

Without `CONTACT_FROM_EMAIL`, Resend's test sender is used, which can only
deliver to the email address you signed up to Resend with. Visitors receive
an automatic confirmation email only when `CONTACT_FROM_EMAIL` is set.

Until `RESEND_API_KEY` is set, the form tells visitors to email directly
rather than pretending the message was sent.

## Local development

```bash
export npm_config_legacy_peer_deps=true
npm ci
npm run dev
```

`package-lock.json` is committed on purpose: the Dockerfile uses `npm ci`,
which requires it to match `package.json`.

## Deploying on Coolify

1. Application from this GitHub repo, build pack **Dockerfile**.
2. Exposed port `3000`.
3. Add the contact-form environment variables above.
