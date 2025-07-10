import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  IconButton,
  Stack,
  Chip
} from '@mui/material'
import { 
  ArrowForward as ArrowIcon,
  Code as CodeIcon,
  Web as WebIcon,
  Storage as DatabaseIcon,
  Psychology as AlgorithmIcon,
  Build as ToolIcon,
  School as EducationIcon
} from '@mui/icons-material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Enhanced services data with correct technologies
  const enhancedServices = Services_Data.map((service, index) => {
    const icons = [
      <AlgorithmIcon sx={{ fontSize: '3rem' }} />,
      <WebIcon sx={{ fontSize: '3rem' }} />,
      <DatabaseIcon sx={{ fontSize: '3rem' }} />,
      <ToolIcon sx={{ fontSize: '3rem' }} />,
      <CodeIcon sx={{ fontSize: '3rem' }} />,
      <EducationIcon sx={{ fontSize: '3rem' }} />
    ]
    
    const colors = [
      '#B415FF',
      '#DF8909', 
      '#61DAFB',
      '#47A248',
      '#F7DF1E',
      '#FF6B6B'
    ]

    return {
      ...service,
      icon: icons[index] || <CodeIcon sx={{ fontSize: '3rem' }} />,
      color: colors[index] || '#B415FF',
      skills: getSkillsForService(index)
    }
  })

  function getSkillsForService(index) {
    const skillSets = [
      ['C', 'C++', 'Problem Solving'],
      ['HTML5', 'CSS3', 'JavaScript', 'React'],
      ['Node.js', 'Express.js', 'MongoDB'],
      ['GitHub', 'Postman', 'VS Code'],
      ['Vercel', 'Render', 'Netlify'],
      ['Learning', 'Adaptability', 'Team Work']
    ]
    return skillSets[index] || []
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <Box
      id='services'
      ref={ref}
      sx={{
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(180, 21, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(223, 137, 9, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 5 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                My{' '}
                <Box component="span" className="gradient-text">
                  Skills
                </Box>
                <Box
                  component="img"
                  src={theme_pattern}
                  alt=""
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: -40,
                    width: 80,
                    height: 80,
                    opacity: 0.3,
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Here are the key areas where I excel and continue to develop my expertise
              </Typography>
            </Box>
          </motion.div>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {enhancedServices.map((service, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    className="glass-effect"
                    sx={{
                      height: '100%',
                      background: 'rgba(30, 30, 30, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '25px',
                      p: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        border: `1px solid ${service.color}40`,
                        boxShadow: `0 20px 60px ${service.color}20`,
                        transform: 'translateY(-8px)',
                        '& .service-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          color: service.color
                        },
                        '& .read-more-btn': {
                          background: `linear-gradient(135deg, ${service.color}, #B415FF)`,
                          transform: 'translateX(5px)'
                        }
                      }
                    }}
                  >
                    {/* Background gradient */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: `linear-gradient(135deg, ${service.color}10 0%, transparent 100%)`,
                        borderRadius: '25px 25px 0 0',
                        zIndex: 0
                      }}
                    />

                    <CardContent sx={{ position: 'relative', zIndex: 1, height: '100%', p: 0 }}>
                      <Stack spacing={3} sx={{ height: '100%' }}>
                        {/* Icon and Number */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <Box
                            className="service-icon"
                            sx={{
                              color: 'white',
                              transition: 'all 0.4s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 80,
                              height: 80,
                              borderRadius: '20px',
                              background: `linear-gradient(135deg, ${service.color}20, rgba(255,255,255,0.05))`,
                              border: `1px solid ${service.color}30`
                            }}
                          >
                            {service.icon}
                          </Box>
                          
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: '3rem',
                              fontWeight: 800,
                              color: `${service.color}30`,
                              lineHeight: 1
                            }}
                          >
                            {service.s_no}
                          </Typography>
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: 'white',
                            lineHeight: 1.3
                          }}
                        >
                          {service.s_name}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.6,
                            flex: 1
                          }}
                        >
                          {service.s_desc}
                        </Typography>

                        {/* Skills Tags */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {service.skills.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              sx={{
                                background: `${service.color}20`,
                                color: 'white',
                                border: `1px solid ${service.color}30`,
                                fontSize: '0.75rem'
                              }}
                            />
                          ))}
                        </Box>

                        {/* Read More Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: service.color,
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            Learn More
                          </Typography>
                          
                          <IconButton
                            className="read-more-btn"
                            size="small"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'white',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: `linear-gradient(135deg, ${service.color}, #B415FF)`
                              }
                            }}
                          >
                            <ArrowIcon sx={{ fontSize: '1.2rem' }} />
                          </IconButton>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 2
                }}
              >
                Interested in working together?
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    px: 4,
                    py: 2,
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                    color: 'white',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 10px 30px rgba(180, 21, 255, 0.4)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Let's Discuss Your Project
                  </Typography>
                  <ArrowIcon />
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Services
