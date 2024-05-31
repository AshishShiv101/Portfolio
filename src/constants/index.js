import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jfif";

export const HERO_CONTENT = `Enthusiastic and innovative Web Developer with a passion for leveraging cutting-edge technologies to create impactful
solutions. Proficient in React framework with a keen interest in Artificial Intelligence. Experienced in developing projects such
as a Diabetes Detector, Car Simulation, and Car-Pedestrian Simulator, demonstrating a blend of technical prowess and
creative problem-solving skills. Eager to contribute to dynamic teams and tackle complex challenges in the realm of web
development and AI.`;

export const ABOUT_TEXT = `As a passionate and innovative Web Developer, I thrive on utilizing cutting-edge technologies to craft impactful solutions. My expertise lies in the React framework, and I have a strong interest in Artificial Intelligence, which I have applied in various projects. I have developed notable projects such as a Diabetes Detector, a Car Simulation, and a Car-Pedestrian Simulator, showcasing my technical skills and creative problem-solving abilities. I am proficient in technologies like MongoDB, Firebase, Node.js, and ExpressJS, and have a solid understanding of UI and UX design principles. Currently pursuing a degree in Computer Science from SRM Institute of Science & Technology, I am eager to join dynamic teams to tackle complex challenges in web development and AI. My GitHub and LinkedIn profiles provide further insight into my work and professional journey.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Web Developer",
    company: "Eyantra",
    description: `Developed and maintained the E-Yantra website, aimed at enhancing the understanding of electrical components among students. Implemented interactive tutorials and integrated various educational resources to create an engaging learning platform. Collaborated with faculty and students to continuously improve the site and add new features.`,
    technologies: ["Javascript", "React.js", "Next.js"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Biom",
    description: `Designed and developed user interfaces for web applications using Next.js and React.`,
    technologies: ["React", "Tailwind",  "mySQL"],
  },
  
  
];

export const PROJECTS = [
  {
    title: "Birdy",
    image: project1,
    description:
      "A twitter clone made using React as a framework and Firebase as database. The hosting link for the site - https://birdy-tawny.vercel.app/.",
    technologies: [ "TailwindCSS", "React", "Firebase"],
  },
  {
    title: "E-yantra",
    image: project2,
    description:
      "E-yantra, a site for our college for the better understanding of electrical components among students.The hosting link for the site is - https://e-yantra-ten.vercel.app/.",
    technologies: ["React", "TailwindCSS"],
  },
  {
    title: "Self-Car-Simulation",
    image: project3,
    description:
      "A car simulation made using java script,html and css which shows how a car navigates thorough the traffic on its own.The hosting link for the site - https://self-driving-car-simulation.vercel.app/",
    technologies: ["Javascript", "CSS", "HTML", "Machine Learning"],
  },
  {
    title: "Car-Pedestrian-Detector",
    image: project4,
    description:
      "This detector points out different vehicles and pedestrians from a given video. Made using library cv2 and python language.The Github repo for the project : https://github.com/AshishShiv101/Car_Pedestrian_Detector",
    technologies: ["Python", "CV2",],
  },
];

export const CONTACT = {
  address:"Chennai,Tamil Nadu",
  phoneNo: "+91-6203761127 ",
  email: "ashishshiv8491@gmail.com",
};
