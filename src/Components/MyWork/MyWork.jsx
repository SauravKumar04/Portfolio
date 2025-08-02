import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Github, 
  ExternalLink
} from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
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
      'Stripe': SiStripe,
      'Razorpay': SiRazorpay,
    };
    return iconMap[tech] || null;
  };

  // Enhanced project data with proper tech stacks
  const enhancedProjects = mywork_data.map((project, index) => {
    const techStacks = {
      0: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      1: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Razorpay']
    };
    
    return {
      ...project,
      technologies: techStacks[index] || ['JavaScript', 'React', 'Node.js'],
      category: 'Full Stack',
      featured: true,
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
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(180, 21, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(223, 137, 9, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
        `,
        backgroundAttachment: 'fixed',
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
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <motion.div 
          style={{ textAlign: 'center', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              marginBottom: '16px',
              color: 'white'
            }}
          >
            My <span style={{ color: '#B415FF' }}>Projects</span>
          </h2>
          
          <p 
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Featured full-stack applications showcasing modern development practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
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
                  height: '380px',
                  background: 'rgba(20, 20, 20, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(180, 21, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(180, 21, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                {/* Project Number Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(180, 21, 255, 0.1)',
                    border: '1px solid rgba(180, 21, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#B415FF'
                  }}
                >
                  {project.w_no}
                </div>

                {/* Project Content */}
                <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category */}
                  <div style={{ marginBottom: '20px' }}>
                    <span 
                      style={{
                        padding: '6px 16px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        background: 'rgba(180, 21, 255, 0.1)',
                        color: '#B415FF',
                        border: '1px solid rgba(180, 21, 255, 0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: 'white',
                      marginBottom: '16px',
                      lineHeight: 1.2,
                      fontFamily: 'Inter, sans-serif'
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
                      fontSize: '0.9rem',
                      flex: 1
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
                            padding: '8px 12px',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            fontSize: '0.8rem',
                            transition: 'all 0.2s ease'
                          }}
                          title={tech}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(180, 21, 255, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(180, 21, 255, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                          }}
                        >
                          {IconComponent && <IconComponent style={{ width: '16px', height: '16px', color: '#B415FF' }} />}
                          <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: '500' }}>{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
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
                          padding: '12px 20px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease',
                          background: 'rgba(255, 255, 255, 0.02)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(180, 21, 255, 0.4)';
                          e.currentTarget.style.background = 'rgba(180, 21, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
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
                          padding: '12px 20px',
                          borderRadius: '12px',
                          background: '#B415FF',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#9333ea';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#B415FF';
                          e.currentTarget.style.transform = 'translateY(0)';
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
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              background: 'rgba(255, 255, 255, 0.02)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(180, 21, 255, 0.4)';
              e.currentTarget.style.background = 'rgba(180, 21, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
            }}
          >
            <Github style={{ width: '18px', height: '18px' }} />
            <span>View All Projects</span>
          </a>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: '16px', fontSize: '0.85rem' }}>
            Discover more projects on my GitHub profile
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWork;
