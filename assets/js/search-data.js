// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-the-university-of-michigan-forever-go-blue-mortar-board",
          title: 'Graduated from the University of Michigan. Forever go blue :mortar_board:',
          description: "",
          section: "News",},{id: "news-joined-the-grasp-lab-at-the-university-of-pennsylvania-robot",
          title: 'Joined the GRASP Lab at the University of Pennsylvania :robot:',
          description: "",
          section: "News",},{id: "news-decided-to-join-the-drail-lab-at-oregon-state-university-for-my-phd",
          title: 'Decided to join the DRAIL Lab at Oregon State University for my PhD!...',
          description: "",
          section: "News",},{id: "news-our-new-paper-roshi-is-now-on-arxiv-roshi-is-a-versatile-robot-oriented-suit-for-capturing-human-motion-in-the-wild",
          title: 'Our new paper RoSHI is now on arXiv! RoSHI is a versatile robot-oriented...',
          description: "",
          section: "News",},{id: "news-joining-origami-robotics-as-a-founding-research-engineer-i-am-sincerely-grateful-to-prof-alan-fern-and-the-drail-lab-at-oregon-state-university-for-their-generous-offer-their-time-and-their-understanding-as-i-ultimately-chose-a-different-path-i-hold-their-work-in-the-highest-regard-and-hope-our-paths-cross-again",
          title: 'Joining Origami Robotics as a founding research engineer. I am sincerely grateful to...',
          description: "",
          section: "News",},{id: "projects-autonomous-dynamic-stacking-with-franka-panda",
          title: 'Autonomous Dynamic Stacking with Franka Panda',
          description: "MEAM 5200 Introduction to Robotics · University of Pennsylvania · Fall 2024 · 🏆 Course Winner",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-towards-scalable-quadruped-imitation",
          title: 'Towards Scalable Quadruped Imitation',
          description: "ESE 6500 Learning in Robotics · University of Pennsylvania · Spring 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-hands-on-robotics-projects",
          title: 'Hands-on Robotics Projects',
          description: "EECS 464 Hands-on Robotics · University of Michigan · Fall 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-flash-parking-amp-58-consumer-sentiment-analysis",
          title: 'Flash Parking&amp;amp;#58; Consumer Sentiment Analysis',
          description: "Flash Parking · Industry-Sponsored · University of Michigan · 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%6C%75%79%61%6E%67@%73%65%61%73.%75%70%65%6E%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/huluwulu1115", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/luyang-hu", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/LuyangHu2", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
