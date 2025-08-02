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
            "radial-gradient(circle, rgba(223, 137, 9, 0.08) 0%, transparent 70%)",
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
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 600,
                  mb: 2,
                  fontFamily: "Inter, sans-serif",
                  color: "white",
                }}
              >
                About{" "}
                <Box component="span" sx={{ color: "#B415FF" }}>
                  Me
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  maxWidth: "500px",
                  mx: "auto",
                  lineHeight: 1.6,
                  fontSize: "1rem",
                }}
              >
                Get to know more about my background and expertise
              </Typography>
            </Box>
          </motion.div>

          {/* About + Skills */}
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Stack spacing={4}>
                {/* About Text */}
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      background: "rgba(17, 17, 17, 0.8)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(180, 21, 255, 0.2)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                      },
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

                {/* Skills Progress */}
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      background: "rgba(17, 17, 17, 0.8)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(180, 21, 255, 0.2)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                      },
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
                                    sx={{ fontWeight: 500, color: "white" }}
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
