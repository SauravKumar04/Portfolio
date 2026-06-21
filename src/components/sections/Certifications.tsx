import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { SiFreecodecamp, SiHackerrank } from 'react-icons/si';

// Custom SVG component for IBM
const SiIbm: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <title>IBM</title>
    <path d="M0 2h6v1.33H0V2zm8 0h8v1.33H8V2zm10 0h6v1.33h-6V2zM0 4.67h6V6H0V4.67zm8 0h8V6H8V4.67zm10 0h6V6h-6V4.67zM0 7.33h6v1.34H0V7.33zm8 0h8v1.34H8V7.33zm10 0h6v1.34h-6V7.33zM0 10h6v1.33H0V10zm8 0h8v1.33H8V10zm10 0h6v1.33h-6V10zm-18 2.67h6V14H0v-1.33zm8 0h8V14H8v-1.33zm10 0h6V14h-6v-1.33zM0 15.33h6v1.34H0v-1.34zm8 0h8v1.34H8v-1.34zm10 0h6v1.34h-6v-1.34zM0 18h6v1.33H0V18zm8 0h8v1.33H8V18zm10 0h6v1.33h-6V18zm-18 2.67h6V22H0v-1.33zm8 0h8V22H8v-1.33zm10 0h6V22h-6v-1.33z" />
  </svg>
);

interface CertCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyLink: string;
  skills: string[];
}

const getIssuerIcon = (issuer: string) => {
  const name = issuer.toLowerCase();
  if (name.includes('freecodecamp')) {
    return <SiFreecodecamp className="w-12 h-12 text-[#3bbf74] transition-all duration-300 group-hover:scale-110" />;
  }
  if (name.includes('hackerrank')) {
    return <SiHackerrank className="w-12 h-12 text-[#2ec866] transition-all duration-300 group-hover:scale-110" />;
  }
  if (name.includes('ibm')) {
    return <SiIbm className="w-12 h-12 text-[#0f62fe] transition-all duration-300 group-hover:scale-110" />;
  }
  return <Award className="w-12 h-12 text-neutral-400 transition-all duration-300 group-hover:scale-110 group-hover:text-[#00ff66]" />;
};

const CertCard: React.FC<CertCardProps> = ({ title, issuer, date, credentialId, verifyLink, skills }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 25, stiffness: 200 });

  const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="bento-card w-full relative overflow-hidden group select-none cursor-none min-h-[300px]"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(0, 255, 102, 0.04), transparent 70%)`
        }}
      />

      <div style={{ transform: 'translateZ(25px)' }} className="flex flex-col justify-between h-full w-full">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="transition-all duration-300 flex items-center justify-center opacity-80 group-hover:opacity-100">
              {getIssuerIcon(issuer)}
            </div>
            <a
              href={verifyLink}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-[#00ff66] transition-all cursor-none p-2 border border-white/5 bg-white/[0.01] hover:bg-[#00ff66]/5 hover:border-[#00ff66]/20 rounded-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#00ff66] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-3xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-4">{issuer}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-4xs font-mono uppercase tracking-widest px-2.5 py-1 rounded border border-white/5 bg-white/[0.01] text-neutral-500 font-bold group-hover:text-neutral-300 group-hover:border-[#00ff66]/10 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-white/5 pt-4 text-4xs font-mono text-neutral-600">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-[#00ff66]" />
              {date}
            </span>
            {credentialId && (
              <span className="group-hover:text-neutral-400 transition-colors duration-300">ID: {credentialId}</span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export const Certifications: React.FC = () => {
  return (
    <section className="portfolio-section px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden" id="certifications">
      <div className="max-w-7xl mx-auto w-full relative select-none">

        {/* Title */}
        <motion.div
          className="section-header mb-10 select-none"
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
              Verified Credentials
            </motion.span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] flex flex-col">
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00ff66' }}>
              CREDENTIALS
            </span>
            <span className="text-white">
              &amp; BADGES
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Grid container spanning exactly 12 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        <CertCard
          title="Backend Development and APIs Certification"
          issuer="FreeCodeCamp"
          date="2024"
          credentialId="fcc-backend-apis"
          verifyLink="https://www.linkedin.com/safety/go/?url=https%3A%2F%2Ffreecodecamp%2Eorg%2Fcertification%2Fsauravkumar9798%2Fback-end-development-and-apis&urlhash=6CMT&mt=UuLUT4Xon1p7ofJCMq6KhUAfY7jTmX5HkSvcboP7zF0HeHM2uW-njxE1szeLBSUS0HHKuDbDwFa3VBzLntrptrkDOrr-&isSdui=true"
          skills={["NodeJS", "ExpressJS", "MongoDB", "Mongoose", "REST APIs", "SQL"]}
        />
        <CertCard
          title="Frontend Developer (React)"
          issuer="HackerRank"
          date="2024"
          credentialId="9aa8872c60be"
          verifyLink="https://www.hackerrank.com/certificates/9aa8872c60be"
          skills={["ReactJS", "State Management", "Vite", "JavaScript ES6", "React Hooks"]}
        />
        <CertCard
          title="Generative AI Foundations"
          issuer="IBM SkillsBuild"
          date="2024"
          credentialId="ibm-genai-foundations"
          verifyLink="https://skillsbuild.org/"
          skills={["Generative AI", "LLMs", "AI Ethics", "IBM Watson", "Prompt Design"]}
        />
      </div>
    </section>
  );
};
