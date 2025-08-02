import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code2,
  ArrowRight
} from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiStripe,
  SiRazorpay
} from 'react-icons/si';

import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Tech stack icon mapping
  const getTechIcon = (tech) => {
    const iconMap = {
      'JavaScript': SiJavascript,
      'React': SiReact,
      'Node.js': SiNodedotjs,
      'Express.js': SiExpress,
      'Express': SiExpress,
      'MongoDB': SiMongodb,
      'Tailwind CSS': SiTailwindcss,
      'TailwindCSS': SiTailwindcss,
      'Next.js': SiNextdotjs,
      'TypeScript': SiTypescript,
      'PostgreSQL': SiPostgresql,
      'Stripe': SiStripe,
      'Razorpay': SiRazorpay,
    };
    return iconMap[tech] || Code2;
  };

  // Enhanced project data with proper tech stacks
  const enhancedProjects = mywork_data.map((project, index) => {
    const techStacks = {
      0: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Razorpay'],
      1: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
      2: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      3: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'TypeScript']
    };
    
    return {
      ...project,
      technologies: techStacks[index] || ['JavaScript', 'React', 'Node.js'],
      category: 'Full Stack',
      featured: index < 2,
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="work" ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 mb-6">
            <Code2 className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Featured Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            My <span className="bg-gradient-to-r from-primary-400 to-orange-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of my full-stack development work — featuring modern design,
            clean code, and seamless user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {enhancedProjects.map((project, index) => (
            <motion.div
              key={project.w_no}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden hover:border-primary-500/30 transition-all duration-500 hover:shadow-glow">
                {/* Project Image */}
                <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={project.w_img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/20 text-primary-300 border border-primary-500/30">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-700/50 border border-white/5 hover:border-primary-500/30 transition-colors duration-300"
                          title={tech}
                        >
                          <IconComponent className="w-4 h-4 text-primary-400" />
                          <span className="text-xs font-medium text-gray-300">{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:text-primary-400 transition-colors" />
                        <span className="font-medium">Code</span>
                      </a>
                    )}
                    
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-orange-500 text-white hover:from-primary-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 group/btn"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/SauravKumar04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 text-white hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 group"
          >
            <span className="font-semibold">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Discover more projects on my GitHub profile
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWork;
