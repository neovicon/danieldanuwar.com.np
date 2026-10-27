import React, { useState } from 'react';
import { Clapperboard, Sparkles, SlidersHorizontal, Camera } from 'lucide-react';

interface SceneFrame {
  id: string;
  timecode: string;
  title: string;
  promptSnippet: string;
  cameraMotion: string;
  aspectRatio: string;
  seed: string;
  status: 'RENDERED' | 'UPSCALING' | 'QUEUED';
}

const STORYBOARD_SCENES: SceneFrame[] = [
  {
    id: '01',
    timecode: '00:00:02',
    title: 'Protagonist Silhouette',
    promptSnippet: 'Minimalist brutalist concrete monolith at twilight, cinematic edge lighting, 35mm anamorphic',
    cameraMotion: 'Slow Dolly In [0.5m/s]',
    aspectRatio: '2.39:1',
    seed: '94821044',
    status: 'RENDERED'
  },
  {
    id: '02',
    timecode: '00:00:08',
    title: 'Neural Dialogue',
    promptSnippet: 'Close-up cybernetic eye reflection, high-frequency HUD micro-typography, muted chromatic aberration',
    cameraMotion: 'Static Focus [f/1.8]',
    aspectRatio: '2.39:1',
    seed: '94821045',
    status: 'RENDERED'
  },
  {
    id: '03',
    timecode: '00:00:15',
    title: 'Orbital Horizon',
    promptSnippet: 'Volumetric mist across low-poly data towers, electric lime signal towers, procedural dust particles',
    cameraMotion: 'Pan Right [Tilt -4°]',
    aspectRatio: '2.39:1',
    seed: '94821046',
    status: 'UPSCALING'
  },
  {
    id: '04',
    timecode: '00:00:22',
    title: 'Resolution Sequence',
    promptSnippet: 'Wide architectural symmetry, lone figure standing before monolithic server core, ambient grain',
    cameraMotion: 'Crane Up [Speed 1.2x]',
    aspectRatio: '2.39:1',
    seed: '94821047',
    status: 'QUEUED'
  }
];

export const NeoviconPreview: React.FC = () => {
  const [selectedScene, setSelectedScene] = useState<SceneFrame>(STORYBOARD_SCENES[0]);

  return (
    <div className="preview-container neovicon-workbench">
      {/* Top Header */}
      <div className="neovicon-header">
        <div className="neovicon-brand">
          <Clapperboard size={14} className="accent-text" />
          <span className="font-mono">Neovicon // Generative Media Pipeline</span>
        </div>
        <div className="neovicon-meta font-mono text-xs">
          <span>SEQUENCE: S01_CHRONO</span>
          <span className="accent-text">4K MASTER</span>
        </div>
      </div>

      {/* Storyboard Frames Strip */}
      <div className="storyboard-frames-grid">
        {STORYBOARD_SCENES.map((scene) => (
          <button
            key={scene.id}
            onClick={() => setSelectedScene(scene)}
            className={`storyboard-card ${selectedScene.id === scene.id ? 'active' : ''}`}
          >
            <div className="frame-thumbnail">
              <div className="frame-abstract-art">
                {/* Visual geometric scene representations */}
                {scene.id === '01' && (
                  <svg viewBox="0 0 100 60" className="scene-svg">
                    <rect width="100" height="60" fill="#0C0E14" />
                    <polygon points="35,60 50,15 65,60" fill="#1C212E" stroke="rgba(255,255,255,0.15)" />
                    <circle cx="50" cy="18" r="3" fill="#C7FF65" />
                  </svg>
                )}
                {scene.id === '02' && (
                  <svg viewBox="0 0 100 60" className="scene-svg">
                    <rect width="100" height="60" fill="#0C0E14" />
                    <circle cx="50" cy="30" r="18" fill="none" stroke="#C7FF65" strokeWidth="1.5" />
                    <circle cx="50" cy="30" r="8" fill="#181D26" />
                    <line x1="30" y1="30" x2="70" y2="30" stroke="rgba(255,255,255,0.2)" strokeDasharray="2,2" />
                  </svg>
                )}
                {scene.id === '03' && (
                  <svg viewBox="0 0 100 60" className="scene-svg">
                    <rect width="100" height="60" fill="#0C0E14" />
                    <line x1="0" y1="45" x2="100" y2="45" stroke="#C7FF65" strokeWidth="1" />
                    <rect x="20" y="25" width="8" height="20" fill="#1C212E" />
                    <rect x="50" y="15" width="12" height="30" fill="#252C3D" />
                    <rect x="75" y="30" width="10" height="15" fill="#1C212E" />
                  </svg>
                )}
                {scene.id === '04' && (
                  <svg viewBox="0 0 100 60" className="scene-svg">
                    <rect width="100" height="60" fill="#0C0E14" />
                    <line x1="20" y1="0" x2="20" y2="60" stroke="rgba(255,255,255,0.1)" />
                    <line x1="50" y1="0" x2="50" y2="60" stroke="#C7FF65" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="80" y1="0" x2="80" y2="60" stroke="rgba(255,255,255,0.1)" />
                  </svg>
                )}
              </div>
              <span className="frame-tc font-mono">{scene.timecode}</span>
              <span className={`frame-status font-mono ${scene.status.toLowerCase()}`}>
                {scene.status}
              </span>
            </div>
            <div className="frame-info">
              <span className="frame-title">Scene {scene.id}: {scene.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Scene Inspector Panel */}
      <div className="scene-inspector-panel">
        <div className="inspector-left">
          <div className="inspector-title-row">
            <span className="inspector-tag font-mono">SCENE {selectedScene.id} PARAMETERS</span>
            <span className="inspector-title">{selectedScene.title}</span>
          </div>
          <p className="prompt-preview font-mono text-xs">
            <span className="prompt-label">PROMPT: </span>"{selectedScene.promptSnippet}"
          </p>
        </div>

        <div className="inspector-right font-mono text-xs">
          <div className="param-item">
            <Camera size={11} className="accent-text" />
            <span>{selectedScene.cameraMotion}</span>
          </div>
          <div className="param-item">
            <SlidersHorizontal size={11} />
            <span>SEED: {selectedScene.seed}</span>
          </div>
          <div className="param-item">
            <Sparkles size={11} className="accent-text" />
            <span>CONSISTENCY: 98.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
