// All site content lives here. Edit text, links, and image paths without touching the layout code.
// High-res photos: overwrite files in /images/photos, /images/k2ttan or /images/games with the same
// name, or drop new files in and update the paths below. Missing hero photos are skipped automatically.
window.SITE = {
  name: "Henry Tan",
  handle: "kitannn°",
  role: "Game Designer",
  location: "Vancouver, BC",
  // Split so the address never appears in the HTML; shown as user[at]domain.
  email: { user: "hkitannn", domain: "gmail.com" },
  resume: "assets/resume/TAN_HENRY_RESUME.pdf",
  cvPage: "cv.html",
  portrait: "images/profile.jpg", // add your own photo here; a monogram shows until then

  about: [
    "I'm a game designer with 5+ years of development experience, specializing in content and technical design for live service titles.",
    "I started in QA and game security on FIFA Mobile, moved into game and technical design at EA, then designed FTUE, quests and event loops for The Sims: Town Stories at Maxis. Today I'm Game Director at Ghost Fox Games — a studio of EA veterans in the 2026 Roblox Incubator — building Cosmic Carnage.",
    "Off the clock I shoot street, travel and portrait photography, and a lot of live music.",
  ],

  identity: [
    ["Name", "Henry Tan"],
    ["Alias", "kit / kitannn"],
    ["Based", "Vancouver, BC 🇨🇦"],
    ["Studio", "Ghost Fox Games"],
    ["Languages", "English, Cantonese"],
    ["Education", "BCIT — Computer Systems Technology"],
  ],

  stats: [
    ["5+", "Years in games"],
    ["3", "Franchises shipped on"],
    ["2026", "Roblox Incubator"],
  ],

  styles: ["Technical Design", "Content Design", "Live Ops", "Unity", "Unreal Engine", "Roblox / Luau", "C#", "C++", "Lua", "Python", "AMP", "Haxe", "Jira", "Perforce", "Photography"],

  // Résumé — feeds the Profile timeline and cv.html.
  cv: {
    summary: "Game Designer with 5+ years of development experience specializing in content and technical design for live service titles. Proven track record of mastering complex tools and delivering in fast-paced environments.",
    experience: [
      {
        org: "Ghost Fox Games", role: "Game Director", project: "Cosmic Carnage, Roblox Studio", when: "Apr 2026 – Present",
        bullets: [
          "Co-founded an independent studio of EA veterans building UGC experiences; accepted into the 2026 Roblox Incubator program",
          "Engineered and prototyped core PvP vehicular combat mechanics, weapon systems, and player customization using Luau in Roblox Studio during a 3-week sprint cycle",
          "Designed and implemented technical match structures and gameplay systems, maintaining clean technical documentation to streamline feature scaling across team members",
        ],
      },
      {
        org: "EA, Maxis", role: "Game Designer", project: "The Sims: Town Stories, Unity", when: "Mar 2024 – Mar 2026",
        bullets: [
          "Bridged design and engineering teams by establishing technical specifications, scripting core event logic in AMP, and prototyping feature tools in Unity using C#",
          "Designed and iterated player-centric experiences, including the First-Time User Experience (FTUE), quests, and event loops to optimize player retention and progression",
          "Built custom engine toolsets in C# (3D asset loaders, cinematic tools, and component organizers) that improved team workflows and optimized game performance",
          "Authored comprehensive technical design documentation in Jira/Confluence and collaborated across disciplines to guide engineers on feature implementation and system behavior",
        ],
      },
      {
        org: "EA", role: "Technical Game Designer", project: "FIFA Mobile, EA Impact Engine", when: "Sep 2022 – Mar 2023",
        bullets: [
          "Designed, prototyped, and integrated complex front-end features and gameplay mechanics using Haxe (Impact engine converts it to C++), and managed branches in Perforce to support live game content",
          "Engineered custom designer toolsets using C++ and Haxe, empowering team members to rapidly prototype, iterate, and integrate new UI ideas into the build",
          "Supported live-service event content such as the 2022 FIFA World Cup in-game event that garnered record-breaking DAU",
          "Tracked feature milestones, managed technical backlogs, and prioritized bugs using Jira while collaborating with cross-functional stakeholders",
        ],
      },
      {
        org: "EA", role: "Game Designer", project: "FIFA Mobile, EA Impact Engine", when: "Mar 2022 – Sep 2022",
        bullets: [
          "Tuned and balanced live gameplay mechanics, utilizing feedback and telemetry data to refine player experience and feature equilibrium",
          "Owned live content deploy processes for weekly game updates and bug fixes",
          "Collaborated with cross-functional disciplines to improve design and implementation techniques",
          "Led the design, prototyping, and implementation of front-end features for FIFA Mobile",
        ],
      },
      {
        org: "Keywords Studios – EA", role: "Game Security Analyst", when: "May 2021 – Mar 2022",
        bullets: [
          "Collaborated with security and player-first teams to enforce game integrity and anti-cheat standards",
          "Developed Python and Splunk scripts/queries to investigate security threats and terms of service violations",
          "Built Splunk dashboards and reports to visualize player data and monitor game health",
          "Monitored social media and community feedback to identify and resolve live-service issues",
        ],
      },
      {
        org: "Keywords Studios – EA", role: "QA Development Support III", when: "Jun 2019 – May 2021",
        bullets: [
          "Executed comprehensive test plans and regression testing for new live-service content",
          "Developed node-based automation scripts to streamline content testing and validation",
          "Coordinated with production and design teams to align quality standards logged in Jira",
          "Authored technical documentation and trained analysts on QA processes",
        ],
      },
    ],
    skills: ["Unity", "Unreal Engine", "C#", "C++", "Lua", "Python", "AMP", "Haxe", "Jira", "Perforce"],
    proficiencies: ["Technical Design and Implementation", "Game Content Design", "Automation Scripting", "Regression Testing"],
    languages: ["English", "Cantonese Chinese"],
    education: [{ school: "British Columbia Institute of Technology", place: "Burnaby, BC", credential: "Diploma in Computer Systems Technology" }],
  },

  // Work entries. `cover` may be empty — a generated title card is shown instead.
  // `logo` (optional) shows on the project page. `pos` sets the card crop (CSS object-position).
  work: [
    {
      title: "Ghost Fox Games", tag: "Cosmic Carnage · Crater Crashers · Roblox", kind: "game", year: "2026", featured: true,
      cover: "images/games/cosmic-carnage-keyart.jpg", pos: "50% 60%", logo: "images/games/gfg-logo.png", link: "https://ghostfoxgames.ca",
      summary: "Game Director at Ghost Fox Games, an independent studio of seven EA veterans in the 2026 Roblox Incubator. Our lead title, Cosmic Carnage, revives classic car combat as a futuristic demolition derby of outlandish hero vehicles — Ironjaw, the Apoco-Taco food truck and more — battling across destructible arenas. The studio is also developing Crater Crashers.",
      details: [
        ["Role", "Co-Founder / Game Director"],
        ["Games", "Cosmic Carnage, Crater Crashers"],
        ["Program", "Roblox Incubator 2026"],
        ["Built", "PvP vehicular combat, weapon systems, customization, match structure"],
        ["Stack", "Roblox Studio, Luau, Rojo"],
      ],
      images: ["images/games/cosmic-carnage-keyart.jpg"],
    },
    {
      title: "The Sims: Town Stories", tag: "EA Maxis · Game Designer · Unity", kind: "game", year: "2024—2026", featured: true,
      cover: "images/games/sims-shot-1.jpg", pos: "55% 50%",
      summary: "A mobile town-building spin-off in The Sims franchise, set in the small town of Plumbrook. I designed the first-time user experience, quests and event loops, scripted core event logic in AMP, and built C# tools in Unity — asset loaders, cinematic tools and component organizers.",
      details: [
        ["Studio", "EA, Maxis"],
        ["Role", "Game Designer"],
        ["Focus", "FTUE, quests, event loops, tooling"],
        ["Stack", "Unity, C#, AMP, Jira/Confluence"],
      ],
      images: ["images/games/sims-shot-1.jpg", "images/games/sims-shot-2.jpg", "images/games/sims-shot-3.jpg"],
    },
    {
      title: "EA SPORTS FC Mobile", tag: "EA · formerly FIFA Mobile · Impact Engine", kind: "game", year: "2019—2023", featured: true,
      cover: "images/games/fcm-quickmatch.jpg", pos: "27% 50%", logo: "images/games/fcm-logo.png", link: "https://www.ea.com/games/ea-sports-fc/fc-mobile",
      summary: "Four years on FIFA Mobile (now EA SPORTS FC Mobile), from QA automation and game security to game design and technical game design. I built front-end features and designer tools in Haxe and C++ on EA's Impact engine, tuned live gameplay, owned weekly content deploys, and supported the 2022 FIFA World Cup event that set record DAU.",
      details: [
        ["Studio", "Electronic Arts (via Keywords Studios 2019–2022)"],
        ["Roles", "QA Dev Support III → Game Security Analyst → Game Designer → Technical Game Designer"],
        ["Stack", "Haxe, C++, Perforce, Splunk, Python, Jira"],
      ],
      images: ["images/games/fcm-anniversary.jpg", "images/games/fcm-gameplay.jpg", "images/games/fcm-quickmatch.jpg"],
    },
    {
      title: "Transcribe", tag: "EduHacks · Hackathon", kind: "game", year: "2017",
      cover: "", accent: "#f0c23b", link: "https://github.com/attackle/transcribe",
      summary: "Real-time transcription and captioning service built on Amazon Alexa and Google APIs.",
      details: [["Event", "EduHacks"], ["Stack", "Alexa, Google APIs, Web"]],
      images: [],
    },
    {
      title: "Small Games", tag: "Unity · C# · JS · Python", kind: "game", year: "2015—",
      cover: "", accent: "#3bb8f0", link: "https://github.com/kitannn",
      summary: "Prototypes and clones used to learn the craft: Landbird (2D infinite runner), Fleppybirb, Pong, Tetris in Unity and Python, and snek.js.",
      details: [["Repos", "landbird, fleppybirb, pong_unity, tetris_unity, tetris_python, snek.js"]],
      images: [],
    },
    {
      title: "Tokyo", tag: "Photography · Travel", kind: "photo", year: "2020", featured: true,
      cover: "images/photos/ig-12.jpg",
      summary: "Crossings, rails and quiet phone booths from Japan.",
      details: [["Location", "Tokyo / Mt. Fuji, Japan"], ["More", "Instagram @kitannn"]],
      images: ["images/photos/ig-12.jpg", "images/photos/ig-06.jpg", "images/photos/ig-09.jpg", "images/photos/ig-11.jpg"],
    },
    {
      title: "Portraits", tag: "Photography · Night & Neon", kind: "photo", year: "2020—2022",
      cover: "images/photos/ig-10.jpg",
      summary: "Portraits lit by neon signs, lanterns and a single desk lamp.",
      details: [["Style", "Low light, practical lighting"]],
      images: ["images/photos/ig-10.jpg", "images/photos/ig-02.jpg", "images/photos/ig-08.jpg", "images/photos/ig-07.jpg"],
    },
    {
      title: "Bloom", tag: "Photography · Nature", kind: "photo", year: "2020—2024",
      cover: "images/photos/ig-05.jpg",
      summary: "Cherry blossoms, gardens and a sliver of moon.",
      details: [["Subject", "Seasons"]],
      images: ["images/photos/ig-05.jpg", "images/photos/ig-03.jpg", "images/photos/ig-04.jpg", "images/photos/ig-01.jpg"],
    },
    {
      title: "Live", tag: "Personal · Concerts", kind: "photo", year: "2025—2026",
      cover: "images/k2ttan/k2-06.jpg",
      summary: "Front rows, spotlights and fog — shows from the personal account.",
      details: [["More", "Instagram @k2ttan"]],
      images: ["images/k2ttan/k2-06.jpg", "images/k2ttan/k2-08.jpg", "images/k2ttan/k2-02.jpg", "images/k2ttan/k2-11.jpg", "images/k2ttan/k2-04.jpg", "images/k2ttan/k2-10.jpg", "images/k2ttan/k2-07.jpg", "images/k2ttan/k2-09.jpg"],
    },
    {
      title: "Everyday", tag: "Personal · Film etc", kind: "photo", year: "2025—2026",
      cover: "images/k2ttan/k2-12.jpg",
      summary: "Clouds, lakes, old theatres and mail.",
      details: [["More", "Instagram @k2ttan"]],
      images: ["images/k2ttan/k2-12.jpg", "images/k2ttan/k2-03.jpg", "images/k2ttan/k2-05.jpg", "images/k2ttan/k2-01.jpg"],
    },
  ],

  // Hero photo wall, 6 per row (order matters — first tiles light up first).
  // ig-13 … ig-18 are empty slots: add those files to images/photos/ and they appear automatically.
  gallery: [
    "images/photos/ig-12.jpg", "images/photos/ig-10.jpg", "images/photos/ig-06.jpg", "images/photos/ig-05.jpg",
    "images/photos/ig-02.jpg", "images/photos/ig-09.jpg", "images/photos/ig-04.jpg", "images/photos/ig-08.jpg",
    "images/photos/ig-11.jpg", "images/photos/ig-03.jpg", "images/photos/ig-07.jpg", "images/photos/ig-01.jpg",
    "images/photos/ig-13.jpg", "images/photos/ig-14.jpg", "images/photos/ig-15.jpg", "images/photos/ig-16.jpg",
    "images/photos/ig-17.jpg", "images/photos/ig-18.jpg",
  ],

  // Personal strip on the Profile page.
  offClock: ["images/k2ttan/k2-06.jpg", "images/k2ttan/k2-12.jpg", "images/k2ttan/k2-08.jpg", "images/k2ttan/k2-03.jpg", "images/k2ttan/k2-02.jpg", "images/k2ttan/k2-05.jpg"],

  faq: [
    ["What do you do?", "Game design with a technical bent — content systems, live ops, FTUE, quests and events, and the tools that ship them. I'm currently Game Director at Ghost Fox Games."],
    ["Are you open to work or collaborations?", "Yes — design roles, contract work on Roblox and Unity projects, and photo collaborations. Email is the fastest way to reach me."],
    ["Do you still take photos?", "Always. Travel, street and portraits on @kitannn, and live music and everyday film on @k2ttan."],
    ["What tools do you use?", "Unity, Unreal, Roblox Studio + Luau, C#, C++, Python, Haxe, AMP, Jira and Perforce — and Lightroom for photos."],
  ],

  poem: [
    "Got a game that needs a designer's eye,",
    "or a night shoot under neon sky?",
    "Send a note, I'll write back soon —",
    "<strong>probably after one more playtest :)</strong>",
  ],

  networks: [
    ["Instagram", "https://instagram.com/kitannn"],
    ["Personal IG", "https://instagram.com/k2ttan"],
    ["LinkedIn", "https://www.linkedin.com/in/tanhenry/"],
    ["GitHub", "https://github.com/kitannn"],
  ],
};
