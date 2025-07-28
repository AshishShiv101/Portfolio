
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jfif";
import bspImage from "../assets/BSPHCL.webp";
import PathPulse from "../assets/PathPulse.jpg";
import Ecom from "../assets/Ecomm.png"
import infosysImage from "../assets/Infosys.webp";
import mmw from "../assets/mmw.png"
import ciu from "../assets/ClearItUp.png"
import lingo from '../assets/Lingo.png'
import birdy from '../assets/Birdy.png'
import chess from '../assets/chess.png'
import BR from '../assets/BR.png'


export const HERO_CONTENT = `Enthusiastic and innovative Web & App Developer with a passion for crafting impactful solutions using cutting-edge technologies. Proficient in React and Swift, with a keen interest in Artificial Intelligence. Demonstrating a blend of technical expertise and creative problem-solving skills. Eager to contribute to dynamic teams and tackle complex challenges in web and app development, while exploring the potential of AI integration.`;

export const ABOUT_TEXT = `As a passionate and innovative Web & App Developer, I thrive on leveraging cutting-edge technologies to create impactful solutions. My expertise spans React and Swift, with a strong interest in Artificial Intelligence. Recently, I contributed to Pathpulse, an app showcased at App Fair 2025, where it was selected among a handful of projects from over 30 teams. This journey of late-night coding, collaborative brainstorming, and transformative learning culminated in recognition from tech experts, fueling my drive to push boundaries in mobile development and AI. I’m proficient in MongoDB, Firebase, Node.js, ExpressJS, and have a solid grasp of UI/UX design principles. Currently pursuing a Computer Science degree at SRM Institute of Science & Technology, I’m eager to join dynamic teams to tackle complex challenges in web, app, and AI development. Explore my GitHub and LinkedIn for a deeper dive into my work and journey.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "App Developer",
    company: "BSPHCL",
    image: bspImage,
    description: `Built a React Native app featuring QR code scanning to efficiently register electronic devices. Enabled quick data entry by capturing barcode data and syncing it to a centralized backend.`,
    technologies: ["Javascript", "React Native"],
  },
  {
    year: "April 2025 - May 2025",
    role: "IOS Developer",
    company: "Infosys",
    image: infosysImage,
    description: `Developed a Hospital Management System using Swift and UIKit, enabling patient tracking, doctor scheduling, and real-time updates. Integrated Firebase backend and followed best practices for clean architecture and responsive design.`,
    technologies: ["SwiftUI", "Django", "HealthKit"],
  },
  {
    year: "June 2025 - Sep 2025",
    role: "IOS Developer",
    company: "Madras Mind Works",
    image: mmw,
    description: `Worked on Apple Vision Pro, developing a VR application using ARKit and RealityKit. Focused on spatial computing experiences, gesture control, and immersive UI design for VisionOS.`,
    technologies: ["SwiftUI", "RealityKit", "ARKit"],
  }
];

export const PROJECTS = [
  {
    title: "PathPulse",
    image: PathPulse,
    description:
      "PathPulse is designed to be your essential travel companion.",
    technologies: ["UIKIT", "Firebase"],
    link: "https://apps.apple.com/in/app/pathpulse/id6743316371",
    category: "Top",
  },
  {
    title: "E-Commerce",
    image: Ecom,
    description:
      "A feature-rich, secure, and scalable e-commerce platform.",
    technologies: ["React", "TailwindCSS", "MongoDB"],
    link: "https://e-commerce-2-j6z5.onrender.com/",
    category: "Web",
  },
  {
    title: "ClearItUp",
    image: ciu,
    description:
      "Clear It Up is a modern full-stack image background remover.",
    technologies: ["React", "MongoDB","RazorPay"],
    link: "https://clear-it-up-6jwj.vercel.app/",
    category: "Web",
  },
  {
    title: "LingoNest",
    image: lingo,
    description:
      "Your Ultimate Language Exchange Platform.",
    technologies: ["React", "Zustand", "MongoDB",'TanStack Query'],
    link: "https://lingonest.onrender.com/",
    category: "Web",
  },
  {
    title: "LingoNest",
    image: lingo,
    description:
      "Your Ultimate Language Exchange Platform.",
    technologies: ["React", "Zustand", "MongoDB", 'TanStack Query'],
    link: "https://lingonest.onrender.com/",
    category: "Top",
  },
  {
    title: "Birdy",
    image: birdy,
    description:
      "A Simple Twitter Clone.",
    technologies: ["React", "Firebase"],
    link: "https://birdy-tawny.vercel.app/",
    category: "Web",
  },
  {
    title: "ChessDotCom",
    image: chess,
    description:
      "Real-time multiplayer chess game that allows players to connect and play chess in their browser.",
    technologies: ["Vanila JS", "Socket.IO"],
    link: "https://chess-dot-com-3.onrender.com/",
    category: "Web",
  },
  {
    title: "Self-Car-Simulation",
    image: project3,
    description:
      "A car simulation made using JavaScript, HTML, and CSS.",
    technologies: ["Javascript", "CSS", "HTML", "Machine Learning"],
    link: "https://self-driving-car-simulation.vercel.app/",
    category: "AI/ML",
  },
  {
    title: "Book_Recommender",
    image: BR,
    description:
      "An intelligent system that recommends books based on natural language queries, genre, and emotional tone using state-of-the-art semantic search.",
    technologies: ["Gradio", "HuggingFace", "Chroma"],
    link: "https://github.com/AshishShiv101/Book-Gradio",
    category: "AI/ML",
  },
  {
    title: "Book_Recommender",
    image: BR,
    description:
      "An intelligent system that recommends books based on natural language queries, genre, and emotional tone using state-of-the-art semantic search.",
    technologies: ["Gradio", "HuggingFace", "Chroma"],
    link: "https://github.com/AshishShiv101/Book-Gradio",
    category: "Top",
  },
  {
    title: "Car-Pedestrian-Detector",
    image: project4,
    description:
      "This detector points out vehicles and pedestrians from video.",
    technologies: ["Python", "CV2"],
    link: "https://github.com/AshishShiv101/Car_Pedestrian_Detector",
    category: "AI/ML",
  },
];



export const CONTACT = {
  address:"Chennai,Tamil Nadu",
  phoneNo: "+91-6203761127 ",
  email: "ashishshiv8491@gmail.com",
};
