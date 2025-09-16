// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';




// Education Section Logo's
import vbslogo from './assets/Education_logo/images (1).png'
import adglogo from './assets/Education_logo/images.jpeg'

// Project Section Logo's
import FundFlo from './assets/Screenshot 2025-09-05 171038.png'
import Markit from './assets/Screenshot 2025-09-05 171016.png'
import WindStream from './assets/Screenshot 2025-05-13 152955.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    //   { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    //   { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    //   { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    //   { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    //   { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
    //   { name: 'C', logo: cLogo },
    //   { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    //   { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  
  export const education = [
    // {
    //   id: 0,
    //   img: glaLogo,
    //   school: "GLA University, Mathura",
    //   date: "Sept 2022 - July 2024",
    //   grade: "7.81 CGPA",
    //   desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    //   degree: "Master of Computer Applications - MCA",
    // },
    {
      id: 0,
      img: adglogo,
      school: "Dr.Akhilesh Das Gupta Institute of Professional Studies, Delhi",
      date: "Dec 2021 - June 2025",
      grade: "8.05 CGPA",
      desc: "I have completed my Bachelor of Technology in Information Technology from Dr. Akhilesh Das Gupta Institute of Professional Studies. During my academic journey, I developed a strong foundation in areas such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Operating Systems, and Software Engineering. I also worked on projects involving full-stack development and API integrations, which enhanced my practical knowledge. In addition, I actively participated in coding contests, workshops, and technical events that sharpened my problem-solving abilities and technical expertise.",
      degree: "Bachelor of Technology - B.Tech (Information Technology)",
    },
    {
      id: 1,
      img: vbslogo,
      school: "Vidya Bharati School, Rohini",
      date: "May 2021",
      grade: "81%",
      desc: "I completed my class 12 education from Vidya Bharati School, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 2,
      img: vbslogo,
      school: "Vidya Bharati School, Rohini",
      date: "March 2019",
      grade: "86%",
      desc: "I completed my Class 10 education from Vidya Bharati School, Rohini, Delhi under the CBSE board, with a focus on Science and Computer Applications. My secondary education gave me an early interest in technology and problem-solving, which motivated me to pursue a career in the IT field.",
      degree: "CBSE(X) - Science with Computer Applications",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Funfflo - Crowd Funding Platform",
      description:
        "FundFlo is a front-end crowdfunding platform that enables companies to pitch their innovative ideas to potential investors. The platform facilitates seamless interaction where investors can explore various projects and contribute funding, fostering a collaborative environment for business growth and investment opportunities.",
      image: FundFlo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Firebase"],
      github: "https://github.com/RaghavSingh01/FundFlo",
      webapp: "https://fund-flo.netlify.app/",
    },
    {
      id: 1,
      title: "MarkIt!",
      description:
        "This project is an online Markdown editor built with React.js that allows users to write and preview Markdown files in real-time. It provides a simple and intuitive interface for creating and formatting Markdown content efficiently, showcasing skills in front-end development and user experience design. It also provides information on how to use it for beginers.",
      image: Markit,
      tags: ["React JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/RaghavSingh01/MarkIT",
      webapp: "https://markdownbyraghav.netlify.app/",
    },
    {
      id: 2,
      title: "WindStream",
      description:
        "WindStream is a centralized task management platform designed to streamline team collaboration. It allows an admin to efficiently assign tasks to team members, manage team composition by adding or removing members, and oversee various project activities to ensure smooth workflow and productivity.",
      image: WindStream,
      tags: ["React JS", "Node.js", "NPM", "Validation","Node.js", "MongoDB", "Express"],
      github: "https://github.com/RaghavSingh01/WindStream",
      webapp: "",
    },
    
   
   
    
      
  ];  