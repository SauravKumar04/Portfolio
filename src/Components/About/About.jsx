import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  useTheme,
  Paper,
  Divider,
} from "@mui/material";
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Web as WebIcon,
  WorkspacePremium as AchievementIcon,
  TrendingUp as ProgressIcon,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const muiTheme = useTheme();

  const skills = [
    { name: "Data Structures & Algorithms", level: 75, icon: <CodeIcon />, color: "#B415FF", category: "Programming" },
    { name: "JavaScript", level: 85, icon: <CodeIcon />, color: "#F7DF1E", category: "Frontend" },
    { name: "React.js", level: 80, icon: <WebIcon />, color: "#61DAFB", category: "Frontend" },
    { name: "Node.js", level: 70, icon: <DatabaseIcon />, color: "#339933", category: "Backend" },
    { name: "Express.js", level: 75, icon: <WebIcon />, color: "#000000", category: "Backend" },
    { name: "MongoDB", level: 70, icon: <DatabaseIcon />, color: "#47A248", category: "Database" },
    { name: "HTML5 & CSS3", level: 90, icon: <WebIcon />, color: "#DF8909", category: "Frontend" },
    { name: "Git & GitHub", level: 80, icon: <CodeIcon />, color: "#F05032", category: "Tools" },
  ];

  const achievements = [
    {
      number: "8.37",
      title: "CURRENT CGPA",
      subtitle: "Electrical & Electronics Engineering",
      icon: <SchoolIcon />,
      color: "#4CAF50",
    },
    {
      number: "10+",
      title: "PROJECTS COMPLETED", 
      subtitle: "Full-stack web applications",
      icon: <CodeIcon />,
      color: "#B415FF",
    },
    {
      number: "500+",
      title: "DSA PROBLEMS SOLVED",
      subtitle: "Across multiple platforms",
      icon: <ProgressIcon />,
      color: "#DF8909",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        background: 'linear-gradient(180deg, transparent 0%, rgba(30, 30, 30, 0.2) 50%, transparent 100%)',
      }}
    >
      {/* Enhanced Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          background: "radial-gradient(circle, rgba(223, 137, 9, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          background: "radial-gradient(circle, rgba(180, 21, 255, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 800,
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                }}
              >
                About{" "}
                <Box component="span" className="gradient-text">
                  Me
                </Box>
                <Box
                  component="img"
                  src={theme_pattern}
                  alt=""
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -50,
                    width: { xs: 60, md: 100 },
                    height: { xs: 60, md: 100 },
                    opacity: 0.3,
                    animation: "float 3s ease-in-out infinite",
                  }}
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.7,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Passionate about technology, driven by curiosity, and committed to continuous learning
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {/* Left Column - Profile & Description */}
            <Grid item xs={12} lg={6}>
              <Stack spacing={4}>
                {/* Profile Image */}
                <motion.div variants={cardVariants}>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box
                        sx={{
                          width: { xs: 220, md: 280 },
                          height: { xs: 220, md: 280 },
                          borderRadius: "30px",
                          background: "linear-gradient(135deg, #DF8909, #B415FF)",
                          padding: "4px",
                          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "30px",
                            background: "linear-gradient(45deg, #DF8909, #B415FF)",
                            opacity: 0.7,
                            filter: 'blur(20px)',
                            zIndex: -1,
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={profile}
                          alt="Saurav Kumar"
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "26px",
                            objectFit: "cover",
                            objectPosition: "center top",
                            display: "block",
                          }}
                        />
                      </Box>
                    </motion.div>
                  </Box>
                </motion.div>

                {/* About Description Card */}
                <motion.div variants={cardVariants}>
                  <Card
                    className="glass-effect"
                    sx={{
                      p: 4,
                      borderRadius: "24px",
                      background: "rgba(30, 30, 30, 0.98)",
                      backdropFilter: "blur(20px)",
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #DF8909, #B415FF)',
                        borderRadius: '24px 24px 0 0',
                      }}
                    />
                    <CardContent sx={{ p: 0 }}>
                      <Stack spacing={3}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: "white",
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          <SchoolIcon sx={{ color: '#B415FF' }} />
                          My Journey
                        </Typography>
                        
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1.2rem",
                            lineHeight: 1.8,
                            color: "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          I am currently pursuing my Bachelor's degree in{" "}
                          <Box component="span" sx={{ color: '#DF8909', fontWeight: 600 }}>
                            Electrical & Electronics Engineering
                          </Box>{" "}
                          at NIT Jamshedpur, where I've maintained an excellent academic record with a CGPA of 8.37.
                        </Typography>
                        
                        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                        
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1.2rem",
                            lineHeight: 1.8,
                            color: "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          Beyond my core engineering studies, I have developed a strong passion for{" "}
                          <Box component="span" sx={{ color: '#B415FF', fontWeight: 600 }}>
                            full-stack web development
                          </Box>{" "}
                          and{" "}
                          <Box component="span" sx={{ color: '#DF8909', fontWeight: 600 }}>
                            competitive programming
                          </Box>
                          . I enjoy building innovative web applications and solving complex algorithmic challenges.
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "1.2rem",
                            lineHeight: 1.8,
                            color: "rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          I'm always eager to learn new technologies, take on challenging projects, and collaborate with fellow developers to create impactful solutions.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Stack>
            </Grid>

            {/* Right Column - Skills & Achievements */}
            <Grid item xs={12} lg={6}>
              <Stack spacing={4}>
                {/* Achievements Cards */}
                <motion.div variants={cardVariants}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "white",
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <AchievementIcon sx={{ color: '#DF8909' }} />
                    Achievements
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {achievements.map((achievement, index) => (
                      <Grid item xs={12} sm={6} lg={12} xl={6} key={index}>
                        <motion.div
                          variants={cardVariants}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <Card
                            className="glass-effect"
                            sx={{
                              p: 3,
                              borderRadius: "20px",
                              background: `linear-gradient(135deg, ${achievement.color}10, rgba(30, 30, 30, 0.98))`,
                              border: `1px solid ${achievement.color}30`,
                              textAlign: "center",
                              height: '100%',
                              position: 'relative',
                              overflow: 'hidden',
                              '&:hover': {
                                border: `1px solid ${achievement.color}50`,
                                boxShadow: `0 20px 40px ${achievement.color}20`,
                              }
                            }}
                          >
                            <Box
                              sx={{
                                color: achievement.color,
                                mb: 2,
                                display: 'flex',
                                justifyContent: 'center'
                              }}
                            >
                              {React.cloneElement(achievement.icon, { sx: { fontSize: '2.5rem' } })}
                            </Box>
                            <Typography
                              variant="h3"
                              sx={{
                                fontWeight: 800,
                                color: achievement.color,
                                mb: 1,
                                fontSize: { xs: '2rem', md: '2.5rem' }
                              }}
                            >
                              {achievement.number}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                fontWeight: 600,
                                color: "white",
                                mb: 1,
                                fontSize: '0.9rem'
                              }}
                            >
                              {achievement.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "rgba(255, 255, 255, 0.7)",
                                fontSize: '0.8rem'
                              }}
                            >
                              {achievement.subtitle}
                            </Typography>
                          </Card>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>

                {/* Skills Section */}
                <motion.div variants={cardVariants}>
                  <Card
                    className="glass-effect"
                    sx={{
                      p: 4,
                      borderRadius: "24px",
                      background: "rgba(30, 30, 30, 0.98)",
                      backdropFilter: "blur(20px)",
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          mb: 4,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <CodeIcon sx={{ color: '#B415FF' }} />
                        Technical Skills
                      </Typography>

                      <Stack spacing={3}>
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -30 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -30 }
                            }
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  mb: 1.5,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      color: skill.color,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      width: 35,
                                      height: 35,
                                      borderRadius: '10px',
                                      background: `${skill.color}20`,
                                      border: `1px solid ${skill.color}30`
                                    }}
                                  >
                                    {React.cloneElement(skill.icon, { sx: { fontSize: '1.3rem' } })}
                                  </Box>
                                  <Box>
                                    <Typography
                                      variant="body1"
                                      sx={{ fontWeight: 600, color: 'white' }}
                                    >
                                      {skill.name}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: '0.8rem' }}
                                    >
                                      {skill.category}
                                    </Typography>
                                  </Box>
                                </Box>
                                <Typography
                                  variant="body1"
                                  sx={{ 
                                    color: skill.color,
                                    fontWeight: 700,
                                    fontSize: '1.1rem'
                                  }}
                                >
                                  {skill.level}%
                                </Typography>
                              </Box>

                              <Box sx={{ position: "relative" }}>
                                <LinearProgress
                                  variant="determinate"
                                  value={100}
                                  sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    "& .MuiLinearProgress-bar": {
                                      borderRadius: 4,
                                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    },
                                  }}
                                />
                                <motion.div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    borderRadius: 4,
                                    background: `linear-gradient(135deg, ${skill.color}, ${skill.color}cc)`,
                                    boxShadow: `0 0 15px ${skill.color}40`,
                                  }}
                                  initial={{ width: 0 }}
                                  animate={
                                    isInView
                                      ? { width: `${skill.level}%` }
                                      : { width: 0 }
                                  }
                                  transition={{
                                    duration: 1.5,
                                    delay: index * 0.1 + 0.8,
                                    ease: "easeOut"
                                  }}
                                />
                              </Box>
                            </Box>
                          </motion.div>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Stack>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
