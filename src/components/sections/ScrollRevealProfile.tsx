import React, { useRef, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom mask-reveal for individual letters with blur-to-sharp transition
interface LetterProps {
  char: string;
  index: number;
  progress: any;
  className?: string;
  style?: React.CSSProperties;
}

const Letter: React.FC<LetterProps> = ({ char, index, progress, className, style }) => {
  const start = 0.45 + (index * 0.008);
  const end = 0.49 + (index * 0.008);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], ['100%', '0%']);
  const filter = useTransform(progress, [start, end], ['blur(15px)', 'blur(0px)']);

  return (
    <span className="inline-block overflow-hidden relative leading-none">
      <motion.span
        style={{ ...style, opacity, y, filter, display: 'inline-block' }}
        className={className}
      >
        {char}
      </motion.span>
    </span>
  );
};

// Shiny Interactive Bento Card reveal helper
const RevealCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.003] overflow-hidden group select-none min-h-[140px] flex flex-col justify-center transition-all duration-500 hover:border-[#00ff66]/30 hover:bg-[#00ff66]/[0.005] hover:shadow-[0_0_40px_rgba(0,255,102,0.03)]"
    >
      {/* Glossy light-sweep sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Spotlight backing glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#00ff66]/[0.008] blur-2xl group-hover:bg-[#00ff66]/[0.04] transition-all duration-500 pointer-events-none" />

      {/* Corner bracket decorations */}
      <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-start justify-center">
        {children}
      </div>
    </motion.div>
  );
};

