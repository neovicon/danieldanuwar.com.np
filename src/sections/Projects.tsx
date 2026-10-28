import React, { useState } from 'react';
import { projects, Project } from '../data/projects';
import { PharmacyPreview } from '../components/previews/PharmacyPreview';
import { NewsLensPreview } from '../components/previews/NewsLensPreview';
import { VoiceLabPreview } from '../components/previews/VoiceLabPreview';
import { NeoviconPreview } from '../components/previews/NeoviconPreview';
import { MelodixPreview } from '../components/previews/MelodixPreview';
import { ExperimentsPreview } from '../components/previews/ExperimentsPreview';
import { GithubIcon } from '../components/icons/GithubIcon';
import { ArrowUpRight, ExternalLink, CheckCircle2, Clock, HelpCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'OFFLINE-FIRST SOFTWARE',
    'MEDIA INTELLIGENCE',
    'AI AUDIO EXPERIMENTS',
    'GENERATIVE MEDIA',
    'MOBILE APPLICATIONS',
    'OPEN SOURCE & EXPERIMENTS'
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const renderVisualPreview = (type: Project['visualType']) => {
    switch (type) {
      case 'pharmacy':
        return <PharmacyPreview />;
      case 'newslens':
        return <NewsLensPreview />;
      case 'voicelab':
        return <VoiceLabPreview />;
      case 'neovicon':
        return <NeoviconPreview />;
      case 'melodix':
        return <MelodixPreview />;
      case 'experiments':
        return <ExperimentsPreview />;
      default:
        return null;
    }
  };

  const getStatusBadgeClass = (status: Project['status']) => {
    switch (status) {
      case 'Prototype':
      case 'Research & Prototype':
        return 'status-badge-prototype';
      case 'Lab Experiment':
      case 'Active Exploration':
        return 'status-badge-experiment';
      case 'Creative Pipeline':
        return 'status-badge-pipeline';
      case 'Mobile Concept':
        return 'status-badge-concept';
      default:
        return 'status-badge-default';
    }
  };

  return (
    <section className="editorial-section projects-section" id="projects" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-top">
            <span className="section-label">02 // SELECTED WORKS</span>
            <div className="projects-count-badge font-mono text-xs">
              <span>{projects.length} PROJECTS CATALOGUED</span>
            </div>
          </div>
          <h2 className="section-title">Things I've been building.</h2>
          <p className="section-subtitle">
            Practical software, neural audio experiments, and interactive prototypes with verified source architectures.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="projects-filter-bar">
          <div className="filter-scroll-wrapper" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn font-mono ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat === 'ALL' ? 'ALL WORKS' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="projects-editorial-list">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-editorial-card"
              id={`project-${project.id}`}
            >
              {/* Asymmetric Header Bar */}
              <div className="project-top-meta">
                <div className="meta-left">
                  <span className="project-num font-mono">PROJECT {project.number}</span>
                  <span className="meta-divider font-mono">/</span>
                  <span className="project-category font-mono">{project.category}</span>
                </div>
                <div className="meta-right">
                  <span className={`project-status-tag font-mono text-xs ${getStatusBadgeClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Main Content Layout: Two-Column Editorial Asymmetry */}
              <div className="project-editorial-layout">
                {/* Details Column */}
                <div className="project-info-column">
                  <div className="project-title-area">
                    <h3 className="project-heading">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>

                  <p className="project-desc">{project.description}</p>

                  {/* Problem & Motivation Box */}
                  <div className="project-problem-box">
                    <div className="box-header-row font-mono text-xs text-muted">
                      <HelpCircle size={12} className="accent-text" />
                      <span>THE PROBLEM &amp; OBJECTIVE:</span>
                    </div>
                    <p className="problem-text">{project.problem}</p>
                  </div>

                  {/* Implemented Highlights */}
                  <div className="project-highlights-box">
                    <div className="box-header-row font-mono text-xs text-muted">
                      <CheckCircle2 size={12} className="accent-text" />
                      <span>CURRENT IMPLEMENTATION (VERIFIED):</span>
                    </div>
                    <ul className="highlights-list">
                      {project.implemented.map((item, idx) => (
                        <li key={idx} className="highlight-item">
                          <span className="highlight-bullet accent-text">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Experimental Scope Box */}
                  <div className="project-experimental-box">
                    <div className="box-header-row font-mono text-xs text-muted">
                      <Clock size={12} className="text-secondary" />
                      <span>EXPERIMENTAL SCOPE &amp; NEXT STEPS:</span>
                    </div>
                    <ul className="experimental-list">
                      {project.experimentalScope.map((item, idx) => (
                        <li key={idx} className="experimental-item text-secondary">
                          <span className="experimental-bullet text-muted">▫</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-stack">
                    <span className="font-mono text-xs text-muted tech-label">STACK:</span>
                    <div className="tech-tags-wrap">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-chip font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Bar */}
                  <div className="project-actions-bar">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                      >
                        <GithubIcon size={13} />
                        <span className="font-mono">Repository</span>
                        <ArrowUpRight size={12} />
                      </a>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                      >
                        <ExternalLink size={13} />
                        <span className="font-mono">Live Deployment</span>
                        <ArrowUpRight size={12} />
                      </a>
                    ) : null}

                    <div className="project-demo-indicator font-mono text-xs">
                      <span className="demo-dot" />
                      <span className="text-muted">{project.demoNote}</span>
                    </div>
                  </div>
                </div>

                {/* Custom Bespoke Interactive Preview Column */}
                <div className="project-visual-column">
                  <div className="visual-preview-frame">
                    {renderVisualPreview(project.visualType)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
