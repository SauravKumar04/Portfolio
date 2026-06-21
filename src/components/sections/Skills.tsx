import React from 'react';
import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiOpenai,
  SiLinux,
  SiTailwindcss
} from 'react-icons/si';
import { TbBinaryTree, TbHierarchy } from 'react-icons/tb';

interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const skillList: Skill[] = [
    {
      name: "C++ (CPP)",
      category: "Languages",
      icon: <SiCplusplus className="w-12 h-12 md:w-13 md:h-13 text-[#00599C] group-hover:animate-[bounce_1s_infinite]" />
    },
    {
      name: "JavaScript (JS)",
      category: "Languages",
      icon: <SiJavascript className="w-12 h-12 md:w-13 md:h-13 text-[#F7DF1E] group-hover:animate-[bounce_1s_infinite] rounded overflow-hidden" />
    },
    {
      name: "React",
      category: "Web Dev",
      icon: <SiReact className="w-12 h-12 md:w-13 md:h-13 text-[#61DAFB] animate-[spin_25s_linear_infinite] group-hover:animate-[spin_8s_linear_infinite]" />
    },
    {
      name: "Tailwind CSS",
      category: "Web Dev",
      icon: <SiTailwindcss className="w-12 h-12 md:w-13 md:h-13 text-[#06B6D4] group-hover:animate-pulse" />
    },
    {
      name: "Node.js",
      category: "Web Dev",
      icon: <SiNodedotjs className="w-12 h-12 md:w-13 md:h-13 text-[#339933] group-hover:animate-pulse" />
    },
    {
      name: "Express.js",
      category: "Web Dev",
      icon: <SiExpress className="w-12 h-12 md:w-13 md:h-13 text-[#ffffff] group-hover:animate-pulse" />
    },
    {
      name: "MongoDB",
      category: "Web Dev",
      icon: <SiMongodb className="w-12 h-12 md:w-13 md:h-13 text-[#47A248] group-hover:animate-pulse" />
    },
    {
      name: "Gen AI",
      category: "Gen AI",
      icon: <SiOpenai className="w-12 h-12 md:w-13 md:h-13 text-[#10a37f] group-hover:animate-[spin_6s_linear_infinite]" />
    },
    {
      name: "DSA",
      category: "Algorithms",
      icon: <TbBinaryTree className="w-12 h-12 md:w-13 md:h-13 text-[#e28743] group-hover:animate-pulse" />
    },
    {
      name: "Operating Systems",
      category: "CS Core",
      icon: <SiLinux className="w-12 h-12 md:w-13 md:h-13 text-[#FCC624] group-hover:animate-pulse" />
    },
    {
      name: "SQL",
      category: "CS Core",
      icon: <SiPostgresql className="w-12 h-12 md:w-13 md:h-13 text-[#336791] group-hover:animate-pulse" />
    },
    {
      name: "OOPs",
      category: "CS Core",
      icon: <TbHierarchy className="w-12 h-12 md:w-13 md:h-13 text-[#818cf8] group-hover:animate-pulse" />
    }
  ];

  return (
    <section className="portfolio-section px-6 md:px-12" id="skills">
      <div className="max-w-7xl mx-auto w-full relative select-none">

        {/* Title */}
        <motion.div
          className="section-header animate-fadeIn mb-10 select-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.span
              className="h-[1px] bg-[#00ff66]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.span
              className="text-3xs uppercase tracking-widest text-[#00ff66] font-bold font-mono"
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Capabilities Index
            </motion.span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] flex flex-col">
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00ff66' }}>
              TECHNICAL
            </span>
            <span className="text-white">
              MATRIX
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Open Grid Layout (Stripe-style) divided by subtle borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-white/5 w-full mt-10">
          {skillList.map((skill, skillIdx) => (
            <motion.div
              key={skillIdx}
              className="border-r border-b border-white/5 p-8 flex flex-col items-center justify-center text-center relative group min-h-[190px] transition-all duration-500 hover:bg-white/[0.003] overflow-hidden select-none"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: skillIdx * 0.04 }}
            >
              {/* Category tag */}
              <div className="absolute top-3.5 left-3.5 text-[8px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-[#00ff66] transition-colors duration-300">
                {skill.category}
              </div>

              {/* Icon Container with bright colors by default and subtle hover scaling */}
              <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-110 relative text-white">
                {skill.icon}
              </div>

              {/* Skill Label (Light Gray / White text by default) */}
              <span className="text-3xs font-mono uppercase tracking-widest text-neutral-200 group-hover:text-white font-bold mt-5 transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
