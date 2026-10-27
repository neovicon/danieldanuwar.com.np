import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { HeroCanvas } from '../components/HeroCanvas';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left Editorial Text Column */}
        <div className="hero-content">
          {/* Top Label & Availability */}
          <div className="hero-top-row">
            <div className="hero-label-badge font-mono">
              <span className="accent-text">SYS.INDEX</span>
              <span className="sep">/</span>
              <span>INDEPENDENT DEVELOPER · CREATIVE TECHNOLOGIST</span>
            </div>

            <div className="status-pill hero-status-indicator" title="Current availability state">
              <span className="status-dot" />
              <span>{siteConfig.availability.status}</span>
            </div>
          </div>

          {/* Oversized Typographic Heading */}
          <h1 className="hero-headline">
            Curiosity<br />
            into<br />
            <span className="accent-text">something real.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-lead">
            I'm Daniel. I build software, experiment with AI, and explore the ideas shaping our digital world.
          </p>

          <p className="hero-statement-sub">
            {siteConfig.brandStatement}
          </p>

          {/* Two Prominent Call-to-Actions */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn-primary"
              id="hero-explore-work-btn"
            >
              <span>Explore my work</span>
              <ArrowDown size={15} />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-secondary"
              id="hero-contact-btn"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Technical Metadata Strip */}
          <div className="hero-meta-strip font-mono text-xs">
            <div className="meta-item">
              <span className="meta-k">LOCATION:</span>
              <span className="meta-v">NEPAL ({siteConfig.timezoneLabel})</span>
            </div>
            <div className="meta-item">
              <span className="meta-k">FOCUS:</span>
              <span className="meta-v">AI · OFFLINE SYSTEMS · WEB</span>
            </div>
            <div className="meta-item">
              <span className="meta-k">APPROACH:</span>
              <span className="meta-v accent-text">FIRST PRINCIPLES</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Orbital Constellation Visual */}
        <div className="hero-visual-column">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
};
