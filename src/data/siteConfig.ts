/**
 * Central Configuration for Daniel Danuwar — Personal Digital Headquarters
 * 
 * Edit missing social links, email, or credentials here without modifying UI components.
 */

export interface SiteConfig {
  name: string;
  role: string;
  title: string;
  domain: string;
  email: string;
  github: string;
  timezone: string;
  timezoneLabel: string;
  availability: {
    status: string;
    description: string;
  };
  motto: string;
  brandStatement: string;
  supportingStatement: string;
}

export const siteConfig: SiteConfig = {
  name: "Daniel Danuwar",
  role: "Developer · Creative Technologist",
  title: "Daniel Danuwar — Developer & Creative Technologist",
  domain: "https://danieldanuwar.com.np",
  // Centralized email address
  email: "contact@danieldanuwar.com.np",
  // Centralized GitHub link - matches user's verified GitHub account
  github: "https://github.com/neovicon",
  timezone: "Asia/Kathmandu",
  timezoneLabel: "NPT (UTC+5:45)",
  availability: {
    status: "OPEN TO NEW IDEAS",
    description: "Interested in relevant software development opportunities and collaborative projects"
  },
  motto: "The best way to understand an idea is to build something with it.",
  brandStatement: "I'm a developer from Nepal interested in building practical software, exploring AI, and turning technical ideas into useful tools.",
  supportingStatement: "Practical software, machine learning experiments, and tools built from first principles."
};
