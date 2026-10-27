# Daniel Danuwar — Personal Digital Headquarters

> *"I build things, explore ideas, and question how the digital world works."*

A production-grade, dark editorial personal website and digital headquarters for **Daniel Danuwar** — independent developer, AI & machine learning enthusiast, and creative technologist.

Built with a **Dark Digital Editorial** design aesthetic combining Swiss editorial typography, minimalist brutalism, cybernetic interface accents, and restrained micro-animations.

---

## ✦ System Overview

- **Custom Domain:** [`https://danieldanuwar.com.np`](https://danieldanuwar.com.np)
- **Deployment Platform:** GitHub Pages via dedicated GitHub Actions CI/CD workflow
- **Timezone Anchor:** `Asia/Kathmandu` (NPT, UTC+5:45)
- **Status Indicator:** `OPEN TO NEW IDEAS`

---

## ✦ Architecture & Technology Stack

- **Core Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling:** [Vite 5](https://vite.dev/)
- **Styling Architecture:** Modular CSS custom properties (`variables.css`, `base.css`, `previews.css`, `editorial.css`)
  - Near-black editorial background (`#08090B`)
  - Elevated surfaces (`#111318`, `#161922`)
  - Electric lime accent (`#C7FF65`)
  - Muted borders (`rgba(255, 255, 255, 0.09)`)
  - Space Grotesk, Inter, and JetBrains Mono typography
- **Visuals & Motion:** Bespoke local HTML5 Canvas orbital constellation, CSS transitions, full `prefers-reduced-motion` compliance
- **Icons:** Lightweight, selective icons via `lucide-react` and custom SVG components

---

## ✦ Featured Projects Catalog

Every project is equipped with an original, interactive visual preview component:

1. **PharmacyApp** (`OFFLINE-FIRST SOFTWARE`)
   - *Stack:* C# · .NET · Avalonia UI · SQLite
   - *Preview:* Desktop pharmacy management UI featuring live inventory search, stock status badges, and rapid dispensing queue.
2. **NewsLens** (`MEDIA INTELLIGENCE`)
   - *Stack:* React · Python NLP · Media APIs · Data Viz
   - *Preview:* Parallel multi-source comparison feed with fact vs. editorial framing spectrum overlay.
3. **VoiceLab** (`AI AUDIO EXPERIMENTS`)
   - *Stack:* Python · PyTorch · Audio Processing · Machine Learning
   - *Preview:* Neural audio workstation with animated waveform canvas, frequency meters, and pitch/timbre sliders.
4. **Neovicon** (`GENERATIVE MEDIA`)
   - *Stack:* Generative AI · Prompt Engineering · Video Toolchains · Python
   - *Preview:* Cinematic production board with scene sequences, camera vectors, and prompt parameters.
5. **Melodix** (`MOBILE APPLICATIONS`)
   - *Stack:* Kotlin · Android · Material 3 · Media3 · Clean Architecture
   - *Preview:* Sleek Android music player interface with rotating disc aesthetic, scrubber, and upcoming queue drawer.
6. **Developer Experiments** (`OPEN SOURCE & EXPERIMENTS`)
   - *Stack:* TypeScript · Canvas / WebGL · Node.js · Micro-tools
   - *Preview:* Interactive terminal emulator with prompt (`daniel@hq:~$`) and executable commands (`ls`, `manifesto`, `bench`, `tech`, `clear`).

---

## ✦ Beyond the Code & Notes

- **Beyond the Code:** 4 pillars exploring strategy, epistemology, perception, and art:
  - *Chess* (Pattern recognition & forward calculation)
  - *Philosophy* (First-principles reasoning & epistemology)
  - *Psychology* (Mental models & human-computer interaction)
  - *Creative Experimentation* (Generative media & acoustic synthesis)
- **Notes in Progress:** Working theses and investigation outlines covering AI development tooling, limited-hardware computing, news framing, and offline-first software architectures.

---

## ✦ Easy Configuration

All personal information, links, and contact channels are centralized in [`src/data/siteConfig.ts`](src/data/siteConfig.ts):

```typescript
export const siteConfig = {
  name: "Daniel Danuwar",
  role: "Independent Developer · Creative Technologist",
  domain: "https://danieldanuwar.com.np",
  email: "contact@danieldanuwar.com.np",
  github: "https://github.com/danieldanuwar",
  timezone: "Asia/Kathmandu",
  timezoneLabel: "NPT (UTC+5:45)",
  availability: {
    status: "OPEN TO NEW IDEAS",
    description: "Available for curious discussions, challenging problems & open-source exploration"
  },
  motto: "The best way to understand an idea is to build something with it."
};
```

---

## ✦ Local Development

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/neovicon/danieldanuwar.com.np.git
cd danieldanuwar.com.np

# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build & Preview
```bash
# Compile TypeScript and bundle production assets to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## ✦ GitHub Pages Deployment

The repository includes a production-ready GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) configured for custom domain `danieldanuwar.com.np`.

### Repository Settings to Enable Pages:
1. Go to your repository on GitHub: `Settings` → `Pages`.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Under **Custom domain**, ensure `danieldanuwar.com.np` is configured with HTTPS enabled.
4. Push to `main` branch. The automated action will test, build, and deploy the site automatically.

---

## ✦ License

Crafted independently by Daniel Danuwar.
Open-source under the MIT License.
