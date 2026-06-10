import { useEffect, useRef } from 'react';

const SKILLS = [
  { label: 'Python', size: 38, color: '#10b981' },
  { label: 'Django', size: 34, color: '#0ea572' },
  { label: 'React', size: 30, color: '#06b6d4' },
  { label: 'JavaScript', size: 32, color: '#f59e0b' },
  { label: 'Machine Learning', size: 36, color: '#10b981' },
  { label: 'AI', size: 40, color: '#0ea572' },
  { label: 'HTML', size: 26, color: '#f97316' },
  { label: 'CSS', size: 26, color: '#06b6d4' },
  { label: 'PHP', size: 24, color: '#8b5cf6' },
  { label: 'MySQL', size: 28, color: '#f59e0b' },
  { label: 'Git', size: 26, color: '#ef4444' },
  { label: 'WordPress', size: 28, color: '#3b82f6' },
  { label: 'C', size: 24, color: '#6366f1' },
  { label: 'Speech Recognition', size: 30, color: '#10b981' },
  { label: 'Computer Vision', size: 28, color: '#0ea572' },
  { label: 'Vite', size: 24, color: '#a855f7' },
  { label: 'SQLite', size: 22, color: '#14b8a6' },
  { label: 'REST APIs', size: 26, color: '#f59e0b' },
];

export default function SkillOrbit() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width, height;
    const mouse = { x: null, y: null };
    const dpr = window.devicePixelRatio || 1;

    const nodes = SKILLS.map((skill) => ({
      ...skill,
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      baseRadius: skill.size,
      radius: skill.size,
      opacity: 0.85,
    }));

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scale node radii down on mobile screens
      const scale = width < 576 ? 0.58 : 1;
      nodes.forEach((n) => {
        n.baseRadius = n.size * scale;
        // If radius hasn't been set yet or is drifting back
        if (!n.radius || n.radius === n.size) {
          n.radius = n.baseRadius;
        }
      });

      // Spread nodes inside the canvas area
      const cx = width / 2;
      const cy = height / 2;
      const spreadX = width * 0.38;
      const spreadY = height * 0.38;
      nodes.forEach((n, i) => {
        const angle = (i / nodes.length) * Math.PI * 2;
        const r = 0.4 + Math.random() * 0.6;
        n.x = cx + Math.cos(angle) * spreadX * r;
        n.y = cy + Math.sin(angle) * spreadY * r;
      });
    }

    resize();

    const connectionDist = 130;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      if (mouse.x !== null) {
        for (const n of nodes) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.2;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        // Glow
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 1.4);
        gradient.addColorStop(0, n.color + '30');
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color + '18';
        ctx.fill();
        ctx.strokeStyle = n.color + '60';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Label
        ctx.font = `500 ${Math.max(10, n.radius * 0.38)}px 'Inter', sans-serif`;
        ctx.fillStyle = '#e8f5e9';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n.label, n.x, n.y);
      }
    }

    function update() {
      const cx = width / 2;
      const cy = height / 2;
      const pad = 30;

      for (const n of nodes) {
        // Drift
        n.x += n.vx;
        n.y += n.vy;

        // Soft boundary - pull back toward center area
        const maxDx = width * 0.44;
        const maxDy = height * 0.44;
        if (n.x < cx - maxDx) n.vx += 0.02;
        if (n.x > cx + maxDx) n.vx -= 0.02;
        if (n.y < cy - maxDy) n.vy += 0.02;
        if (n.y > cy + maxDy) n.vy -= 0.02;

        // Hard boundary
        if (n.x < pad) { n.x = pad; n.vx = Math.abs(n.vx); }
        if (n.x > width - pad) { n.x = width - pad; n.vx = -Math.abs(n.vx); }
        if (n.y < pad) { n.y = pad; n.vy = Math.abs(n.vy); }
        if (n.y > height - pad) { n.y = height - pad; n.vy = -Math.abs(n.vy); }

        // Damping
        n.vx *= 0.998;
        n.vy *= 0.998;

        // Random nudge
        n.vx += (Math.random() - 0.5) * 0.01;
        n.vy += (Math.random() - 0.5) * 0.01;

        // Mouse interaction - expand nodes near mouse
        if (mouse.x !== null) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            n.vx += (dx / dist) * force * 0.15;
            n.vy += (dy / dist) * force * 0.15;
            n.radius = n.baseRadius + force * 8;
          } else {
            n.radius += (n.baseRadius - n.radius) * 0.05;
          }
        } else {
          n.radius += (n.baseRadius - n.radius) * 0.05;
        }

        // Node-to-node repulsion
        for (const other of nodes) {
          if (other === n) continue;
          const dx = n.x - other.x;
          const dy = n.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = n.radius + other.radius + 6;
          if (dist < minDist && dist > 0) {
            const force = (minDist - dist) / minDist * 0.3;
            n.vx += (dx / dist) * force;
            n.vy += (dy / dist) * force;
          }
        }
      }
    }

    function loop() {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    }

    loop();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => resize();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="skill-orbit-canvas" />;
}
