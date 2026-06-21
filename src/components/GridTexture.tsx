import React, { useEffect, useRef } from 'react';

export const GridTexture: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-black select-none pointer-events-none"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      } as React.CSSProperties}
    >
      {/* Structural Vertical Grid Lines (Linear/Stripe Style) */}
      <div className="absolute inset-x-0 mx-auto max-w-7xl h-full flex justify-between px-6 md:px-12 pointer-events-none z-10 opacity-30">
        <div className="w-[1px] h-full bg-white/[0.04]" />
        <div className="w-[1px] h-full bg-white/[0.04] hidden md:block" />
        <div className="w-[1px] h-full bg-white/[0.04] hidden md:block" />
        <div className="w-[1px] h-full bg-white/[0.04]" />
      </div>

      {/* Subtle Electric Green Spotlight Tracker */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(0, 255, 102, 0.05), transparent 85%)`
        }}
      />
      
      {/* High-Contrast White Tracking Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.015), transparent 70%)`
        }}
      />

      {/* Background Grid Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-[0.2]" />

      {/* Ambient Soft Bottom-Right Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00ff66]/1.5 blur-[160px] pointer-events-none" />
    </div>
  );
};
