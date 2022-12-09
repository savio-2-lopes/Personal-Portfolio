import { AiOutlineAntDesign } from "react-icons/ai";
import { IProject, ICertification, Service, Skill } from "./types";
import { RiComputerLine } from "react-icons/ri";

import { FiFigma } from "react-icons/fi";
import {
  DiPhp,
  DiJava,
  DiPython,
  DiJavascript,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Front-End Development",
    about:
      "I can develop scalable front-end applications using <b>HTML</b>,<b>CSS</b>, <b>Blade</b> and <b>React.js</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX",
    about: "Studying design and interface development using <b>Figma</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: DiJavascript,
    name: "JavaScript",
    level: "70",
  },
  {
    Icon: DiPython,
    name: "Python",
    level: "60",
  },
  {
    Icon: DiPhp,
    name: "PHP",
    level: "50",
  },
  {
    Icon: DiJava,
    name: "Java",
    level: "40",
  },
];

export const tools: Skill[] = [
  {
    Icon: DiPhotoshop,
    name: "Photoshop",
    level: "60",
  },
  {
    Icon: FiFigma,
    name: "Figma",
    level: "50",
  },
  {
    Icon: DiIllustrator,
    name: "Illustrator",
    level: "40",
  },
];

export const certifications: ICertification[] = [
  {
    id: 0,
    name: "Scrum Foundation Professional Certificate (SFPC™)",
    image_path:
      "/images/certifications/Scrum-Foundation-Professional-Certificate.png",
    category: ["Scrum"],
    description:
      "Scrum Foundation Professional Certificate (SFPC™) - CertiProf (abr de 2022 · Sem data de expiração)",
    key_techs: ["Scrum"],
  },
  {
    id: 1,
    name: "CCNA: Introduction to Network (Cisco Networking Academy)",
    image_path: "/images/certifications/CCNA-Introduction-to-Network.png",
    category: ["Cibersegurança"],
    description:
      "CCNA: Introduction to Network - CertiProf (jun de 2022 · Sem data de expiração)",
    key_techs: ["Cibersegurança"],
  },
  {
    id: 2,
    name: "Programa CiberEducação Cisco Brasil (Cisco Networking Academy)",
    image_path:
      "/images/certifications/Certificado-Programa-CiberEducação-Cisco-Brasil.png",
    category: ["Cibersegurança"],
    description:
      "Programa CiberEducação Cisco Brasil - Cisco Networking Academy (ago de 2022 · Sem data de expiração)",
    key_techs: ["Cibersegurança"],
  },
  {
    id: 3,
    name: "Cloud Security (Cisco Networking Academy)",
    image_path: "/images/certifications/Cloud-Security.png",
    category: ["Cibersegurança"],
    description:
      "Cloud Security - Cisco Networking Academy (jan de 2022 · Sem data de expiração)",
    key_techs: ["Cibersegurança"],
  },
  {
    id: 4,
    name: "Fundamentos do design da experiência do usuário (Google)",
    image_path:
      "/images/certifications/Fundamentos-do-design-da-experiência-do-usuário.jpeg",
    category: ["UX/UI"],
    description:
      "Fundamentos do design da experiência do usuário - Google (mar de 2022 · Sem data de expiração)",
    key_techs: ["UX/UI"],
  },

  {
    id: 5,
    name: "Desenvolvimento Web Avançado 2022 com Laravel e Vue.js (Udemy)",
    image_path:
      "/images/certifications/Desenvolvimento-Web-Avançado-2022-com-php-laravel-e-vue.js.png",
    category: ["Laravel"],
    description:
      "Desenvolvimento Web Avançado 2022 com Laravel e Vue.js - Udemy (set de 2022 · Sem data de expiração)",
    key_techs: ["Laravel"],
  },

  {
    id: 6,
    name: "Laravel - Blade Templates (TreinaWeb)",
    image_path: "/images/certifications/Laravel-Blade-Templates.png",
    category: ["Laravel"],
    description:
      "Laravel: Blade Templates - TreinaWeb (set de 2022 · Sem data de expiração)",
    key_techs: ["Laravel"],
  },
  {
    id: 7,
    name: "Laravel - Eloquent ORM (TreinaWeb)",
    image_path: "/images/certifications/Laravel-Eloquent-ORM.png",
    category: ["Laravel"],
    description:
      "Laravel: Eloquent ORM TreinaWeb (set de 2022 · Sem data de expiração)",
    key_techs: ["Laravel"],
  },
  {
    id: 8,
    name: "Laravel - Fundamentos (TreinaWeb)",
    image_path: "/images/certifications/Laravel-Fundamentos.png",
    category: ["Laravel"],
    description:
      "Laravel: Fundamentos - TreinaWeb (ago de 2022 · Sem data de expiração)",
    key_techs: ["Laravel"],
  },
  {
    id: 9,
    name: "Ignite Trilha ReactJS (Rocketseat)",
    image_path: "/images/certifications/Ignite-Trilha-ReactJS.png",
    category: ["React"],
    description:
      "Ignite Trilha ReactJS - Rocketseat (fev de 2022 · Sem data de expiração)",
    key_techs: ["ReactJS"],
  },
  {
    id: 10,
    name: "Iniciar o processo de design de UX: criar empatia, definir e idealizar (Google)",
    image_path:
      "/images/certifications/Iniciar-o-processo-de-design-de-UX-criar-empatia-definir-e-idealizar.jpeg",
    category: ["UX/UI"],
    description:
      "Iniciar o processo de design de UX: criar empatia, definir e idealizar - Google (ago de 2022 · Sem data de expiração)",
    key_techs: ["UX/UI"],
  },
  {
    id: 11,
    name: "M001: MongoDB Basics (MongoDB Academy)",
    image_path: "/images/certifications/M001-MongoDB-Basics.jpeg",
    category: ["Mongo"],
    description:
      "M001: MongoDB Basics - MongoDB Academy (dez de 2021 · Sem data de expiração)",
    key_techs: ["Mongo"],
  },
  {
    id: 12,
    name: "Network Security (Cisco Networking Academy)",
    image_path: "/images/certifications/Network-Security.png",
    category: ["Cibersegurança"],
    description:
      "Network Security - Cisco Networking Academy (jul de 2022 · Sem data de expiração)",
    key_techs: ["Cibersegurança"],
  },
  {
    id: 13,
    name: "Trilha Especializar do Discover (Rocketseat)",
    image_path: "/images/certifications/Trilha-Especializar-do-Discover.png",
    category: ["React"],
    description:
      "Trilha Especializar do Discover - Rocketseat (jul de 2022 · Sem data de expiração)",
    key_techs: ["React"],
  },
  {
    id: 14,
    name: "Fundamentos Na Lei Geral De Proteção De Dados LGPDF™ (CertiProf)",
    image_path:
      "/images/certifications/Fundamentos-Na-Lei-Geral-De-Proteção-De-Dados.png",
    category: ["LGPD"],
    description:
      "Fundamentos Na Lei Geral De Proteção De Dados LGPDF™ - CertiProf (mar de 2022 · Sem data de expiração)",
    key_techs: ["LGPD"],
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "Spotify-Clone-with-Next",
    image_path: "/images/projects/Spotify-Clone-with-Next.JS.gif",
    deployed_url: "https://spotify-clone-next.netlify.app/",
    github_url: "https://github.com/savio-2-lopes/Spotify-Clone-with-Next.JS",
    category: ["react"],
    description:
      "Clone of the Spotify platform, developed using Next.JS, Tailwind.CSS and the Spotify API, to obtain playlists from the logged in user.",
    key_techs: ["React"],
  },
  {
    id: 1,
    name: "UI-Clone-Twitter",
    image_path: "/images/projects/UI-Clone-Twitter.gif",
    deployed_url: "https://tsclone-react-twitter.netlify.app/",
    github_url: "https://github.com/savio-2-lopes/UI-Clone-Twitter",
    category: ["react"],
    description: "Twitter Responsive Clone UI with ReactJS and Typescript",
    key_techs: ["React"],
  },

  {
    id: 2,
    name: "Simple-Flask-Encryption-Ciphers",
    image_path: "/images/projects/Simple-Flask-Encryption-Ciphers.gif",
    deployed_url: "#",
    github_url:
      "https://github.com/savio-2-lopes/Simple-Flask-Encryption-Ciphers",
    category: ["python"],
    description: "Simple site Encryption/Decryption using Flask and Tailwind.",
    key_techs: ["python"],
  },

  {
    id: 3,
    name: "Search-Methods-AI-Flask",
    image_path: "/images/projects/Search-Methods-AI-Flask.gif",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Search-Methods-AI-Flask",
    category: ["python"],
    description:
      "Implementation of search methods contemplating Graphical Interface, Amplitude Methods, Limited Depth, Depth, Interactive Deepening, Bidirectional, Uniform Costs, Greedy and A*.",
    key_techs: ["python"],
  },

  {
    id: 4,
    name: "Quiz-Imersao-React",
    image_path: "/images/projects/Quiz-Imersao-React.gif",
    deployed_url: "https://quiz-imersao-react-savio-2-lopes.vercel.app/",
    github_url: "https://github.com/savio-2-lopes/Quiz-Imersao-React",
    category: ["react"],
    description:
      "Application developed during the 2nd edition of Immersion React Next.JS.",
    key_techs: ["react"],
  },

  {
    id: 5,
    name: "Flux-Fin",
    image_path: "/images/projects/Flux-Fin.gif",
    deployed_url: "!#",
    github_url: "https://github.com/savio-2-lopes/Flux-Fin",
    category: ["express", "node", "react"],
    description: "Desktop project organization and management system",
    key_techs: ["Express", "Node", "Mongo", "React"],
  },

  {
    id: 6,
    name: "Proffy Web",
    image_path: "/images/projects/Proffy.png",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Proffy",
    category: ["react"],
    description:
      "Web & Mobile project developed with React + TypeScript React and React Native during the 2nd NLW by @Rocketseat, focused on connecting private tutors with interested students.",
    key_techs: ["react"],
  },

  {
    id: 7,
    name: "Proffy Mobile",
    image_path: "/images/projects/ProffyMobile.png",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Proffy",
    category: ["react native"],
    description:
      "Web & Mobile project developed with React + TypeScript React and React Native during the 2nd NLW by @Rocketseat, focused on connecting private tutors with interested students.",
    key_techs: ["react native"],
  },

  {
    id: 8,
    name: "Moveit",
    image_path: "/images/projects/MoveIt.gif",
    deployed_url: "https://move-it-savio-2-lopes.vercel.app/",
    github_url: "https://github.com/savio-2-lopes/moveit",
    category: ["react"],
    description:
      "Web & Mobile project developed with React + TypeScript React and React Native during the 2nd NLW by @Rocketseat, focused on connecting private tutors with interested students.",
    key_techs: ["react"],
  },

  {
    id: 9,
    name: "Letmeask",
    image_path: "/images/projects/Letmeask.gif",
    deployed_url: "https://nlwtogether-813ac.web.app/",
    github_url: "https://github.com/savio-2-lopes/Letmeask",
    category: ["react"],
    description:
      "Platform to create Q&A (question and answer) rooms. Project developed during NLW #6 by @Rocketseat.",
    key_techs: ["react"],
  },

  {
    id: 10,
    name: "Ig.News",
    image_path: "/images/projects/Ig.News.gif",
    deployed_url: "https://ig-news-onx9bvokw-savio-2-lopes.vercel.app/",
    github_url: "https://github.com/savio-2-lopes/Ig.News",
    category: ["react"],
    description:
      "Simple blog using Stripe API to control payment and save data in FaunaDB.",
    key_techs: ["react"],
  },

  {
    id: 11,
    name: "Happy Web",
    image_path: "/images/projects/Happy.gif",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Happy",
    category: ["react"],
    description:
      "Web & Mobile application to find orphanages and facilitate visits. Developed during @Rocketseat's 3rd NLW.",
    key_techs: ["react"],
  },

  {
    id: 12,
    name: "Happy Mobile",
    image_path: "/images/projects/HappyMobile.png",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Happy",
    category: ["react native"],
    description:
      "Web & Mobile application to find orphanages and facilitate visits. Developed during @Rocketseat's 3rd NLW.",
    key_techs: ["react native"],
  },
  {
    id: 13,
    name: "Go-Realtime-Chat",
    image_path: "/images/projects/Go-Realtime-Chat.gif",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Go-Realtime-Chat",
    category: ["go", "react"],
    description: "Simple realtime chat using Golang, Websockets and React.js",
    key_techs: ["go", "react"],
  },

  {
    id: 14,
    name: "Google-Drive-Clone-Semana-Javascript-Expert-05",
    image_path:
      "/images/projects/Google-Drive-Clone-Semana-Javascript-Expert-05.gif",
    deployed_url: "https://gdrive-webapp-ew.herokuapp.com/",
    github_url:
      "https://github.com/savio-2-lopes/Google-Drive-Clone-Semana-Javascript-Expert-05",
    category: ["node"],
    description:
      "Google Drive clone, in development during JS Expert Week 5, taught by @ErickWendel",
    key_techs: ["node", "materialize"],
  },

  {
    id: 15,
    name: "Github-Explorer",
    image_path: "/images/projects/Github-Explorer.gif",
    deployed_url: "https://github-explorer-rose.vercel.app/",
    github_url: "https://github.com/savio-2-lopes/Github-Explorer",
    category: ["react"],
    description:
      "GitHub Explorer is a project to query Github repositories in a simple and detailed way, developed during Ignite's React trail",
    key_techs: ["react"],
  },

  {
    id: 16,
    name: "Event-Platform-Ignite-Lab",
    image_path: "/images/projects/Event-Platform-Ignite-Lab.gif",
    deployed_url: "https://event-platform-ignite-lab-2-one.vercel.app/",
    github_url: "https://github.com/savio-2-lopes/Event-Platform-Ignite-Lab",
    category: ["react"],
    description:
      "Event web platform made with React, Typescript, GraphQL, GraphCMS developed during @Rocketseat's Ignite Lab 02",
    key_techs: ["react", "tailwindCSS"],
  },

  {
    id: 17,
    name: "DTMoney",
    image_path: "/images/projects/DTMoney.gif",
    deployed_url: "https://dtmonie-frontend.netlify.app/",
    github_url: "https://github.com/savio-2-lopes/DTMoney",
    category: ["react"],
    description:
      "Simple IT Professional Management project, developed using React.js with Typescript during Ignite's React track, provided by @Rocketseat.",
    key_techs: ["react"],
  },

  {
    id: 18,
    name: "Development-CRUD-Laravel-Framework",
    image_path: "/images/projects/Development-CRUD-Laravel-Framework.gif",
    deployed_url: "#",
    github_url:
      "https://github.com/savio-2-lopes/Development-CRUD-Laravel-Framework",
    category: ["php"],
    description:
      "Development CRUD (CREATE, READ, UPDATE and DELETE) using the Laravel Framework, base on @treinaweb course",
    key_techs: ["php", "bootstrap", "mysql"],
  },

  {
    id: 19,
    name: "Development-Frontend-Blade-Laravel-Framework",
    image_path:
      "/images/projects/Development-Frontend-Blade-Laravel-Framework.gif",
    deployed_url: "#",
    github_url:
      "https://github.com/savio-2-lopes/Development-Frontend-Blade-Laravel-Framework",
    category: ["php"],
    description:
      "Development Fronted using Blade Templates of Laravel Framework, base on @treinaweb course",
    key_techs: ["php", "bootstrap"],
  },

  {
    id: 20,
    name: "Dev.Finaces",
    image_path: "/images/projects/Dev.Finaces.gif",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/Dev.Finaces",
    category: ["react"],
    description:
      "Project developed during the Discover Marathon by @Rocketseat",
    key_techs: ["react", "html"],
  },

  {
    id: 21,
    name: "Be The Hero Web",
    image_path: "/images/projects/BeTheHero.png",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/bethehero",
    category: ["react", "mongo"],
    description:
      "Be The Hero is a React & React Native project that aims to connect people who want to make monetary contributions to NGOs. Developed during the 11th Omnistack Week. by @Rocketseat",
    key_techs: ["react", "mongo"],
  },

  {
    id: 22,
    name: "Be The Hero Mobile",
    image_path: "/images/projects/BeTheHeroMobile.jpeg",
    deployed_url: "#",
    github_url: "https://github.com/savio-2-lopes/bethehero",
    category: ["react native"],
    description:
      "Be The Hero is a React & React Native project that aims to connect people who want to make monetary contributions to NGOs. Developed during the 11th Omnistack Week. by @Rocketseat",
    key_techs: ["react native"],
  },
];
