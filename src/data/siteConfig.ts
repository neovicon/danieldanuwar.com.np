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
  role: "Independent Developer · Creative Technologist",
  title: "Daniel Danuwar — Developer & Creative Technologist",
  domain: "https://danieldanuwar.com.np",
  // Centralized email address - change here if desired
  email: "contact@danieldanuwar.com.np",
  // Centralized GitHub link - change here if your handle differs
  github: "https://github.com/danieldanuwar",
  timezone: "Asia/Kathmandu",
  timezoneLabel: "NPT (UTC+5:45)",
  availability: {
    status: "OPEN TO NEW IDEAS",
    description: "Available for curious discussions, challenging problems & open-source exploration"
  },
  motto: "The best way to understand an idea is to build something with it.",
  brandStatement: "I build things, explore ideas, and question how the digital world works.",
  supportingStatement: "Software, artificial intelligence, and experiments at the intersection of technology and human curiosity."
};
