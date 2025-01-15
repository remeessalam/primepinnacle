import { AiOutlineCode } from "react-icons/ai";
import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {
  MdDevices,
  MdOutlineInsights,
  MdOutlineMobileFriendly,
  MdWeb,
} from "react-icons/md";
import {
  FaAndroid,
  FaCloud,
  FaDatabase,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BiBarChartAlt2, BiPalette } from "react-icons/bi";
import { RiChatSmile2Line } from "react-icons/ri";
import { SiApple, SiBlockchaindotcom, SiFlutter } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import Blogs from "./pages/Blogs";
import { BsCodeSlash } from "react-icons/bs";

export { logoImg };

export const companyDetails = {
  phone: "+91 93536 20347",
  whatsappnumber: "9353620347",
  address:
    "#46, 3rd A cross, chikkabommasandra , Yelahanka new town, Bangalore 560065",
  email: "primepinnacletechsolutions@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/primepinnacle-techsolutions-87130b2b3/  ",
  instagram: "https://www.instagram.com/primepinnacletechsolutions",
  twitter: "https://x.com/Primepinna54088",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    iconComponent: <FaShoppingCart className="h-8 w-8" />, // Represents e-commerce
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    iconComponent: <FaUsers className="h-8 w-8" />, // Represents social media
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    iconComponent: <CgWebsite className="h-8 w-8" />, // Represents landing pages
    description:
      "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    iconComponent: <MdWeb className="h-8 w-8" />, // Represents custom websites
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    iconComponent: <SiApple className="h-8 w-8" />, // Represents iOS development
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    iconComponent: <FaAndroid className="h-8 w-8" />, // Represents Android development
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    iconComponent: <SiFlutter className="h-8 w-8" />, // Represents Flutter development
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    iconComponent: <MdDevices className="h-8 w-8" />, // Represents hybrid app development
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with PRIME PINNACLE has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at PRIME PINNACLE took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“PRIME PINNACLE stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Achieve Mobile Supremacy through Custom App Development Solutions that Combine User-Centric Design, Seamless Functionality, and Sustainable Business Growth.",
    icon: require("./assets/images/icons/appdev.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <MdOutlineMobileFriendly className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "One of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.\n\nPerformance is another critical factor in mobile app development. With limited processing power and battery life, mobile devices demand optimized apps that run smoothly and efficiently. Developers must carefully consider factors such as memory usage, network connectivity, and power consumption to ensure a positive user experience.",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our full-stack development services provide end-to-end solutions, combining front-end and back-end expertise for a future-proof digital presence.",
    icon: require("./assets/images/icons/webdev.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <AiOutlineCode className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business.\n\nAt the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with. It encompasses the design, layout, and functionality of the website's interface. Popular front-end technologies include HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.js. These tools enable developers to create visually appealing and intuitive user experiences.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Deliver unparalleled user experiences with our innovative UI/UX design services that blend creativity and functionality.",
    icon: require("./assets/images/icons/uiux.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <BiPalette className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "UI/UX design is at the core of crafting applications and websites that are both aesthetically pleasing and highly functional. A well-designed user interface ensures easy navigation, while an engaging user experience keeps users coming back.\n\nOur approach includes user research, wireframing, prototyping, and usability testing to ensure that every design choice aligns with your business objectives and user expectations.",
  },
  {
    id: 4,
    title: "Chatbot Development",
    description:
      "Chatbots to redefine customer interaction, drive revenue, and future-proof your business.",
    icon: require("./assets/images/icons/chatbot.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <HiOutlineChatAlt2 className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "Chatbots are powered by natural language processing (NLP), enabling machines to understand and interpret human language. They can engage in meaningful conversations, answer questions, and provide personalized recommendations.\n\nBy automating routine tasks and providing immediate responses to customer inquiries, chatbots improve customer service and satisfaction while reducing operational costs.",
  },
  {
    id: 5,
    title: "Blockchain Solutions",
    description:
      "Revolutionize your business operations with secure, transparent, and decentralized blockchain solutions.",
    icon: require("./assets/images/icons/blockchain.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <SiBlockchaindotcom className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "Blockchain technology ensures data security and transparency in transactions. From cryptocurrency applications to supply chain management, blockchain can transform how businesses operate.\n\nOur blockchain solutions include smart contracts, decentralized apps (dApps), and secure payment systems tailored to your industry.",
  },
  {
    id: 6,
    title: "AI/ML Solutions",
    description:
      "Unlock next-gen customer experience with expertly crafted AI and machine learning solutions.",
    icon: require("./assets/images/icons/ai.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <GiArtificialIntelligence className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "AI and ML enable businesses to automate tasks, predict trends, and personalize experiences. Applications include customer behavior analysis, fraud detection, and intelligent recommendation systems.\n\nOur AI/ML solutions harness the power of data to deliver innovative and impactful results for your business.",
  },
  {
    id: 7,
    title: "IT Consulting & Strategy",
    description:
      "Connect IT and business for unparalleled success with our expert consulting, aligning IT infrastructure with business goals.",
    icon: require("./assets/images/icons/itconsulting.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <MdOutlineInsights className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "IT consulting helps businesses align their IT strategies with overall objectives. From assessments to optimization plans, our experts ensure your IT infrastructure enhances efficiency and security.\n\nWe address critical areas like cybersecurity, cloud migration, and operational scalability, offering comprehensive solutions tailored to your needs.",
  },
  {
    id: 8,
    title: "Custom Software Development",
    description:
      "Create tailored software solutions designed to meet your unique business needs and drive growth.",
    icon: require("./assets/images/icons/customsoftware.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <BsCodeSlash className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "Custom software development focuses on building applications specifically designed for your business processes.\n\nFrom concept to deployment, we ensure your software aligns with your goals, streamlining operations and enhancing efficiency.",
  },
  {
    id: 9,
    title: "Cloud Migration Services",
    description:
      "Seamlessly transition your business to the cloud with expert migration strategies that minimize risk and maximize performance.",
    icon: require("./assets/images/icons/cloud.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <FaCloud className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "Cloud platforms offer virtually unlimited scalability and cost-effectiveness.\n\nWe provide comprehensive migration strategies, ensuring minimal disruption while optimizing performance, flexibility, and operational efficiency.",
  },
  {
    id: 10,
    title: "Data Analytics & Business Intelligence",
    description:
      "Our cutting-edge analytics and BI capabilities distill complex data into clear, actionable insights.",
    icon: require("./assets/images/icons/dataanalytics.png"),
    iconComponent: (
      <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
        <BiBarChartAlt2 className="h-[3.5rem] md:h-[4rem] object-contain scale-150" />
      </div>
    ),
    detailContent:
      "Data analytics uncovers patterns and trends, providing actionable insights for decision-making. Business intelligence tools transform raw data into meaningful information.\n\nOur solutions empower organizations with predictive analytics, real-time reporting, and visualizations to drive growth.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
