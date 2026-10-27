export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string; // Optional: only if verified repository exists
  liveUrl?: string;   // Optional: only if verified deployment exists
  status: string;
  visualType: 'pharmacy' | 'newslens' | 'voicelab' | 'neovicon' | 'melodix' | 'experiments';
}

export const projects: Project[] = [
  {
    id: "pharmacy-app",
    number: "01",
    title: "PharmacyApp",
    category: "OFFLINE-FIRST SOFTWARE",
    tagline: "Resilient desktop pharmacy management & inventory system",
    description: "A desktop pharmacy management system designed to handle medicine inventory, sales, invoices, records, and day-to-day pharmacy workflows without relying on external cloud connectivity.",
    technologies: ["C#", ".NET", "Avalonia UI", "SQLite"],
    highlights: [
      "Desktop-first cross-platform architecture built with Avalonia UI",
      "Embedded SQLite database for fully offline-capable operations",
      "Comprehensive inventory tracking with low-stock alerts & expiry flags",
      "Rapid checkout, invoice generation & thermal receipt printing",
      "User role authentication, session isolation & structured audit logging",
      "Automated local snapshot backup & recovery pipeline"
    ],
    status: "DESKTOP PROTOTYPE",
    visualType: "pharmacy"
  },
  {
    id: "news-lens",
    number: "02",
    title: "NewsLens",
    category: "MEDIA INTELLIGENCE",
    tagline: "Comparative media framing & perspective analysis engine",
    description: "An exploration of how different news organizations frame the same event, helping readers compare coverage, identify perspectives, and investigate the context behind headlines.",
    technologies: ["React", "Python NLP", "Media APIs", "Data Viz"],
    highlights: [
      "Multi-source event clustering across diverse editorial desks",
      "Side-by-side headline & lead paragraph framing comparison",
      "Objective evidence spectrum separating claims from verified facts",
      "Linguistic tone & vocabulary emphasis radar breakdown",
      "Methodology-driven analysis without arbitrary bias labels",
      "Direct citation drill-down linking to primary reporting"
    ],
    status: "RESEARCH & PROTOTYPE",
    visualType: "newslens"
  },
  {
    id: "voice-lab",
    number: "03",
    title: "VoiceLab",
    category: "AI AUDIO EXPERIMENTS",
    tagline: "Neural voice conversion & audio synthesis research",
    description: "Experiments in voice conversion, audio processing, and AI-assisted media creation, exploring how machine learning can transform creative workflows.",
    technologies: ["Python", "PyTorch", "Audio Processing", "Machine Learning"],
    highlights: [
      "Deep neural acoustic feature extraction & timbre transfer",
      "Real-time spectrogram computation & spectral visualization",
      "Interactive pitch contour & formant modulation workbench",
      "Clean pipeline for audio cleaning, normalization & segmentation",
      "Exploration of latent representations in speech synthesis models"
    ],
    status: "LAB EXPERIMENT",
    visualType: "voicelab"
  },
  {
    id: "neovicon",
    number: "04",
    title: "Neovicon",
    category: "GENERATIVE MEDIA",
    tagline: "AI-assisted visual storytelling & digital character workflow",
    description: "An experimental creative workflow exploring AI-generated visual storytelling, digital characters, voice, and short-form video.",
    technologies: ["Generative AI", "Prompt Engineering", "Video Toolchains", "Python"],
    highlights: [
      "Visual character consistency pipeline across sequential scenes",
      "Dynamic storyboard framing & camera movement choreography",
      "Multi-modal asset orchestration (voice, audio score, imagery)",
      "Automated timeline assembly & subtitle synchronizer"
    ],
    status: "CREATIVE PIPELINE",
    visualType: "neovicon"
  },
  {
    id: "melodix",
    number: "05",
    title: "Melodix",
    category: "MOBILE APPLICATIONS",
    tagline: "Distraction-free Android music player concept",
    description: "A music-focused mobile application concept exploring clean interfaces, listening experiences, and practical Android development.",
    technologies: ["Kotlin", "Android", "Material 3", "Media3", "Clean Architecture"],
    highlights: [
      "Fluid gesture-driven player controls & queue management",
      "Zero-latency local audio playback with high-fidelity decoders",
      "Adaptive dark theme harmonizing with album color palettes",
      "Lightweight memory footprint tuned for battery efficiency"
    ],
    status: "MOBILE CONCEPT",
    visualType: "melodix"
  },
  {
    id: "developer-experiments",
    number: "06",
    title: "Developer Experiments",
    category: "OPEN SOURCE & EXPERIMENTS",
    tagline: "Algorithmic explorations, UI mechanics & automation scripts",
    description: "A growing collection of experiments in web development, interface design, automation, and practical software engineering.",
    technologies: ["TypeScript", "Canvas / WebGL", "Node.js", "Micro-tools"],
    highlights: [
      "Interactive physics simulations & particle grid experiments",
      "Lightweight CLI utilities for daily developer workflows",
      "Explorations in minimalist design systems & custom shaders",
      "Hands-on benchmark tests for web runtime performance"
    ],
    status: "ACTIVE EXPLORATION",
    visualType: "experiments"
  }
];
