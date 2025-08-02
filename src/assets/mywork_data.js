import project_img from '../assets/comingSoon.png';
import Invox from '../assets/Invox.png';
import medCare from '../assets/medCare.png';

const mywork_data = [
  {
    w_no: 1,
    title: "invoX - NextGen Invoicing",
    description: "A comprehensive full-stack MERN application featuring secure OTP-based authentication, dynamic invoice generation with PDF export, integrated payment processing (UPI, Stripe, PayPal, Crypto), real-time analytics dashboard, and automated email notifications for seamless business operations.",
    w_img: Invox,
    github: "https://github.com/SauravKumar04/invoX",
    live: "https://invox-demo.netlify.app"
  },
  {
    w_no: 2,
    title: "medCare - Doctor Appointment System",
    description: "A sophisticated medical appointment platform with multi-role authentication (patients, doctors, admins), advanced doctor search with specialty filtering, integrated Razorpay payment gateway, real-time appointment management, and comprehensive admin dashboard with analytics and reporting features.",
    w_img: medCare,
    github: "https://github.com/SauravKumar04/medCare",
    live: "https://medcare-demo.netlify.app"
  },
  {
    w_no: 3,
    title: "EcoTrack - Carbon Footprint Tracker",
    description: "An innovative environmental tracking application that helps users monitor and reduce their carbon footprint through interactive dashboards, personalized recommendations, achievement systems, and community challenges. Built with modern React patterns and sustainable design principles.",
    w_img: project_img,
    github: "https://github.com/SauravKumar04/ecotrack",
    live: "https://ecotrack-demo.netlify.app"
  },
  {
    w_no: 4,
    title: "SkillHub - Learning Management System",
    description: "A modern learning platform featuring course management, interactive video streaming, progress tracking, quiz systems, and instructor analytics. Includes real-time chat, discussion forums, and certificate generation with blockchain verification for enhanced credibility.",
    w_img: project_img,
    github: "https://github.com/SauravKumar04/skillhub",
    live: "https://skillhub-demo.netlify.app"
  }
];

export default mywork_data;
