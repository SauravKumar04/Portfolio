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
  Chip,
  Badge,
  useTheme,
} from '@mui/material'
import { 
  ArrowForward as ArrowIcon,
  Code as CodeIcon,
  Web as WebIcon,
  Storage as DatabaseIcon,
  Psychology as AlgorithmIcon,
  Build as ToolIcon,
  School as EducationIcon,
  Lightbulb as InnovationIcon,
  Speed as PerformanceIcon,
} from '@mui/icons-material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const theme = useTheme()

  // Enhanced services data with modern approach
  const enhancedServices = [
    {
      id: '01',
      title: 'Data Structures & Algorithms',
      description: 'Expert in problem-solving with optimized algorithms, complexity analysis, and competitive programming. Proficient in handling complex data structures for efficient solutions.',
      icon: <AlgorithmIcon sx={{ fontSize: '3rem' }} />,
      color: '#B415FF',
      skills: ['Problem Solving', 'Time Complexity', 'Space Optimization', 'Competitive Programming'],
      level: 'Advanced',
      projects: '200+ Problems'
    },
    {
      id: '02', 
      title: 'Frontend Development',
      description: 'Creating responsive, interactive, and user-friendly interfaces using modern frameworks and libraries with focus on performance and accessibility.',
      icon: <WebIcon sx={{ fontSize: '3rem' }} />,
      color: '#61DAFB',
      skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Responsive Design'],
      level: 'Advanced',
      projects: '15+ Projects'
    },
    {
      id: '03',
      title: 'Backend Development', 
      description: 'Building robust server-side applications with RESTful APIs, database management, and secure authentication systems for scalable solutions.',
      icon: <DatabaseIcon sx={{ fontSize: '3rem' }} />,
      color: '#339933',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      level: 'Intermediate',
      projects: '10+ APIs'
    },
    {
      id: '04',
      title: 'Full-Stack Integration',
      description: 'Seamlessly connecting frontend and backend technologies to create complete web applications with optimal performance and user experience.',
      icon: <InnovationIcon sx={{ fontSize: '3rem' }} />,
      color: '#DF8909',
      skills: ['MERN Stack', 'API Integration', 'State Management', 'Deployment'],
      level: 'Advanced',
      projects: '8+ Full Stack'
    },
    {
      id: '05',
      title: 'Development Tools',
      description: 'Proficient with modern development tools and workflows including version control, testing frameworks, and deployment platforms.',
      icon: <ToolIcon sx={{ fontSize: '3rem' }} />,
      color: '#F05032',
      skills: ['Git/GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify'],
      level: 'Advanced',
      projects: 'Daily Usage'
    },
    {
      id: '06',
      title: 'Performance & Optimization',
      description: 'Focused on writing clean, efficient code with performance optimization techniques and best practices for scalable applications.',
      icon: <PerformanceIcon sx={{ fontSize: '3rem' }} />,
      color: '#FF6B6B',
      skills: ['Code Optimization', 'Performance Tuning', 'Best Practices', 'Clean Code'],
      level: 'Intermediate',
      projects: 'All Projects'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }
    })
  }

  const getServiceLevel = (level) => {
    const levels = {
      'Beginner': { color: '#4CAF50', bg: 'rgba(76, 175, 80, 0.1)' },
      'Intermediate': { color: '#FF9800', bg: 'rgba(255, 152, 0, 0.1)' },
      'Advanced': { color: '#B415FF', bg: 'rgba(180, 21, 255, 0.1)' },
      'Expert': { color: '#DF8909', bg: 'rgba(223, 137, 9, 0.1)' }
    }
    return levels[level] || levels['Intermediate']
  }

  return (
    <Box
      id='services'
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 30, 30, 0.3) 50%, transparent 100%)',
      }}
    >
      {/* Enhanced Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          background: 'radial-gradient(circle, rgba(180, 21, 255, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: 150, md: 280 },
          height: { xs: 150, md: 280 },
          background: 'radial-gradient(circle, rgba(223, 137, 9, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />

      {/* Grid Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.015) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: 0.4,
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                My{' '}
                <Box component="span" className="gradient-text">
                  Expertise
                </Box>
                <Box
                  component="img"
                  src={theme_pattern}
                  alt=""
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: -50,
                    width: { xs: 60, md: 100 },
                    height: { xs: 60, md: 100 },
                    opacity: 0.3,
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.7,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Core competencies and technical skills that drive innovation and excellence in every project
              </Typography>
            </Box>
          </motion.div>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {enhancedServices.map((service, index) => (
              <Grid item xs={12} sm={6} lg={4} key={service.id}>
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className="glass-effect"
                    sx={{
                      height: '100%',
                      background: 'rgba(30, 30, 30, 0.98)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '28px',
                      p: 3,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        border: `1px solid ${service.color}40`,
                        boxShadow: `0 25px 60px ${service.color}15, 0 0 0 1px ${service.color}20`,
                        '& .service-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          color: service.color
                        },
                        '& .service-number': {
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}aa)`,
                          color: 'white'
                        },
                        '& .learn-more-btn': {
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                          transform: 'translateX(5px)'
                        }
                      }
                    }}
                  >
                    {/* Top gradient line */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${service.color}, ${service.color}66)`,
                        borderRadius: '28px 28px 0 0',
                      }}
                    />

                    {/* Background pattern */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '120px',
                        height: '120px',
                        background: `radial-gradient(circle, ${service.color}08 0%, transparent 70%)`,
                        borderRadius: '50%',
                        zIndex: 0
                      }}
                    />

                    <CardContent sx={{ position: 'relative', zIndex: 1, height: '100%', p: 0 }}>
                      <Stack spacing={3} sx={{ height: '100%' }}>
                        {/* Header Section */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                          <Box
                            className="service-icon"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              transition: 'all 0.4s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 70,
                              height: 70,
                              borderRadius: '20px',
                              background: `linear-gradient(135deg, ${service.color}15, rgba(255,255,255,0.05))`,
                              border: `1px solid ${service.color}25`
                            }}
                          >
                            {service.icon}
                          </Box>
                          
                          <Box
                            className="service-number"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'rgba(255, 255, 255, 0.6)',
                              borderRadius: '12px',
                              px: 2,
                              py: 1,
                              fontSize: '1.2rem',
                              fontWeight: 700,
                              transition: 'all 0.3s ease',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            {service.id}
                          </Box>
                        </Box>

                        {/* Level & Projects Badge */}
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip
                            label={service.level}
                            size="small"
                            sx={{
                              background: getServiceLevel(service.level).bg,
                              color: getServiceLevel(service.level).color,
                              border: `1px solid ${getServiceLevel(service.level).color}30`,
                              fontWeight: 600,
                              fontSize: '0.75rem'
                            }}
                          />
                          <Chip
                            label={service.projects}
                            size="small"
                            sx={{
                              background: `${service.color}15`,
                              color: service.color,
                              border: `1px solid ${service.color}30`,
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }}
                          />
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: 'white',
                            lineHeight: 1.3,
                            fontSize: { xs: '1.3rem', md: '1.5rem' }
                          }}
                        >
                          {service.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.6,
                            flex: 1,
                            fontSize: '1rem'
                          }}
                        >
                          {service.description}
                        </Typography>

                        {/* Skills Tags */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {service.skills.slice(0, 4).map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                fontSize: '0.7rem',
                                height: '24px',
                                '&:hover': {
                                  background: `${service.color}20`,
                                  borderColor: `${service.color}40`,
                                  color: 'white'
                                }
                              }}
                            />
                          ))}
                          {service.skills.length > 4 && (
                            <Chip
                              label={`+${service.skills.length - 4}`}
                              size="small"
                              sx={{
                                background: `${service.color}20`,
                                color: service.color,
                                border: `1px solid ${service.color}40`,
                                fontSize: '0.7rem',
                                height: '24px'
                              }}
                            />
                          )}
                        </Box>

                        {/* Learn More Button */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: service.color,
                              fontWeight: 600,
                              cursor: 'pointer',
                              '&:hover': {
                                color: 'white'
                              }
                            }}
                          >
                            Explore More
                          </Typography>
                          
                          <IconButton
                            className="learn-more-btn"
                            size="small"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'white',
                              transition: 'all 0.3s ease',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              '&:hover': {
                                background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                                borderColor: service.color
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

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Card
                className="glass-effect"
                sx={{
                  p: 6,
                  borderRadius: '32px',
                  background: 'rgba(30, 30, 30, 0.98)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #DF8909, #B415FF, #DF8909)',
                    borderRadius: '32px 32px 0 0',
                  }}
                />
                <Stack spacing={3} alignItems="center">
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    Ready to Build Something Amazing?
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textAlign: 'center',
                      maxWidth: '600px'
                    }}
                  >
                    Let's collaborate and turn your ideas into reality with cutting-edge technology and innovative solutions.
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 2,
                        px: 6,
                        py: 3,
                        borderRadius: '50px',
                        background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 10px 30px rgba(180, 21, 255, 0.3)',
                        '&:hover': {
                          boxShadow: '0 15px 40px rgba(180, 21, 255, 0.4)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <CodeIcon />
                      <Typography variant="body1" sx={{ fontWeight: 700 }}>
                        Let's Start a Project
                      </Typography>
                      <ArrowIcon />
                    </Box>
                  </motion.div>
                </Stack>
              </Card>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Services
