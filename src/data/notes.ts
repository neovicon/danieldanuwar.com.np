export interface Note {
  id: string;
  number: string;
  title: string;
  status: "DRAFTING" | "INVESTIGATION" | "OUTLINE" | "OBSERVATION";
  estimatedDate: string;
  thesis: string;
  summary: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    id: "ai-development-tool",
    number: "01",
    title: "What happens when AI becomes a development tool?",
    status: "INVESTIGATION",
    estimatedDate: "IN PROGRESS",
    thesis: "When synthesis becomes instantaneous, the bottleneck shifts entirely to verification, architectural taste, and problem formulation.",
    summary: "Reflecting on how modern neural assistants alter the developer's cognitive rhythm. Rather than typing boilerplate, development becomes an exercise in constraint specification, edge-case probing, and structural validation.",
    tags: ["Artificial Intelligence", "Cognitive Workflow", "Software Craft"]
  },
  {
    id: "limited-hardware",
    number: "02",
    title: "Building useful software on limited hardware",
    status: "DRAFTING",
    estimatedDate: "IN PROGRESS",
    thesis: "Constraints force clarity. When computing power and bandwidth are finite, architectural discipline ceases to be optional.",
    summary: "Observations on developing applications that run reliably without heavy cloud infrastructure. How memory profiling, lightweight runtimes, and local data stores produce software that outlasts ephemeral web trends.",
    tags: ["Systems", "Optimization", "Offline First", "Sustainability"]
  },
  {
    id: "news-framing",
    number: "03",
    title: "Understanding how news framing influences perception",
    status: "INVESTIGATION",
    estimatedDate: "IN PROGRESS",
    thesis: "Headlines don't merely report reality—they select which aspects of reality you are invited to react to.",
    summary: "Notes and research exploring algorithmic media analysis. Investigating why different editorial rooms can take the identical underlying factual datum and construct mutually incompatible narratives through selective phrasing.",
    tags: ["Media Intelligence", "Psychology", "Epistemology", "NLP"]
  },
  {
    id: "offline-first-lessons",
    number: "04",
    title: "Lessons learned from building offline-first applications",
    status: "OUTLINE",
    estimatedDate: "IN PROGRESS",
    thesis: "The network is an unreliable luxury. Designing as if the internet does not exist makes software resilient when it does.",
    summary: "Key takeaways from structuring desktop software with Avalonia and SQLite. Handling database schema migrations locally, transaction safety, audit trials, and ensuring users always retain custody of their data.",
    tags: ["Architecture", "C#", "Desktop", "Data Integrity"]
  },
  {
    id: "questions-worth-investigating",
    number: "05",
    title: "Questions worth investigating",
    status: "OBSERVATION",
    estimatedDate: "ONGOING LOG",
    thesis: "A living index of unresolved technical, philosophical, and systemic questions.",
    summary: "A curated notebook of questions that persist over time: Can neural audio synthesis ever achieve genuine physical acoustic nuance? Why do software tools become heavier as hardware gets faster? Where does automation stop being helpful?",
    tags: ["Open Questions", "Philosophy", "Curiosity"]
  }
];
