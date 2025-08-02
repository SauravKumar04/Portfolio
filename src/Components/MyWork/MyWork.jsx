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
    <section 
      id="work" 
      ref={ref} 
      style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '80px',
        background: '#161513',
        overflow: 'hidden',
        minHeight: '100vh'
      }}
    >
      {/* Background Effects */}
      <div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(180, 21, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(223, 137, 9, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '80px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '24px',
              border: '1px solid rgba(180, 21, 255, 0.2)',
              background: 'rgba(180, 21, 255, 0.05)',
              marginBottom: '24px'
            }}
          >
            <Code2 style={{ width: '16px', height: '16px', color: '#B415FF' }} />
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#B415FF' }}>Featured Projects</span>
          </div>
          
          <h2 
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              marginBottom: '24px',
              color: 'white'
            }}
          >
            My <span style={{
              background: 'linear-gradient(to right, #B415FF, #DF8909)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Portfolio</span>
          </h2>
          
          <p 
            style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Explore a curated selection of my full-stack development work — featuring modern design,
            clean code, and seamless user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr',
            }
          }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {enhancedProjects.map((project, index) => (
            <motion.div
              key={project.w_no}
              variants={itemVariants}
              style={{ position: 'relative' }}
            >
              <div 
                style={{
                  background: 'rgba(30, 30, 30, 0.7)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(180, 21, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(180, 21, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                {/* Project Image */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={project.w_img}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                      <span 
                        style={{
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '12px',
                          fontWeight: '600',
                          background: 'rgba(180, 21, 255, 0.2)',
                          color: '#B415FF',
                          border: '1px solid rgba(180, 21, 255, 0.3)'
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div style={{ padding: '24px' }}>
                  {/* Category */}
                  <div style={{ marginBottom: '16px' }}>
                    <span 
                      style={{
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '500',
                        background: 'rgba(223, 137, 9, 0.1)',
                        color: '#DF8909',
                        border: '1px solid rgba(223, 137, 9, 0.2)'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'white',
                      marginBottom: '16px',
                      lineHeight: 1.3
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p 
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                      fontSize: '14px'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div
                          key={techIndex}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontSize: '12px'
                          }}
                          title={tech}
                        >
                          <IconComponent style={{ width: '14px', height: '14px', color: '#B415FF' }} />
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px' }}>{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = 'rgba(180, 21, 255, 0.5)';
                          e.target.style.background = 'rgba(180, 21, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.background = 'transparent';
                        }}
                      >
                        <Github style={{ width: '16px', height: '16px' }} />
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.live && project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 24px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #B415FF, #DF8909)',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, #9333ea, #d97706)';
                          e.target.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(135deg, #B415FF, #DF8909)';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <ExternalLink style={{ width: '16px', height: '16px' }} />
                        <span>Live Demo</span>
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
          style={{ textAlign: 'center', marginTop: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/SauravKumar04"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(180, 21, 255, 0.5)';
              e.target.style.background = 'rgba(180, 21, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.background = 'transparent';
            }}
          >
            <span>View All Projects</span>
            <ArrowRight style={{ width: '20px', height: '20px' }} />
          </a>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: '16px', fontSize: '14px' }}>
            Discover more projects on my GitHub profile
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWork;
