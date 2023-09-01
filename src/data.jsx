import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';





import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: `Ro'zimuhammad`,
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Karimov',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '16 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Uzbek',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Andijon',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+998982709877',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'tungiboriar094@gmail.com',
  },

  {
    id: 9,
    title: 'Telegram : ',
    description: '@Fakey_Soul',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Japanese ,  English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '12+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '4+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '4+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022-2023',
    title: 'Frontend <span> Developer </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022- ... ',
    title: 'Seleksiya <span>Qishloq xojaligi va agrotexnalogiyalar instituti </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '95',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '100',
  },
  
  {
    id: 8,
    title: 'React',
    percentage: '68',
  },
];

export const portfolio = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/90/3d/38/903d382429c82408a28104a8dedc3bdd.jpg",
    title: 'Home-Shop',
    
    img_url : "https://home-shop-three.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },
  {
    id: 2,
    img: "https://i.pinimg.com/564x/de/36/6a/de366a1ed765b02547776950d8157690.jpg",
    title: 'Portfolio-1',
    
    img_url : "https://portfolio-rsae.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },

  {
    id: 3,
    img: "https://i.pinimg.com/originals/00/16/68/0016684c2b8e772405d8bac8ab8d3950.jpg",
    title: 'Login-page-1',
    
    img_url : "https://registionpage.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },
  {
    id: 4,
    img: "https://i.pinimg.com/originals/eb/12/fc/eb12fc345906b1a3cef9c39fe4732da9.jpg",
    title: 'Dish-Shop-1',
    
    img_url : "https://dish-shop.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },
  {
    id: 5,
    img: "https://i.pinimg.com/originals/51/14/3c/51143c14b33fe1e60e05178610393cb0.jpg",
    title: 'Dish-Shop-1',
    
    img_url : "https://conveter.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },
  {
    id: 6,
    img: "https://i.pinimg.com/originals/29/30/96/29309648353a7df8d63da769f1f48897.jpg",
    title: 'Login-page-2',
    
    img_url : "https://astonishing-sprite-30ff9c.netlify.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },
  {
    id: 7,
    img: "https://i.pinimg.com/originals/10/23/f3/1023f384facc8605706fd67460ac833f.jpg",
    title: 'Css-page-2',
    
    img_url : "https://project-13-rho.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  },
  ,
  {
    id: 8,
    img: "https://i.pinimg.com/564x/e7/21/72/e72172a8d14af80f51288e72ad3732b7.jpg",
    title: 'Animes Online.',
    
    img_url : "https://animes-online-phi.vercel.app/",
    details: [
      
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Figma',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
    ],
  }

];
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(22, 5%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
