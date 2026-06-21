import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';
import { SoftAurora } from '../SoftAurora';
// @ts-ignore
import { Mosaic } from 'react-loading-indicators';

interface SubLink {
  name: string;
  url: string;
}

interface MetricProps {
  value: number;
  suffix?: string;
  label: string;
  subLabel?: string;
  icon: React.ReactNode;
  link?: string;
  subLinks?: SubLink[];
}

const Metric: React.FC<MetricProps> = ({ value, suffix = '', label, subLabel, icon, link, subLinks }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [value, count]);

  const cardInner = (
    <div className="flex flex-col items-start justify-center p-5 sm:p-6 bg-white/[0.002] border border-white/5 rounded-xl relative overflow-hidden group select-none h-full transition-all duration-300 hover:border-[#00ff66]/20 hover:bg-[#00ff66]/[0.005]">
      <div className="absolute top-4 right-4 transition-all duration-300 flex items-center justify-center pointer-events-none scale-75 sm:scale-100 origin-top-right">
        {icon}
      </div>
      <motion.span
        className="text-3xl md:text-4xl font-black tracking-tight text-white mb-1.5 flex items-baseline"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.span>{rounded}</motion.span>
        <span className="text-xl md:text-2xl text-neutral-500 font-bold ml-0.5">{suffix}</span>
      </motion.span>
      <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold font-mono group-hover:text-white transition-colors">{label}</span>

      {subLinks ? (
        <div className="flex flex-wrap gap-1.5 mt-3 relative z-20">
          {subLinks.map((sl, idx) => (
            <a
              key={idx}
              href={sl.url}
              target="_blank"
              rel="noreferrer"
              className="text-[8px] font-mono font-bold uppercase tracking-wider px-2.5 py-1.5 rounded border border-white/10 bg-black text-neutral-400 hover:text-[#00ff66] hover:border-[#00ff66]/30 transition-all cursor-none"
            >
              {sl.name}
            </a>
          ))}
        </div>
      ) : subLabel ? (
        <span className="text-[9px] text-neutral-500 font-mono mt-0.5">{subLabel}</span>
      ) : null}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="cursor-none h-full block">
        {cardInner}
      </a>
    );
  }

  return cardInner;
};

