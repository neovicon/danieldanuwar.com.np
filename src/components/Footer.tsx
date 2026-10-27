import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { GithubIcon } from './icons/GithubIcon';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container">
        {/* Top Grid */}
        <div className="footer-top-grid">
          {/* Column 1: Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="brand-dot" />
              <span className="brand-name font-mono">{siteConfig.name}</span>
            </div>
            <p className="footer-statement">
              {siteConfig.supportingStatement}
            </p>
            <div className="motto-box">
              <span className="font-mono text-xs text-muted">PERSONAL PHILOSOPHY</span>
              <p className="motto-quote">"{siteConfig.motto}"</p>
            </div>
          </div>

          {/* Column 2: Quick Index */}
          <div className="footer-col index-col font-mono text-xs">
            <span className="footer-col-title">NAVIGATION INDEX</span>
            <ul className="footer-nav-list">
              <li><a href="#about">01. ABOUT</a></li>
              <li><a href="#projects">02. PROJECTS</a></li>
              <li><a href="#skills">03. SKILLS</a></li>
              <li><a href="#interests">04. BEYOND CODE</a></li>
              <li><a href="#notes">05. NOTES IN PROGRESS</a></li>
              <li><a href="#contact">06. CONTACT</a></li>
            </ul>
          </div>

          {/* Column 3: System Specifications */}
          <div className="footer-col tech-col font-mono text-xs">
            <span className="footer-col-title">SYSTEM SPECIFICATION</span>
            <div className="footer-spec-item">
              <span className="spec-label">DOMAIN:</span>
              <span className="spec-val accent-text">danieldanuwar.com.np</span>
            </div>
            <div className="footer-spec-item">
              <span className="spec-label">DEPLOYMENT:</span>
              <span className="spec-val">GitHub Pages (CI/CD)</span>
            </div>
            <div className="footer-spec-item">
              <span className="spec-label">RUNTIME:</span>
              <span className="spec-val">Vite · React · TypeScript</span>
            </div>
            <div className="footer-spec-item">
              <span className="spec-label">TIMEZONE:</span>
              <span className="spec-val">{siteConfig.timezoneLabel}</span>
            </div>
            <div className="footer-spec-item">
              <span className="spec-label">STATUS:</span>
              <span className="spec-val accent-text">{siteConfig.availability.status}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy font-mono text-xs">
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
            <span className="sep">·</span>
            <span>Independent digital headquarters.</span>
          </div>

          <div className="footer-actions font-mono text-xs">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <GithubIcon size={13} />
              <span>GitHub</span>
            </a>
            <button onClick={scrollToTop} className="footer-back-top">
              <span>RETURN TO TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
