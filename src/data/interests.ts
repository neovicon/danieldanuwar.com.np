export interface Interest {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  reflection: string;
  tags: string[];
}

export const interests: Interest[] = [
  {
    id: "chess",
    title: "CHESS",
    subtitle: "Strategy & Calculated Decision-Making",
    iconName: "Target",
    description: "A long-standing interest in strategy, pattern recognition, and decision-making under pressure. In chess, every move alters the entire landscape—demanding forward calculation, discipline, and objective self-critique.",
    reflection: "Just like software architecture, chess teaches that immediate tactical gains often hide strategic weaknesses.",
    tags: ["Pattern Recognition", "Positional Play", "Forward Calculation", "Discipline"]
  },
  {
    id: "philosophy",
    title: "PHILOSOPHY",
    subtitle: "Examining Assumptions & Systems of Thought",
    iconName: "Compass",
    description: "Exploring difficult questions, examining baseline assumptions, and investigating how knowledge is constructed. Looking at epistemology, logic, and ethics to understand the foundations underlying human civilization and scientific discovery.",
    reflection: "Asking 'Why do we believe this?' is the most reliable tool against intellectual dogma.",
    tags: ["Epistemology", "First Principles", "Logic & Reasoning", "Ethics"]
  },
  {
    id: "psychology",
    title: "PSYCHOLOGY",
    subtitle: "Understanding Behavior, Perception & Cognition",
    iconName: "Eye",
    description: "An interest in how people think, behave, perceive information, and make decisions. Investigating cognitive biases, human-computer interaction, and how digital interfaces shape collective attention and culture.",
    reflection: "Software is ultimately interpreted by biological minds with specific perceptual constraints and heuristics.",
    tags: ["Cognitive Heuristics", "Perception", "Mental Models", "Attention Economics"]
  },
  {
    id: "creative-experimentation",
    title: "CREATIVE EXPERIMENTATION",
    subtitle: "Unconventional Media, Audio & Generative Art",
    iconName: "Sparkles",
    description: "Exploring AI-generated media, audio manipulation, visual storytelling, and unconventional software prototypes. Testing the boundary where mathematical algorithms produce unexpected artistic resonance.",
    reflection: "Code is not just an efficiency instrument; it is a creative medium for thought and expression.",
    tags: ["Generative Audio", "Visual Storytelling", "Neural Synthesis", "Interactive Media"]
  }
];
