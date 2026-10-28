import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Terminal, Cpu, Wrench, ShieldCheck, Database, Eye, Quote, MapPin } from 'lucide-react';

const INVESTIGATION_AREAS = [
  {
    label: 'PRACTICAL SOFTWARE',
    desc: 'Resilient desktop applications, offline-first architectures & clean interfaces',
    icon: Terminal
  },
  {
    label: 'ARTIFICIAL INTELLIGENCE',
    desc: 'Practical machine learning, acoustic feature extraction & local model workflows',
    icon: Cpu
  },
  {
    label: 'DEVELOPER TOOLING',
    desc: 'Command-line automation, interactive terminal environments & workflow scripts',
    icon: Wrench
  },
  {
    label: 'OFFLINE RESILIENCE',
    desc: 'Embedded local databases, transactional data safety & zero-cloud operation',
    icon: Database
  },
  {
    label: 'FIRST PRINCIPLES',
    desc: 'Understanding algorithms, memory usage & computational constraints from the ground up',
    icon: ShieldCheck
  },
  {
    label: 'MEDIA & PERCEPTION',
    desc: 'Comparative news framing analysis, linguistic emphasis & information design',
    icon: Eye
  }
];

export const About: React.FC = () => {
  return (
    <section className="editorial-section about-section" id="about" aria-label="About Daniel Danuwar">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">01 // IDENTITY &amp; APPROACH</span>
          <h2 className="section-title">Curiosity as an engineering method.</h2>
          <p className="section-subtitle">
            Understanding software architectures, neural models, and digital tools by building them from first principles.
          </p>
        </div>

        {/* Top Split: Portrait + Narrative */}
        <div className="about-editorial-grid">
          {/* Portrait Column: Exactly ONE Personal Photo */}
          <div className="about-portrait-col">
            <div className="about-portrait-card">
              <div className="portrait-header-bar font-mono text-xs">
                <span className="accent-text">SYS.PORTRAIT</span>
                <span className="text-muted">/ REF.01</span>
              </div>

              <div className="portrait-image-container">
                <img
                  src="/images/profile.jpg"
                  alt="Portrait of Daniel Danuwar"
                  className="about-portrait-image"
                  width="480"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="portrait-meta-footer font-mono text-xs">
                <div className="meta-row">
                  <span className="meta-name">DANIEL DANUWAR</span>
                  <span className="meta-tag accent-text">VERIFIED</span>
                </div>
                <div className="meta-row meta-location text-muted">
                  <span className="loc-wrap">
                    <MapPin size={11} className="inline-icon" />
                    <span>NEPAL ({siteConfig.timezoneLabel})</span>
                  </span>
                  <span>BUILDER · DEVELOPER</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Narrative Column */}
          <div className="about-narrative-col">
            <p className="lead-paragraph">
              I am a developer driven by genuine curiosity about how software systems work under the hood. Rather than accepting tools as black boxes or absorbing abstractions without questioning them, my approach has always been to learn by building: writing the code, setting up local models, profiling resource consumption, and observing firsthand how things perform under real constraints.
            </p>

            <div className="editorial-text-block">
              <p>
                My projects range from offline-first desktop systems designed to operate reliably during network blackouts, to machine learning experiments analyzing acoustic vectors and comparative news narratives. I'm especially interested in practical developer tooling and exploring how AI can augment the engineering workflow without replacing deep technical understanding.
              </p>
              <p>
                Rather than chasing ephemeral trends or superficial complexity, I focus on building software that solves concrete problems, respects computational constraints, and maintains architectural clarity.
              </p>
            </div>

            {/* Personal Philosophy Motto Box */}
            <div className="personal-philosophy-card">
              <div className="philosophy-header">
                <Quote size={14} className="accent-text" />
                <span className="font-mono text-xs">PERSONAL MOTTO</span>
              </div>
              <blockquote className="philosophy-quote">
                "{siteConfig.motto}"
              </blockquote>
              <p className="philosophy-sub text-xs font-mono text-muted">
                DANIEL DANUWAR — GUIDING PRINCIPLE
              </p>
            </div>
          </div>
        </div>

        {/* Active Areas of Exploration Grid */}
        <div className="about-investigations-block">
          <div className="investigations-header font-mono text-xs text-muted">
            <span>AREAS OF ACTIVE INVESTIGATION &amp; EXPLORATION</span>
          </div>

          <div className="interests-grid">
            {INVESTIGATION_AREAS.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <div key={idx} className="interest-item-card">
                  <div className="interest-top">
                    <IconComponent size={14} className="accent-text" />
                    <span className="interest-idx font-mono text-xs">0{idx + 1}</span>
                  </div>
                  <h3 className="interest-label font-mono">{area.label}</h3>
                  <p className="interest-desc">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
