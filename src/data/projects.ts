export type ProjectKind = "repo" | "post" | "demo";
export type ProjectTone = "teal" | "burgundy" | "rust";

export interface Project {
  title: string;
  summary: string;
  kind: ProjectKind;
  href: string;
  tone: ProjectTone;
  /** Key technologies, most important first. 3–5 reads best on a card. */
  stack?: string[];
}

// Homepage projects, in display order. The grid is designed for 3 or 6.
export const projects: Project[] = [
  { title: "Expense Assistant", summary: "Expense reports, minus the expense of doing them", kind: "repo", href: "https://github.com/UtkarshArora/expense-assistant", tone: "teal", stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Claude API"] },
  { title: "Smart Order Router", summary: "Spend a cent, make a dollar", kind: "repo", href: "https://github.com/UtkarshArora/sharesAllocation", tone: "burgundy", stack: ["Python", "Kafka", "Docker", "AWS"] },
  { title: "BrandCheck", summary: "Does that brand make you look bad?", kind: "demo", href: "https://brandcheck-beta.vercel.app/", tone: "rust", stack: ["Next.js", "TypeScript", "Gmail Add-on"] },
  { title: "miniOS", summary: "Linux, but small enough to hold in your head", kind: "repo", href: "https://github.com/UtkarshArora/miniOS", tone: "burgundy", stack: ["C", "C++"] },
  { title: "GEMM", summary: "Squeezing every FLOP out of the GPU", kind: "repo", href: "https://github.com/UtkarshArora/MatMul", tone: "rust", stack: ["CUDA", "C++", "CMake"] },
  { title: "SuperBowl", summary: "Super Bowl ads for businesses without a Super Bowl budget", kind: "post", href: "https://www.linkedin.com/posts/utkarsharora10_excited-to-share-that-our-team-won-the-pulse-share-7428985178422808576-NI8L/", tone: "teal", stack: ["React", "TypeScript", "Gemini API"] },
];
