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
    <div className="flex flex-col items-start justify-center p-5 sm:p-6 bg-black/40 border border-white/5 rounded-xl relative overflow-hidden group select-none h-full transition-all duration-300 hover:border-[#00ff66]/20 hover:bg-[#00ff66]/[0.005]">
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

// Sub-component for scroll-based profile reveal right below the Hero Image
const ScrollRevealProfileInfo: React.FC<{ nameSaurav: string; nameKumar: string }> = ({ nameSaurav, nameKumar }) => {
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

  const scrollToSkills = () => {
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(12px)', scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: i * 0.04
      }
    })
  };

  const nitVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)', letterSpacing: '0.4em' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      letterSpacing: '0.12em',
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        delay: 0.5
      }
    }
  };

  const devVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        delay: 0.8
      }
    }
  };

  const ctaMetricsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 1.1
      }
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black py-24 sm:py-32"
    >
      <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none" />

      {/* Soft Aurora Ambient Background Glow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-[220px] pointer-events-none select-none opacity-80 z-0">
        <SoftAurora
          color1="#00ff66"
          color2="#004d1a"
          speed={0.3}
          scale={1.2}
          brightness={1.3}
          enableMouseInteraction={true}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center sm:items-start justify-center text-center sm:text-left flex-1"
      >
        {/* Status Label */}
        <motion.div
          variants={ctaMetricsVariants}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2 mb-5 select-none max-w-full"
        >
          <div className="px-2.5 py-0.5 rounded border border-[#00ff66]/15 bg-[#00ff66]/5 text-[#00ff66] text-3xs font-mono font-bold tracking-widest uppercase flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
            SYSTEM ACTIVE
          </div>
        </motion.div>

        {/* Name Reveal */}
        <motion.div
          style={{ x: nameX, y: nameY }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-5 flex flex-wrap justify-center sm:justify-start select-none"
        >
          <div className="flex mr-4 md:mr-6">
            {nameSaurav.split("").map((char, index) => (
              <motion.span
                key={`scroll-saurav-${index}`}
                custom={index}
                variants={letterVariants}
                className="inline-block text-transparent hover:scale-125 hover:text-[#00ff66] transition-transform duration-200 cursor-none origin-bottom"
                style={{ WebkitTextStroke: '1.5px #00ff66' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex">
            {nameKumar.split("").map((char, index) => (
              <motion.span
                key={`scroll-kumar-${index}`}
                custom={index + nameSaurav.length}
                variants={letterVariants}
                className="inline-block text-white hover:scale-125 hover:text-[#00ff66] transition-transform duration-200 cursor-none origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* NIT Jamshedpur Subtitle */}
        <motion.div
          variants={nitVariants}
          style={{ x: descX, y: descY }}
          className="flex items-center justify-center sm:justify-start gap-2 mb-6 select-none"
        >
          <span className="h-[1px] w-6 bg-[#00ff66]/70" />
          <span className="text-3xs sm:text-2xs uppercase tracking-widest text-[#00ff66] font-mono font-black">
            NIT JAMSHEDPUR
          </span>
          <span className="h-[1px] w-6 bg-[#00ff66]/70" />
        </motion.div>

        {/* Role/Web Developer */}
        <motion.div
          variants={devVariants}
          style={{ x: descX, y: descY }}
          className="relative px-6 py-3 border border-[#00ff66]/20 bg-black/60 backdrop-blur-sm rounded-xl shadow-[0_0_30px_rgba(0,255,102,0.04)] mb-8 select-none max-w-full"
        >
          <span className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest text-white block">
            WEB DEVELOPER
          </span>
          <div className="absolute top-0 left-4 w-4 h-[1px] bg-[#00ff66]" />
          <div className="absolute top-0 right-4 w-4 h-[1px] bg-[#00ff66]" />
          <div className="absolute bottom-0 left-4 w-4 h-[1px] bg-[#00ff66]" />
          <div className="absolute bottom-0 right-4 w-4 h-[1px] bg-[#00ff66]" />
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={ctaMetricsVariants}
          style={{ x: descX, y: descY }}
          className="flex flex-wrap gap-4 items-center justify-center sm:justify-start mb-16"
        >
          <button
            onClick={scrollToSkills}
            className="px-6 py-3 rounded bg-white text-black font-bold text-[10px] tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 active:scale-95 flex items-center gap-2 cursor-none"
          >
            Explore Matrix
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#contact"
            className="px-6 py-3 rounded border border-white/5 bg-white/[0.01] text-white font-bold text-[10px] tracking-wider uppercase transition-all duration-300 hover:bg-white/5 hover:border-white/10 active:scale-95 cursor-none"
          >
            Contact Pipeline
          </a>
        </motion.div>

        {/* Bento Metrics Grid */}
        <motion.div
          variants={ctaMetricsVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/5 pt-12 w-full"
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
            suffix="+"
            label="LeetCode"
            subLabel="@ Knight Level"
            icon={<SiLeetcode className="w-10 h-10 text-amber-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            link="https://leetcode.com/u/saurav_codes01/"
          />
          <Metric
            value={1200}
            suffix="+"
            label="Codeforces"
            subLabel="@ Pupil"
            icon={<SiCodeforces className="w-10 h-10 text-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            link="https://codeforces.com/profile/saurav_cp"
          />
          <Metric
            value={1300}
            suffix="+"
            label="CodeChef"
            subLabel="3 Star"
            icon={<SiCodechef className="w-10 h-10 text-amber-600 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />}
            link="https://www.codechef.com/users/saurav_cp"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Loader interval setup
  useEffect(() => {
    let start = 0;
    const duration = 1800; // Cinematic load duration
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Reveal motion variants for full viewport image reveal on load
  const imageVariants = {
    hidden: { 
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
      scale: 1.15,
      filter: 'blur(15px)',
      opacity: 0
    },
    visible: { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', 
      scale: 1.0,
      filter: 'blur(0px)',
      opacity: 1,
      transition: { 
        duration: 1.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 0.1
      }
    }
  };

  const nameSaurav = "SAURAV";
  const nameKumar = "KUMAR";

  return (
    <>
      {/* Intro cinematic loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-[#000000] z-[9999] flex flex-col items-center justify-center select-none"
            exit={{
              y: '-100%',
              transition: { duration: 1.0, ease: [0.85, 0, 0.15, 1] as [number, number, number, number] }
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
              <Mosaic color="#08ad08" size="medium" text="" textColor="" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section 1: IMAGE ONLY (Spans full screen from left to right, reveals on load) */}
      <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center select-none">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={loading ? "hidden" : "visible"}
          className="w-full h-full relative"
        >
          <img
            src="/herophoto.png"
            alt="Hero Visual"
            className="w-full h-full object-cover object-center"
          />
          {/* subtle vignettes to keep the visual high-end */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </motion.div>
        {/* Soft bottom edge blending to smoothly transition into the black background below */}
        <div className="absolute bottom-0 left-0 right-0 h-[10vh] bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      </section>

      {/* Hero Section 2: SCROLL-BASED REVEAL OF PROFILE TEXTS & METRICS */}
      <ScrollRevealProfileInfo nameSaurav={nameSaurav} nameKumar={nameKumar} />
    </>
  );
};
