import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, Clock, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Interests', href: '#interests', id: 'interests' },
  { label: 'Notes', href: '#notes', id: 'notes' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Real live time in Nepal (UTC+5:45)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: siteConfig.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setCurrentTime(formatter.format(now));
      } catch (err) {
        const d = new Date();
        setCurrentTime(d.toTimeString().substring(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for sticky shadow & active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Wordmark Brand */}
        <a
          href="#"
          className="brand-wordmark"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Daniel Danuwar — Home"
        >
          <span className="brand-dot" />
          <span className="brand-name">Daniel Danuwar</span>
          <span className="brand-sub font-mono">HQ</span>
        </a>

        {/* Center Navigation Links */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`nav-link font-mono ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="nav-num">0{NAV_ITEMS.indexOf(item) + 1}.</span>
                  {item.label}
                  {activeSection === item.id && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Info: Live Time & Status Indicator */}
        <div className="nav-right-cluster">
          <div className="local-time-display font-mono" title={`Local time in Nepal (${siteConfig.timezone})`}>
            <Clock size={11} className="accent-text" />
            <span>NPT {currentTime || '--:--:--'}</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="status-pill nav-status-pill"
          >
            <span className="status-dot" />
            <span className="status-label">{siteConfig.availability.status}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <span className="font-mono text-xs text-muted">NAVIGATION INDEX</span>
            <div className="status-pill">
              <span className="status-dot" />
              <span>{siteConfig.availability.status}</span>
            </div>
          </div>

          <nav className="mobile-nav-links">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className="mobile-item-num font-mono">0{idx + 1}</span>
                <span className="mobile-item-label">{item.label}</span>
                <ArrowUpRight size={16} className="mobile-item-arrow" />
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer font-mono text-xs">
            <div className="time-row">
              <Clock size={12} className="accent-text" />
              <span>TIMEZONE: {siteConfig.timezoneLabel}</span>
              <span className="accent-text">{currentTime}</span>
            </div>
            <div className="drawer-statement text-muted">
              {siteConfig.brandStatement}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
