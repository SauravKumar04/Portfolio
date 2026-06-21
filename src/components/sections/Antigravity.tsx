import React, { useEffect, useRef } from 'react';

interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: 'capsule' | 'circle' | 'square';
  fieldStrength?: number;
}

export const Antigravity: React.FC<AntigravityProps> = ({
  count = 300,
  magnetRadius = 6,
  ringRadius = 7,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 1.5,
  lerpSpeed = 0.05,
  color = '#00ff66',
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Resize handler
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      angle: number;
      speed: number;
      variance: number;
      depth: number;
      pulseOffset: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i * Math.PI * 2) / count;
      const variance = (Math.random() - 0.5) * particleVariance * 40;
      const depth = Math.random() * 2 - 1; // z-depth between -1 and 1
      particles.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: 0,
        vy: 0,
        baseX: 0,
        baseY: 0,
        angle,
        speed: 1 + Math.random() * 2,
        variance,
        depth,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animateLoop = () => {
      time += 0.01;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Dynamic scales based on canvas size
      const minDim = Math.min(w, h);
      const ringScale = minDim * (ringRadius / 20);
      const magnetDist = minDim * (magnetRadius / 20);

      particles.forEach((p) => {
        // 1. Calculate base ring coordinates with rotation
        const currentAngle = p.angle + time * rotationSpeed * 0.1;
        
        // Pulse size
        const pulse = 1 + Math.sin(time * pulseSpeed + p.pulseOffset) * 0.08;
        const currentRingRadius = ringScale * pulse + p.variance;

        // Wave deformation
        const wave = Math.sin(currentAngle * 5 + time * waveSpeed * 10) * waveAmplitude * 15 * depthFactor;
        
        const targetX = cx + Math.cos(currentAngle) * (currentRingRadius + wave);
        const targetY = cy + Math.sin(currentAngle) * (currentRingRadius + wave);

        // 2. Physics & Mouse force field (push away)
        let forceX = 0;
        let forceY = 0;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < magnetDist && dist > 1) {
            const strength = (1 - dist / magnetDist) * fieldStrength;
            forceX = -(dx / dist) * strength;
            forceY = -(dy / dist) * strength;
          }
        }

        // 3. Update position (lerp + forces)
        p.vx += (targetX - p.x) * lerpSpeed + forceX;
        p.vy += (targetY - p.y) * lerpSpeed + forceY;

        // Apply friction
        p.vx *= 0.85;
        p.vy *= 0.85;

        p.x += p.vx;
        p.y += p.vy;

        // 4. Render particle
        const depthScale = 1 + p.depth * 0.4 * depthFactor;
        const size = particleSize * depthScale;
        const alpha = Math.max(0.15, Math.min(0.9, 0.5 + p.depth * 0.4));

        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;

        if (particleShape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particleShape === 'square') {
          ctx.fillRect(p.x - size, p.y - size, size * 2, size * 2);
        } else {
          // capsule
          const vel = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          const dx = vel > 0.1 ? (p.vx / vel) * size * 2.5 : size;
          const dy = vel > 0.1 ? (p.vy / vel) * size * 2.5 : 0;

          ctx.beginPath();
          ctx.lineWidth = size;
          ctx.lineCap = 'round';
          ctx.moveTo(p.x - dx, p.y - dy);
          ctx.lineTo(p.x + dx, p.y + dy);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1.0;

      if (autoAnimate) {
        animationFrameId = requestAnimationFrame(animateLoop);
      }
    };

    animateLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    count,
    magnetRadius,
    ringRadius,
    waveSpeed,
    waveAmplitude,
    particleSize,
    lerpSpeed,
    color,
    autoAnimate,
    particleVariance,
    rotationSpeed,
    depthFactor,
    pulseSpeed,
    particleShape,
    fieldStrength,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block bg-transparent"
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default Antigravity;
