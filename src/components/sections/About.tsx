import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Binary, Terminal } from 'lucide-react';

export const About = () => {
  // Terminal Typing Log Simulation
  const [logs, setLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  const logPool = [
    "[INIT] Initializing portfolio agent session...",
    "[SYS] Fetching Saurav Kumar profile coordinates...",
    "[SYS] Connecting NIT Jamshedpur node...",
    "[SYS] Loading competitive programming matrix...",
    "[SYS] Rating matched: LeetCode Knight Rank...",
    "[SYS] Stack verified: MongoDB, Express, React, Node...",
    "[SYS] AI integrations: OpenAI / Gemini ready...",
    "[SYS] Uptime: stable. Core memory allocation verified."
  ];

  useEffect(() => {
    // Fill first 3 logs
    setLogs(logPool.slice(0, 3));
    setLogIndex(3);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const nextLogs = [...prev.slice(1), logPool[logIndex]];
        return nextLogs;
      });
      setLogIndex((prev) => (prev + 1) % logPool.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [logIndex]);

  const jsonItems = [
    { key: '"name"', val: '"Saurav Kumar"', color: 'text-amber-400' },
    { key: '"education"', val: '"B.Tech @ NIT Jamshedpur (2023 - 2027)"', color: 'text-blue-400' },
    { key: '"leetcode_rank"', val: '"Knight (1,000+ solved)"', color: 'text-purple-400' },
    { key: '"skills"', val: '["MERN Stack", "Generative AI", "C++ DSA"]', color: 'text-[#00ff66]' },
    { key: '"focus"', val: '"High-performance systems & optimization"', color: 'text-cyan-400' }
  ];

  return (
    <section className="portfolio-section px-6 md:px-12 relative overflow-hidden" id="about">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(0, 255, 102, 0.04) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto w-full select-none relative z-10">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Shorter, Clean Biography Narrative */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Huge Capitalized Heading Style matching Hero */}
            <div className="flex flex-col select-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-[#00ff66]" />
                <span className="text-3xs uppercase tracking-widest text-[#00ff66] font-bold font-mono">The Profile</span>
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] flex flex-col">
                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00ff66' }}>
                  ABOUT
                </span>
                <span className="text-white">
                  ME
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed">
              <p>
                I am a software engineer pursuing B.Tech from the <span className="text-white font-bold">National Institute of Technology, Jamshedpur (2023 - 2027)</span>. Focus areas include full-stack web applications, Generative AI integration, and high-performance competitive programming.
              </p>
              <p>
                By practicing advanced problem solving (solving over <span className="text-[#00ff66] font-bold">1,000+ DSA problems</span> and achieving LeetCode Knight rank), I design systems that combine optimized backend logic with clean user flows.
              </p>
            </div>

            {/* Short Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/5">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 text-blue-400 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Education</span>
                  <span className="text-xs text-neutral-200 font-bold block mt-0.5">NIT Jamshedpur</span>
                  <span className="text-3xs text-neutral-400 font-mono">B.Tech (2023 - 2027)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-white/5 border border-white/10 text-purple-400 mt-0.5">
                  <Binary className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">LeetCode Rank</span>
                  <span className="text-xs text-neutral-200 font-bold block mt-0.5">Knight Tier</span>
                  <span className="text-3xs text-neutral-400 font-mono">1,000+ Solved Problems</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Terminal with Larger Text */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="w-full rounded-xl border border-white/5 bg-[#08080a] relative overflow-hidden p-6 flex flex-col justify-between shadow-2xl shadow-black/85 min-h-[420px]">

              {/* Corner Indicators */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/5" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/5" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/5" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/5" />

              {/* Mesh background */}
              <div className="absolute inset-0 grid-mesh opacity-[0.05] pointer-events-none" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 relative z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/60" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/60" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/60" />
                </div>
                <div className="text-4xs text-neutral-500 font-mono uppercase tracking-widest">
                  saurav@nit-jsr: ~/profile
                </div>
                <div className="text-4xs font-mono text-[#00ff66] flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#00ff66] animate-pulse" /> LIVE
                </div>
              </div>

              {/* Typed JSON Representation with Bigger Text */}
              <div className="flex-1 relative z-10 font-mono text-xs sm:text-sm md:text-base leading-relaxed space-y-1.5 text-neutral-400 py-3">
                <div className="text-neutral-600 mb-2 flex items-center gap-1.5 text-[10px] md:text-xs">
                  <Terminal className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>saurav --info</span>
                </div>
                <span className="text-neutral-500 font-bold">{"{"}</span>
                <div className="pl-6 space-y-1.5">
                  {jsonItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.35, duration: 0.4 }}
                      className="flex flex-wrap items-center gap-1"
                    >
                      <span className="text-neutral-300 font-bold">{item.key}</span>
                      <span className="text-neutral-500">:</span>
                      <span className={item.color}>{item.val}</span>
                      {idx < jsonItems.length - 1 && <span className="text-neutral-500">,</span>}
                    </motion.div>
                  ))}
                </div>
                <span className="text-neutral-500 font-bold">{"}"}</span>
              </div>

              {/* Status Logger console feed with Bigger Text */}
              <div className="bg-black/40 border border-white/5 rounded p-3 font-mono text-[10px] md:text-xs text-neutral-500 leading-snug h-[95px] mt-4 flex flex-col justify-end overflow-hidden relative z-10">
                <div className="space-y-1">
                  {logs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`truncate ${log.includes('Knight') || log.includes('stable') || log.includes('ready')
                          ? 'text-[#00ff66]/80 font-bold'
                          : ''
                        }`}
                    >
                      {log}
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Infinite Skill Marquee Ticker */}
        <div className="w-full overflow-hidden whitespace-nowrap border-y border-white/5 py-4.5 bg-neutral-950/20 relative mt-16 z-10">
          <motion.div
            className="flex gap-12 text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear"
            }}
            style={{ width: "fit-content" }}
          >
            {[
              "MongoDB", "Express", "React", "Node.js", "Generative AI",
              "C++ Algorithms", "Data Structures", "System Optimization",
              "API Development", "SQL Databases", "Operating Systems",
              "OOP design"
            ].concat([
              "MongoDB", "Express", "React", "Node.js", "Generative AI",
              "C++ Algorithms", "Data Structures", "System Optimization",
              "API Development", "SQL Databases", "Operating Systems",
              "OOP design"
            ]).map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 select-none">
                <span className="text-[#00ff66] font-mono text-xs">•</span>
                <span>{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
