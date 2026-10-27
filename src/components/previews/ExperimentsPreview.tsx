import React, { useState } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  text: string;
}

const DEFAULT_HISTORY: TerminalLine[] = [
  { type: 'system', text: "Daniel Danuwar — Interactive Micro-Lab Environment v2.4" },
  { type: 'system', text: "Type 'help' or click quick commands below to explore experiments." },
  { type: 'input', text: "ls -la ./experiments" },
  { type: 'output', text: "drwxr-xr-x  canvas-spectral-grid/     [WebGL / 60fps particle physics]" },
  { type: 'output', text: "drwxr-xr-x  micro-cli-automation/     [Node.js headless dev toolkit]" },
  { type: 'output', text: "drwxr-xr-x  chess-fen-evaluator/      [Heuristic min-max algorithm]" },
  { type: 'output', text: "drwxr-xr-x  offline-db-sync-probe/    [SQLite WAL benchmark test]" }
];

export const ExperimentsPreview: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>(DEFAULT_HISTORY);
  const [inputVal, setInputVal] = useState('');

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [...history, { type: 'input', text: cmd }];

    if (trimmed === 'help') {
      newLines.push(
        { type: 'output', text: "Available commands: 'ls', 'manifesto', 'bench', 'tech', 'clear'" }
      );
    } else if (trimmed === 'ls' || trimmed.startsWith('ls')) {
      newLines.push(
        { type: 'output', text: "• canvas-spectral-grid/   — Interactive 60fps WebGL particle field" },
        { type: 'output', text: "• micro-cli-automation/   — Lightweight developer CLI automation" },
        { type: 'output', text: "• chess-fen-evaluator/    — Strategic board evaluation heuristics" },
        { type: 'output', text: "• offline-db-sync-probe/  — SQLite atomic write benchmarking" }
      );
    } else if (trimmed === 'manifesto') {
      newLines.push(
        { type: 'output', text: "“The best way to understand an idea is to build something with it.”" },
        { type: 'output', text: "— Daniel Danuwar" }
      );
    } else if (trimmed === 'bench') {
      newLines.push(
        { type: 'output', text: "[BENCHMARK] Executing 1,000,000 vector matrix iterations..." },
        { type: 'output', text: "Completed in 4.12ms · Memory heap stable · 0 memory leaks." }
      );
    } else if (trimmed === 'tech') {
      newLines.push(
        { type: 'output', text: "Stack: TypeScript, Canvas, Vite, React, Node.js, SQLite, Linux" }
      );
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newLines.push({
        type: 'output',
        text: `Command not recognized: '${cmd}'. Try 'help', 'ls', 'manifesto', or 'bench'.`
      });
    }

    setHistory(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputVal) {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="preview-container terminal-experiments">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot close" />
          <span className="dot min" />
          <span className="dot max" />
        </div>
        <div className="terminal-title font-mono">
          <Terminal size={12} className="accent-text" />
          <span>daniel@digital-hq: ~/experiments (zsh)</span>
        </div>
        <div className="terminal-tag font-mono text-xs">
          <span>STATUS: READY</span>
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="terminal-body font-mono">
        {history.map((line, idx) => (
          <div key={idx} className={`term-line term-${line.type}`}>
            {line.type === 'input' && <span className="prompt-prefix">daniel@hq:~$ </span>}
            {line.type === 'system' && <span className="system-prefix"># </span>}
            <span className="line-content">{line.text}</span>
          </div>
        ))}

        {/* Live Input Line */}
        <div className="term-line term-active-input">
          <span className="prompt-prefix">daniel@hq:~$ </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'bench', 'manifesto')..."
            className="term-input"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            onClick={() => inputVal && executeCommand(inputVal)}
            className="term-submit-btn"
            title="Execute command"
          >
            <CornerDownLeft size={12} />
          </button>
        </div>
      </div>

      {/* Quick Clickable Commands */}
      <div className="terminal-quick-bar font-mono text-xs">
        <span className="text-muted">QUICK EXECUTE:</span>
        <button onClick={() => executeCommand('ls')} className="quick-btn">
          ls
        </button>
        <button onClick={() => executeCommand('manifesto')} className="quick-btn">
          manifesto
        </button>
        <button onClick={() => executeCommand('bench')} className="quick-btn">
          bench
        </button>
        <button onClick={() => executeCommand('tech')} className="quick-btn">
          tech
        </button>
        <button onClick={() => executeCommand('clear')} className="quick-btn">
          clear
        </button>
      </div>
    </div>
  );
};
