import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Stack
} from '@mui/material'
import { 
  Code as CodeIcon,
  Web as WebIcon,
  Storage as DatabaseIcon,
  Psychology as AlgorithmIcon,
  Build as ToolIcon,
  School as EducationIcon
} from '@mui/icons-material'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Services_Data from '../../assets/services_data'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Enhanced services data with icons and minimal purple theme
  const enhancedServices = Services_Data.map((service, index) => {
    const icons = [
      <AlgorithmIcon />,
      <WebIcon />,
      <DatabaseIcon />,
      <ToolIcon />,
      <CodeIcon />,
      <EducationIcon />
    ]
    
    return {
      ...service,
      icon: icons[index] || <CodeIcon />,
      color: '#B415FF'
    }
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <Box
      id='services'
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                My{' '}
                <Box 
                  component="span" 
                  sx={{
                    background: 'linear-gradient(to right, #B415FF, #9333ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Skills
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
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
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card
                    sx={{
                      height: '320px',
                      background: 'rgba(30, 30, 30, 0.7)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      p: 3,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        border: '1px solid rgba(180, 21, 255, 0.3)',
                        boxShadow: '0 20px 40px rgba(180, 21, 255, 0.15)',
                        transform: 'translateY(-8px)',
                        '& .service-icon': {
                          transform: 'scale(1.1)',
                          color: '#B415FF'
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Stack spacing={3} sx={{ height: '100%' }}>
                        {/* Icon */}
                        <Box
                          className="service-icon"
                          sx={{
                            color: 'rgba(180, 21, 255, 0.8)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 70,
                            height: 70,
                            borderRadius: '16px',
                            background: 'rgba(180, 21, 255, 0.1)',
                            border: '1px solid rgba(180, 21, 255, 0.2)',
                            fontSize: '2rem'
                          }}
                        >
                          {service.icon}
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: 'white',
                            lineHeight: 1.3,
                            fontSize: '1.3rem'
                          }}
                        >
                          {service.s_name}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.6,
                            fontSize: '0.95rem',
                            flex: 1
                          }}
                        >
                          {service.s_desc}
                        </Typography>

                        {/* Number Badge */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            background: 'rgba(180, 21, 255, 0.1)',
                            border: '1px solid rgba(180, 21, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: '1rem',
                              fontWeight: 600,
                              color: '#B415FF'
                            }}
                          >
                            {service.s_no}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Services
