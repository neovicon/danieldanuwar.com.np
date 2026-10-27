import React, { useState } from 'react';
import { Layers, FileText, ShieldCheck, BarChart3, Filter } from 'lucide-react';

interface StoryOutlet {
  sourceName: string;
  sourceType: string;
  headline: string;
  framingFocus: string;
  factRatio: number;
  opinionRatio: number;
  citationCount: number;
  keyPhrases: string[];
}

const SAMPLE_OUTLETS: StoryOutlet[] = [
  {
    sourceName: "TechScience Journal",
    sourceType: "Industrial / Technical",
    headline: "Solid-State Electrolytes Pass 800-Cycle Durability Benchmarks in Tier-1 Fab Trials",
    framingFocus: "Chemical stability, thermal dissipation & mass-production yield tolerances",
    factRatio: 88,
    opinionRatio: 12,
    citationCount: 9,
    keyPhrases: ["dendrite suppression", "cathode impedance", "yield efficiency"]
  },
  {
    sourceName: "Global Capital Dispatch",
    sourceType: "Financial / Commercial",
    headline: "Automakers Face $42B Capital Retooling Wave as Solid-State Timelines Accelerate",
    framingFocus: "Balance sheet reallocation, supplier contracts & EV margin compressions",
    factRatio: 74,
    opinionRatio: 26,
    citationCount: 6,
    keyPhrases: ["capital expenditures", "margin dilution", "legacy retooling"]
  },
  {
    sourceName: "Statecraft & Policy Monitor",
    sourceType: "Strategic / Policy",
    headline: "Rare-Earth Refining Autonomy Becomes Central Pivot in Emerging Battery Race",
    framingFocus: "Supply-chain sovereignty, export controls & trade alliance dependencies",
    factRatio: 68,
    opinionRatio: 32,
    citationCount: 5,
    keyPhrases: ["mineral processing", "tariff exposure", "strategic reserves"]
  }
];

export const NewsLensPreview: React.FC = () => {
  const [showFactOverlay, setShowFactOverlay] = useState(true);

  return (
    <div className="preview-container newslens-dashboard">
      {/* Top Header */}
      <div className="newslens-header">
        <div className="newslens-brand">
          <Layers size={14} className="accent-text" />
          <span className="font-mono">NewsLens.Engine // PERSPECTIVE CLUSTER #418</span>
        </div>
        <div className="newslens-toggle-wrap">
          <button
            onClick={() => setShowFactOverlay(!showFactOverlay)}
            className={`lens-toggle-btn ${showFactOverlay ? 'active' : ''}`}
          >
            <BarChart3 size={12} />
            <span>{showFactOverlay ? 'Fact Spectrum: ON' : 'Fact Spectrum: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Cluster Meta & Filter */}
      <div className="newslens-subbar">
        <div className="cluster-title">
          <span className="cluster-badge">EVENT CLUSTER</span>
          <h4>Commercialization Milestones in Next-Generation Energy Density</h4>
        </div>
        <div className="cluster-filters">
          <span className="filter-pill active">
            <Filter size={10} /> 3 Outlets Analyzed
          </span>
          <span className="filter-pill">Methodology: Semantic NLP</span>
        </div>
      </div>

      {/* Comparative Cards Grid */}
      <div className="outlets-comparison-grid">
        {SAMPLE_OUTLETS.map((outlet, i) => (
          <div key={i} className="outlet-card">
            <div className="outlet-card-top">
              <span className="outlet-type-tag">{outlet.sourceType}</span>
              <span className="font-mono text-muted text-xs">{outlet.sourceName}</span>
            </div>

            <h5 className="outlet-headline">"{outlet.headline}"</h5>

            <div className="outlet-framing-box">
              <span className="framing-label">EDITORIAL FRAMING</span>
              <p className="framing-text">{outlet.framingFocus}</p>
            </div>

            {showFactOverlay && (
              <div className="fact-spectrum-box">
                <div className="spectrum-header">
                  <span>Verified Claims: {outlet.factRatio}%</span>
                  <span>Interpretive: {outlet.opinionRatio}%</span>
                </div>
                <div className="spectrum-track">
                  <div
                    className="spectrum-bar fact-bar"
                    style={{ width: `${outlet.factRatio}%` }}
                    title="Verified factual assertions"
                  />
                  <div
                    className="spectrum-bar opinion-bar"
                    style={{ width: `${outlet.opinionRatio}%` }}
                    title="Interpretive or editorial statements"
                  />
                </div>
              </div>
            )}

            <div className="outlet-card-footer">
              <div className="keyphrases-list">
                {outlet.keyPhrases.map((phrase, idx) => (
                  <span key={idx} className="phrase-chip font-mono">
                    #{phrase}
                  </span>
                ))}
              </div>
              <div className="citations-count font-mono">
                <FileText size={11} /> {outlet.citationCount} primary links
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="newslens-bottom-note font-mono">
        <ShieldCheck size={12} className="accent-text" />
        <span>EVIDENCE-FIRST METHODOLOGY — NO ARBITRARY BINARY BIAS RATINGS</span>
      </div>
    </div>
  );
};
