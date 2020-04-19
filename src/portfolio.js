
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi All I'm Sameer Moses",
  subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building Web applications with  JavaScript and Reactjs and Automation Testing using Selenium, Protractor and some other cool libraries and frameworks") ,
  resumeLink: "https://drive.google.com/uc?id=14PD8NdXBDuD9COz2-OZ6XMb1OJwgIemT"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/SameerMosesMurala/",
  linkedin: "https://www.linkedin.com/in/sameer-moses-murala-302b40179/",
  gmail: "sameer.moses160895@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A CURIOUS SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Netlify"),
    emoji("⚡ Design, build and deploy effective test automation solutions")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5",
      url:"https://drive.google.com/uc?id=13zshobZGRJSvCs7n1ZP2lVW8GkyDuFmv"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
      url:"https://drive.google.com/uc?id=11vWrokFNy3_A7Ho_cRaFR2MPgN8QJMdD"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      url:"https://drive.google.com/uc?id=1iRqw8Nioi6EDRQLICOxqHqlmrFq2NZLS"
    },
    
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
      url:"https://drive.google.com/uc?id=1JdbqYYCuUMWrqMEWkEPAAOHnXgAWutii"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
      url:"https://drive.google.com/uc?id=1NAb3cT9hzPmKpJD1LKJKiCIRrZ2pQe5p"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    {
      skillName: "Apachespark",
      fontAwesomeClassname: "fab fa-aws",
      url:"https://drive.google.com/uc?id=1nhUxaRjc6nz-BABuow-neJHAWObBq1SF"
    },
    {
      skillName: "Microsoft",
      fontAwesomeClassname: "fab fa-windows",
      url:"https://drive.google.com/uc?id=1UYijWddaJ-Ovy4VCmfqFy-G7vfh2bEiT"
    },
    {
      skillName: "TFS",
      fontAwesomeClassname: "fab fa-npm",
      url:"https://drive.google.com/uc?id=1f_6P_rElmmLV1VsZkNmI5D-OF_cnOkyZ"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fas fa-infinity",
      url:"https://drive.google.com/uc?id=1_px8quawXeJyrRceRp_LVARmVM47odcE"
    },
    {
      skillName: "MS-SQL",
      fontAwesomeClassname: "fas fa-database",
      url:"https://drive.google.com/uc?id=1P41KwtIEiQv8rh6z4XKYOAESuiEGUsGA"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
      url:"https://drive.google.com/uc?id=17oxbSj-TUTwxMXqcb_sPD0Y5WggUSmvA"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira",
      url:"https://drive.google.com/uc?id=1TTOHvRVlKNcW-GW0YiaBIzY6ZZXvFl0s"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-square",
      url:"https://drive.google.com/uc?id=1FqWeHn_Md1tE5IS1IuYCvUDyYBKX8PPv"
    },
    
    
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      url:"https://drive.google.com/uc?id=1svX2NluHqqO4EbdQefn5A5H4d4psR2E0"
    },
    {
      skillName: "Netlify",
      fontAwesomeClassname: "fab fa-aws",
      url:"https://drive.google.com/uc?id=1_2-R2Ul6gAgqb4wJFq4_hstxt7jgYLk-"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fab fa-aws",
      url:"https://drive.google.com/uc?id=1dKT8CevJLYIddnJMuSsPL_kXMuFYsQ5R"
    },
    {
      skillName: "Protractor",
      fontAwesomeClassname: "fab fa-aws",
      url:"https://drive.google.com/uc?id=1soPxoAVnH1QYr-HqIU_QEbggnSqPaZSz"
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "fab fa-aws",
      url:"https://drive.google.com/uc?id=1ipwoHgJFT8MvE0p7tPhQZILEXbeYcBIB"
    }
    

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "JavaScript Essential Training",
      description: "",
      image:
        "https://drive.google.com/uc?id=1rawyE5SL0l6YvenbUuL9SowaKNuSqmG8",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/uc?id=1rzHuFE3v5Xd7CGsWSU5m9Q1uZoJpa6Z5" }
      ]
    },
    {
      title: "Azure Devops Essential Training",
      description: "",
      image:
        "https://drive.google.com/uc?id=1rawyE5SL0l6YvenbUuL9SowaKNuSqmG8",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/uc?id=15OC14Hp55ybPj3kTb3n5le42GHO-JXUx" }
      ]
    },
    {
      title: "Learning JIRA Software",
      description: "",
      image:
        "https://drive.google.com/uc?id=1rawyE5SL0l6YvenbUuL9SowaKNuSqmG8",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/uc?id=18sO9ZyGvnfoqDwZ9TpWgZYFHePaPFmEq" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff. i love to write and teach others what i have learned",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      image: "https://miro.medium.com/max/400/1*pYHONrA_3QM4dgtBSKrYWQ.jpeg",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      image: "https://miro.medium.com/max/1280/1*o08b2PW-1PVs94riZuhNMA.png",
      title: "Why REACT Is The Best?",
      description: "React is a JavaScript library for building the user interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      image: "https://miro.medium.com/max/400/1*pYHONrA_3QM4dgtBSKrYWQ.jpeg",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
    },
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      image: "https://miro.medium.com/max/400/1*pYHONrA_3QM4dgtBSKrYWQ.jpeg",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min."
    }
  ]
};

