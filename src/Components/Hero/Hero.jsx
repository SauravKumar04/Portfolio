import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack,
  Chip,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { 
  Download as DownloadIcon, 
  ConnectWithoutContact as ConnectIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  LocationOn as LocationIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import resume from '../../assets/Saurav_Resume.pdf' 
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { scrollY } = useScroll()
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.3
      }
    }
  }

  const chipVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.8 + i * 0.1
      }
    })
  }

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1.2
      }
    }
  }

  return (
    <Box
      id='home'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 10, md: 8 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* Enhanced Background Elements */}
      <motion.div style={{ y: yBg }}>
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: { xs: 200, md: 400 },
            height: { xs: 200, md: 400 },
            background: 'radial-gradient(circle, rgba(180, 21, 255, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            zIndex: 0,
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            background: 'radial-gradient(circle, rgba(223, 137, 9, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            zIndex: 0,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '50px 50px',
          opacity: 0.3,
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
        >
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            {/* Left Content */}
            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              <Stack spacing={4} alignItems={{ xs: 'center', lg: 'flex-start' }} textAlign={{ xs: 'center', lg: 'left' }}>
                
                {/* Welcome Badge */}
                <motion.div variants={itemVariants}>
                  <Chip
                    icon={<CodeIcon />}
                    label="Welcome to my portfolio"
                    sx={{
                      background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.15), rgba(180, 21, 255, 0.15))',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      mb: 2
                    }}
                  />
                </motion.div>

                {/* Main Heading */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '5.5rem' },
                      fontWeight: 900,
                      lineHeight: 1.1,
                      mb: 2,
                      background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Hi, I'm{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-10px',
                          left: '0',
                          right: '0',
                          height: '4px',
                          background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                          borderRadius: '2px',
                          transform: 'scaleX(0)',
                          transformOrigin: 'left',
                          animation: 'expandLine 2s ease-out 1.5s forwards'
                        }
                      }}
                    >
                      Saurav
                    </Box>
                  </Typography>
                </motion.div>

                {/* Subtitle */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.9)',
                      mb: 1
                    }}
                  >
                    MERN Stack Developer
                  </Typography>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      maxWidth: '550px',
                      lineHeight: 1.7,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                      fontWeight: 400,
                      mb: 3
                    }}
                  >
                    Third-year Electrical & Electronics Engineering student at NIT Jamshedpur, 
                    passionate about creating innovative web solutions and mastering Data Structures & Algorithms.
                  </Typography>
                </motion.div>

                {/* Quick Info Chips */}
                <motion.div variants={itemVariants}>
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    flexWrap="wrap" 
                    justifyContent={{ xs: 'center', lg: 'flex-start' }}
                    sx={{ mb: 4 }}
                  >
                    {[
                      { icon: <SchoolIcon />, label: 'NIT Jamshedpur', color: '#61DAFB' },
                      { icon: <CodeIcon />, label: 'MERN Developer', color: '#B415FF' },
                      { icon: <LocationIcon />, label: 'India', color: '#DF8909' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={chipVariants}
                        custom={index}
                      >
                        <Chip
                          icon={item.icon}
                          label={item.label}
                          sx={{
                            background: `linear-gradient(135deg, ${item.color}20, rgba(255,255,255,0.05))`,
                            border: `1px solid ${item.color}30`,
                            color: 'white',
                            fontSize: '0.9rem',
                            py: 1.5,
                            px: 1,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${item.color}30, rgba(255,255,255,0.1))`,
                              transform: 'translateY(-2px)',
                              boxShadow: `0 8px 25px ${item.color}30`
                            }
                          }}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={buttonVariants}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={3}
                    justifyContent={{ xs: 'center', lg: 'flex-start' }}
                    alignItems="center"
                    sx={{ width: '100%' }}
                  >
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          startIcon={<ConnectIcon />}
                          endIcon={<ArrowIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
                            borderRadius: '50px',
                            px: 4,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            minWidth: '220px',
                            boxShadow: '0 10px 30px rgba(180, 21, 255, 0.4)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                              transition: 'left 0.6s ease',
                            },
                            '&:hover': {
                              background: 'linear-gradient(135deg, #FFB23D 0%, #D665FF 100%)',
                              boxShadow: '0 15px 40px rgba(223, 137, 9, 0.5)',
                              '&::before': {
                                left: '100%',
                              },
                            }
                          }}
                        >
                          Let's Connect
                        </Button>
                      </motion.div>
                    </AnchorLink>

                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        startIcon={<DownloadIcon />}
                        href={resume}
                        download="SauravKumar_Resume.pdf"
                        sx={{
                          borderRadius: '50px',
                          px: 4,
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          minWidth: '220px',
                          borderWidth: '2px',
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            borderWidth: '2px',
                            borderColor: '#B415FF',
                            backgroundColor: 'rgba(180, 21, 255, 0.15)',
                            boxShadow: '0 10px 30px rgba(180, 21, 255, 0.3)',
                          }
                        }}
                      >
                        Download CV
                      </Button>
                    </motion.div>
                  </Stack>
                </motion.div>
              </Stack>
            </Grid>

            {/* Right Content - Profile Image */}
            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                <motion.div variants={imageVariants}>
                  <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    {/* Rotating ring */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        right: -20,
                        bottom: -20,
                        border: '2px solid transparent',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #DF8909, #B415FF, #DF8909)',
                        backgroundSize: '400% 400%',
                        animation: 'gradientShift 4s ease infinite',
                        zIndex: 0,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 2,
                          left: 2,
                          right: 2,
                          bottom: 2,
                          background: '#161513',
                          borderRadius: '50%',
                        }
                      }}
                    />
                    
                    {/* Profile Image */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 2,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 280, sm: 350, md: 400, lg: 450 },
                          height: { xs: 280, sm: 350, md: 400, lg: 450 },
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                          padding: '6px',
                          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
                          position: 'relative',
                          zIndex: 1,
                          '&:hover': {
                            boxShadow: '0 30px 100px rgba(180, 21, 255, 0.6), 0 0 0 1px rgba(180, 21, 255, 0.3)',
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={profile}
                          alt="Saurav Kumar"
                          sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            display: 'block'
                          }}
                        />
                      </Box>
                    </motion.div>
                    
                    {/* Status indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2, type: "spring", stiffness: 200 }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: { xs: 20, md: 30 },
                          right: { xs: 20, md: 30 },
                          width: { xs: 24, md: 32 },
                          height: { xs: 24, md: 32 },
                          background: '#4CAF50',
                          borderRadius: '50%',
                          border: '4px solid #161513',
                          animation: 'pulse 2s infinite',
                          zIndex: 2,
                          boxShadow: '0 0 20px rgba(76, 175, 80, 0.6)'
                        }}
                      />
                    </motion.div>

                    {/* Floating elements */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '20%',
                        left: '-10%',
                        width: 60,
                        height: 60,
                        background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.2), rgba(180, 21, 255, 0.2))',
                        borderRadius: '20%',
                        animation: 'float 6s ease-in-out infinite',
                        zIndex: 0
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '20%',
                        right: '-10%',
                        width: 40,
                        height: 40,
                        background: 'linear-gradient(135deg, rgba(180, 21, 255, 0.2), rgba(223, 137, 9, 0.2))',
                        borderRadius: '50%',
                        animation: 'float 6s ease-in-out infinite reverse',
                        zIndex: 0
                      }}
                    />
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            pt: 1,
            cursor: 'pointer',
            '&:hover': {
              borderColor: '#B415FF',
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 4,
              height: 8,
              background: 'linear-gradient(135deg, #DF8909, #B415FF)',
              borderRadius: 2
            }}
          />
        </Box>
      </motion.div>
    </Box>
  )
}

export default Hero
