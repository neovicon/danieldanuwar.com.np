export interface SkillGroup {
  category: string;
  tagline: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    tagline: "Core languages for logic, systems, and experimentation",
    skills: [
      { name: "Python", description: "Scripting, machine learning pipelines, PyTorch models & audio analysis", highlight: true },
      { name: "JavaScript", description: "Modern ES6+, browser APIs, interactive frontends & asynchronous workflows", highlight: true },
      { name: "PHP", description: "Server-side logic, classic backend architectures & API development" },
      { name: "C#", description: "Desktop application architecture, .NET ecosystem & offline-first software", highlight: true }
    ]
  },
  {
    category: "Web Development",
    tagline: "Building responsive, modern, and high-performance digital interfaces",
    skills: [
      { name: "React", description: "Component-driven architecture, custom hooks, and state management", highlight: true },
      { name: "JSX", description: "Expressive declarative UI composition with type safety" },
      { name: "HTML & Semantic Markup", description: "Accessible structure, SEO integrity & valid document hierarchies" },
      { name: "CSS Architecture", description: "Modern layouts, Flexbox/Grid, CSS custom properties & fluid typography", highlight: true },
      { name: "Node.js Fundamentals", description: "Runtime mechanics, file systems, streams & lightweight server endpoints" },
      { name: "MERN Stack Exploration", description: "Investigating full-stack patterns across Mongo, Express, React, and Node" }
    ]
  },
  {
    category: "AI & Machine Learning",
    tagline: "Practical exploration of neural models, audio, and generative pipelines",
    skills: [
      { name: "PyTorch", description: "Tensor operations, neural net architectures & voice conversion experiments", highlight: true },
      { name: "AI-Assisted Development", description: "Leveraging LLMs and agentic workflows to accelerate problem solving", highlight: true },
      { name: "Audio Processing", description: "Waveform analysis, FFT spectrograms & audio feature extraction" },
      { name: "Generative AI Workflows", description: "Multi-modal prompts, image synthesis, and automated storyboarding" },
      { name: "Machine Learning Experimentation", description: "Hands-on model evaluation, training loops & parameter tuning" }
    ]
  },
  {
    category: "Development Tools",
    tagline: "The workbench enabling reproducibility, resilience, and clean delivery",
    skills: [
      { name: "Git", description: "Version control, branching strategies, conflict resolution & history hygiene", highlight: true },
      { name: "GitHub", description: "Repository hosting, GitHub Actions CI/CD workflows & open-source collaboration" },
      { name: "Linux", description: "Command-line environment, shell scripting, process handling & system utilities", highlight: true },
      { name: "SQLite", description: "Lightweight, zero-configuration embedded database for offline software" },
      { name: ".NET", description: "Modern cross-platform development ecosystem for desktop & tooling" },
      { name: "VS Code & AI Tools", description: "Streamlined editor configuration, debugging & AI-augmented coding" }
    ]
  }
];