export const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Track scroll state to hide navbar when scrolling
  const [isAtTop, setIsAtTop] = useState(true);

  // Parallax mouse movements
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 150 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const nameX = useTransform(xSpring, [-400, 400], [-8, 8]);
  const nameY = useTransform(ySpring, [-400, 400], [-8, 8]);
  const descX = useTransform(xSpring, [-400, 400], [-6, 6]);
  const descY = useTransform(ySpring, [-400, 400], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left - width / 2;
    const mouseYVal = e.clientY - rect.top - height / 2;
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll listener for auto-hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      // Hide header once user scrolls down slightly
      setIsAtTop(window.scrollY < 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loader interval setup (no sound references)
  useEffect(() => {
    let start = 0;
    const duration = 2800; // Cinematic load duration
    const intervalTime = 25;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
        }, 450);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderInteractiveText = (text: string, isGreen: boolean) => {
    return text.split('').map((char, index) => (
      <motion.span
        key={index}
        className={`inline-block select-none ${isGreen ? 'text-transparent' : 'text-white'}`}
        style={isGreen ? { WebkitTextStroke: '1.5px #00ff66' } : {}}
        whileHover={{
          scale: 1.25,
          color: '#00ff66',
          transition: { type: 'spring', stiffness: 400, damping: 10 }
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <>
      <style>{`
        @keyframes dash-logo {
          to {
            stroke-dashoffset: -220;
          }
        }
        @keyframes sweep-resume {
          0% {
            transform: translateX(-100%);
          }
          50%, 100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      {/* Intro cinematic loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-[#000000] z-[9999] flex flex-col items-center justify-center select-none"
            exit={{
              y: '-100%',
              transition: { duration: 1.0, ease: [0.85, 0, 0.15, 1] }
            }}
          >
            <div className="absolute inset-0 grid-mesh opacity-[0.05] pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 102, 0.05) 0%, transparent 60%)'
              }}
            />

            <div className="relative flex flex-col items-center justify-center p-8 max-w-md w-full text-center">
              {/* Mosaic loading indicator - extremely clean, no text or logs */}
              <Mosaic color="#08ad08" size="medium" text="" textColor="" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto-Hiding Capsule Glassmorphic Header Menu */}
      <motion.header
        initial={{ y: 0, x: "-50%", opacity: 1 }}
        animate={{
          y: isAtTop ? 0 : -85,
          opacity: isAtTop ? 1 : 0
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ left: "50%" }}
        className="fixed top-6 w-[90vw] max-w-5xl h-14 rounded-full border border-white/10 bg-black/75 backdrop-blur-md flex items-center justify-between px-6 z-[100] select-none shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-[#00ff66]/20"
      >

        {/* Brand Logo with dynamic interactive SVG hexagon wireframe monogram */}
        <div className="flex items-center gap-2.5 group/logo">
          <div className="w-8 h-8 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover/logo:scale-105">
            <svg className="w-8 h-8 text-[#00ff66]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
                className="opacity-20"
              />
              <polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinejoin="round"
                strokeDasharray="40 180"
                style={{
                  strokeDashoffset: 0,
                  animation: 'dash-logo 6s linear infinite'
                }}
              />
              <path
                d="M30 38 L50 27 L70 38 L50 50 L30 38 L30 62 L50 73 L70 62"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover/logo:stroke-white transition-colors duration-300"
              />
              <path
                d="M70 27 L50 50 L70 73"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover/logo:stroke-white transition-colors duration-300"
              />
              <circle cx="50" cy="50" r="3" fill="#00ff66" className="animate-pulse" />
            </svg>
          </div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-black">
            SAURAV<span className="text-[#00ff66]">.</span>KUMAR
          </span>
        </div>

        {/* Floating Capsule - Just Resume CTA button */}
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume transmission active. Saurav Kumar's PDF payload is being configured.");
            }}
            className="px-5 py-2 rounded-full border border-[#00ff66]/20 bg-[#00ff66]/[0.02] text-white font-mono text-[9px] font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#00ff66]/10 hover:border-[#00ff66]/50 active:scale-95 flex items-center gap-2 group cursor-none relative overflow-hidden shadow-[0_0_15px_rgba(0,255,102,0.03)]"
          >
            {/* Laser sweep animation on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff66]/20 to-transparent -translate-x-full pointer-events-none"
              style={{
                animation: 'sweep-resume 2.5s ease infinite'
              }}
            />

            {/* Glowing active indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
            </span>

            <span>Resume</span>

            <svg
              className="w-3.5 h-3.5 text-[#00ff66] transition-transform group-hover:translate-y-[1px] group-hover:scale-105"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </motion.header>

      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto z-10 w-full overflow-hidden"
      >
        <div className="w-full flex flex-col items-start relative z-10">
          {/* Status Label */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 select-none max-w-full">
            <motion.div
              className="px-2.5 py-0.5 rounded border border-[#00ff66]/15 bg-[#00ff66]/5 text-[#00ff66] text-3xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 whitespace-nowrap"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
              SYSTEM ACTIVE
            </motion.div>
            <motion.span
              className="text-3xs text-neutral-500 font-mono tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              NIT JAMSHEDPUR • STUDENT
            </motion.span>
          </div>

          {/* Core Headline */}
          <motion.div
            className="mb-6 select-none w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } }
            }}
          >
            <motion.div
              style={{ x: nameX, y: nameY }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-4 flex flex-col items-start"
            >
              <div className="flex select-none">
                {renderInteractiveText('SAURAV', true)}
              </div>
              <div className="flex select-none">
                {renderInteractiveText('KUMAR', false)}
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            style={{ x: descX, y: descY }}
            className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-[#00ff66] font-black mb-8 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <span>CRAFTING DIGITAL EXPERIENCES</span>
            <span className="text-neutral-700">•</span>
            <span className="text-neutral-400">FULL STACK DEVELOPER</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            style={{ x: descX, y: descY }}
            className="flex flex-wrap gap-4 items-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded bg-white text-black font-bold text-[10px] tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 active:scale-95 flex items-center gap-2 group cursor-none"
            >
              Explore Projects
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="px-6 py-3 rounded border border-white/5 bg-white/[0.01] text-white font-bold text-[10px] tracking-wider uppercase transition-all duration-300 hover:bg-white/5 hover:border-white/10 active:scale-95 cursor-none"
            >
              Contact Pipeline
            </a>
          </motion.div>
        </div>

        {/* Soft Aurora Ambient Background Glow */}
        <div className="relative w-full h-0 z-0">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-[220px] pointer-events-none select-none opacity-90">
            <SoftAurora
              color1="#00ff66"
              color2="#004d1a"
              speed={0.3}
              scale={1.2}
              brightness={1.3}
              enableMouseInteraction={true}
            />
          </div>
        </div>

        {/* Bento Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-12 w-full animate-fadeIn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          <Metric
            value={1000}
            suffix="+"
            label="DSA Problems Solved"
            icon={<SiGeeksforgeeks className="w-10 h-10 text-emerald-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            subLinks={[
              { name: "LeetCode", url: "https://leetcode.com/u/saurav_kumar_2002/" },
              { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/sauravkuzhb" }
            ]}
          />
          <Metric
            value={1880}
            label="LeetCode Max"
            subLabel="@ Knight Level"
            icon={<SiLeetcode className="w-10 h-10 text-amber-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            link="https://leetcode.com/u/saurav_codes01/"
          />
          <Metric
            value={1200}
            label="Codeforces Max"
            subLabel="@ Pupil Level"
            icon={<SiCodeforces className="w-10 h-10 text-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            link="https://codeforces.com/profile/saurav_cp"
          />
          <Metric
            value={1300}
            suffix="+"
            label="CodeChef Max"
            subLabel="Max Rating"
            icon={<SiCodechef className="w-10 h-10 text-amber-600 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            link="https://www.codechef.com/users/saurav_cp"
          />
        </motion.div>
      </section>
    </>
  );
};
