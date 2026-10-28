export interface SkillGroup {
  category: string;
  tagline: string;
  skills: {
    name: string;
    description: string;
    projectEvidence: string;
    highlight?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    tagline: "Core syntax and runtimes for logic, models, and systems",
    skills: [
      {
        name: "Python",
        description: "Scripting, machine learning pipelines, PyTorch tensor workflows & audio signal analysis",
        projectEvidence: "VoiceLab, Neovicon",
        highlight: true
      },
      {
        name: "TypeScript & JavaScript",
        description: "Modern ES6+, browser APIs, strictly typed interfaces & asynchronous frontend state",
        projectEvidence: "Digital HQ, Developer Experiments, NewsLens",
        highlight: true
      },
      {
        name: "C#",
        description: "Desktop application architecture, object-oriented design & .NET runtime ecosystems",
        projectEvidence: "PharmacyApp",
        highlight: true
      },
      {
        name: "Kotlin",
        description: "Android application fundamentals, Material 3 UI layouts & media component concepts",
        projectEvidence: "Melodix"
      },
      {
        name: "HTML5 & CSS3",
        description: "Accessible semantic structure, fluid typography, CSS custom properties & responsive grid design",
        projectEvidence: "Digital HQ, Web Tooling"
      }
    ]
  },
  {
    category: "Frameworks & Libraries",
    tagline: "Component architectures and UI toolkits for web & desktop",
    skills: [
      {
        name: "React",
        description: "Declarative component composition, custom state hooks, and modular UI engineering",
        projectEvidence: "Digital HQ, NewsLens",
        highlight: true
      },
      {
        name: "Avalonia UI",
        description: "Cross-platform XAML-based desktop user interface framework for the .NET ecosystem",
        projectEvidence: "PharmacyApp",
        highlight: true
      },
      {
        name: "Node.js",
        description: "Runtime mechanics, micro-tool automation scripts, and local developer CLI workflows",
        projectEvidence: "Developer Experiments"
      }
    ]
  },
  {
    category: "Databases & Storage",
    tagline: "Local-first data persistence and transaction integrity",
    skills: [
      {
        name: "SQLite",
        description: "Embedded zero-configuration relational database with WAL (Write-Ahead Logging) mode for offline resilience",
        projectEvidence: "PharmacyApp",
        highlight: true
      }
    ]
  },
  {
    category: "Developer Tools",
    tagline: "Environment, version control, and delivery pipelines",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version hygiene, branch management, issue tracking, and GitHub Actions CI/CD automation",
        projectEvidence: "GitHub Pages CI/CD Pipeline",
        highlight: true
      },
      {
        name: "Linux & Bash",
        description: "POSIX shell commands, system utilities, process inspection, and local dev environments",
        projectEvidence: "Local development & terminal tooling",
        highlight: true
      },
      {
        name: "Vite",
        description: "Modern frontend tooling, rapid hot module reloading, and optimized ESM production bundling",
        projectEvidence: "Digital HQ Build Pipeline"
      },
      {
        name: "VS Code & AI Tools",
        description: "Configured developer environment, debugging, terminal integration, and AI-augmented coding workflows",
        projectEvidence: "Daily workflow"
      }
    ]
  },
  {
    category: "AI & Audio Experimentation",
    tagline: "Neural models, acoustic vectors, and generative media workflows",
    skills: [
      {
        name: "PyTorch",
        description: "Neural network evaluation, tensor computations, and experimental voice conversion pipelines",
        projectEvidence: "VoiceLab",
        highlight: true
      },
      {
        name: "Audio Signal Processing",
        description: "Spectrogram computation, FFT analysis, pitch contour extraction, and formant modulation",
        projectEvidence: "VoiceLab",
        highlight: true
      },
      {
        name: "Generative Media Tooling",
        description: "Prompt sequencing, character consistency anchoring, and multi-scene storyboard orchestration",
        projectEvidence: "Neovicon"
      }
    ]
  }
];
