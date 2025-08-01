import project1_img from '../assets/project_1.svg';
import project2_img from '../assets/project_2.svg';
import project3_img from '../assets/project_3.svg';
import project4_img from '../assets/project_4.svg';
import project5_img from '../assets/project_5.svg';
import project6_img from '../assets/project_6.svg';

const mywork_data = [
  {
    w_no: 1,
    title: "InvoX - NextGen Invoicing",
    description: "A comprehensive full-stack invoicing application built with MERN stack. Features PDF generation, email automation, secure authentication, and cloud storage integration. Streamlines business invoice management with modern UX.",
    w_img: project1_img,
    github: "https://github.com/SauravKumar04/Invox-NextGen-InvoiceApp",
    live: "https://invox-invoicing.netlify.app",
    category: "Full Stack Application",
    status: "Completed",
    difficulty: "Advanced",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Nodemailer", "PDF Generation"],
    features: [
      "Secure JWT Authentication",
      "PDF Invoice Generation", 
      "Email Automation",
      "Cloud Storage Integration",
      "Responsive Design",
      "Real-time Updates"
    ],
    backend_tech: {
      runtime: "Node.js with Express.js",
      database: "MongoDB with Mongoose ODM", 
      auth: "JWT + bcrypt",
      email: "Nodemailer",
      pdf: "html-pdf-node & PDFKit",
      storage: "Multer + Cloudinary",
      security: "CORS, Input Validation"
    }
  },
  {
    w_no: 2,
    title: "MedCare - Doctor Appointment System",
    description: "Modern healthcare platform enabling seamless doctor appointments with integrated payment gateway. Built with React, Material-UI, and Node.js backend featuring real-time notifications and secure payment processing.",
    w_img: project2_img,
    github: "https://github.com/SauravKumar04/MedCare",
    live: "https://medcare-frontend.netlify.app",
    category: "Healthcare Platform",
    status: "Completed", 
    difficulty: "Advanced",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Material-UI", "Tailwind CSS", "Razorpay", "JWT"],
    features: [
      "Doctor Appointment Booking",
      "Payment Gateway Integration",
      "Real-time Notifications", 
      "User Authentication",
      "Admin Dashboard",
      "Responsive Design"
    ],
    frontend_tech: {
      framework: "React 19.1.0",
      build: "Vite 7.0.0",
      styling: "Tailwind CSS 4.1.11 + Material-UI 7.2.0",
      routing: "React Router 7.6.3",
      notifications: "React Toastify 11.0.5",
      http: "Axios 1.10.0"
    },
    backend_tech: {
      runtime: "Node.js with Express.js 5.1.0",
      database: "MongoDB 8.16.3",
      auth: "JWT 9.0.2", 
      payments: "Razorpay 2.9.6",
      storage: "Cloudinary 2.7.0 + Multer 2.0.1",
      security: "bcrypt 6.0.0"
    }
  },
  {
    w_no: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills. Built with React, Material-UI, and Framer Motion for smooth animations. Features dark theme, glass morphism design, and optimized performance.",
    w_img: project3_img,
    github: "https://github.com/SauravKumar04/my-portfolio",
    live: "#",
    category: "Personal Portfolio",
    status: "Completed",
    difficulty: "Intermediate", 
    technologies: ["React", "Material-UI", "Framer Motion", "Vite", "CSS3"],
    features: [
      "Responsive Design",
      "Smooth Animations",
      "Glass Morphism UI",
      "Dark Theme",
      "Performance Optimized",
      "SEO Friendly"
    ]
  },
  {
    w_no: 4,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with MERN stack featuring product management, order tracking, and secure checkout process.",
    w_img: project4_img,
    github: "#",
    live: "#",
    category: "E-Commerce",
    status: "In Development",
    difficulty: "Expert",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Processing",
      "Order Management", 
      "Admin Dashboard",
      "Inventory Tracking"
    ]
  },
  {
    w_no: 5,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built with modern web technologies for enhanced productivity.",
    w_img: project5_img,
    github: "#",
    live: "#",
    category: "Productivity Tool",
    status: "Prototype", 
    difficulty: "Intermediate",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    features: [
      "Real-time Collaboration",
      "Task Assignment",
      "Progress Tracking",
      "Team Management",
      "Notifications",
      "Dashboard Analytics"
    ]
  },
  {
    w_no: 6,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, post scheduling, and engagement tracking. Features modern UI with data visualization and multi-platform integration.",
    w_img: project6_img,
    github: "#", 
    live: "#",
    category: "Social Media Tool",
    status: "Completed",
    difficulty: "Advanced",
    technologies: ["React", "Chart.js", "Node.js", "Express", "MongoDB", "REST APIs"],
    features: [
      "Multi-platform Integration",
      "Analytics Dashboard", 
      "Post Scheduling",
      "Engagement Tracking",
      "Data Visualization",
      "Performance Metrics"
    ]
  }
];

export default mywork_data;
