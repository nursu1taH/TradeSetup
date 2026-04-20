# TradeSetup

TradeSetup is a responsive React landing page for a beginner-focused trading education product. It presents the product promise, core learning features, a dashboard-style trade setup preview, trust messaging, testimonials, contact links, and an educational risk disclaimer.

The app is built with Vite and is configured for GitHub Pages deployment.

## Features

- Responsive single-page layout with sticky navigation and mobile menu toggle
- Hero section for the TradeSetup offer: step-by-step trading education without risking real money
- Dashboard preview using the bundled EUR/USD momentum chart asset
- Core feature cards for beginner lessons, trade examples, practice simulation, and strategy building
- "How it works" section with a three-step learning path
- Trust section with learner stats, trust points, and preview testimonials
- Footer with product summary, navigation links, contact links, social links, and trading risk disclaimer

## Tech Stack

- React 18
- Vite 5
- CSS modules are not used; styling lives in a single global stylesheet
- GitHub Actions for GitHub Pages deployment

## Project Structure

```text
.
├── .github/workflows/deploy.yml      # GitHub Pages build and deploy workflow
├── index.html                        # App shell, metadata, fonts, and root element
├── package.json                      # Scripts and dependencies
├── src/
│   ├── App.jsx                       # Main landing page UI and content
│   ├── main.jsx                      # React entry point
│   ├── styles.css                    # Global responsive styling
│   └── assets/
│       └── eurusd-momentum-chart.svg # Dashboard preview chart asset
└── vite.config.js                    # Vite config with GitHub Pages base path handling
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally for review.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

On pushes to `main`, the workflow:

1. Checks out the repository.
2. Sets up Node.js 20 with npm caching.
3. Installs dependencies with `npm ci`.
4. Builds the site with `npm run build`.
5. Uploads `dist/` as a GitHub Pages artifact.
6. Deploys the artifact to GitHub Pages.

`vite.config.js` automatically sets the Vite `base` path to `/<repository-name>/` while running in GitHub Actions, which keeps built asset URLs compatible with project pages.

## Notes

- The content is currently a static marketing/landing experience; there is no backend or routing layer.
- Contact and social links are placeholders and should be replaced before a public launch.
- Trading involves risk. The app positions TradeSetup as an educational product, not financial advice.
