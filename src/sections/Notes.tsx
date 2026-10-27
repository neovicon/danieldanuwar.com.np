import React from 'react';
import { notes } from '../data/notes';
import { FileEdit, Clock } from 'lucide-react';

export const Notes: React.FC = () => {
  return (
    <section className="editorial-section notes-section" id="notes" aria-label="Notes & Writing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header-top">
            <span className="section-label">05 // OBSERVATIONS &amp; ESSAYS</span>
            <span className="notes-badge font-mono text-xs">
              <FileEdit size={11} className="accent-text" />
              <span>DRAFTS &amp; INQUIRIES IN PROGRESS</span>
            </span>
          </div>
          <h2 className="section-title">Notes in progress</h2>
          <p className="section-subtitle">
            Working hypotheses, architectural observations, and essays currently taking shape in my notebook. None of these are definitive declarations; they are open lines of thought.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="notes-editorial-grid">
          {notes.map((note) => (
            <article key={note.id} className="note-card">
              <div className="note-top-meta">
                <span className="note-num font-mono text-xs">NOTE {note.number}</span>
                <span className={`note-status-badge font-mono text-xs status-${note.status.toLowerCase()}`}>
                  {note.status}
                </span>
              </div>

              <h3 className="note-title">{note.title}</h3>

              <div className="note-thesis-box">
                <span className="thesis-label font-mono text-xs">CENTRAL THESIS</span>
                <p className="thesis-text font-mono text-xs">"{note.thesis}"</p>
              </div>

              <p className="note-summary">{note.summary}</p>

              <div className="note-footer">
                <div className="note-tags">
                  {note.tags.map((t, idx) => (
                    <span key={idx} className="note-tag-chip font-mono text-xs">
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="note-draft-indicator font-mono text-xs text-muted">
                  <Clock size={11} />
                  <span>{note.estimatedDate}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Subtext */}
        <div className="notes-editorial-footer font-mono text-xs">
          <span>● Long-form essays will be published directly to this headquarters as they mature.</span>
        </div>
      </div>
    </section>
  );
};