//projectsgithub

const projectsgithubSection = {

  title: "Projects",
  subtitle: "With Love for Developing cool stuff",

  blogs: [
    {
      appurl:"https://sameercovid19map.netlify.app/",
      url: "https://github.com/SameerMosesMurala/COVID19MAP",
      image: "https://drive.google.com/uc?id=1RhrSfhl-fgm13uwZAb6_Wi_C3X61dBw-",
      title: "COVID 19 DashBoard Map",
      description: "A single page application to track COVID19 made using React with Gatsby and Leaflet"
    },
    {
      appurl:"https://sameerburgerbuilder.netlify.com/",
      url: "https://github.com/SameerMosesMurala/BurgerBuilder-App",
      image: "https://drive.google.com/uc?id=1-ET9Brf1fRkmeynlMkLmavIi6bf0r8Xz",
      title: "Burger Builder App",
      description: "A Food Ordering App developed using React with Redux and Firebase"
    },
    {
      url: "https://github.com/SameerMosesMurala/WebPortfolio",
      image: "https://drive.google.com/uc?id=1j8xouv-nqy-OQFkJQFPWMU5CPp3n7_pO",
      title: "Web Portfolio Builder",
      description: "A web portfolio buider using React."
    },
    {
      url: "https://github.com/SameerMosesMurala/Big-Data-Graph-Processing-on-Spark",
      image: "https://drive.google.com/uc?id=1ZXsUzlQTQHULqVDRGbpv7BK24djpiS_G",
      title: "Apache Spark",
      description: "Big Data Graph processing using Spark."
    },
    {
      url: "https://github.com/SameerMosesMurala/-Max-Connect4-game",
      image: "https://drive.google.com/uc?id=172EzQHvRvPq89rzolq-ZYUdryXg99nEK",
      title: "Connect-4 Game Agent",
      description: "An agent that plays the Max-Connect4 game using search algorithm."
    },
    {
      url: "https://github.com/SameerMosesMurala/DBMS-Data-Analysis-using-Map-Reduce",
      image: "https://drive.google.com/uc?id=1aDODd_nzjNNwRIBAobMtLP-TiEV0G91k",
      title: "Data Analysis using Map Reduce",
      description: "Data Analysis of IMDB dataset using Map-Reduce"
    },
    {
      url: "https://github.com/SameerMosesMurala/ArtificialIntelligence-Propositional-Logic",
      image: "https://drive.google.com/uc?id=13KcQHnCVeL0sgksZlGWj75vmrse7S1i6",
      title: "AI Inference Engine",
      description: "Implement a knowledge base and an inference engine for the wumpus world"
    },
    {
      url: "https://github.com/SameerMosesMurala/AI-ShortestRouteBetweenCitiesAlgorithm",
      image: "https://drive.google.com/uc?id=1z9S15sTDIf9NLCSteF9R7k-qt3YyuW-B",
      title: "Shortest Distance between Cities",
      description: "An Artificial Intelligence Alogrithm that finds the shortest distance between cities."
    },
    {
      url: "https://github.com/SameerMosesMurala/Distributed-Systems-Online-Advising-Simulation-Using-Message-Queuing-and-Socket-Programming",
      image: "https://drive.google.com/uc?id=18F9LxVwJkF0HD9MhOzxH-Z3ciZpilW-s",
      title: "Socket Programming",
      description: "Simulate an online advising system using socket programmimg."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+14794079382",
  email_address: "sameer.moses160895@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails,projectsgithubSection};
