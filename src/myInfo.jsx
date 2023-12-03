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
    name: 'Full Stack',
    icon: 'lni lni-code',
    title: 'MongoDB',
    description:
      "Expertise in database design, document modeling, and building efficient queries. ",
    skills: [
      {
        icon: 'lni lni-mongodb', 
        title: 'MongoDB',
      },
      {
        icon: 'lni lni-database',
        title: 'database',
      },
      {
        icon: 'lni lni-nodejs',
        title: 'Node.js',
      },
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Software',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-adobe',
        title: 'adobe',
      },
      {
        icon: 'lni lni-code',
        title: 'Code',
      },
      {
        icon: 'lni lni-sketch',
        title: 'Sketch'
      },
     
      
    ],
  },
  {
    name: 'brands',
    icon: 'lni lni-code',
    title: 'Brands',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas diam lorem, tempus at dapibus vitae, vehicula sit amet dui. Fusce at libero id massa ornare molestie sed eu tellus.",
    skills: [
      {
        icon: 'lni lni-pinterest',
        title: 'Pinterest',
      },
      {
        icon: 'lni lni-crop',
        title: 'Crop',
      },
      
    ],
  },
  
];

//achiements in a number counter animation
const achievements = [
  { word: 'bullshit', value: 100, unit: '%' },
  { word: 'finished projects', value: 3, unit: '' },
  { word: 'experience', value: 20, unit: ' years' },
];



// project urls
const projectData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    demoUrl: 'https://wallpaperaccess.com/full/530366.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'https://wallpapercave.com/wp/wp1933134.jpg' 
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    demoUrl: 'https://c4.wallpaperflare.com/wallpaper/43/399/700/photography-camera-birds-animals-wallpaper-preview.jpg' 
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    demoUrl: 'src/assets/images/Jonathan Dominion Template.gif' 
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
