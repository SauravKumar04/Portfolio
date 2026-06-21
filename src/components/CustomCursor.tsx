import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'drag' | 'arrow' | 'send' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Motion value for dynamic cursor scale on movement
  const cursorScale = useMotionValue(1);

  // Spring settings for smooth lag effect on the outer circle
  const springConfig = { damping: 40, stiffness: 400, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorScaleSpring = useSpring(cursorScale, { damping: 30, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;
    let lastTime = Date.now();
    let timeoutId: any = null;

    const moveCursor = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime;

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (dt > 0 && lastX !== -100) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = distance / dt; // pixels per millisecond

        // Scale increases with speed up to a limit (e.g. 1.6x)
        const targetScale = Math.min(1 + speed * 0.22, 1.6);
        cursorScale.set(targetScale);
      }

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

      if (!isVisible) setIsVisible(true);

      // Reset scale when mouse stops moving
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cursorScale.set(1);
      }, 60);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or any parent has special cursor attributes
      const clickable = target.closest('a, button, select, input, [role="button"], textarea');
      const customCursor = target.closest('[data-cursor]') as HTMLElement | null;

      if (customCursor) {
        const type = customCursor.getAttribute('data-cursor') as any;
        setCursorType(type || 'default');
      } else if (clickable) {
        setCursorType('pointer');
      } else if (target.closest('h1, h2, h3, p, span') && !target.closest('header')) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  // Render cursor style variants
  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
    },
    text: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(0, 255, 102, 0.01)',
      border: '1.5px solid rgba(0, 255, 102, 0.45)',
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      border: '1px solid rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference' as const,
    },
    drag: {
      width: 70,
      height: 70,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '2px dashed rgba(255, 255, 255, 0.5)',
    },
    send: {
      width: 70,
      height: 70,
      backgroundColor: 'rgba(0, 255, 102, 0.1)',
      border: '2px solid rgba(0, 255, 102, 0.8)',
    },
    arrow: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(0, 255, 102, 0.08)',
      border: '1px solid rgba(0, 255, 102, 0.8)',
    }
  };

  const currentVariant = variants[cursorType] || variants.default;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: cursorScaleSpring,
          ...currentVariant
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {cursorType === 'view' && (
          <span className="text-black font-semibold text-xs tracking-widest uppercase">VIEW</span>
        )}
        {cursorType === 'drag' && (
          <span className="text-blue-400 font-semibold text-2xs tracking-widest uppercase">DRAG</span>
        )}
        {cursorType === 'send' && (
          <span className="text-purple-300 font-semibold text-2xs tracking-widest uppercase">SEND</span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
};
