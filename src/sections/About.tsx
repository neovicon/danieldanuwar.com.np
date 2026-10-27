import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Cpu, Terminal, Compass, Eye, Sparkles, Binary, Quote } from 'lucide-react';

const INTEREST_AREAS = [
  { label: 'SOFTWARE ENGINEERING', desc: 'Resilient desktop apps, offline-first architectures & clean web interfaces', icon: Terminal },
  { label: 'ARTIFICIAL INTELLIGENCE', desc: 'Practical machine learning, neural voice models & agentic dev tooling', icon: Cpu },
  { label: 'OPEN SOURCE', desc: 'Transparent tools, modular libraries & sharing reproducible code', icon: Binary },
  { label: 'CREATIVE TECHNOLOGY', desc: 'Generative media pipelines, audio synthesis & interactive canvas spaces', icon: Sparkles },
  { label: 'PHILOSOPHY & PSYCHOLOGY', desc: 'First-principles reasoning, epistemology, cognitive heuristics & human behavior', icon: Compass },
  { label: 'DIGITAL MEDIA', desc: 'Comparative framing analysis, narrative mechanics & information design', icon: Eye }
];

export const About: React.FC = () => {
  return (
    <section className="editorial-section about-section" id="about" aria-label="About Daniel Danuwar">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">01 // IDENTITY &amp; PHILOSOPHY</span>
          <h2 className="section-title">Always building. Always investigating.</h2>
          <p className="section-subtitle">
            An independent developer interested in understanding how software, intelligence, and human systems operate from the ground up.
          </p>
        </div>

        {/* Editorial Content Grid */}
        <div className="about-editorial-grid">
          {/* Main Text Column */}
          <div className="about-narrative-col">
            <p className="lead-paragraph">
              I view coding as an instrument of inquiry. Instead of passively observing how technologies evolve, I prefer writing the code, setting up local models, profiling memory, and stress-testing assumptions myself.
            </p>

            <div className="editorial-text-block">
              <p>
                My projects range from offline-first desktop systems designed to function without internet dependencies, to machine learning experiments analyzing acoustic vectors and news framing. I gravitate toward problems where technical rigor intersects with human psychology and media dynamics.
              </p>
              <p>
                Rather than chasing ephemeral trends or superficial complexity, I focus on building software that solves concrete problems, respects computational constraints, and remains clear in its architecture.
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
                DANIEL DANUWAR — WORKING PRINCIPLE
              </p>
            </div>
          </div>

          {/* Interests & Domains Column */}
          <div className="about-interests-col">
            <div className="interests-header">
              <span className="font-mono text-xs text-muted">AREAS OF ACTIVE INVESTIGATION</span>
            </div>

            <div className="interests-grid">
              {INTEREST_AREAS.map((area, idx) => {
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
      </div>
    </section>
  );
};
