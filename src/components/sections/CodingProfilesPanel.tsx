import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

// ==========================================================================
// Sub-component: CountUp (Percentage/Rating numerical counter)
// ==========================================================================
interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ target, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// ==========================================================================
// Sub-component: TiltProfileCard (3D Tilt Card with mouse spotlight)
// ==========================================================================
interface TiltProfileCardProps {
  children: React.ReactNode;
  link?: string;
  glowColor: string;
  borderColorClass: string;
  glowShadowClass: string;
  subLinks?: { name: string; url: string }[];
}

const TiltProfileCard: React.FC<TiltProfileCardProps> = ({
  children,
  link,
  glowColor,
  borderColorClass,
  glowShadowClass,
  subLinks
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 20 });

  const spotlightX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const spotlightY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const spotlightBg = useMotionTemplate`radial-gradient(130px circle at ${spotlightX}% ${spotlightY}%, ${glowColor}, transparent 80%)`;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const cardContent = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-[145px] sm:h-[155px] rounded-xl border border-white/5 bg-[#08080a]/75 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between select-none overflow-hidden group will-change-transform transition-all duration-300 ${borderColorClass} ${glowShadowClass}`}
    >
      {/* Laser light reflection */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-1"
        style={{
          background: spotlightBg,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {/* Grid Pattern inside the card */}
      <div className="absolute inset-0 grid-mesh opacity-[0.05] pointer-events-none" />

      {/* 3D content */}
      <div style={{ transform: "translateZ(10px)" }} className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );

  // If sublinks exist, do not cover card click to avoid click-bubbling conflict
  if (subLinks) {
    return <div className="w-full">{cardContent}</div>;
  }

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="cursor-none w-full block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

// ==========================================================================
// Main Component: CodingProfilesPanel (2x2 Dashboard)
// ==========================================================================
export const CodingProfilesPanel: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="w-full max-w-[340px] sm:max-w-[480px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 select-none relative z-20 justify-center items-center px-1"
      style={{
        perspective: 1000,
      }}
    >
      {/* 1. LeetCode Card */}
      <TiltProfileCard
        link="https://leetcode.com/u/saurav_codes01/"
        glowColor="rgba(245, 158, 11, 0.12)"
        borderColorClass="hover:border-amber-500/40"
        glowShadowClass="hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.15)]"
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-mono font-bold tracking-[0.15em] text-neutral-500 uppercase">// LEETCODE</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-mono tracking-tight group-hover:text-amber-400 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] transition-all duration-300">
              {isInView ? <CountUp target={1880} /> : "0"}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-amber-500/80 font-black uppercase">
              @ Knight Level
            </span>
          </div>
          <SiLeetcode className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.5)] transition-all duration-300" />
        </div>

        {/* Custom Radial Progress Indicator */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2.5 mt-auto">
          <span className="text-[8px] font-mono text-neutral-400 font-bold uppercase tracking-wider">KNIGHT RATIO</span>
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-8 h-8 transform -rotate-90">
              <circle cx="16" cy="16" r="11" stroke="rgba(255,255,255,0.04)" strokeWidth="3" fill="transparent" />
              {isInView && (
                <motion.circle
                  cx="16"
                  cy="16"
                  r="11"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 11}
                  initial={{ strokeDashoffset: 2 * Math.PI * 11 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 11 * 0.28 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  style={{ filter: 'drop-shadow(0 0 2px rgba(245,158,11,0.5))' }}
                />
              )}
            </svg>
            <span className="absolute text-[7px] font-mono font-bold text-amber-500">72%</span>
          </div>
        </div>
      </TiltProfileCard>

      {/* 2. Codeforces Card */}
      <TiltProfileCard
        link="https://codeforces.com/profile/saurav_cp"
        glowColor="rgba(14, 165, 233, 0.12)"
        borderColorClass="hover:border-sky-500/40"
        glowShadowClass="hover:shadow-[0_0_35px_-5px_rgba(14,165,233,0.15)]"
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-mono font-bold tracking-[0.15em] text-neutral-500 uppercase">// CODEFORCES</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-mono tracking-tight group-hover:text-sky-400 group-hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.3)] transition-all duration-300">
              {isInView ? <CountUp target={1200} /> : "0"}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-sky-400/80 font-black uppercase">
              @ Pupil Level
            </span>
          </div>
          <SiCodeforces className="w-6 h-6 sm:w-7 sm:h-7 text-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(14,165,233,0.5)] transition-all duration-300" />
        </div>

        {/* Custom Rating Sparkline Path */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2.5 mt-auto">
          <span className="text-[8px] font-mono text-neutral-400 font-bold uppercase tracking-wider">RATING STACK</span>
          <svg className="w-14 h-6 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" viewBox="0 0 80 30" fill="none">
            <defs>
              <linearGradient id="cf-glow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {isInView && (
              <>
                <motion.path
                  d="M 5,25 L 20,21 L 35,23 L 50,14 L 65,16 L 75,5 L 75,30 L 5,30 Z"
                  fill="url(#cf-glow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d="M 5,25 L 20,21 L 35,23 L 50,14 L 65,16 L 75,5"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                />
              </>
            )}
          </svg>
        </div>
      </TiltProfileCard>

      {/* 3. CodeChef Card */}
      <TiltProfileCard
        link="https://www.codechef.com/users/saurav_cp"
        glowColor="rgba(168, 85, 247, 0.12)"
        borderColorClass="hover:border-purple-500/40"
        glowShadowClass="hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.15)]"
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-mono font-bold tracking-[0.15em] text-neutral-500 uppercase">// CODECHEF</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-mono tracking-tight group-hover:text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-300">
              {isInView ? <CountUp target={1300} suffix="+" /> : "0"}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-purple-400/80 font-black uppercase">
              Max Rating
            </span>
          </div>
          <SiCodechef className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] transition-all duration-300" />
        </div>

        {/* Custom Glowing Rating Stars */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2.5 mt-auto">
          <span className="text-[8px] font-mono text-neutral-400 font-bold uppercase tracking-wider">CHEF RANKING</span>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((starIndex) => (
              <motion.span
                key={starIndex}
                className="text-[10px]"
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={isInView ? {
                  opacity: [0.6, 1, 0.6],
                  scale: [0.9, 1.15, 0.9],
                  color: ["#a855f7", "#d8b4fe", "#a855f7"]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3 * starIndex,
                  ease: "easeInOut"
                }}
              >
                ★
              </motion.span>
            ))}
          </div>
        </div>
      </TiltProfileCard>

      {/* 4. DSA Solved Card */}
      <TiltProfileCard
        glowColor="rgba(16, 185, 129, 0.12)"
        borderColorClass="hover:border-emerald-500/40"
        glowShadowClass="hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.15)]"
        subLinks={[
          { name: "LeetCode", url: "https://leetcode.com/u/saurav_kumar_2002/" },
          { name: "GFG", url: "https://www.geeksforgeeks.org/profile/sauravkuzhb" }
        ]}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-mono font-bold tracking-[0.15em] text-neutral-500 uppercase">// PROBLEM SOLVED</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-mono tracking-tight group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] transition-all duration-300">
              {isInView ? <CountUp target={1000} suffix="+" /> : "0"}
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-emerald-400/80 font-black uppercase">
              DSA Challenges
            </span>
          </div>
          <SiGeeksforgeeks className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.5)] transition-all duration-300" />
        </div>

        {/* Clicking sublinks explicitly inside the card */}
        <div className="flex flex-col gap-1.5 border-t border-white/5 pt-2 mt-auto w-full select-none">
          <div className="flex justify-between items-center text-[7.5px] font-mono text-neutral-500 uppercase font-black">
            <span>VERIFIED CHANNELS</span>
          </div>
          <div className="flex gap-2">
            <a
              href="https://leetcode.com/u/saurav_kumar_2002/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-1 rounded bg-black/60 border border-white/5 hover:border-amber-500/40 text-[7px] text-center font-mono font-bold text-neutral-400 hover:text-amber-500 hover:shadow-[0_0_10px_rgba(245,158,11,0.15)] cursor-pointer select-none transition-all duration-300"
            >
              LC_2
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/sauravkuzhb"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-1 rounded bg-black/60 border border-white/5 hover:border-emerald-500/40 text-[7px] text-center font-mono font-bold text-neutral-400 hover:text-emerald-500 hover:shadow-[0_0_10px_rgba(16,185,129,0.15)] cursor-pointer select-none transition-all duration-300"
            >
              GFG_PROFILE
            </a>
          </div>
        </div>
      </TiltProfileCard>
    </motion.div>
  );
};
