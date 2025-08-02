import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiRazorpay,
} from "react-icons/si";

import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getTechIcon = (tech) => {
    const iconMap = {
      JavaScript: SiJavascript,
      React: SiReact,
      "Node.js": SiNodedotjs,
      "Express.js": SiExpress,
      Express: SiExpress,
      MongoDB: SiMongodb,
      Stripe: SiStripe,
      Razorpay: SiRazorpay,
    };
    return iconMap[tech] || null;
  };

  const enhancedProjects = mywork_data.map((project, index) => {
    const techStacks = {
      0: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Stripe"],
      1: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Razorpay"],
    };

    return {
      ...project,
      technologies: techStacks[index] || ["JavaScript", "React", "Node.js"],
      category: "Full Stack",
      featured: true,
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="work"
      ref={ref}
      style={{
        position: "relative",
        paddingTop: "80px",
        paddingBottom: "80px",
        background: "#161513",
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(180, 21, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(223, 137, 9, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)
        `,
        backgroundAttachment: "fixed",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "300px",
          minHeight: "380px",
          background:
            "radial-gradient(circle, rgba(180, 21, 255, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: "250px",
          height: "250px",
          background:
            "radial-gradient(circle, rgba(223, 137, 9, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />

      {/* Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "48px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 600,
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          >
            My <span style={{ color: "#B415FF" }}>Projects</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.6,
              marginTop: "1rem",
            }}
          >
            Featured full-stack applications showcasing modern development
            practices
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {enhancedProjects.map((project) => (
            <motion.div
              key={project.w_no}
              variants={itemVariants}
              className="w-full"
            >
              <div
                style={{
                  minHeight: "380px",
                  background: "rgba(20, 20, 20, 0.8)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(180, 21, 255, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(180, 21, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.08)";
                }}
              >
                {/* Number Badge */}
                <div
                  className="number-badge"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    zIndex: 2,
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "rgba(180, 21, 255, 0.12)",
                    border: "1px solid rgba(180, 21, 255, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B415FF",
                    fontWeight: "700",
                    fontSize: "1rem",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {project.w_no}
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "32px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Full Stack Badge */}
                  <span
                    style={{
                      padding: "6px 16px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      background: "rgba(180, 21, 255, 0.1)",
                      color: "#B415FF",
                      border: "1px solid rgba(180, 21, 255, 0.2)",
                      textTransform: "uppercase",
                      marginTop: "8px",
                      marginBottom: "12px",
                      display: "inline-block",
                      alignSelf: "flex-start",
                      zIndex: 1,
                    }}
                  >
                    {project.category}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "white",
                      marginBottom: "16px",
                      lineHeight: 1.2,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "24px",
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div
                          key={techIndex}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 12px",
                            borderRadius: "10px",
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            fontSize: "0.8rem",
                          }}
                          title={tech}
                        >
                          {IconComponent && (
                            <IconComponent
                              style={{
                                width: 16,
                                height: 16,
                                color: "#B415FF",
                              }}
                            />
                          )}
                          <span
                            style={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontWeight: 500,
                            }}
                          >
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div
                    style={{ display: "flex", gap: "16px", marginTop: "auto" }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          padding: "14px 24px",
                          borderRadius: "14px",
                          border: "1px solid rgba(180, 21, 255, 0.2)",
                          color: "#B415FF",
                          background: "rgba(180, 21, 255, 0.05)",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          padding: "14px 24px",
                          borderRadius: "14px",
                          background: "rgba(180, 21, 255, 0.08)",
                          border: "1px solid rgba(180, 21, 255, 0.2)",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          color: "#B415FF",
                          fontWeight: 600,
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(180, 21, 255, 0.14)";
                          e.currentTarget.style.border =
                            "1px solid rgba(180, 21, 255, 0.3)";
                          e.currentTarget.style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(180, 21, 255, 0.08)";
                          e.currentTarget.style.border =
                            "1px solid rgba(180, 21, 255, 0.2)";
                          e.currentTarget.style.color = "#B415FF";
                        }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          style={{ textAlign: "center", marginTop: "64px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/SauravKumar04"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 32px",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "white",
              background: "rgba(255, 255, 255, 0.02)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <Github size={18} />
            View All Projects
          </a>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "16px",
              fontSize: "0.85rem",
            }}
          >
            Discover more on GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyWork;
