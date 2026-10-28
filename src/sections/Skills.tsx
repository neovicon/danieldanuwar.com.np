import React from 'react';
import { skillGroups } from '../data/skills';
import { Wrench, Terminal, Cpu, Database, Layers, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Terminal size={14} className="accent-text" />;
      case 'Frameworks & Libraries':
        return <Layers size={14} className="accent-text" />;
      case 'Databases & Storage':
        return <Database size={14} className="accent-text" />;
      case 'Developer Tools':
        return <Wrench size={14} className="accent-text" />;
      case 'AI & Audio Experimentation':
        return <Cpu size={14} className="accent-text" />;
      default:
        return <Sparkles size={14} className="accent-text" />;
    }
  };

  return (
    <section className="editorial-section skills-section" id="skills" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">03 // TECHNICAL STACK</span>
          <h2 className="section-title">Tools chosen for the problem.</h2>
          <p className="section-subtitle">
            Technologies evaluated through hands-on architecture, local deployments, and practical project constraints rather than checklist items.
          </p>
        </div>

        {/* Categorized Matrix Grid */}
        <div className="skills-matrix-grid">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="skill-category-card">
              <div className="category-header">
                <div className="category-title-wrap">
                  {getCategoryIcon(group.category)}
                  <h3 className="category-name font-mono">{group.category}</h3>
                </div>
                <span className="category-num font-mono text-xs">0{groupIdx + 1}</span>
              </div>

              <p className="category-tagline font-mono text-xs text-muted">
                {group.tagline}
              </p>

              <div className="skills-items-stack">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`skill-item-row ${skill.highlight ? 'highlighted' : ''}`}
                  >
                    <div className="skill-item-top">
                      <span className="skill-name">{skill.name}</span>
                      {skill.highlight && (
                        <span className="skill-highlight-tag font-mono text-xs">
                          PRIMARY
                        </span>
                      )}
                    </div>
                    <p className="skill-desc">{skill.description}</p>
                    <div className="skill-evidence font-mono text-xs">
                      <span className="evidence-label text-muted">Observed in:</span>{' '}
                      <span className="evidence-val accent-text">{skill.projectEvidence}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="skills-editorial-footer font-mono text-xs">
          <span className="accent-text">NOTE ON PROFICIENCY:</span>
          <span className="text-muted">
            All listed skills correspond to active projects and verified source implementations. No arbitrary percentages or unverified claims.
          </span>
        </div>
      </div>
    </section>
  );
};
