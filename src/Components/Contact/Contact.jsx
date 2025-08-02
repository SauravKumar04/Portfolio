import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Chip,
  Alert,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    type: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: "2rem" }} />,
      title: "Email",
      content: "2023ugee038@nitjsr.ac.in",
      color: "#DF8909",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: "2rem" }} />,
      title: "Phone",
      content: "+91 9798616289",
      color: "#B415FF",
    },
    {
      icon: <LocationIcon sx={{ fontSize: "2rem" }} />,
      title: "Location",
      content: "Jamshedpur, India",
      color: "#61DAFB",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/saurav-kumar-32b61128a/",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/SauravKumar04",
      color: "#333",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      url: "#",
      color: "#1DA1F2",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataObj = new FormData();
      formDataObj.append("access_key", "fa2a1199-83e1-43ca-8fc2-36f356fb5393");
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          open: true,
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        open: true,
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact"
      ref={ref}
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Background Decorative Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(180, 21, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
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
          {/* Section Title */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  color: "white",
                  mb: 2,
                  position: "relative",
                  display: "inline-block",
                }}
              >
                Get in{" "}
                <Box component="span" sx={{ color: "#B415FF" }}>
                  Touch
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
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.85)",
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Have a project in mind? Let's work together to bring your ideas
                to life.
              </Typography>
            </Box>
          </motion.div>

          {/* Flex Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            {/* Contact Info Card */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: "rgba(17, 17, 17, 0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    p: 4,
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
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        background: "linear-gradient(135deg, #DF8909, #B415FF)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Let's Talk
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.85)",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        mb: 4,
                      }}
                    >
                      I'm always open to discussing new projects, internships,
                      or just connecting.
                    </Typography>

                    <Stack spacing={3} sx={{ mb: 4 }}>
                      {contactInfo.map((info, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -30 }
                          }
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 3,
                              p: 2,
                              borderRadius: "12px",
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                background: `${info.color}15`,
                                border: `1px solid ${info.color}30`,
                                transform: "translateX(5px)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                color: info.color,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 50,
                                height: 50,
                                borderRadius: "12px",
                                background: `${info.color}20`,
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{ color: "white", fontWeight: 500 }}
                              >
                                {info.content}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Stack>

                    <Typography
                      variant="h6"
                      sx={{ color: "white", mb: 2, fontWeight: 600 }}
                    >
                      Connect with me
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      {socialLinks.map((social, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }}>
                          <IconButton
                            href={social.url}
                            target="_blank"
                            sx={{
                              background: `${social.color}20`,
                              color: social.color,
                              border: `1px solid ${social.color}30`,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                background: `${social.color}30`,
                                boxShadow: `0 5px 15px ${social.color}40`,
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* Contact Form */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: "rgba(17, 17, 17, 0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    p: 4,
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
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Send me a message
                    </Typography>

                    <Box component="form" onSubmit={onSubmit}>
                      <Stack spacing={3}>
                        <TextField
                          fullWidth
                          name="name"
                          label="Your Name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          sx={{
                            "& .MuiInputLabel-root": {
                              color: "rgba(255, 255, 255, 0.7)",
                            },
                            "& .MuiInputBase-input": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "rgba(255, 255, 255, 0.2)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(180, 21, 255, 0.4)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#B415FF",
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          name="email"
                          label="Your Email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          sx={{
                            "& .MuiInputLabel-root": {
                              color: "rgba(255, 255, 255, 0.7)",
                            },
                            "& .MuiInputBase-input": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "rgba(255, 255, 255, 0.2)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(180, 21, 255, 0.4)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#B415FF",
                              },
                            },
                          }}
                        />
                        <TextField
                          fullWidth
                          name="message"
                          label="Your Message"
                          multiline
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          sx={{
                            "& .MuiInputLabel-root": {
                              color: "rgba(255, 255, 255, 0.7)",
                            },
                            "& .MuiInputBase-input": { color: "white" },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "rgba(255, 255, 255, 0.2)",
                              },
                              "&:hover fieldset": {
                                borderColor: "rgba(180, 21, 255, 0.4)",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#B415FF",
                              },
                            },
                          }}
                        />
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            disabled={isSubmitting}
                            startIcon={
                              isSubmitting ? (
                                <CircularProgress size={20} />
                              ) : (
                                <SendIcon />
                              )
                            }
                            sx={{
                              background:
                                "linear-gradient(135deg, #DF8909, #B415FF)",
                              borderRadius: "12px",
                              py: 2,
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              textTransform: "none",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #FFB23D, #D665FF)",
                                boxShadow: "0 8px 25px rgba(180, 21, 255, 0.4)",
                                transform: "translateY(-2px)",
                              },
                            }}
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </Button>
                        </motion.div>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Chip
                label="Available for new opportunities"
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(139, 195, 74, 0.2))",
                  border: "1px solid rgba(76, 175, 80, 0.4)",
                  color: "#4CAF50",
                  fontSize: "1rem",
                  px: 3,
                  py: 1,
                  animation: "pulse 2s infinite",
                }}
              />
            </Box>
          </motion.div>
        </motion.div>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={submitStatus.open}
        autoHideDuration={6000}
        onClose={() => setSubmitStatus({ ...submitStatus, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSubmitStatus({ ...submitStatus, open: false })}
          severity={submitStatus.type}
          sx={{ width: "100%" }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
