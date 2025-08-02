import React, { useRef } from 'react';
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
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Code as CodeIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import './MyWork.css';

import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const enhancedProjects = mywork_data.map((project, index) => ({
    ...project,
    technologies: ['JavaScript', 'Tailwind CSS', 'React', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'MERN Stack',
    featured: index < 3,
  }));

  return (
    <Box id="work" ref={ref} sx={{ py: 10, position: 'relative', overflow: 'hidden' }}>
      {/* Gradient Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(223,137,9,0.15), transparent)',
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,21,255,0.12), transparent)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              color: 'white',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
            }}
          >
            My <Box component="span" className="gradient-text">Projects</Box>
            <Box
              component="img"
              src={theme_pattern}
              alt=""
              sx={{
                position: 'absolute',
                top: 0,
                right: -50,
                width: 60,
                opacity: 0.2,
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1rem',
              lineHeight: 1.8,
            }}
          >
            Explore a curated selection of my web development work — clean code, responsive design, and seamless UX.
          </Typography>
        </Box>

        {/* Featured Badge */}
        <Box textAlign="center" mb={4}>
          <Chip
            icon={<CodeIcon />}
            label="Featured Projects"
            sx={{
              px: 2,
              py: 1,
              color: 'white',
              background: 'rgba(180, 21, 255, 0.15)',
              border: '1px solid rgba(180, 21, 255, 0.4)',
              fontWeight: 500,
            }}
          />
        </Box>

        {/* Project Grid */}
        <Grid container spacing={4}>
          {enhancedProjects.map((project, i) => (
            <Grid item xs={12} md={6} lg={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 80 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(30, 30, 30, 0.95)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 25px 60px rgba(180,21,255,0.15)',
                    },
                  }}
                >
                  {/* Image */}
                  <Box sx={{ height: 280, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={project.w_img}
                      alt={project.title}
                      sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        '&:hover': { transform: 'scale(1.08)' },
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={2}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          background: 'rgba(180, 21, 255, 0.15)',
                          color: '#B415FF',
                          fontWeight: 600,
                          width: 'fit-content',
                        }}
                      />
                      <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          lineHeight: 1.6,
                          height: '4.5em',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {project.technologies.map((tech, index) => (
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: 'rgba(255,255,255,0.2)',
                              color: 'white',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>

                  {/* Actions */}
                  <CardActions sx={{ px: 3, pb: 3 }}>
                    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
                      {project.github && (
                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          sx={{
                            color: 'white',
                            borderColor: 'rgba(255,255,255,0.3)',
                            '&:hover': {
                              borderColor: '#B415FF',
                              backgroundColor: 'rgba(180,21,255,0.1)',
                            },
                          }}
                        >
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          fullWidth
                          variant="contained"
                          startIcon={<LaunchIcon />}
                          href={project.live}
                          target="_blank"
                          sx={{
                            background: 'linear-gradient(135deg, #DF8909, #B415FF)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #FFA726, #BA68C8)',
                            },
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

        {/* View All Button */}
        <Box textAlign="center" mt={6}>
          <Button
            variant="outlined"
            endIcon={<ArrowIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              color: 'white',
              fontWeight: 600,
              borderWidth: 2,
              borderColor: 'rgba(255,255,255,0.3)',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#B415FF',
                background: 'rgba(180,21,255,0.1)',
              },
            }}
          >
            View All Projects
          </Button>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.6)', mt: 2 }}
          >
            Find more on my GitHub profile.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MyWork;
