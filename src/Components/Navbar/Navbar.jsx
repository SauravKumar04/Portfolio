import React, { useRef, useState, useEffect } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box, 
  Container,
  useScrollTrigger,
  Slide,
  Backdrop
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const menuItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#services', id: 'services' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ]

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  }

  const fireVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    }
  }

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(22, 21, 19, 0.98) 0%, rgba(30, 20, 25, 0.95) 50%, rgba(40, 20, 30, 0.92) 100%)',
          backdropFilter: 'blur(20px)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          pt: 4
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ px: 2 }}>
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem disablePadding sx={{ mb: 1 }}>
                <AnchorLink className='anchor-link' offset={50} href={item.href}>
                  <ListItemButton
                    onClick={() => {
                      setMenu(item.id)
                      handleDrawerToggle()
                    }}
                    sx={{
                      borderRadius: '15px',
                      color: 'white',
                      py: 2,
                      px: 3,
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(223, 137, 9, 0.2) 0%, rgba(180, 21, 255, 0.2) 100%)',
                        transform: 'translateX(10px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ListItemText 
                      primary={item.name} 
                      sx={{ 
                        '& .MuiTypography-root': { 
                          fontSize: '1.1rem',
                          fontWeight: 500
                        } 
                      }} 
                    />
                  </ListItemButton>
                </AnchorLink>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={0}
          sx={{
            background: isScrolled 
              ? 'rgba(22, 21, 19, 0.95)' 
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            transition: 'all 0.3s ease',
            py: 0.5
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 1 }, minHeight: '64px' }}>
              {/* Logo */}
              <motion.div variants={logoVariants} whileHover="hover">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: { xs: '1.5rem', md: '1.8rem' }
                  }}
                >
                  <span className="gradient-text">Saurav.</span>
                  <motion.span
                    variants={fireVariants}
                    animate="animate"
                    style={{ marginLeft: '4px', fontSize: '1.5rem' }}
                  >
                    🔥
                  </motion.span>
                </Typography>
              </motion.div>

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1 }}>
                {menuItems.map((item) => (
                  <motion.div key={item.id} variants={navItemVariants} whileHover="hover">
                    <AnchorLink className='anchor-link' offset={50} href={item.href}>
                      <Button
                        onClick={() => setMenu(item.id)}
                        sx={{
                          color: 'white',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          position: 'relative',
                          textTransform: 'none',
                          px: 2.5,
                          py: 1,
                          minWidth: 'auto',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: menu === item.id ? '100%' : '0%',
                            height: '2px',
                            bottom: '4px',
                            left: '0',
                            background: 'linear-gradient(135deg, #DF8909 0%, #B415FF 100%)',
                            transition: 'width 0.4s ease'
                          },
                          '&:hover::after': {
                            width: '100%'
                          },
                          '&:hover': {
                            color: '#F778A1',
                            background: 'transparent'
                          }
                        }}
                      >
                        {item.name}
                      </Button>
                    </AnchorLink>
                  </motion.div>
                ))}
              </Box>

              {/* Connect Button - Desktop */}
              <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(267deg, #DA7C25 0%, #B923E1 100%)',
                        borderRadius: '50px',
                        px: 3,
                        py: 1,
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        boxShadow: '0px 8px 24px rgba(185, 35, 225, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(267deg, #FFB23D 0%, #D665FF 100%)',
                          boxShadow: '0px 12px 30px rgba(218, 124, 37, 0.4)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Connect With Me
                    </Button>
                  </motion.div>
                </AnchorLink>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { xs: 'block', lg: 'none' },
                  color: 'white',
                  p: 1
                }}
              >
                <MenuIcon sx={{ fontSize: '1.8rem' }} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'transparent',
            border: 'none'
          },
        }}
        SlideProps={{
          direction: 'left'
        }}
      >
        {drawer}
      </Drawer>

      {/* Backdrop for mobile menu */}
      <Backdrop
        sx={{ 
          color: '#fff', 
          zIndex: 1200,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)'
        }}
        open={mobileOpen}
        onClick={handleDrawerToggle}
      />
    </>
  )
}

export default Navbar
