/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "naufaalpane",
  title: "Hi all, I'm Naufal",
  subTitle: emoji(
    "A passionate Fullstack Software Developer / Back end Engineer / Front end Engineer 🧑‍💻 having an experience of building Web and Mobile applications with intrest on Pattern Software Design."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1eV0jyrWcX0_FFTRyTQ0bQ4jWnPn-mBex?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/naufaalpane",
  linkedin: "https://www.linkedin.com/in/kharismanaufal/",
  gmail: "kharisma.naufal@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  stackoverflow: "https://stackoverflow.com/users/9454613/naufaalpane",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO LIKES TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop robust applications for your web and mobile platforms"),
    emoji("⚡ Clean code enthusiast that likes to implement software design pattern"),
    emoji(
      "⚡ Integration of third party services such as Firebase/AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "MySQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL Database",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Katalon",
      fontAwesomeClassname: "fab fa-dart"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bina Nusantara University",
      logo: require("./assets/images/BINUSLogo.png"),
      subHeader: "Bachelor in Computer Science",
      duration: "September 2018 - December 2020",
      desc: "Skills I acquired",
      descBullets: [
        "Engineering",
        "Project Management",
        "Problem Solving",
        "Analytical Skills",
        "Communication",
        "Presentations",
        "Web Development",
        "Mobile Application Development",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Fullstack", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "30%"
    },
    {
      Stack: "SQL Query",
      progressPercentage: "20%"
    },
    {
      Stack: "Deployment",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Engineer",
      company: "3Dolphins AI",
      companylogo: require("./assets/images/3Dolphins_logo.png"),
      date: "June 2023 – Present",
      desc: "Involved in developing 3Dolphins SRM Website Using Generative AI and 3Dolphins SRM Website",
      descBullets: [
        "Handle the Frontend and Backend for Enhancements and Bug Fixing",
        "Collaborating and Integrating 3Dolphins SRM Website using API",
        "Ehancement and Bug Fixing for Web Development",
        "Collaborate on developing 3Dolphin's Generative AI",
        "Deploying System and Software to server",
        "Handle data using ORM (Object-Relational Mapping)",
        "Developed a java program to split big data into chunks"
      ]
    },
    {
      role: "Backend Developer",
      company: "DOKU",
      companylogo: require("./assets/images/DOKU_logo.png"),
      date: "October 2022 – Feb 2023",
      desc: "Participate in DOKU Academy Program",
      descBullets: [
        "Collaborate to create transaction service using DOKU's payment gateway for capstone project",
        "Developed a POS system mainly for backend use for mini project",
        "Learned Java Springboot for API creation",
        "Learned Docker for building my application locally",
        "Learned AWS EC2 and Kubernetes for deployment",
        "Learned Katalon for automation testing comprehensively",
        "Learned soft skill (ex. communication, teamwork, leadership)"
      ]
    },
    {
      role: "Fullstack Engineer Intern",
      company: "IDStar Cipta Teknologi",
      companylogo: require("./assets/images/IDStar_logo.png"),
      date: "September 2021 – February 2022",
      desc: "Involved in developing PT Orbit Nasional Edukasi on ONE Talent Mobile Application",
      descBullets: [
        "Developing mobile application using Ionic Framework, with the base of AngularJS Framework to create new page and update existing pages for either new a feature or a new redesigned page based on UI/UX designer in Figma",
        "Managed integration from backend to frontend using REST API with HTTP Client in Angular to instantiate HTTP Request Methods, and Ionic Events that is Subscribe to handle the data",
        "Implementing logic for frontend use for example, making animations, create accordion (not available in older versions), render time, responsiveness"
      ]
    },
    {
      role: "Software Test Enginner Intern",
      company: "WhiteOpen Teknologi",
      companylogo: require("./assets/images/WhiteOpen_logo.webp"),
      date: "February 2021 – June 2021",
      desc: "Involved in PT TMIIN Toyota, PT Surya Mandiri Group E-POS, and PT Whiteopen Teknologi HR Help Desk project to Create and Execute",
      descBullets: [
        "Test Scripts on developing website for Manual Testing using Microsoft Excel",
        "Test Scripts on developing website, for Automation Testing using Katalon Studio",
        "Test Scripts on MySQL query for Manual Testing using Microsoft Excel",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Blockchain and API Development to Improve Relational Database Integrity and System Interoperability",
      subtitle:
        "Thesis published on international paper: “Blockchain and API Development to Improve Relational Database Integrity and System Interoperability” (7th International Conference on Computer Science and Computational Intelligence 2022).",
      image: require("./assets/images/procedia_international_paper.jpg"),
      imageAlt: "International Paper Cover",
      footerLink: [
        {
          name: "International Paper",
          url: "https://www.sciencedirect.com/science/article/pii/S1877050922022001"
        }
      ]
    },
    {
      title: "DOKU Completion Certificate",
      subtitle:
        "Participated in DOKU Acedemy bootcamp.",
      image: require("./assets/images/DOKU_Academy_certification.jpeg"),
      imageAlt: "DOKU Academy Completion Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.linkedin.com/in/kharismanaufal/overlay/1635518431002/single-media-viewer/?profileId=ACoAADK7xO0BWHS0SOQNNwx3qg8kA6Sk8Fpmis0"
        }
      ]
    },
    {
      title: "EF Standard English Test 50",
      subtitle:
        "Participated on EF English Test 50 in July 14th 2021.",
      image: require("./assets/images/EF_logo.png"),
      imageAlt: "EF Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.efset.org/cert/Zc7Loz"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
