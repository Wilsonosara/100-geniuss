# 100 Genius

The 100 Genius website is a React single-page application for a technology learning
community. It presents the academy, its programmes, learning journey, mentors,
outcomes, FAQs, and an application flow for prospective learners.

This document is intended for the next developer working on the project. It records
the current implementation, the conventions used by the codebase, and the areas that
still need product or engineering attention.

## Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Application Structure](#application-structure)
- [Routing](#routing)
- [Programme Data](#programme-data)
- [Application Flow](#application-flow)
- [Shared UI and Motion](#shared-ui-and-motion)
- [Styling](#styling)
- [Assets and External Media](#assets-and-external-media)
- [Deployment](#deployment)
- [Development Guidelines](#development-guidelines)
- [Known Limitations](#known-limitations)
- [Suggested Next Steps](#suggested-next-steps)

## Project Overview

100 Genius helps learners build practical technology skills, gain real-world
experience, and prepare for career opportunities. The site is primarily a marketing
and admissions experience rather than a learning management system.

The application currently provides:

- A home page with programme, outcome, mentor, FAQ, and career call-to-action sections.
- Dedicated detail pages for each programme.
- An application form with client-side validation.
- About, mission, founders, and learning journey content.
- A seven-step "How It Works" learner journey.
- Full-screen programme and contact navigation panels.
- Responsive navigation, smooth scrolling, page transitions, and reveal animations.
- A floating WhatsApp/community call to action and a timed community modal.

## Technology Stack

- React 19
- React Router 7
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- Framer Motion and Motion for animation
- Lenis for smooth scrolling
- Axios for application submission
- Lucide React, React Icons, and Simple Icons for iconography
- ESLint 10 with React Hooks and React Refresh rules
- Geist package support and Google-hosted Arimo font usage

The project uses JavaScript and JSX rather than TypeScript. It is an ES module
application (`"type": "module"` in `package.json`).

## Getting Started

### Prerequisites

- Node.js with a version compatible with the installed Vite and React packages.
- npm, or another package manager capable of installing the lockfile-compatible
  dependency tree.

### Installation

From the repository root:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal. The development server supports
hot module replacement, so JSX and CSS changes should appear without a full restart.

### Verify a production build

```bash
npm run build
npm run preview
```

The build output is generated in `dist/`. The preview command serves that output
locally and is useful for checking production routing and asset loading.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run lint` | Run ESLint across the repository. |
| `npm run preview` | Serve the production build locally. |

There is no test runner configured at present. Build and lint are the available
automated checks.

## Application Structure

```text
.
├── public/                 Public files copied as-is by Vite
│   ├── images/              Public image assets
│   └── _redirects           Netlify-style SPA fallback
├── src/
│   ├── App.jsx              Router, global shell, and lazy page imports
│   ├── main.jsx             React entry point and BrowserRouter
│   ├── index.css            Tailwind import, theme tokens, utilities, animations
│   ├── faqData.js           Shared FAQ content
│   ├── programmeData.js     Programme catalogue and detail content
│   ├── assets/              Bundled images imported by components
│   ├── Components/          Shared layout, navigation, modal, and animation UI
│   ├── Pages/               Route-level pages and page sections
│   ├── service/             External service adapters
│   └── lib/                 Small shared utilities
├── index.html               HTML shell and metadata
├── vite.config.js           Vite plugins and `@` path alias
├── jsconfig.json            JavaScript path mapping
├── eslint.config.js         ESLint flat configuration
├── components.json          shadcn/ui configuration
└── vercel.json              Vercel SPA rewrite
```

### Entry points

`src/main.jsx` mounts the app inside `StrictMode`, creates the `BrowserRouter`,
installs `ScrollToTop`, and imports the global stylesheet.

`src/App.jsx` owns the route table and the global UI that appears around every
route: smooth scrolling, the top navigation, the floating WhatsApp icon, lazy-load
fallback, and page transitions.

The `@` alias resolves to `src`, so imports such as `@/Components/NavBar` are
preferred for paths that cross directory boundaries.

### Page composition

Most full pages use `AppLayout`, which provides a header slot, a main content area,
the shared footer, and a community modal that opens five seconds after mount.

The application page is a special case: its form owns its own community modal so it
can show application-specific success and error states.

## Routing

Routes are declared in `src/App.jsx` and most page modules are lazy-loaded.

| Path | Current behavior |
| --- | --- |
| `/` | Home page with programme and community content. |
| `/programme/:slug` | Detail page for one programme. |
| `/apply` | Learner application form. |
| `/about-us` | Mission, vision, founders, and academy story. |
| `/how-it-works` | Seven-step learner journey. |
| `/opportunities` | Coming-soon placeholder. |
| `/scholarships` | Coming-soon placeholder. |
| `/privacy-policy` | Coming-soon placeholder. |
| `/terms-of-use` | Coming-soon placeholder. |
| Any other path | Not-found page. |

### Navigation-only states

`/programmes` and `/contact` are not normal page routes. `NavBar` treats them as
full-screen sub-navigation states and renders `SubNavigationContainer` based on the
current pathname. Opening either state locks body scrolling. Closing it currently
navigates back to `/`.

The footer also contains links into these states. Keep this behavior in mind before
adding a normal route with either pathname.

### Programme URLs

Programme detail URLs use the `slug` field from `src/programmeData.js`:

```text
/programme/frontend-development
/programme/data-analysis
/programme/cybersecurity
/programme/full-stack-development
```

The application form accepts a query parameter to preselect a track:

```text
/apply?programme=data-analysis
```

## Programme Data

`src/programmeData.js` is the source of truth for programme catalogue and detail
content. Each programme currently contains:

- `slug`, `category`, `visual`, `title`, and `shortTitle`
- A marketing `description`
- `duration`, `level`, and `price`
- Hero copy and call-to-action text
- Four learning journey `steps`
- A list of `skills`
- Four programme `benefits`
- Programme-specific FAQs

The current catalogue is:

| Slug | Programme | Duration | Level | Price |
| --- | --- | --- | --- | --- |
| `frontend-development` | Frontend Development | 12 weeks | Beginner to Intermediate | NGN 300,000 |
| `data-analysis` | Data Analysis | 12 weeks | Beginner to Intermediate | NGN 350,000 |
| `cybersecurity` | Cybersecurity | 12 weeks | Beginner to Intermediate | NGN 350,000 |
| `full-stack-development` | Full-Stack Development | 16 weeks | Intermediate | NGN 500,000 |

When adding a programme, update the data object and the application track options
in `src/Pages/ApplyPage/ApplicationSection.jsx`. Also check any programme cards,
sub-navigation copy, FAQs, and social metadata that may list programmes separately.

## Application Flow

The form is implemented in `src/Pages/ApplyPage/ApplicationSection.jsx`.

### Fields

- First name
- Last name
- Email address
- Nigerian phone number
- Programme/track selection
- Privacy agreement checkbox

The form validates required values, minimum name length, email shape, Nigerian phone
format, programme selection, and privacy agreement before submitting.

The submitted payload is:

```js
{
  firstName,
  lastName,
  email,
  phone,
  programme,
  privacy
}
```

`submitApplication` sends an Axios `POST` request to the external email service:

```text
https://emailservice-qase.onrender.com/api/email/send
```

This URL is currently hard-coded in `src/service/submitApplication.js`. A future
production change should move it to a Vite environment variable, for example
`VITE_APPLICATION_API_URL`, and document the required deployment setting.

On a successful request, the form opens `CommunityModal` with the submitted data.
The form currently remains populated after submission. On failure, the error variant
is configured and logged, but the modal is not opened, so the user may not receive
visible failure feedback.

## Shared UI and Motion

Important shared components include:

- `NavBar`: fixed responsive navigation, mobile menu, active underline, and route-aware
  programme/contact sub-navigation.
- `Footer`: programme, company, contact, legal, and social links.
- `AppLayout`: common header, main content, footer, and timed community modal.
- `CommunityModal`: community join, application success, and error variants.
- `WhatsAppIcon`: floating WhatsApp action that responds to scroll state.
- `PageLoader`: fallback shown while lazy page modules load.
- `ScrollToTop`: resets scroll position when the pathname changes.
- `SubNavigationContainer`: full-screen programme/contact navigation panels.

Animation primitives live under `src/Components/animations/`:

- `SmoothScroll` initializes Lenis and respects reduced-motion preferences.
- `PageTransition` animates route changes.
- `FadeUp`, `PopIn`, and `TextReveal` provide viewport-based content reveals.

CSS animations, including the marquee and programme benefit animations, are defined
in `src/index.css`. Reduced-motion rules are present for the more prominent custom
animations. Preserve that accessibility behavior when adding motion.

## Styling

Tailwind CSS is loaded with the Vite plugin and imported from `src/index.css`.
There is no separate Tailwind config file.

The global stylesheet defines the brand tokens used throughout the app, including:

- Deep and dark green brand colors
- Light background and surface colors
- Foreground and muted text colors
- Informational and danger colors
- CTA, navigation, and hero gradients

Common global utilities include `.container`, `.section-spacing`,
`.section-safe-top`, `.grid-background`, `.cta-1`, and marquee/scrollbar helpers.

Use existing tokens and utility patterns before adding new one-off colors or global
rules. Keep responsive behavior mobile-first and test pages at narrow widths because
the navigation and full-screen overlays have different mobile layouts.

The HTML shell loads the Arimo font from Google Fonts. It also contains the default
description, Open Graph metadata, Twitter metadata, favicon reference, and hero image
preload.

## Assets and External Media

Use `src/assets/` for images imported into JSX so Vite can process and fingerprint
them. This directory currently contains the logo and grouped founder, mentor, and
student images.

Use `public/` for files that need stable root URLs, such as `/images/hero-img.webp`,
`/favicon.png`, and redirect configuration files.

Some page sections use remote images and external social or WhatsApp URLs. The About
page includes remote images explicitly marked as temporary placeholders. Treat remote
media as a deployment dependency and replace placeholder sources before relying on
them for a long-lived production experience.

## Deployment

The project is configured as a client-side rendered SPA. `vercel.json` rewrites all
requests to `/index.html`, allowing direct navigation to React Router paths on Vercel.
`public/_redirects` provides a similar fallback for hosts that support Netlify-style
redirect files.

A typical deployment sequence is:

```bash
npm install
npm run lint
npm run build
```

Deploy the generated `dist/` directory using the hosting provider's Vite or static
site integration. Confirm that the provider preserves SPA rewrites, serves public
assets from the site root, and permits the external application endpoint.

There are currently no application environment variables declared in the repository.
Do not commit credentials or private service URLs if the submission integration is
changed in the future.

## Development Guidelines

- Keep route-level composition in `src/Pages/` and reusable behavior in
  `src/Components/`.
- Prefer data-driven changes in `programmeData.js` for programme content.
- Reuse existing animation components and honor `prefers-reduced-motion`.
- Use the `@/` alias for imports from `src`.
- Keep form validation close to the form unless it becomes shared by another flow.
- Update route, navigation, and footer references together when adding or renaming a
  page.
- Run `npm run lint` and `npm run build` before opening a pull request.
- Avoid committing generated `dist/` output unless the deployment workflow explicitly
  requires it.

## Known Limitations

The following behaviors are present in the current implementation and should be
considered before extending the site:

1. `/programmes`, `/contact`, and `/community` are referenced in the UI but are not
	all registered as ordinary React Router routes. `/programmes` and `/contact` are
	handled as navigation overlays; `/community` has no corresponding route.
2. An unknown `/programme/:slug` can result in a runtime error because the detail page
	accesses programme properties before rendering a missing-programme state.
3. Programme Open Graph URL construction contains a literal interpolation expression
	instead of the programme slug.
4. Application failure feedback is incomplete and the application success state is
	set before the external request has completed.
5. The application endpoint is hard-coded and has no local mock or environment-based
	configuration.
6. The community modal's programme label mapping does not cover every programme slug.
7. `/opportunities` renders `ComingSoon`; a separate Opportunities page component
	exists but is not currently used by the route.
8. Some content and images depend on external services or temporary placeholder URLs.
9. There are no automated unit, integration, accessibility, or end-to-end tests.

## Suggested Next Steps

Priorities for future maintenance are:

1. Add a proper missing-programme state and test invalid programme slugs.
2. Move the application API URL into environment configuration and add a local mock
	or development-safe fallback.
3. Make application success and error states reflect the actual request lifecycle,
	including visible error feedback and a deliberate reset/confirmation behavior.
4. Decide whether programme/contact navigation should remain overlay states or become
	ordinary routes, then align all footer and navigation links.
5. Replace placeholder external media and review ownership, licensing, and uptime for
	all remote assets.
6. Add focused tests for routing, programme rendering, form validation, and submission
	success/failure states.
7. Add an accessibility pass covering keyboard navigation, focus management, modal
	behavior, reduced motion, and page metadata.

## Ownership Notes

The project is currently a frontend application with an external email submission
service. Changes to application delivery, admissions workflows, programme pricing,
legal pages, community links, or public brand content should be reviewed with the
product owner before release.
