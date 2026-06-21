import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MarqueeRowProps {
  text: string;
  direction: 'left' | 'right';
  highlight?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ text, direction, highlight }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const xRange = direction === 'left' 
    ? ['-10%', '-35%'] 
    : ['-35%', '-10%'];
    
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <div 
      ref={containerRef}
      className="w-full overflow-hidden flex whitespace-nowrap select-none py-1 md:py-2"
    >
      <motion.div 
        className="text-[8vw] md:text-[6.5vw] font-black tracking-tighter uppercase text-transparent flex items-center gap-6"
        style={{ 
          x,
          WebkitTextStroke: highlight ? '1.5px #00ff66' : '1px rgba(255, 255, 255, 0.12)',
        }}
      >
        {Array(5).fill(text).map((txt, index) => (
          <React.Fragment key={index}>
            <span>{txt}</span>
            <span style={{ color: '#00ff66', WebkitTextStroke: 'none' }} className="font-mono text-[4vw] opacity-80">•</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const ParallaxText: React.FC = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden flex flex-col justify-center items-center bg-[#000000] border-y border-white/5">
      <div className="w-full flex flex-col gap-0 select-none">
        <MarqueeRow text="Full Stack Developer" direction="left" />
        <MarqueeRow text="Web Developer" direction="right" highlight />
        <MarqueeRow text="Creative Engineer" direction="left" />
      </div>
    </section>
  );
};
