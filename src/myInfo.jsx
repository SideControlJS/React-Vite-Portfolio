//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImageUrl = 'https://i.pinimg.com/originals/b9/c3/0f/b9c30faa25901357fb75b893705adcad.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Jesse',
  lastname: 'Lare',
// Enter as url a link where your resume can be downloaded ( dropbox, OneDrive, ect )
  url: 'https://www.google.com',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'Web Development...',
  'Lighting Controls...',
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/jesselare',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/SideControlJS',
  },
];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Frontend Proficiencies',
    icon: 'lni lni-code',
    title: 'Frontend Proficiencies',
    description:
      "HTML, CSS, JavaScript, jQuery, React, Bootstrap, Tailwind, and more.",
    skills: [
      {
        icon: 'lni lni-html5', 
        title: 'HTML5',
      },
      {
        icon: 'lni lni-css3',
        title: 'CSS3',
      },
      {
        icon: 'lni lni-javascript',
        title: 'javascript',
      },
      {
        icon: 'lni lni-react',
        title: 'react',
      },
    ],
  },
  {
    name: 'Backend Proficiencies',
    icon: 'lni lni-code',
    title: 'Backend Proficiencies',
    description:
    "Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose, API development, and more.",
    skills: [
      {
        icon: 'lni lni-nodejs',
        title: 'node.js',
      },
      {
        icon: 'lni lni-database',
        title: 'database',
      },
      {
        icon: 'lni lni-code',
        title: 'code',
      },
      {
        icon: 'lni lni-cloud-download',
        title: 'cloud download',
      },
     
      
    ],
  },
  {
    name: 'lighting',
    icon: 'lni lni-code',
    title: 'Lighting Controls - Programming/Design',
    description:
    "Advanced Lighting Controls Programming, Commissioning, and Integration. Ability to program and commission a wide variety of lighting control systems including Lutron, Pharos, and more.",
    skills: [
      {
        icon: 'lni lni-bulb',
        title: 'Lighting',
      },
      {
        icon: 'lni lni-laptop',
        title: 'Programming & Design',
      },
      {
        icon: 'lni lni-bolt-alt',
        title: 'electrical',
      },
      {
        icon: 'lni lni-power-switch',
        title: 'power switch',
      },
      
    ],
  },
  
];

//achiements in a number counter animation
const achievements = [
  { word: 'UCF Full Stack Bootcamp', value: 99, unit: '%' },
  { word: 'finished projects', value: 3, unit: '' },
  { word: 'experience', value: 1, unit: ' year' },
];



// project urls
const projectData = [
  {
    title: 'Note Taker App',
    description: 'Note Taker App is a simple application that allows the user to create, save, and delete notes. The application uses an Express.js back end and saves and retrieves note data from a JSON file.',
    demoUrl: 'https://jl-note-taker-bdab7ee7b58b.herokuapp.com/' 
  },
  {
    title: 'Weather Dashboard',
    description: 'The Weather Dashboard is an intuitive and user-friendly app designed to provide the user with current weather conditions and a 5-day forecast for any city in the world. The app utilizes the OpenWeather API to retrieve weather data for cities.',
    demoUrl: 'https://sidecontroljs.github.io/me-weather/' 
  },
  {
    title: '"Grab My Password"',
    description: 'An app to store your password for any website you want.',
    demoUrl: 'https://grab-my-password-23e7faf05060.herokuapp.com/' 
  },
  {
    title: '"Reel-Tracks"',
    description: 'The goal of this project was to develop an app that allowed users to search for albums from their favorite movies.',
    demoUrl: 'https://ricky-sama.github.io/Reel-Tracks/' 
  },
  
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `My name is Jesse Lare. With a decade of experience in the lighting industry, I have honed my expertise in creating sophisticated lighting control systems that enhance and transform commercial spaces. Now, I'm expanding my craft into the realm of full stack web development. My unique blend of skills enables me to offer comprehensive solutions that bridge the gap between physical infrastructure and digital interfaces. 
    `,
  power_slogan: `"There is no losing - you either win or learn."`,
};

// For contact form: You need to make an account on emailjs.com
// There you can choose a free tier ( 200 emails per month )
// In your account settings you can see 'serviceID, templateID and userID. 
// Fill them here and it will automatically work. 

const emailConfig = {
  serviceID: 'service_rrw05nb',
  templateID: 'template_w8nj8te',
  userID: 'bTD3lWAARkkbGFXkn',
};

export {
  backgroundImageUrl,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  achievements,
  projectData,
  aboutMeText,
  emailConfig,
};
