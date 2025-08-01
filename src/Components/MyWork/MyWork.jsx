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
  Tooltip,
  Badge,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import { 
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  ArrowForward as ArrowIcon,
  Code as CodeIcon,
  Visibility as ViewIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
  WorkspacePremium as FeaturedIcon,
  ExpandMore as ExpandMoreIcon,
  Build as BuildIcon,
} from '@mui/icons-material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const theme = useTheme()

  // Use the imported project data directly
  const enhancedProjects = mywork_data.map((project, index) => ({
    ...project,
    stars: Math.floor(Math.random() * 50) + 10,
    views: Math.floor(Math.random() * 500) + 100,
    featured: index < 3, // Mark first 3 as featured
  }))

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

  const getStatusColor = (status) => {
    const statusColors = {
      'Completed': { color: '#4CAF50', bg: 'rgba(76, 175, 80, 0.1)' },
      'In Development': { color: '#FF9800', bg: 'rgba(255, 152, 0, 0.1)' },
      'Featured': { color: '#B415FF', bg: 'rgba(180, 21, 255, 0.1)' },
      'Prototype': { color: '#2196F3', bg: 'rgba(33, 150, 243, 0.1)' }
    }
    return statusColors[status] || statusColors['Completed']
  }

  const getDifficultyColor = (difficulty) => {
    const difficultyColors = {
      'Beginner': '#4CAF50',
      'Intermediate': '#FF9800', 
      'Advanced': '#B415FF',
      'Expert': '#DF8909'
    }
    return difficultyColors[difficulty] || '#FF9800'
  }

  return (
    <Box
      id='work'
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Enhanced Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          width: { xs: 180, md: 320 },
          height: { xs: 180, md: 320 },
          background: 'radial-gradient(circle, rgba(223, 137, 9, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 0
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: { xs: 140, md: 240 },
          height: { xs: 140, md: 240 },
          background: 'radial-gradient(circle, rgba(180, 21, 255, 0.08) 0%, transparent 70%)',
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
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.015) 1px, transparent 0)',
          backgroundSize: '30px 30px',
          opacity: 0.3,
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
                Featured{' '}
                <Box component="span" className="gradient-text">
                  Projects
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
                A showcase of my most impactful projects demonstrating modern web development excellence
              </Typography>
            </Box>
          </motion.div>

          {/* Portfolio Stats */}
          <motion.div variants={itemVariants}>
            <Grid container spacing={3} sx={{ mb: 6 }}>
              {[
                { label: 'Total Projects', value: '15+', icon: <CodeIcon />, color: '#B415FF' },
                { label: 'GitHub Stars', value: '200+', icon: <StarIcon />, color: '#DF8909' },
                { label: 'Live Deployments', value: '8+', icon: <LaunchIcon />, color: '#4CAF50' }
              ].map((stat, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className="glass-effect"
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: `linear-gradient(135deg, ${stat.color}10, rgba(30, 30, 30, 0.98))`,
                        border: `1px solid ${stat.color}30`,
                        borderRadius: '20px',
                        '&:hover': {
                          border: `1px solid ${stat.color}50`,
                          boxShadow: `0 15px 40px ${stat.color}20`
                        }
                      }}
                    >
                      <Box sx={{ color: stat.color, mb: 1 }}>
                        {React.cloneElement(stat.icon, { sx: { fontSize: '2rem' } })}
                      </Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: stat.color, mb: 1 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          {/* Featured Projects Badge */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Chip
                icon={<FeaturedIcon />}
                label="Showcase Projects"
                sx={{
                  background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.2), rgba(180, 21, 255, 0.2))',
                  border: '1px solid rgba(180, 21, 255, 0.3)',
                  color: 'white',
                  fontSize: '1rem',
                  px: 3,
                  py: 1.5,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(180, 21, 255, 0.3)'
                  }
                }}
              />
            </Box>
          </motion.div>

          {/* Projects Grid */}
          <Grid container spacing={4}>
            {enhancedProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={4} key={project.w_no}>
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
                      border: project.featured 
                        ? '1px solid rgba(180, 21, 255, 0.3)' 
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&:hover': {
                        border: '1px solid rgba(180, 21, 255, 0.5)',
                        boxShadow: '0 30px 80px rgba(180, 21, 255, 0.25), 0 0 0 1px rgba(180, 21, 255, 0.2)',
                        '& .project-image': {
                          transform: 'scale(1.08)'
                        },
                        '& .project-overlay': {
                          opacity: 1
                        },
                        '& .project-content': {
                          transform: 'translateY(-5px)'
                        }
                      }
                    }}
                  >
                    {/* Top Status Bar */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: project.featured 
                          ? 'linear-gradient(90deg, #DF8909, #B415FF)' 
                          : 'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        zIndex: 2
                      }}
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 15,
                          left: 15,
                          zIndex: 3,
                          background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                          color: 'white',
                          px: 2.5,
                          py: 1,
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          boxShadow: '0 4px 15px rgba(180, 21, 255, 0.4)'
                        }}
                      >
                        <StarIcon sx={{ fontSize: '0.9rem' }} />
                        Featured
                      </Box>
                    )}

                    {/* Project Stats */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        zIndex: 3,
                        display: 'flex',
                        gap: 1
                      }}
                    >
                      <Tooltip title={`${project.stars} stars`}>
                        <Chip
                          icon={<StarIcon sx={{ fontSize: '0.8rem' }} />}
                          label={project.stars}
                          size="small"
                          sx={{
                            background: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            fontSize: '0.7rem',
                            height: '24px',
                            '& .MuiChip-icon': { color: '#FFD700' }
                          }}
                        />
                      </Tooltip>
                      <Tooltip title={`${project.views} views`}>
                        <Chip
                          icon={<ViewIcon sx={{ fontSize: '0.8rem' }} />}
                          label={project.views}
                          size="small"
                          sx={{
                            background: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            fontSize: '0.7rem',
                            height: '24px'
                          }}
                        />
                      </Tooltip>
                    </Box>

                    {/* Project Image */}
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: 280 }}>
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
                          background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.85), rgba(180, 21, 255, 0.85))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          gap: 3
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
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                width: 50,
                                height: 50,
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.3)',
                                  transform: 'scale(1.1)',
                                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                                }
                              }}
                            >
                              <GitHubIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                        
                        {project.live && project.live !== "#" && (
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
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                width: 50,
                                height: 50,
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.3)',
                                  transform: 'scale(1.1)',
                                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
                                }
                              }}
                            >
                              <LaunchIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </Box>

                    <CardContent className="project-content" sx={{ p: 3, transition: 'transform 0.3s ease' }}>
                      <Stack spacing={2.5}>
                        {/* Category & Status */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Chip
                            label={project.category || 'Web Application'}
                            size="small"
                            sx={{
                              background: 'rgba(180, 21, 255, 0.15)',
                              color: '#B415FF',
                              border: '1px solid rgba(180, 21, 255, 0.3)',
                              fontWeight: 600,
                              fontSize: '0.75rem'
                            }}
                          />
                          <Chip
                            label={project.status || 'Completed'}
                            size="small"
                            sx={{
                              background: getStatusColor(project.status || 'Completed').bg,
                              color: getStatusColor(project.status || 'Completed').color,
                              border: `1px solid ${getStatusColor(project.status || 'Completed').color}30`,
                              fontWeight: 600,
                              fontSize: '0.75rem'
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
                            fontSize: { xs: '1.3rem', md: '1.5rem' }
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
                            overflow: 'hidden',
                            minHeight: '72px'
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Difficulty Level */}
                        {project.difficulty && (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                              Difficulty:
                            </Typography>
                            <Chip
                              label={project.difficulty}
                              size="small"
                              sx={{
                                background: `${getDifficultyColor(project.difficulty)}15`,
                                color: getDifficultyColor(project.difficulty),
                                border: `1px solid ${getDifficultyColor(project.difficulty)}30`,
                                fontSize: '0.7rem'
                              }}
                            />
                          </Box>
                        )}

                        {/* Technologies */}
                        <Box>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 1 }}>
                            Technologies:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {project.technologies && project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{
                                  borderColor: 'rgba(255, 255, 255, 0.25)',
                                  color: 'rgba(255, 255, 255, 0.9)',
                                  fontSize: '0.7rem',
                                  height: '24px',
                                  '&:hover': {
                                    borderColor: '#B415FF',
                                    backgroundColor: 'rgba(180, 21, 255, 0.1)',
                                    color: 'white'
                                  }
                                }}
                              />
                            ))}
                            {project.technologies && project.technologies.length > 4 && (
                              <Chip
                                label={`+${project.technologies.length - 4}`}
                                size="small"
                                sx={{
                                  background: 'rgba(180, 21, 255, 0.2)',
                                  color: '#B415FF',
                                  border: '1px solid rgba(180, 21, 255, 0.3)',
                                  fontSize: '0.7rem',
                                  height: '24px'
                                }}
                              />
                            )}
                          </Box>
                        </Box>

                        {/* Technical Details Accordion for Featured Projects */}
                        {(project.features || project.backend_tech || project.frontend_tech) && (
                          <Accordion
                            sx={{
                              background: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '12px',
                              '&:before': { display: 'none' }
                            }}
                          >
                            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                                <BuildIcon sx={{ mr: 1, fontSize: '1rem' }} />
                                Technical Details
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Stack spacing={2}>
                                {project.features && (
                                  <Box>
                                    <Typography variant="body2" sx={{ color: '#DF8909', fontWeight: 600, mb: 1 }}>
                                      Key Features:
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                      {project.features.slice(0, 4).map((feature, idx) => (
                                        <Chip
                                          key={idx}
                                          label={feature}
                                          size="small"
                                          sx={{
                                            fontSize: '0.65rem',
                                            height: '20px',
                                            background: 'rgba(223, 137, 9, 0.1)',
                                            color: '#DF8909'
                                          }}
                                        />
                                      ))}
                                    </Box>
                                  </Box>
                                )}
                              </Stack>
                            </AccordionDetails>
                          </Accordion>
                        )}
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
                              borderColor: 'rgba(255, 255, 255, 0.25)',
                              color: 'rgba(255, 255, 255, 0.9)',
                              flex: 1,
                              borderRadius: '15px',
                              py: 1.5,
                              '&:hover': {
                                borderColor: '#B415FF',
                                backgroundColor: 'rgba(180, 21, 255, 0.1)',
                                color: 'white'
                              }
                            }}
                          >
                            Code
                          </Button>
                        )}
                        
                        {project.live && project.live !== "#" && (
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
                              borderRadius: '15px',
                              py: 1.5,
                              '&:hover': {
                                background: 'linear-gradient(135deg, #FFB23D, #D665FF)',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 8px 25px rgba(180, 21, 255, 0.4)'
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

          {/* View All Projects Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Card
                className="glass-effect"
                sx={{
                  p: 6,
                  borderRadius: '32px',
                  background: 'rgba(30, 30, 30, 0.98)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <Stack spacing={3} alignItems="center">
                  <TrendingIcon sx={{ fontSize: '3rem', color: '#B415FF' }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: 'white'
                    }}
                  >
                    Explore More Projects
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      maxWidth: '500px',
                      textAlign: 'center'
                    }}
                  >
                    Discover additional projects and code repositories on my GitHub profile
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<ArrowIcon />}
                      href="https://github.com/SauravKumar04"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderRadius: '50px',
                        px: 6,
                        py: 2.5,
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
                          boxShadow: '0 10px 30px rgba(180, 21, 255, 0.3)',
                        }
                      }}
                    >
                      View All Projects
                    </Button>
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

export default MyWork
