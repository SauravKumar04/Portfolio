import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Divider,
  Stack,
  IconButton,
  Link,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Favorite as HeartIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus({
        open: true,
        message: "Thank you for subscribing! I'll keep you updated.",
        type: "success",
      });
      setEmail("");
    }
  };

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

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#services" },
    { name: "Projects", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <EmailIcon />,
      text: "2023ugee038@nitjsr.ac.in",
      href: "mailto:2023ugee038@nitjsr.ac.in",
    },
    {
      icon: <PhoneIcon />,
      text: "+91 9798616289",
      href: "tel:+919798616289",
    },
    {
      icon: <LocationIcon />,
      text: "Jamshedpur, India",
      href: "#",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background:
          "linear-gradient(135deg, rgba(22, 21, 19, 0.98) 0%, rgba(15, 15, 15, 0.95) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(180, 21, 255, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(223, 137, 9, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: 4 }}>
          <Grid container spacing={4}>
            {/* About Section */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Stack spacing={3}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #DF8909, #B415FF)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Saurav Kumar
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.7,
                      maxWidth: "300px",
                    }}
                  >
                    I'm an EEE student at NIT Jamshedpur with skills in DSA and
                    MERN stack development. Passionate about creating innovative
                    web solutions.
                  </Typography>

                  {/* Social Links */}
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconButton
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            background: `${social.color}15`,
                            color: social.color,
                            border: `1px solid ${social.color}30`,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background: `${social.color}25`,
                              boxShadow: `0 5px 20px ${social.color}40`,
                              borderColor: `${social.color}60`,
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: "white",
                  }}
                >
                  Quick Links
                </Typography>

                <Stack spacing={2}>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                        position: "relative",
                        "&:hover": {
                          color: "#B415FF",
                          paddingLeft: "10px",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "0",
                          height: "2px",
                          background:
                            "linear-gradient(135deg, #DF8909, #B415FF)",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::before": {
                          width: "6px",
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: "white",
                  }}
                >
                  Contact Info
                </Typography>

                <Stack spacing={2}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      component={info.href !== "#" ? "a" : "div"}
                      href={info.href !== "#" ? info.href : undefined}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        color: "rgba(255, 255, 255, 0.7)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#DF8909",
                          transform: "translateX(5px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: "#DF8909",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 24,
                          height: 24,
                        }}
                      >
                        {info.icon}
                      </Box>
                      {info.text}
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: "white",
                  }}
                >
                  Stay Updated
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Subscribe to get updates about my latest projects and tech
                  insights.
                </Typography>

                <Box component="form" onSubmit={handleSubscribe}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            type="submit"
                            edge="end"
                            sx={{
                              color: "#B415FF",
                              "&:hover": {
                                background: "rgba(180, 21, 255, 0.1)",
                              },
                            }}
                          >
                            <SendIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "25px",
                        background: "rgba(255, 255, 255, 0.05)",
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
                      "& .MuiInputBase-input": {
                        color: "white",
                        "&::placeholder": {
                          color: "rgba(255, 255, 255, 0.5)",
                          opacity: 1,
                        },
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            © 2025 Saurav Kumar.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              "& a": {
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#B415FF",
                },
              },
            }}
          >
            <Link href="#" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </Link>
            <Link href="#" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </Link>
            <Link href="#contact">Contact</Link>
          </Stack>
        </Box>
      </Container>

      {/* Snackbar for newsletter subscription */}
      <Snackbar
        open={subscribeStatus.open}
        autoHideDuration={4000}
        onClose={() => setSubscribeStatus({ ...subscribeStatus, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() =>
            setSubscribeStatus({ ...subscribeStatus, open: false })
          }
          severity={subscribeStatus.type}
          sx={{ width: "100%" }}
        >
          {subscribeStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
