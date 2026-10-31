import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  ring: number;
  angle: number;
  speed: number;
  isAccent: boolean;
  alpha: number;
}

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Mouse coordinates with smoothing
    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
      isActive: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width * 0.5;
      mouse.targetY = height * 0.5;
      mouse.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initialize orbital nodes with responsive ring ratios
    const particleCount = 38;
    const particles: Particle[] = [];
    const ringFactors = [0.22, 0.42, 0.62, 0.82, 1.0];

    for (let i = 0; i < particleCount; i++) {
      const ringFactor = ringFactors[i % ringFactors.length];
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() * 0.4);
      const isAccent = i % 5 === 0;
      particles.push({
        x: width * 0.5,
        y: height * 0.5,
        vx: 0,
        vy: 0,
        baseRadius: isAccent ? 2.5 : 1.5,
        radius: isAccent ? 2.5 : 1.5,
        ring: ringFactor,
        angle,
        speed: (0.002 + Math.random() * 0.003) * (i % 2 === 0 ? 1 : -1),
        isAccent,
        alpha: isAccent ? 0.9 : 0.45
      });
    }

    let globalRotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width * 0.5 + (mouse.x - width * 0.5) * 0.12;
      const centerY = height * 0.5 + (mouse.y - height * 0.5) * 0.12;
      const maxOrbitalRadius = Math.min(width, height) * 0.43;

      if (!prefersReducedMotion) {
        globalRotation += 0.001;
      }

      // Draw subtle orbital rings scaled to container
      ringFactors.forEach((factor, idx) => {
        const r = factor * maxOrbitalRadius;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 1 ? 'rgba(199, 255, 101, 0.08)' : 'rgba(255, 255, 255, 0.035)';
        ctx.lineWidth = 1;
        ctx.setLineDash(idx % 2 === 0 ? [2, 6] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Central core node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#C7FF65';
      ctx.fill();

      // Update & render particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.angle += p.speed;
        }

        const particleRingRadius = p.ring * maxOrbitalRadius;
        const targetX = centerX + Math.cos(p.angle + globalRotation) * particleRingRadius;
        const targetY = centerY + Math.sin(p.angle + globalRotation) * (particleRingRadius * 0.92);

        p.x += (targetX - p.x) * 0.15;
        p.y += (targetY - p.y) * 0.15;

        // Render point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent ? '#C7FF65' : `rgba(241, 241, 241, ${p.alpha})`;
        ctx.fill();

        // Draw delicate line to center if accent
        if (p.isAccent) {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = 'rgba(199, 255, 101, 0.1)';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      // Connect proximal nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = Math.min(width, height) * 0.14;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].isAccent || particles[j].isAccent 
              ? `rgba(199, 255, 101, ${alpha * 1.5})` 
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Exterior decorative coordinate markers responsive to width
      if (width >= 340) {
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(153, 157, 167, 0.4)';
        ctx.fillText(`SYS.ORBIT // ${particles.length} NODES`, 16, height - 16);
        ctx.fillText(`RNG: 5 // ACC: #C7FF65`, width - 138, height - 16);
      } else if (width >= 240) {
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = 'rgba(153, 157, 167, 0.4)';
        ctx.fillText(`SYS.ORBIT`, 12, height - 12);
        ctx.fillText(`ACC: #C7FF65`, width - 80, height - 12);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="hero-visual-wrapper" aria-hidden="true">
      <div className="hero-visual-frame">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-visual-corner top-left" />
        <div className="hero-visual-corner top-right" />
        <div className="hero-visual-corner bottom-left" />
        <div className="hero-visual-corner bottom-right" />
      </div>
    </div>
  );
};
