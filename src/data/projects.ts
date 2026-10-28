export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  implemented: string[];
  experimentalScope: string[];
  technologies: string[];
  githubUrl?: string; // Optional: only if verified repository exists
  liveUrl?: string;   // Optional: only if verified deployment exists
  demoNote: string;
  status: 'Prototype' | 'Research & Prototype' | 'Lab Experiment' | 'Creative Pipeline' | 'Mobile Concept' | 'Active Exploration';
  visualType: 'pharmacy' | 'newslens' | 'voicelab' | 'neovicon' | 'melodix' | 'experiments';
}

export const projects: Project[] = [
  {
    id: "pharmacy-app",
    number: "01",
    title: "PharmacyApp",
    category: "OFFLINE-FIRST SOFTWARE",
    status: "Prototype",
    tagline: "Resilient desktop pharmacy management & inventory prototype",
    description: "A desktop application concept designed to manage pharmacy medicine inventory, stock thresholds, and rapid checkout without requiring continuous internet connectivity.",
    problem: "Pharmacies in areas with intermittent internet access cannot afford checkout downtime. Cloud-dependent systems halt operations during network blackouts, risking stock errors and service disruption.",
    implemented: [
      "Cross-platform desktop application prototype architected with C# and Avalonia UI",
      "Embedded SQLite database using Write-Ahead Logging (WAL) for resilient local transactions",
      "Real-time medicine search, SKU lookup, dosage tracking, and automated low-stock warnings",
      "Rapid checkout queue and simulated POS dispensing cart with item validation"
    ],
    experimentalScope: [
      "Physical ESC/POS thermal receipt printer hardware driver integration",
      "Local multi-terminal database replication and encrypted backup snapshotting"
    ],
    technologies: ["C#", ".NET", "Avalonia UI", "SQLite"],
    demoNote: "Interactive desktop station simulation running live in the card preview below.",
    visualType: "pharmacy"
  },
  {
    id: "news-lens",
    number: "02",
    title: "NewsLens",
    category: "MEDIA INTELLIGENCE",
    status: "Research & Prototype",
    tagline: "Comparative media framing & editorial perspective analysis",
    description: "A research prototype exploring how multiple news organizations report the exact same event with contrasting headlines, vocabulary choices, and editorial angles.",
    problem: "Readers frequently encounter single-source news stories containing subtle editorial slant, making it difficult to separate objective facts from institutional framing.",
    implemented: [
      "Side-by-side headline and lead paragraph comparison interface",
      "Fact vs. editorial framing spectrum separating verified data from commentary",
      "Lexical tone radar highlighting vocabulary differences between news desks",
      "Primary source citation linking to allow readers to verify claims independently"
    ],
    experimentalScope: [
      "Automated multi-publisher RSS ingestion and real-time semantic clustering",
      "Fine-tuned Python NLP entity extraction pipeline"
    ],
    technologies: ["React", "Python NLP", "Media APIs", "Data Visualization"],
    demoNote: "Interactive comparative framing preview active in the card below.",
    visualType: "newslens"
  },
  {
    id: "voice-lab",
    number: "03",
    title: "VoiceLab",
    category: "AI AUDIO EXPERIMENTS",
    status: "Lab Experiment",
    tagline: "Neural voice conversion & acoustic synthesis research",
    description: "An experimental workbench investigating how deep neural representations can extract and modulate vocal timbre, pitch contours, and acoustic formants.",
    problem: "Traditional vocal editing alters pitch by distorting natural timbre, while deep neural audio conversion typically requires complex setups and expensive hardware.",
    implemented: [
      "Acoustic feature analysis and timbre transfer experiments using Python and PyTorch",
      "Interactive neural audio workstation interface with animated real-time waveform visualizer",
      "Dynamic sliders for pitch modulation, formant shifting, and spectral envelope inspection",
      "Audio preprocessing, spectrogram generation, and normalization routines"
    ],
    experimentalScope: [
      "Real-time low-latency neural vocoder synthesis on consumer-grade hardware",
      "Multi-speaker zero-shot voice conversion fine-tuning"
    ],
    technologies: ["Python", "PyTorch", "Audio Signal Processing", "Machine Learning"],
    demoNote: "Interactive neural audio workstation interface running live in the card below.",
    visualType: "voicelab"
  },
  {
    id: "neovicon",
    number: "04",
    title: "Neovicon",
    category: "GENERATIVE MEDIA",
    status: "Creative Pipeline",
    tagline: "AI-assisted visual storytelling & digital character workflow",
    description: "An exploratory workflow testing how generative image and video models can maintain character consistency across multi-scene narrative sequences.",
    problem: "Generative video tools frequently suffer from drift—changing character facial structures, clothing, and environment lighting between sequential shots.",
    implemented: [
      "Character prompt anchoring pipeline to preserve facial geometry across cuts",
      "Scene sequencing board with camera vector controls (Pan, Tilt, Dolly)",
      "Multi-modal prompt parameter workbench with seed and CFG scale management",
      "Structured storyboard timeline coordinating visual assets and audio cues"
    ],
    experimentalScope: [
      "Automated timeline stitching and synchronous AI voiceover alignment",
      "End-to-end automated video generation toolchain"
    ],
    technologies: ["Generative AI", "Python", "Prompt Engineering", "Video Toolchains"],
    demoNote: "Interactive storyboard and camera vector studio previewed in the card below.",
    visualType: "neovicon"
  },
  {
    id: "melodix",
    number: "05",
    title: "Melodix",
    category: "MOBILE APPLICATIONS",
    status: "Mobile Concept",
    tagline: "Distraction-free Android local music player concept",
    description: "A clean, distraction-free Android music player concept focused on local audio playback, battery efficiency, and tactile interface design.",
    problem: "Commercial streaming apps are cluttered with social feeds, recommendations, and heavy network tracking when users just want a lightweight player for their offline library.",
    implemented: [
      "Modern Android Material 3 player interface concept with rotating vinyl disc animation",
      "Interactive playback controls, progress scrubber, and upcoming track queue drawer",
      "Clean architecture UI state modeling applying Kotlin and AndroidX Media3 concepts",
      "High-contrast dark theme optimized for low battery consumption on OLED displays"
    ],
    experimentalScope: [
      "Native Android background playback service and system notification integration",
      "Custom audio equalizer and FLAC high-res decoding pipeline"
    ],
    technologies: ["Kotlin", "Android", "Material 3", "AndroidX Media3"],
    demoNote: "Interactive Android player mockup active in the card preview below.",
    visualType: "melodix"
  },
  {
    id: "developer-experiments",
    number: "06",
    title: "Developer Experiments",
    category: "OPEN SOURCE & EXPERIMENTS",
    status: "Active Exploration",
    tagline: "Interactive terminal, canvas physics & developer micro-tools",
    description: "A living sandbox of small-scale tools, canvas rendering tests, performance benchmarks, and browser terminal experiments.",
    problem: "Testing algorithms and interaction concepts inside large monolithic frameworks is slow and obscures fundamental browser runtime performance.",
    implemented: [
      "Functional in-browser terminal emulator with command parser and history buffer",
      "Executable commands: 'help', 'ls', 'bench' (1M vector iterations), 'manifesto', 'tech', 'clear'",
      "60fps HTML5 Canvas orbital particle simulation with cursor physics",
      "Lightweight performance test scripts and DOM benchmark utilities"
    ],
    experimentalScope: [
      "Expanded CLI developer utilities and standalone npm package publication"
    ],
    technologies: ["TypeScript", "HTML5 Canvas", "Node.js", "Web APIs"],
    demoNote: "Functional terminal emulator running directly inside the card below.",
    visualType: "experiments"
  }
];
