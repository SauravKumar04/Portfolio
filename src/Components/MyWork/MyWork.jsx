import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  IconButton,
  Tooltip
} from '@mui/material'
import { 
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  ArrowForward as ArrowIcon,
  Code as CodeIcon,
  Visibility as ViewIcon
} from '@mui/icons-material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Enhanced project data with technologies
  const enhancedProjects = mywork_data.map((project, index) => {
    const techStacks = [
      ['React', 'Node.js', 'MongoDB'],
      ['JavaScript', 'HTML5', 'CSS3'],
      ['React', 'Express', 'API'],
      ['MERN Stack', 'Redux', 'JWT'],
      ['React', 'Firebase', 'Material-UI'],
      ['Node.js', 'MongoDB', 'Socket.io']
    ]
    
    const categories = [
      'Full Stack',
      'Frontend',
      'Web App',
      'E-commerce',
      'Dashboard',
      'Real-time'
    ]

    return {
      ...project,
      technologies: techStacks[index] || ['React', 'JavaScript'],
      category: categories[index] || 'Web Development',
      featured: index < 3 // Mark first 3 as featured
    }
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
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
      id='work'
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
          top: '15%',
          left: '8%',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(223, 137, 9, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(180, 21, 255, 0.1) 0%, transparent 70%)',
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
                  Projects
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
                A showcase of my development journey and the projects I'm proud to share
              </Typography>
            </Box>
          </motion.div>

          {/* Featured Projects Badge */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Chip
                icon={<CodeIcon />}
                label="Featured Projects"
                sx={{
                  background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.2), rgba(180, 21, 255, 0.2))',
                  border: '1px solid rgba(180, 21, 255, 0.3)',
                  color: 'white',
                  fontSize: '1rem',
                  px: 2,
                  py: 1
                }}
              />
            </Box>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {enhancedProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    className="glass-effect"
                    sx={{
                      height: '100%',
                      background: 'rgba(30, 30, 30, 0.95)',
                      backdropFilter: 'blur(20px)',
                      border: project.featured 
                        ? '1px solid rgba(180, 21, 255, 0.3)' 
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '25px',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&:hover': {
                        border: '1px solid rgba(180, 21, 255, 0.5)',
                        boxShadow: '0 25px 80px rgba(180, 21, 255, 0.25)',
                        transform: 'translateY(-12px)',
                        '& .project-image': {
                          transform: 'scale(1.1)'
                        },
                        '& .project-overlay': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 15,
                          left: 15,
                          zIndex: 2,
                          background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 600
                        }}
                      >
                        Featured
                      </Box>
                    )}

                    {/* Project Image */}
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: 250 }}>
                      <CardMedia
                        component="img"
                        image={project.w_img}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                      
                      {/* Overlay on hover */}
                      <Box
                        className="project-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.8), rgba(180, 21, 255, 0.8))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          gap: 2
                        }}
                      >
                        {project.github && (
                          <Tooltip title="View Source Code">
                            <IconButton
                              component="a"
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.3)',
                                  transform: 'scale(1.1)'
                                }
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        
                        {project.live && (
                          <Tooltip title="View Live Demo">
                            <IconButton
                              component="a"
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.3)',
                                  transform: 'scale(1.1)'
                                }
                              }}
                            >
                              <LaunchIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        {/* Category Chip */}
                        <Box>
                          <Chip
                            label={project.category}
                            size="small"
                            sx={{
                              background: 'rgba(180, 21, 255, 0.2)',
                              color: '#B415FF',
                              border: '1px solid rgba(180, 21, 255, 0.3)',
                              fontWeight: 500
                            }}
                          />
                        </Box>

                        {/* Project Title */}
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: 'white',
                            lineHeight: 1.3,
                            mb: 1
                          }}
                        >
                          {project.title}
                        </Typography>

                        {/* Project Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                            lineHeight: 1.6,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Technologies */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <Chip
                              key={techIndex}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: '0.7rem'
                              }}
                            />
                          ))}
                        </Box>
                      </Stack>
                    </CardContent>

                    {/* Action Buttons */}
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                        {project.github && (
                          <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              borderColor: 'rgba(255, 255, 255, 0.3)',
                              color: 'white',
                              flex: 1,
                              '&:hover': {
                                borderColor: '#B415FF',
                                backgroundColor: 'rgba(180, 21, 255, 0.1)'
                              }
                            }}
                          >
                            Code
                          </Button>
                        )}
                        
                        {project.live && (
                          <Button
                            variant="contained"
                            startIcon={<LaunchIcon />}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                              background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                              flex: 1,
                              '&:hover': {
                                background: 'linear-gradient(135deg, #FFB23D, #D665FF)',
                                transform: 'translateY(-1px)'
                              }
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </Stack>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Show More Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowIcon />}
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderWidth: '2px',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                      borderWidth: '2px',
                      borderColor: '#B415FF',
                      backgroundColor: 'rgba(180, 21, 255, 0.1)',
                      boxShadow: '0 8px 25px rgba(180, 21, 255, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  View All Projects
                </Button>
              </motion.div>
              
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  mt: 2
                }}
              >
                More projects available on my GitHub profile
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}

export default MyWork
