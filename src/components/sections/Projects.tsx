import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  color: string;
  githubLink: string;
  liveLink: string;
}

export const Projects = () => {
  const projectsList: Project[] = [
    {
      id: 1,
      title: "RoutePilot",
      subtitle: "High-Performance Logistics Orchestration Platform",
      description: "Designed to solve the classical Traveling Salesperson Problem (TSP) and Vehicle Routing Problem (VRP) for fleet delivery networks. By mapping physical coordinates to a real-world OSRM driving matrix, RoutePilot computes optimized itineraries that eliminate crossed paths, respect delivery time slots, manage truck load limits, and calculate live carbon telemetry.",
      tech: ["React", "OSRM Road API", "Node.js", "Express.js", "Tailwind CSS"],
      features: [
        "OSRM Road Matrix & Haversine offline fallback",
        "2-Opt swap segment reversal & Nearest Neighbor Seeding",
        "Capacitated Vehicles (CVRP) & Time Windows (VRPTW)"
      ],
      color: "#00ff66",
      githubLink: "https://github.com/SauravKumar04/RoutePilot",
      liveLink: "https://route-pilot-five.vercel.app/"
    },
    {
      id: 2,
      title: "MedCare",
      subtitle: "Healthcare Appointment Platform",
      description: "Developed a comprehensive clinical appointment suite supporting patient-doctor matching, scheduling logic, secure checkouts via Razorpay, interactive calendars, and notification dispatches.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Razorpay"],
      features: ["Doctor Matching & Schedule Logic", "Razorpay Secure Checkout Portal", "Comprehensive Patient CRM System"],
      color: "#00ff66",
      githubLink: "https://github.com/SauravKumar04/MedCare",
      liveLink: "https://medcare-frontend.netlify.app/"
    },
    {
      id: 3,
      title: "StoryPad",
      subtitle: "Social Story Writing Ecosystem",
      description: "Engineered a collaborative creative hub for writers and readers featuring social follow streams, socket-driven notification feeds, markdown editor interfaces, and reading progress caching.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      features: ["Realtime Sockets Notification Feeds", "Interactive Chapter Editor Canvas", "Adaptive Bookmarking Cache Engine"],
      color: "#00ff66",
      githubLink: "https://github.com/SauravKumar04/StoryPad",
      liveLink: "https://story-pad-26tm.vercel.app/"
    }
  ];

  return (
    <section className="portfolio-section px-6 md:px-12" id="projects">
      <div className="max-w-7xl mx-auto w-full select-none">

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
              Product Releases
            </motion.span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] flex flex-col">
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #00ff66' }}>
              FEATURED
            </span>
            <span className="text-white">
              LAUNCHES
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Split Typography Layout in Monospace */}
        <div className="flex flex-col w-full divide-y divide-white/5 font-mono">
          {projectsList.map((project) => {
            return (
              <div key={project.id} className="py-16 first:pt-4">
                <motion.div
                  className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Left Column: Big uppercase typography header with blinking cursor */}
                  <div className="col-span-12 md:col-span-6 flex items-center">
                    <h3
                      className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase transition-all duration-500 group-hover:text-[#00ff66] group-hover:translate-x-2 flex items-center"
                      style={{ wordBreak: 'break-word' }}
                    >
                      {project.title}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="text-[#00ff66] ml-2 select-none group-hover:scale-110 transition-transform"
                      >
                        _
                      </motion.span>
                    </h3>
                  </div>

                  {/* Right Column: Project details, features, and linkages inside a shiny bento card */}
                  <div className="col-span-12 md:col-span-6 relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.002] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#00ff66]/30 hover:bg-[#00ff66]/[0.005] hover:shadow-[0_0_40px_rgba(0,255,102,0.03)]">
                    {/* Glossy light-sweep sheen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                    {/* Spotlight backing glow */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#00ff66]/[0.005] blur-2xl group-hover:bg-[#00ff66]/[0.03] transition-all duration-500 pointer-events-none" />

                    {/* Corner bracket decorations */}
                    <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />
                    <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-white/[0.1] group-hover:border-[#00ff66]/40 transition-colors pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <span className="text-3xs font-mono uppercase tracking-widest text-[#00ff66] font-bold mb-3 block">
                          // {project.subtitle}
                        </span>
                        <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 font-medium">
                          {project.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {project.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-3xs text-neutral-400">
                              <Sparkles className="w-3.5 h-3.5 text-[#00ff66] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((t, tIdx) => (
                            <span key={tIdx} className="text-4xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/5 text-neutral-500 font-bold">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-6 pt-2">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-black tracking-wider uppercase text-white flex items-center gap-1.5 hover-reveal cursor-none"
                          >
                            Launch Product
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#00ff66]" />
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-black tracking-wider uppercase text-neutral-600 hover:text-neutral-300 transition-colors cursor-none"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
