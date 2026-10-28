import React, { useState } from 'react';
import { interests, Interest } from '../data/interests';
import { Target, Compass, Eye, Sparkles, Quote, ArrowRight } from 'lucide-react';

export const BeyondCode: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<Interest>(interests[0]);

  const getInterestIcon = (id: string) => {
    switch (id) {
      case 'chess':
        return <Target size={18} className="accent-text" />;
      case 'philosophy':
        return <Compass size={18} className="accent-text" />;
      case 'psychology':
        return <Eye size={18} className="accent-text" />;
      case 'creative-experimentation':
        return <Sparkles size={18} className="accent-text" />;
      default:
        return <Sparkles size={18} className="accent-text" />;
    }
  };

  return (
    <section className="editorial-section beyond-section" id="interests" aria-label="Beyond the Code">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">04 // BEYOND THE CODE</span>
          <h2 className="section-title">Curiosity doesn't stop at code.</h2>
          <p className="section-subtitle">
            The intellectual pursuits, mental models, and creative instincts that influence how I approach software, systems, and problem-solving.
          </p>
        </div>

        {/* Editorial Layout: Left Tabs / Right Showcase */}
        <div className="beyond-editorial-grid">
          {/* Left Cards List */}
          <div className="beyond-cards-list">
            {interests.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveInterest(item)}
                className={`beyond-card ${activeInterest.id === item.id ? 'active' : ''}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveInterest(item);
                  }
                }}
              >
                <div className="beyond-card-header">
                  <div className="beyond-icon-wrap">
                    {getInterestIcon(item.id)}
                  </div>
                  <span className="beyond-idx font-mono text-xs">0{idx + 1}</span>
                </div>

                <div className="beyond-card-body">
                  <h3 className="beyond-title font-mono">{item.title}</h3>
                  <p className="beyond-subtitle font-mono text-xs text-muted">{item.subtitle}</p>
                  <p className="beyond-excerpt">{item.description}</p>
                </div>

                <div className="beyond-card-footer">
                  <div className="beyond-tags">
                    {item.tags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="beyond-tag font-mono text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight size={14} className="beyond-arrow" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Reflection / Visual Inspector */}
          <div className="beyond-reflection-panel">
            <div className="reflection-inner">
              <div className="reflection-badge font-mono text-xs">
                <Quote size={12} className="accent-text" />
                <span>COGNITIVE REFLECTION // {activeInterest.title}</span>
              </div>

              <blockquote className="reflection-quote">
                "{activeInterest.reflection}"
              </blockquote>

              <p className="reflection-full-desc">
                {activeInterest.description}
              </p>

              <div className="reflection-tags-full">
                <span className="font-mono text-xs text-muted">KEY PRINCIPLES:</span>
                <div className="reflection-tags-grid">
                  {activeInterest.tags.map((t, idx) => (
                    <span key={idx} className="reflection-tag-chip font-mono text-xs">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimalist Abstract Graphic Motif */}
              <div className="reflection-abstract-art font-mono text-xs" aria-hidden="true">
                <div className="grid-lines-box">
                  <span>SYS.INSPECTION // NODE_{activeInterest.id.toUpperCase()}</span>
                  <span>HEURISTIC: POSITIONAL_CALCULATION</span>
                  <span>CONFIDENCE: REPRODUCIBLE_OBSERVATION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
