import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  firebase,
  appwrite,
  kotlin,
  express,
  sql,
  githuB,
  webrtc,
  socketio,
  deloitte,
  nextjs,
  framerMotion,
  kaboom,
  openai,
  rapidApi,
  jquery,
  bootstrap,
  wordpress,
  codingNinjas,
  eduskills,
  accenture,
  internpe,
  knx,
  sih,
  elabs,
  swoc,
  uipath,
  reactsvg,
  reduxsvg,
  appwritesvg,
  tailwindsvg,
  blogApp,
  VCApp,
  genaiResume,
  algoVisualizer,
  genify,
  inventory,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "techStack",
    title: "Tech-Stack",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "GenAI / Agentic AI Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer (Web & App)",
    icon: backend,
  },
  {
    title: "Cloud & Backend Engineer",
    icon: mobile,
  },
  {
    title: "C++ Programmer (DSA)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  { name: "OpenAI API", icon: openai },
  { name: "Socket.IO", icon: socketio },
  { name: "Next.js", icon: nextjs },
  { name: "Framer Motion", icon: framerMotion },
];

const experiences = [
  {
    title: "Associate Software Engineer Intern",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#fff",
    date: "May 2025 - July 2025",
    points: [
      "Built a GenAI-powered asset manager 1,200+ utility assets using React, Flask, and Neon PostgreSQL, integrating SQL-fetched SCADA, maintenance, and inspection data with a Python rule engine to assess risk and generate insights via a GenAI natural language chatbot using OpenAI LLM and prompt engineering.",
      "Developed RAG and Agentic AI workflows using FAISS and LangChain to classify queries, fetch data, and provide diagnostics and recommendations, reducing resolution time from 5+ hours to <5 min.",
      "Hosted on Azure with CI/CD pipelines; tested Flask endpoints via Postman and ensured 99.9% uptime.",
      "Completed 90+ hours of industry-grade training covering GenAI (Prompt Engineering, RAG, LLMs, Transformers), Java, RPA & Automation (Blue Prism), Cybersecurity.",
    ],
  },
  {
    title: "Deloitte Hacksplosion Hackathon - Top 100",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#000",
    date: "Feb 2025",
    points: [
      "Built a privacy-first platform to automate email-to-ERP order processing with zero data persistence, reducing manual work by 80%.",
      "Integrated GenAI for intelligent PDF parsing, duplicate detection, and real-time error handling across multi-subdomain email flows.",
      "Used Blue Prism for RPA orchestration and designed dashboards for efficiency metrics, error trends, and customer satisfaction tracking.",
      "Ranked in the top 100 of 12,000+ registered participants",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Coding Ninjas: KIIT",
    icon: codingNinjas,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Conducted technical interviews to assess candidates' skills and problem-solving abilities.",
      "Provided feedback and recommendations based on interview performance.",
      "Contributed to the recruitment and selection process for technical roles.",
    ],
  },
  {
    title: "Instructor",
    company_name: "E-Labs (Peer-to-Peer Learning Society)",
    icon: elabs,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Taught 100+ underclassmen core DSA concepts like Stacks and Queues via structured academic workshops",
      "Conducted comprehensive workshops for 300+ on Web Development.",
      "Enhanced the society's website functionality and user experience through collaborative development.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Konnexions: KIIT",
    icon: knx,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Specialized in Frontend Development using technologies like React.Js, Next.Js,Tailwind",
      "Participated in multiple group projects and contributed to the society.",
    ],
  },
  {
    title: "Web & App Developer",
    company_name: "EduSkills",
    icon: eduskills,
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    points: [
      "Engaged in the development of mobile applications using Kotlin.",
      "Applied knowledge of app development to practical projects under the curriculum designed by Google's developers.",
      "Focused on building and refining mobile app functionalities.",
    ],
  },
  {
    title: "SIH - Regional Finalists",
    company_name: "Smart India Hackathon (SIH)",
    icon: sih,
    iconBg: "#E6DEDD",
    date: "Aug 2024",
    points: [
      "Developed a full-stack system to quantify CO₂ emissions from coal mines and recommend carbon neutrality strategies.",
      "Enabled real-time data visualization, automated reporting, and interactive dashboards tailored for sustainability insights.",
      "Selected as a regional finalist from 5000+ teams for solving high-impact environmental challenges.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Social Winter Of Code (SWOC)",
    icon: swoc,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Contributed to open-source projects using React, Tailwind CSS and JavaScript",
      "Enhanced version control and collaboration skills with Git and GitHub.",
      "Focused on improving User Interfaces and responsive design as well as adding new features.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `I strongly recommend Yash for his outstanding performance during his technology internship. He displayed remarkable proactiveness, curiosity, and commitment while learning about Gen AI on the job. Despite being new to the domain, Yash quickly absorbed complex concepts and applied them effectively to real project scenarios. His collaborative mindset, problem-solving skills, and eagerness to take initiative made him a valuable contributor to the team. <br/><br/>\n\n
      Yash consistently delivered high-quality outputs, asked thoughtful questions, and demonstrated a keen interest in innovation. I am confident that he will excel in any future role and continue to bring impact through his dedication and enthusiasm.`,
    name: "Swati Srinivasan",
    designation: "Application Architect Manager | Digital Transformation",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial: `I strongly recommend Yash for his exceptional contributions during his internship with our team. From day one, he displayed remarkable proactiveness, ownership, and a genuine eagerness to learn traits rarely seen at the intern level.\n\n
      He quickly grasped complex concepts in the Generative AI domain and took complete initiative in delivering an end-to-end project within a very limited timeframe. 
      Despite being new to the organization, he operated like a full-time team member consistently staying on top of tasks, collaborating effectively, and sharing thoughtful inputs during discussions.\n\n
      His work ethic, ability to learn quickly, and commitment to high-quality outcomes made a real impact. I'm confident that he will continue to excel and be a valuable asset in any future endeavor.`,
    name: "Sanjay Singh Rawat",
    designation:
      "Business & Integration Arch. Manager | Energy & Utility Consultant ",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial: `It was a great experience mentoring Yash Singh during his internship. Despite being in his 3rd year of engineering, he showcased exceptional technical skills and maturity in handling a full-fledged Generative AI use case. What truly stood out was his ability to take ownership of the entire project, from understanding the requirements, analyzing data, building complete backend GenAI features,  APIs integration, to implementing a functional frontend, all within just 7 days. That’s a remarkable achievement.

      His grasping ability is commendable with minimal guidance and reference inputs, he was able to quickly understand the requirements and deliver high-quality implementations. He's technically very strong and developed production-ready solution.

      I’m confident that with this level of curiosity, dedication, and learning ability, he will continue to excel in his career and make meaningful contributions to the tech industry.`,
    name: "Srilakshmi Raghunath Rao S",
    designation: "Data Engineer | Management & Governance Analyst",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

export const certCategories = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Courses and certifications in AI, ML, and Deep Learning.",
    color: "#915EFF",
    certs: [
      {
        id: "ml-foundations",
        title: "Machine Learning Foundations",
        provider: "Coursera",
        url: "https://coursera.org/verify/xyz123",
      },
      // ...more AI certs
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud certifications and DevOps skills.",
    color: "#36D399",
    certs: [
      // ...cloud certs
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Web, mobile, and backend certifications.",
    color: "#FBBF24",
    certs: [
      // ...fullstack certs
    ],
  },
  // Add more categories as needed
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// {
//   name: "Job IT",
//   description:
//     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//   tags: [
//     {
//       name: "react",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "restapi",
//       color: "green-text-gradient",
//     },
//     {
//       name: "scss",
//       color: "pink-text-gradient",
//     },
//   ],
//   image: jobit,
//   source_code_link: "https://github.com/",
// },
// {
//   name: "Trip Guide",
//   description:
//     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//   tags: [
//     {
//       name: "nextjs",
//       color: "blue-text-gradient",
//     },
//     {
//       name: "supabase",
//       color: "green-text-gradient",
//     },
//     {
//       name: "css",
//       color: "pink-text-gradient",
//     },
//   ],
//   image: tripguide,
//   source_code_link: "https://github.com/",
// },

const projects = [
  {
    name: "Full-Stack Blog Web-App",
    description:
      "A full-stack blog app with React for the frontend and Appwrite as the backend. The app features efficient user authentication, storage, and database operations. It includes advanced logic for slug capabilities, allowing users to edit and delete their posts via a Real Time Text Editor.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: blogApp,
    website_link: "https://inscribe-vert.vercel.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Resume Builder / Analyzer",
    description:
      "A full-stack blog app with React for the frontend and Appwrite as the backend. The app features efficient user authentication, storage, and database operations. It includes advanced logic for slug capabilities, allowing users to edit and delete their posts via a Real Time Text Editor.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: blogApp,
    website_link: "https://inscribe-vert.vercel.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "ATS Scorer & Analyzer",
    description:
      "AI-powered resume–job alignment engine using custom NLP (spaCy) to highlight skill gaps and quantify ATS match. Delivers personalized feedback across 6+ dimensions with real-time scoring in a React UI. Orchestrations via n8n; secure Node.js APIs with JWT; content managed in Strapi; data on PostgreSQL; integrates Gemini where applicable.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "js", color: "green-text-gradient" },
    ],
    image: genaiResume,
    website_link: "https://ai-resume-analyzer-alpha.vercel.app/",
    source_code_link: "#",
  },
  {
    name: "Inventory Management Dashboard",
    description:
      "Operations-grade dashboard with automated inventory tracking, analytics, audit logs, and role-based access. Next.js + Node.js + Prisma (PostgreSQL) with TypeScript. Deployed across AWS (RDS, EC2, S3, Amplify) to simulate enterprise hosting and cost-efficient scaling.",
    tags: [
      { name: "next", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "ts", color: "green-text-gradient" },
    ],
    image: inventory,
    website_link: "https://github.com/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Genify (React Native)",
    description:
      "Mobile GenAI studio for prompt-based image generation, enhancement, and sharing. Built with React Native + Expo, NativeWind, Gemini APIs, and Neon PostgreSQL. Google authentication and payment gateway support community features and future monetization.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "js", color: "green-text-gradient" },
    ],
    image: genify,
    website_link: "https://github.com/yashraj1706/Genify",
    source_code_link: "https://github.com/yashraj1706/Genify",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "Interactive React app that visualizes and compares sorting algorithms (Merge, Quick avg/worst, Heap, Bubble, Insertion, Selection, Shell ~n^(3/2), Cocktail). Controls for element count and speed, run history with timing deltas, and sort/shuffle/stop actions—making time-complexity trade-offs tangible.",
    tags: [
      { name: "algo", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "js", color: "green-text-gradient" },
    ],
    image: algoVisualizer,
    website_link: "https://algorithm-visualizer-liard.vercel.app/",
    source_code_link: "#",
  },
  {
    name: "Video Call App",
    description:
      " Built a real-time video chat application using WebRTC. The app supports video calls and has an intuitive user interface. It ensures low latency and high-quality video communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rtc",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: VCApp,
    website_link: "https://github.com/",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
