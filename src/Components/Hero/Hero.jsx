import React from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Avatar, 
  Stack,
  Chip,
  Grow,
  Zoom
} from '@mui/material'
import { 
  Download as DownloadIcon, 
  ConnectWithoutContact as ConnectIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import resume from '../../assets/Saurav_Resume.pdf' 
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
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

  const avatarVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  }

  const chipVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 1
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
        pt: { xs: 12, md: 10 },
        pb: { xs: 3, md: 2 },
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
          background: 'radial-gradient(circle, rgba(180, 21, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(223, 137, 9, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Stack
            spacing={3}
            alignItems="center"
            textAlign="center"
          >
            {/* Profile Image with enhanced styling */}
            <motion.div variants={itemVariants}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <motion.div variants={avatarVariants} whileHover="hover">
                  <Box
                    sx={{
                      width: { xs: 200, sm: 250, md: 280 },
                      height: { xs: 200, sm: 250, md: 280 },
                      borderRadius: '50%',
                      border: '4px solid transparent',
                      background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                      padding: '4px',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      '&:hover': {
                        boxShadow: '0 25px 80px rgba(180, 21, 255, 0.4), 0 0 0 1px rgba(180, 21, 255, 0.3)',
                        transform: 'scale(1.05)'
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
                  transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 15,
                      right: 15,
                      width: 20,
                      height: 20,
                      background: '#4CAF50',
                      borderRadius: '50%',
                      border: '3px solid #161513',
                      animation: 'pulse 2s infinite'
                    }}
                  />
                </motion.div>
              </Box>
            </motion.div>

            {/* Quick Info Chips */}
            <motion.div variants={chipVariants}>
              <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                <Chip
                  icon={<SchoolIcon />}
                  label="NIT Jamshedpur"
                  variant="outlined"
                  size="small"
                  className="glass-effect"
                />
                <Chip
                  icon={<CodeIcon />}
                  label="MERN Developer"
                  variant="outlined"
                  size="small"
                  className="glass-effect"
                />
                <Chip
                  icon={<LocationIcon />}
                  label="India"
                  variant="outlined"
                  size="small"
                  className="glass-effect"
                />
              </Stack>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  maxWidth: '900px',
                  mx: 'auto',
                  mb: 1
                }}
              >
                I'm{' '}
                <Box
                  component="span"
                  sx={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    display: 'inline-block',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
                      opacity: 0.1,
                      borderRadius: '8px',
                      transform: 'skew(-5deg)',
                      zIndex: -1
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-8px',
                      left: '0',
                      right: '0',
                      height: '3px',
                      background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                      borderRadius: '2px',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      animation: 'expandLine 2s ease-out 1s forwards'
                    }
                  }}
                >
                  Saurav Kumar
                </Box>
                , MERN developer based in India.
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  fontWeight: 400
                }}
              >
                I am a third-year undergraduate student pursuing Electrical and Electronics Engineering, 
                with a strong interest in Data Structures and Algorithms (DSA) and MERN Development.
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 3 }}
              >
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<ConnectIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
                        borderRadius: '50px',
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        minWidth: '200px',
                        boxShadow: '0 8px 25px rgba(180, 21, 255, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #FFB23D 0%, #D665FF 100%)',
                          boxShadow: '0 12px 35px rgba(223, 137, 9, 0.4)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Connect with me
                    </Button>
                  </motion.div>
                </AnchorLink>

                <motion.div
                  whileHover={{ scale: 1.05 }}
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
                      minWidth: '200px',
                      borderWidth: '2px',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
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
                    My Resume
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Hero
