import mtMain from '../assets/Moneytracker.png';
import wedMain from '../assets/Photography.png';
import ccMain from '../assets/Connectedcarts.png';
import rdbMain from '../assets/Redbites.png';
import sarMain from '../assets/Sarathi.png';
import ecoMain from '../assets/Ecologix.png';

export const projects = [
  {
    id: "money-tracker",
    title: "Money Tracker – Personal Finance App",
    description: "A smart personal finance mobile app designed to help young professionals understand and improve their spending habits.",
    tagline: "Making personal finance simple, guided, and behavior-driven.",
    image: mtMain,
    role: ["Expense Tracking", "Behavior Insights", "Habit Building"],
    tools: ["Figma"],
    keyFeatures: [
      "“Today’s Pulse” for daily financial awareness",
      "Spending pattern analysis and behavioral insights",
      "Personalized nudges for better decision-making",
      "Habit-based goals for long-term discipline"
    ],
    outcome: "Transforms finance management into a simple, engaging, and non-intimidating experience.",
    gallery: []
  },
  {
    id: "wedding-photography",
    title: "Wedding Photography Website",
    description: "A visually driven photography website focused on creating an emotional and seamless user experience.",
    tagline: "Designing a storytelling-first experience that builds trust and engagement.",
    image: wedMain,
    role: ["UI/UX Design"],
    tools: ["Figma"],
    problem: "Visual storytelling, clean layout, and guided user flow.",
    outcome: "Creates a simple, elegant experience that encourages users to explore and contact the studio.",
    gallery: []
  },
  {
    id: "connected-carts",
    title: "Connected Carts (Smart Trolley)",
    description: "An IoT-based retail experience that transforms traditional shopping into a smart, automated process.",
    tagline: "Designing a seamless shopping journey using IoT and real-time interaction.",
    image: ccMain,
    role: ["UI/UX Lead", "Front-end Prototype"],
    tools: ["Figma", "React"],
    problem: "Traditional shopping involves long queues, manual scanning, and a disconnected physical retail experience for customers.",
    outcome: "Presented at ICUIS 2024 (IEEE)",
    gallery: []
  },
  {
    id: "red-district-bites",
    title: "Red District Bites",
    description: "Anime-themed café website with interactive ordering and booking experience.",
    tagline: "Creating a fun, immersive, and responsive food ordering interface.",
    image: rdbMain,
    role: ["UI Designer"],
    tools: ["Figma", "Adobe XD", "Photoshop"],
    problem: "The café lacked an online presence that matched its unique anime theme and didn't have a structured way for customers to order or book tables.",
    outcome: "A fully responsive, thematic website design ready for development.",
    gallery: []
  },
  {
    id: "sarathi",
    title: "SARATHI",
    description: "Accessible mobility app designed for users with disabilities in Chennai.",
    tagline: "Designing inclusive travel experiences with accessibility-first approach.",
    image: sarMain,
    role: ["UX Design", "Accessibility Research"],
    tools: ["Figma"],
    problem: "Public transport and existing mobility apps in Chennai lack crucial accessibility features for users with visual and physical disabilities.",
    outcome: "Created a validated high-fidelity prototype focusing on voice navigation and screen-reader compatibility.",
    gallery: []
  },
  {
    id: "ecologix",
    title: "Ecologix",
    description: "Smart farming dashboard that simplifies environmental data for farmers.",
    tagline: "Turning complex agricultural data into simple, actionable insights.",
    image: ecoMain,
    role: ["UI/UX Designer"],
    tools: ["Figma"],
    problem: "Farmers are overwhelmed by complex raw data from soil and weather sensors, making it difficult to make quick decisions.",
    outcome: "A clean, intuitive dashboard design that highlights critical alerts and simplifies data visualization.",
    gallery: []
  }
];
