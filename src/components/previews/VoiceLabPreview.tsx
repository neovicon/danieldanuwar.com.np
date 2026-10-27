import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Activity, Cpu } from 'lucide-react';

export const VoiceLabPreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [pitchShift, setPitchShift] = useState(0);
  const [timbreBlend, setTimbreBlend] = useState(65);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let tick = 0;
    const barsCount = 36;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / barsCount;

      for (let i = 0; i < barsCount; i++) {
        // Generate pseudo-waveform / spectrogram bars
        let amplitude = 0.2;
        if (isPlaying) {
          const freq = (i / barsCount) * Math.PI * 4;
          const wave1 = Math.sin(freq + tick * 0.08);
          const wave2 = Math.cos(freq * 0.5 - tick * 0.05);
          amplitude = Math.abs(wave1 * 0.5 + wave2 * 0.5) * (0.4 + (timbreBlend / 100) * 0.5);
        } else {
          amplitude = 0.08 + Math.sin(i * 0.3) * 0.04;
        }

        const barHeight = Math.max(4, amplitude * (canvas.height - 10));
        const x = i * barWidth;
        const y = (canvas.height - barHeight) / 2;

        const isAccent = i > 12 && i < 26;
        ctx.fillStyle = isAccent ? '#C7FF65' : 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(x + 1, y, barWidth - 2, barHeight);
      }

      if (isPlaying) {
        tick++;
      }
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying, timbreBlend]);

  return (
    <div className="preview-container voicelab-workstation">
      {/* Top Header */}
      <div className="voicelab-header">
        <div className="voicelab-brand">
          <Activity size={14} className="accent-text" />
          <span className="font-mono">VoiceLab // PyTorch Neural Audio Engine</span>
        </div>
        <div className="voicelab-status-badge">
          <span className="font-mono text-xs">MODEL: VAE-SPECTRAL-V2</span>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div className="audio-visualizer-panel">
        <div className="panel-hud-left font-mono text-xs">
          <span>FREQ: 20Hz - 22kHz</span>
          <span>SAMPLE RATE: 48,000 Hz</span>
        </div>
        <canvas ref={canvasRef} width={480} height={90} className="waveform-canvas" />
        <div className="panel-hud-right font-mono text-xs">
          <span>LATENT DIM: 128</span>
          <span className="accent-text">INFERENCE: 18ms</span>
        </div>
      </div>

      {/* Track Stacks */}
      <div className="tracks-stack">
        <div className="audio-track active-track">
          <div className="track-info">
            <span className="track-number font-mono">01</span>
            <span className="track-name">Source Speech (Acoustic Wave)</span>
          </div>
          <div className="track-meter">
            <div className="meter-fill" style={{ width: isPlaying ? '72%' : '15%' }} />
          </div>
        </div>

        <div className="audio-track">
          <div className="track-info">
            <span className="track-number font-mono">02</span>
            <span className="track-name">Mel-Spectrogram Latent Vector</span>
          </div>
          <div className="track-meter">
            <div className="meter-fill accent-meter" style={{ width: isPlaying ? '88%' : '20%' }} />
          </div>
        </div>

        <div className="audio-track">
          <div className="track-info">
            <span className="track-number font-mono">03</span>
            <span className="track-name">Target Timbre Synthesized Audio</span>
          </div>
          <div className="track-meter">
            <div className="meter-fill" style={{ width: isPlaying ? `${timbreBlend}%` : '10%' }} />
          </div>
        </div>
      </div>

      {/* Control Console */}
      <div className="voicelab-controls-bar">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="btn-audio-toggle"
          title={isPlaying ? "Pause audio waveform simulation" : "Play audio waveform simulation"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span>{isPlaying ? 'PAUSE STREAM' : 'RUN STREAM'}</span>
        </button>

        <div className="slider-group">
          <label className="font-mono text-xs">
            <span>PITCH SHIFT: {pitchShift > 0 ? `+${pitchShift}` : pitchShift} st</span>
          </label>
          <input
            type="range"
            min="-12"
            max="12"
            value={pitchShift}
            onChange={(e) => setPitchShift(Number(e.target.value))}
            className="audio-slider"
          />
        </div>

        <div className="slider-group">
          <label className="font-mono text-xs">
            <span>TIMBRE BLEND: {timbreBlend}%</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={timbreBlend}
            onChange={(e) => setTimbreBlend(Number(e.target.value))}
            className="audio-slider accent-slider"
          />
        </div>
      </div>

      <div className="voicelab-footer font-mono">
        <Cpu size={12} className="accent-text" />
        <span>PYTORCH TENSOR PIPELINE · NON-COMMERCIAL EXPLORATORY RESEARCH</span>
      </div>
    </div>
  );
};