export const ScrollRevealProfile: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // Track scroll progress using a motion value controlled by GSAP
  const scrollProgress = useMotionValue(0);

  // Strict Sequential Timelines (Photo -> Name -> College -> Role):

  // 1. Photo (Stage 1: Active 0.0 -> 0.45. Starts extremely zoomed in at 800% / 8.0x scale)
  const photoOpacity = useTransform(scrollProgress, [0, 0.08, 0.40, 0.45], [0, 1, 1, 0]);
  const photoScale = useTransform(scrollProgress, [0, 0.30, 0.40, 0.45], [8.0, 1.0, 1.0, 0.9]);
  const photoY = useTransform(scrollProgress, [0, 0.30, 0.40, 0.45], [80, 0, 0, -60]);

  // 2. Name (Stage 2: Active 0.45 -> 0.65)
  const nameWrapperOpacity = useTransform(scrollProgress, [0.43, 0.46, 0.60, 0.65], [0, 1, 1, 0]);
  const nameWrapperY = useTransform(scrollProgress, [0.43, 0.46, 0.60, 0.65], [60, 0, 0, -60]);

  // 3. College (Stage 3: Active 0.65 -> 0.82)
  const nitOpacity = useTransform(scrollProgress, [0.65, 0.70, 0.77, 0.82], [0, 1, 1, 0]);
  const nitFilter = useTransform(scrollProgress, [0.65, 0.70, 0.77, 0.82], ['blur(15px)', 'blur(0px)', 'blur(0px)', 'blur(15px)']);
  const nitY = useTransform(scrollProgress, [0.65, 0.70, 0.77, 0.82], [60, 0, 0, -60]);
  const nitLetterSpacing = useTransform(scrollProgress, [0.65, 0.70, 0.77], ['0.8em', '0.22em', '0.05em']);

  // 4. Role (Stage 4: Active 0.82 -> 1.00)
  const devOpacity = useTransform(scrollProgress, [0.82, 0.87, 0.96, 1.00], [0, 1, 1, 0]);
  const devScale = useTransform(scrollProgress, [0.82, 0.87, 0.96, 1.00], [0.95, 1, 1, 1.05]);
  const devY = useTransform(scrollProgress, [0.82, 0.87, 0.96, 1.00], [60, 0, 0, -60]);

  // Pointer events logic to prevent overlay blocking
  const photoPointerEvents = useTransform(scrollProgress, (val) => val < 0.45 ? 'auto' : 'none');
  const namePointerEvents = useTransform(scrollProgress, (val) => val >= 0.45 && val < 0.65 ? 'auto' : 'none');
  const nitPointerEvents = useTransform(scrollProgress, (val) => val >= 0.65 && val < 0.82 ? 'auto' : 'none');
  const devPointerEvents = useTransform(scrollProgress, (val) => val >= 0.82 ? 'auto' : 'none');

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=450%',
        pin: stickyRef.current,
        scrub: true,
        onUpdate: (self) => {
          scrollProgress.set(self.progress);
        }
      });
    });

    return () => ctx.revert();
  }, [scrollProgress]);

  return (
    <div ref={sectionRef} className="relative w-full bg-black">

      {/* 1. Sticky Pinning Area */}
      <div ref={stickyRef} className="h-screen w-full flex items-center justify-center overflow-hidden z-10 bg-black relative select-none">

        <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none" />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#00ff66]/[0.012] blur-[150px] pointer-events-none"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        {/* Global HUD Layout Brackets */}
        <div className="absolute top-12 left-12 w-6 h-6 border-t border-l border-white/10 pointer-events-none" />
        <div className="absolute top-12 right-12 w-6 h-6 border-t border-r border-white/10 pointer-events-none" />
        <div className="absolute bottom-12 left-12 w-6 h-6 border-b border-l border-white/10 pointer-events-none" />
        <div className="absolute bottom-12 right-12 w-6 h-6 border-b border-r border-white/10 pointer-events-none" />

        {/* HUD Header Label */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none">
          <span className="h-[1px] w-8 bg-[#00ff66]/40" />
          <span className="text-4xs uppercase tracking-widest text-[#00ff66] font-mono font-black">
            DOSSIER TRANSMISSION STAGE
          </span>
          <span className="h-[1px] w-8 bg-[#00ff66]/40" />
        </div>

        {/* Centered Absolute Content Box containing overlay elements */}
        <div className="relative w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-center">

          {/* STAGE 1: PORTRAIT PHOTO (Large, NO CROP using object-contain, zooms out from 800% / 8.0x) */}
          <motion.div
            style={{
              opacity: photoOpacity,
              scale: photoScale,
              y: photoY,
              pointerEvents: photoPointerEvents
            }}
            className="absolute w-[85vw] h-[75vh] max-w-4xl max-h-[75vh] overflow-hidden flex items-center justify-center z-20"
          >
            <img
              src="/MyPhoto.png"
              alt="Saurav Kumar Portrait"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* STAGE 2: NAME DISPLAY LAYER (Luxury Stagger Mask Reveal & Exit transformations) */}
          <motion.div
            style={{
              opacity: nameWrapperOpacity,
              y: nameWrapperY,
              pointerEvents: namePointerEvents
            }}
            className="absolute flex flex-col items-center justify-center w-full max-w-6xl text-center z-10"
          >
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-center flex justify-center flex-wrap leading-none select-none">
              <div className="flex">
                {"SAURAV".split("").map((c, i) => (
                  <Letter
                    key={i}
                    char={c}
                    index={i}
                    progress={scrollProgress}
                    className="text-transparent"
                    style={{ WebkitTextStroke: '2px #00ff66' }}
                  />
                ))}
              </div>
              <div className="w-4 sm:w-6 md:w-8" />
              <div className="flex">
                {"KUMAR".split("").map((c, i) => (
                  <Letter
                    key={i}
                    char={c}
                    index={i + 6}
                    progress={scrollProgress}
                    className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  />
                ))}
              </div>
            </div>
            <span className="text-4xs font-mono tracking-widest text-neutral-500 uppercase font-bold mt-8">
              SYSTEM FOUNDER & OWNER
            </span>
          </motion.div>

          {/* STAGE 3: NIT JAMSHEDPUR COLLEGE LAYER (Blur to sharp scale) */}
          <motion.div
            style={{
              opacity: nitOpacity,
              filter: nitFilter,
              y: nitY,
              pointerEvents: nitPointerEvents
            }}
            className="absolute flex flex-col items-center justify-center w-full max-w-6xl text-center z-10"
          >
            <motion.h3
              style={{ letterSpacing: nitLetterSpacing }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-black text-[#00ff66] uppercase pl-[0.25em]"
            >
              NIT JAMSHEDPUR
            </motion.h3>
            <span className="text-4xs font-mono tracking-widest text-neutral-500 uppercase font-bold mt-8">
              ALMA MATER & ENGINEERING BASE
            </span>
          </motion.div>

          {/* STAGE 4: ROLE / WEB DEVELOPER LAYER (Kinetic Bounding Panel) */}
          <motion.div
            style={{
              opacity: devOpacity,
              y: devY,
              scale: devScale,
              pointerEvents: devPointerEvents
            }}
            className="absolute flex flex-col items-center justify-center w-full max-w-6xl text-center z-10"
          >
            <div className="relative px-8 py-5 border border-[#00ff66]/20 bg-[#00ff66]/[0.02] rounded-2xl shadow-[0_0_40px_rgba(0,255,102,0.06)] max-w-full">
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest text-white block">
                FULL STACK WEB DEVELOPER
              </span>
              <div className="absolute top-0 left-6 w-6 h-[1px] bg-[#00ff66]" />
              <div className="absolute top-0 right-6 w-6 h-[1px] bg-[#00ff66]" />
              <div className="absolute bottom-0 left-6 w-6 h-[1px] bg-[#00ff66]" />
              <div className="absolute bottom-0 right-6 w-6 h-[1px] bg-[#00ff66]" />
            </div>
            <span className="text-4xs font-mono tracking-widest text-neutral-500 uppercase font-bold mt-8">
              PRIMARY SYSTEM ARCHITECT
            </span>
          </motion.div>

        </div>
      </div>

      {/* 2. Scroll-Revealed About Section (flows in natively after unpinning) */}
      <section className="relative bg-black py-36 px-6 md:px-12 w-full border-t border-white/5 z-20" id="about">
        <div className="max-w-7xl mx-auto w-full select-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Large Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[#00ff66]" />
                <span className="text-3xs uppercase tracking-widest text-[#00ff66] font-bold font-mono">
                  Identity Dossier
                </span>
              </div>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] flex flex-col">
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00ff66' }}>
                  ABOUT
                </span>
                <span className="text-white">
                  ME
                </span>
              </h2>
            </div>

            {/* Right Column: Progressive Shiny Bento Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <RevealCard delay={0.0}>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  Education Base
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-0.5">
                  NIT JAMSHEDPUR
                </h3>
                <span className="text-[9px] font-mono text-[#00ff66]/80 uppercase tracking-widest font-bold">
                  B.Tech v2027
                </span>
              </RevealCard>

              <RevealCard delay={0.1}>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  Algorithms tier
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-0.5">
                  LEETCODE KNIGHT
                </h3>
                <span className="text-[9px] font-mono text-[#00ff66]/80 uppercase tracking-widest font-bold">
                  1,000+ solved
                </span>
              </RevealCard>

              <RevealCard delay={0.2}>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  Core Frameworks
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-0.5">
                  MERN PIPELINES
                </h3>
                <span className="text-[9px] font-mono text-[#00ff66]/80 uppercase tracking-widest font-bold">
                  Full Stack dev
                </span>
              </RevealCard>

              <RevealCard delay={0.3}>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  System Intelligence
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-0.5">
                  GENERATIVE AI
                </h3>
                <span className="text-[9px] font-mono text-[#00ff66]/80 uppercase tracking-widest font-bold">
                  LLM integrations
                </span>
              </RevealCard>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
