import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { HeroCanvas } from '../components/HeroCanvas';
import { GithubIcon } from '../components/icons/GithubIcon';
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
              <span>DEVELOPER · CREATIVE TECHNOLOGIST</span>
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
            I'm a developer from Nepal interested in building practical software, exploring AI, and turning technical ideas into useful tools.
          </p>

          <p className="hero-statement-sub">
            Learning by building: from offline-first desktop systems to machine learning experiments and responsive web applications.
          </p>

          {/* Prominent Call-to-Actions */}
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

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost hero-github-btn font-mono"
              id="hero-github-btn"
              aria-label="Visit Daniel's GitHub profile"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={12} />
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
              <span className="meta-v">PRACTICAL SOFTWARE · AI · WEB</span>
            </div>
            <div className="meta-item">
              <span className="meta-k">APPROACH:</span>
              <span className="meta-v accent-text">LEARNING BY BUILDING</span>
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
