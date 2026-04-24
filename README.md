# Model Builder Landing Page

Responsive landing page built with Next.js, Tailwind CSS, and React-Toastify for the Proconomics Model Builder assignment.

## Stack

- Next.js App Router
- Tailwind CSS
- React-Toastify
- Lucide React

## Features

- Responsive hero and feature layout modeled from the provided design reference
- SEO-ready metadata, semantic heading structure, descriptive copy, and JSON-LD for product and FAQ sections
- Core Web Vitals-minded implementation with server-rendered content, minimal client-side code, and lazy-loaded toast UI
- Demo form with success and failure toast states
- Mock analytics event tracking with Google Analytics 4 support

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
```

## Analytics

If you want to send events to Google Analytics 4, set:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Events tracked

- newsletter_subscription_attempt
- newsletter_subscription_success
- newsletter_subscription_failure
- faq_cta_click
- header_cta_click
- herosection_cta_click
- some other events

## Demo Form Notes

- Submitting with a normal email triggers a success toast.
- Submitting with an email containing `fail` triggers the failure toast so both states can be tested quickly.
