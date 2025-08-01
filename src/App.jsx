import React from 'react'
import { Box, Fade } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'

function App() {
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Section spacing for perfect alignment
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden',
          position: 'relative',
          background: 'linear-gradient(180deg, #161513 0%, #1a1a1a 50%, #161513 100%)',
        }}
      >
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content Wrapper */}
        <Box
          component="main"
          sx={{
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Hero Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Hero />
          </motion.section>

          {/* About Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ 
              py: { xs: 4, md: 6 },
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <About />
            </Box>
          </motion.section>

          {/* Skills/Services Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ 
              py: { xs: 4, md: 6 },
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'linear-gradient(180deg, transparent 0%, rgba(30, 30, 30, 0.3) 50%, transparent 100%)',
            }}>
              <Services />
            </Box>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ 
              py: { xs: 4, md: 6 },
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <MyWork />
            </Box>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ 
              py: { xs: 4, md: 6 },
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              background: 'linear-gradient(180deg, transparent 0%, rgba(30, 30, 30, 0.2) 100%)',
            }}>
              <Contact />
            </Box>
          </motion.section>

          {/* Footer */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(20, 20, 20, 0.8)',
            }}>
              <Footer />
            </Box>
          </motion.section>
        </Box>

        {/* Scroll Progress Indicator */}
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #DF8909, #B415FF)',
            transformOrigin: '0%',
            zIndex: 9999,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2 }}
        />
      </Box>
    </motion.div>
  )
}

export default App
