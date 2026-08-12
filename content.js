/* =========================================================================
   EDIT ME — this is the only file you need to touch to update the site.
   - Change any text below (bio, experience, contact links).
   - Add a portfolio company: copy a { ... } block inside COMPANIES and edit it.
   - Remove a portfolio company: delete its { ... } block from COMPANIES.
   - category must be one of: "crypto", "education", "b2b"
   - Set featured: true to make it show up in the "Featured" filter.
   Save the file and refresh the page (or push to GitHub) to see changes.
   ========================================================================= */

const SITE = {
  name: "Nick Ducoff",
  pageTitle: "Nick Ducoff — Investor & Founder",

  hero: {
    greeting: "Hi, I'm Nick Ducoff!",
    photo: "assets/nick-headshot.jpg",
    bio: [
      "I'm a 2x founder and investor. I currently lead institutional growth at the Solana Foundation, responsible for digital assets and permissioned environments.",
      "As an investor, I help founders scale by providing GTM support, and serve as an intellectual sparring partner when you need a nonjudgemental second opinion."
    ]
  },

  experience: {
    heading: "My Experience",
    paragraphs: [
      "After exiting my last startup, I joined G20 Ventures as a Venture Partner focused on blockchain and B2B SaaS investments. Prior to joining the fund, I was an angel investor in companies including Flipside Crypto, Unchained Capital, Hologram, and Panorama Education.",
      "I previously co-founded two VC-backed tech companies that were acquired. Infochimps, founded in 2010, delivered Big Data systems with unprecedented speed, scale and flexibility to enterprise companies, and was acquired by DXC Technology (NYSE: DXC). Edmit, founded in 2017, helped high school students and their families make smarter college financial decisions, and was acquired by Vemo Education.",
      "As an educator, I taught entrepreneurship at John Cabot University and served as Vice President for New Ventures at Northeastern University. I co-authored a bestselling book on education finance, and report on information disclosure for The Brookings Institution.",
      "I received my undergraduate in Business Administration from Emory University and my law degree, with honors, from the University of Texas. I'm licensed to practice law in Texas and Massachusetts, and previously practiced securities law for a leading global law firm.",
      "I live with my wife and two children in Newton, MA. I'm an Italian wine aficionado (Piedmont in particular), avid tennis player, and antiquarian book collector."
    ]
  },

  contact: {
    email: "hi@nick.vc",
    twitter: "https://twitter.com/nickducoff",
    linkedin: "https://www.linkedin.com/in/nickducoff/",
    discord: "https://discord.com/users/771312863046270996"
  },

  portfolioHeading: "My Investments",

  // Add or remove companies here. Order shown = order listed.
  companies: [
    {
      name: "Boundless",
      category: "education",
      featured: false,
      description: "Empowers families to have more fulfilling lives, designing a lifestyle enabling balance, growth, and deeper connections with family, nature, and the world.",
      url: "https://www.boundless.life/"
    },
    {
      name: "Crayon",
      category: "b2b",
      featured: false,
      description: "The leading competitive intelligence platform for mid-market and enterprise businesses, delivering a real-time picture of what competitors are doing.",
      url: "https://www.crayon.co/"
    },
    {
      name: "Forge",
      category: "education",
      featured: false,
      description: "Disrupting a centuries-old training model with a paid 12-week apprenticeship program combining hands-on experience with new technology.",
      url: "https://www.forgeco.com/"
    },
    {
      name: "Hologram",
      category: "b2b",
      featured: true,
      description: "A cellular platform designed for the Internet of Things — thousands of connectivity teams rely on Hologram to keep their fleets connected.",
      url: "https://www.hologram.io/"
    },
    {
      name: "Mentor Collective",
      category: "education",
      featured: false,
      description: "The leading provider of impact-driven mentoring programs, partnering with colleges and universities to improve student outcomes.",
      url: "https://www.mentorcollective.org/"
    },
    {
      name: "Optimizely",
      category: "b2b",
      featured: false,
      description: "Helps people unlock their digital potential with a leading experimentation and content management platform.",
      url: "https://www.optimizely.com/"
    },
    {
      name: "Panorama Education",
      category: "education",
      featured: true,
      description: "Partners with K-12 schools and districts across the country to collect and analyze data about social-emotional learning and school climate.",
      url: "https://www.panoramaed.com/"
    },
    {
      name: "Passage",
      category: "education",
      featured: false,
      description: "Brings together education institutions, employers, and financial institutions with technology to create simpler, more affordable pathways to careers.",
      url: "https://www.passage.com/"
    },
    {
      name: "Perena",
      category: "crypto",
      featured: false,
      description: "Making stablecoins more functional, liquid, and rewarding by enabling frictionless exchange between them.",
      url: "https://www.perena.org/"
    },
    {
      name: "SchoolAI",
      category: "education",
      featured: false,
      description: "Coteacher is a sidekick for the classroom — daily lesson plans, 1:1 coaching for every student, and real-time assessment.",
      url: "https://schoolai.com/"
    },
    {
      name: "Surus",
      category: "crypto",
      featured: false,
      description: "Accelerating and improving the onchain financial ecosystem with digitally native trust services.",
      url: "https://www.surus.io/"
    },
    {
      name: "Unchained Capital",
      category: "crypto",
      featured: true,
      description: "A bitcoin-native financial services company offering collaborative custody, a trading desk, and bitcoin-backed loans.",
      url: "https://unchained.com/"
    }
  ]
};
