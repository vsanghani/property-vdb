# Property VDB

An internal property search and data visualisation tool. Browse property deals, view listings on an interactive map, and export data — all in one place.

> **Internal use only** — not intended for public-facing deployment.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | [Next.js](https://nextjs.org) (App Router) | 16 |
| **Language** | TypeScript | 5 |
| **UI Library** | React | 19 |
| **Styling** | Tailwind CSS | 4 |
| **Animations** | Framer Motion | 12 |
| **Icons** | Lucide React | — |
| **Maps** | MapLibre GL + React Map GL | — |
| **Theming** | next-themes | — |
| **UI Primitives** | Radix UI (react-slot) | — |
| **Utilities** | clsx, tailwind-merge, class-variance-authority | — |
| **Linting** | ESLint (eslint-config-next) | 9 |
| **Deployment** | Vercel | — |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (fonts, theme provider)
│   ├── page.tsx          # Home / dashboard
│   ├── globals.css       # Global styles & Tailwind config
│   ├── deals/            # Property deals page
│   ├── map/              # Interactive map view
│   └── search/           # Property search page
├── components/           # Reusable UI components
│   ├── MapboxMap.tsx      # Map component (MapLibre GL)
│   ├── header.tsx         # App header / navigation
│   ├── footer.tsx         # App footer
│   ├── property-card.tsx  # Property listing card
│   ├── search-input.tsx   # Search input field
│   ├── export-button.tsx  # CSV/data export
│   ├── theme-provider.tsx # Dark/light theme wrapper
│   ├── theme-toggle.tsx   # Theme switcher button
│   └── ui/               # Shared primitives (button, etc.)
└── lib/                  # Shared utilities
    ├── api.ts            # API helper functions
    └── utils.ts          # General utility functions
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (bundled with Node)

### Install & Run

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Other Commands

| Command | Description |
|---|---|
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint checks |
