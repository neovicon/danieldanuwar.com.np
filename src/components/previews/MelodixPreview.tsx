import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Disc, Smartphone, ListMusic, Sparkles } from 'lucide-react';

interface Track {
  title: string;
  artist: string;
  duration: string;
  album: string;
  bitrate: string;
}

const SAMPLE_TRACKS: Track[] = [
  { title: "Resonant Frequencies", artist: "Monolith Lab", duration: "03:42", album: "Acoustic Spaces", bitrate: "FLAC 24-bit" },
  { title: "Synthetic Dawn", artist: "Neural Orbit", duration: "04:15", album: "Latent Dreams", bitrate: "FLAC 24-bit" },
  { title: "Subterranean Pulse", artist: "Signal 04", duration: "02:58", album: "Modular Works", bitrate: "FLAC 24-bit" }
];

export const MelodixPreview: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'player' | 'queue'>('player');

  const currentTrack = SAMPLE_TRACKS[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % SAMPLE_TRACKS.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + SAMPLE_TRACKS.length) % SAMPLE_TRACKS.length);
  };

  return (
    <div className="preview-container melodix-showcase">
      {/* Device Chrome Header */}
      <div className="melodix-header">
        <div className="melodix-brand">
          <Smartphone size={14} className="accent-text" />
          <span className="font-mono">Melodix // Android Clean Architecture Concept</span>
        </div>
        <div className="melodix-meta font-mono text-xs">
          <span>MEDIA3 + EXOPLAYER</span>
          <span className="accent-text">OFFLINE CACHED</span>
        </div>
      </div>

      {/* Mobile Shell Display */}
      <div className="phone-mockup-frame">
        {/* Phone Notch & Status Bar */}
        <div className="phone-topbar font-mono text-xs">
          <span>09:41</span>
          <div className="phone-camera-dot" />
          <span>FLAC 96kHz</span>
        </div>

        {/* Tab Switcher */}
        <div className="phone-nav-tabs">
          <button
            onClick={() => setActiveTab('player')}
            className={`phone-tab ${activeTab === 'player' ? 'active' : ''}`}
          >
            Now Playing
          </button>
          <button
            onClick={() => setActiveTab('queue')}
            className={`phone-tab ${activeTab === 'queue' ? 'active' : ''}`}
          >
            <ListMusic size={12} /> Queue ({SAMPLE_TRACKS.length})
          </button>
        </div>

        {activeTab === 'player' ? (
          <div className="phone-player-view">
            {/* Album Artwork Minimalist Frame */}
            <div className={`album-art-box ${isPlaying ? 'rotating-slow' : ''}`}>
              <div className="album-art-inner">
                <Disc size={64} className="album-disc-icon" />
                <div className="album-center-dot" />
              </div>
            </div>

            {/* Track Info */}
            <div className="track-headline">
              <h5 className="track-title">{currentTrack.title}</h5>
              <p className="track-artist">{currentTrack.artist} — {currentTrack.album}</p>
              <span className="audio-spec-badge font-mono">{currentTrack.bitrate}</span>
            </div>

            {/* Scrubber */}
            <div className="player-scrubber-wrap">
              <div className="scrubber-bar">
                <div className="scrubber-progress" style={{ width: isPlaying ? '54%' : '25%' }} />
              </div>
              <div className="scrubber-times font-mono text-xs">
                <span>01:45</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="player-controls-row">
              <button onClick={handlePrev} className="btn-ctrl" title="Previous track">
                <SkipBack size={16} />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="btn-ctrl-play"
                title={isPlaying ? "Pause playback" : "Start playback"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} fill="#08090B" />}
              </button>
              <button onClick={handleNext} className="btn-ctrl" title="Next track">
                <SkipForward size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="phone-queue-view">
            <span className="queue-label font-mono text-xs">UPCOMING QUEUE</span>
            {SAMPLE_TRACKS.map((t, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentTrackIndex(idx);
                  setActiveTab('player');
                }}
                className={`queue-item ${idx === currentTrackIndex ? 'now-playing' : ''}`}
              >
                <div className="queue-idx font-mono">{idx === currentTrackIndex ? '▶' : `0${idx + 1}`}</div>
                <div className="queue-meta">
                  <span className="queue-item-title">{t.title}</span>
                  <span className="queue-item-artist text-muted">{t.artist}</span>
                </div>
                <span className="queue-dur font-mono text-xs">{t.duration}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="melodix-footer font-mono">
        <Sparkles size={12} className="accent-text" />
        <span>ANDROID UI EXPERIMENT · PURE KOTLIN &amp; MATERIAL 3 GUIDELINES</span>
      </div>
    </div>
  );
};
