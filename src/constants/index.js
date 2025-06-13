import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jfif";
import bspImage from "../assets/BSPHCL.webp";
import PathPulse from "../assets/PathPulse.jpg";
import Ecom from "../assets/Ecomm.png"
import infosysImage from "../assets/Infosys.webp";
import mmw from "../assets/mmw.png"

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
      "PathPulse is designed to be your essential travel companion, providing real-time information and safety features to enhance your travel experience. From navigating unfamiliar routes to staying updated with critical weather and news, PathPulse ensures you're always prepared.",
    technologies: ["UIKIT", "Firebase"],
    link: "https://apps.apple.com/in/app/pathpulse/id6743316371",
  },
  {
    title: "E-Commerce",
    image: Ecom,
    description:
      "A feature-rich, secure, and scalable e-commerce platform with modern functionalities, designed for seamless user experience and efficient management.",
    technologies: ["React", "TailwindCSS","MongoDB"],
    link: "https://e-commerce-2-j6z5.onrender.com/",
  },
  {
    title: "Self-Car-Simulation",
    image: project3,
    description:
      "A car simulation made using JavaScript, HTML, and CSS which shows how a car navigates through the traffic on its own.",
    technologies: ["Javascript", "CSS", "HTML", "Machine Learning"],
    link: "https://self-driving-car-simulation.vercel.app/",
  },
  {
    title: "Car-Pedestrian-Detector",
    image: project4,
    description:
      "This detector points out different vehicles and pedestrians from a given video. Made using library cv2 and Python language.",
    technologies: ["Python", "CV2"],
    link: "https://github.com/AshishShiv101/Car_Pedestrian_Detector",
  },
];


export const CONTACT = {
  address:"Chennai,Tamil Nadu",
  phoneNo: "+91-6203761127 ",
  email: "ashishshiv8491@gmail.com",
};
