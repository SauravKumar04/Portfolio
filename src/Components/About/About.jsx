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
} from "@mui/material";
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Storage as DatabaseIcon,
  Web as WebIcon,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const muiTheme = useTheme();

  const skills = [
    { name: "DSA", level: 60, icon: <CodeIcon />, color: "#B415FF" },
    { name: "HTML & CSS", level: 50, icon: <WebIcon />, color: "#DF8909" },
    { name: "JavaScript", level: 60, icon: <CodeIcon />, color: "#F7DF1E" },
    { name: "React Js", level: 70, icon: <WebIcon />, color: "#61DAFB" },
    { name: "MongoDB", level: 60, icon: <DatabaseIcon />, color: "#47A248" },
    { name: "Express Js", level: 50, icon: <WebIcon />, color: "#000000" },
    { name: "Node Js", level: 40, icon: <DatabaseIcon />, color: "#339933" },
  ];

  const achievements = [
    {
      number: "5+",
      title: "PROJECTS COMPLETED",
      icon: <CodeIcon />,
      description: "Full-stack web applications",
    },
    {
      number: "8.37",
      title: "CURRENT CGPA",
      icon: <SchoolIcon />,
      description: "Electrical & Electronics Engineering",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(223, 137, 9, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 700,
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
                    top: 0,
                    right: -40,
                    width: 80,
                    height: 80,
                    opacity: 0.3,
                    animation: "float 3s ease-in-out infinite",
                  }}
                />
              </Typography>
            </Box>
          </motion.div>

          {/* Profile Image Centered */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Box
                sx={{
                  width: { xs: 260, md: 340 },
                  height: { xs: 260, md: 340 },
                  borderRadius: "50%",
                  border: "4px solid transparent",
                  background: "linear-gradient(135deg, #DF8909, #B415FF)",
                  padding: "4px",
                  boxShadow: "0 25px 80px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Box
                  component="img"
                  src={profile}
                  alt="Saurav Kumar"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </Box>
            </motion.div>
          </Box>

          {/* About + Skills */}
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Stack spacing={4}>
                <motion.div variants={itemVariants}>
                  <Card
                    className="glass-effect"
                    sx={{
                      p: 3,
                      borderRadius: "20px",
                      background: "rgba(30, 30, 30, 0.8)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.1rem",
                          lineHeight: 1.8,
                          color: "rgba(255, 255, 255, 0.9)",
                          mb: 2,
                        }}
                      >
                        I am currently a student in the Electrical and
                        Electronics Engineering (EEE) department at NIT
                        Jamshedpur. I have a strong interest in computer science
                        concepts, especially Data Structures and Algorithms
                        (DSA).
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.1rem",
                          lineHeight: 1.8,
                          color: "rgba(255, 255, 255, 0.9)",
                        }}
                      >
                        Along with that, I am skilled in web development and
                        enjoy building interactive and user-friendly web
                        applications. I'm always eager to learn more and take on
                        new tech challenges.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card
                    className="glass-effect"
                    sx={{
                      p: 3,
                      borderRadius: "20px",
                      background: "rgba(30, 30, 30, 0.8)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 3,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <CodeIcon /> Technical Skills
                      </Typography>

                      <Stack spacing={3}>
                        {skills.map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -50 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                            }
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  mb: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  {skill.icon}
                                  <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 500 }}
                                  >
                                    {skill.name}
                                  </Typography>
                                </Box>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
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
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.1)",
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
                                    background: `linear-gradient(135deg, ${skill.color}, #B415FF)`,
                                    boxShadow: `0 0 10px ${skill.color}30`,
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
