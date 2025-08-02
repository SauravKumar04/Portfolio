import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiGit,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import {
  Code as CodeIcon,
  Web as WebIcon,
  Storage as DatabaseIcon,
  Psychology as AlgorithmIcon,
  Build as ToolIcon,
  Cloud as DeployIcon,
} from "@mui/icons-material";
import Services_Data from "../../assets/services_data";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Professional skills data with proper icons
  const skillsData = [
    {
      title: "Data Structures & Algorithms",
      description:
        "Strong foundation in DSA with C/C++. Problem-solving and competitive programming experience.",
      icon: <AlgorithmIcon />,
      techIcons: [SiCplusplus, CodeIcon],
      color: "#B415FF",
    },
    {
      title: "Frontend Development",
      description:
        "Modern web development with React, HTML5, CSS3, and JavaScript. Responsive design expertise.",
      icon: <WebIcon />,
      techIcons: [SiReact, SiJavascript, SiHtml5, SiCss3],
      color: "#B415FF",
    },
    {
      title: "Backend Development",
      description:
        "Server-side development with Node.js, Express.js, and database management with MongoDB.",
      icon: <DatabaseIcon />,
      techIcons: [SiNodedotjs, SiExpress, SiMongodb],
      color: "#B415FF",
    },
    {
      title: "Development Tools",
      description:
        "Proficient with modern development tools, version control, and API testing platforms.",
      icon: <ToolIcon />,
      techIcons: [SiGit, SiPostman],
      color: "#B415FF",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
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
                My{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#B415FF",
                  }}
                >
                  Skills
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "500px",
                  mx: "auto",
                  lineHeight: 1.6,
                  fontSize: "1rem",
                }}
              >
                Technical expertise and key areas of development
              </Typography>
            </Box>
          </motion.div>

          {/* Skills Grid */}
          <Grid container spacing={3} sx={{ maxWidth: "800px", mx: "auto" }}>
            {skillsData.map((skill, index) => (
              <Grid item xs={6} sm={6} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "240px",
                      background: "rgba(30, 30, 30, 0.6)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "16px",
                      p: 2.5,
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover": {
                        border: "1px solid rgba(180, 21, 255, 0.3)",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 25px rgba(180, 21, 255, 0.1)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 0,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Stack spacing={2} sx={{ height: "100%" }}>
                        {/* Icon */}
                        <Box
                          sx={{
                            color: "#B415FF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 48,
                            height: 48,
                            borderRadius: "12px",
                            background: "rgba(180, 21, 255, 0.1)",
                            border: "1px solid rgba(180, 21, 255, 0.2)",
                            fontSize: "1.5rem",
                          }}
                        >
                          {skill.icon}
                        </Box>

                        {/* Title */}
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "white",
                            lineHeight: 1.3,
                            fontSize: "1rem",
                          }}
                        >
                          {skill.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            lineHeight: 1.5,
                            fontSize: "0.85rem",
                            flex: 1,
                          }}
                        >
                          {skill.description}
                        </Typography>

                        {/* Tech Icons */}
                        {skill.techIcons.length > 0 && (
                          <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
                            {skill.techIcons
                              .slice(0, 4)
                              .map((IconComponent, iconIndex) => (
                                <Box
                                  key={iconIndex}
                                  sx={{
                                    width: 24,
                                    height: 24,
                                    borderRadius: "6px",
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border:
                                      "1px solid rgba(255, 255, 255, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    fontSize: "12px",
                                  }}
                                >
                                  <IconComponent />
                                </Box>
                              ))}
                          </Box>
                        )}
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
  );
};

export default Services;
