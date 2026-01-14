import { fontClassNames } from "@/styles/fonts";

// Site-wide configuration and data
export const SITE_CONFIG = {
  name: "Data Science Wizards",
  logo: "/logo-dsw.svg",
  description: "Data Science Wizards - AI Solutions",
  fonts: fontClassNames, // Make fonts available globally
  
  contact: {
    phones: [
      { number: "+91 96640 56847", display: "+91 96640 56847" },
      { number: "+353 894015233", display: "+353 894015233" }
    ],
    email: "contact@datasciencewizards.ai",
  },

  copyright: {
    year: "2025",
    company: "Data Science Wizards",
    credits: {
      text: "By:",
      link: "https://weareenigma.com/",
      name: "Enigma Digital"
    }
  }
};

// Navigation configuration
export const NAVIGATION = [
  // { text: "Home", href: "/", id: "home" },
  { text: "Products", href: "/unifyai", id: "product" , children:[
    { text: "UnifyAI", href :"/unifyai" , id:"products-unify"},
    { text: "AgenticAI", href :"/agentic-ai" , id:"products-agentic"},
  ]},
  { text: "Solutions", href: "/insuraince", id: "solutions" , children:[
    { text: "Insurance", href :"/insuraince" , id:"solutions-insuraince"},
  ]},
  // { text: "InsurAInce", href: "/insuraince", id: "insuraince"},
   { text: "Pilot Program", href: "/production-pilot", id: "pilot" },
   { text: "Open Source", href: "/infosys-finacle", id: "infosys-finacle" },
    { text: "Resources", href: "#", id: "resources" ,children:[
    { text: "Case Studies", href :"#" , id:"resources-case-studies"},
    { text: "In the news", href :"/news" , id:"resources-news"},
    { text: "Blogs", href :"/blogs" , id:"resources-blog"},
    { text: "Events", href :"/webinars-and-events" , id:"resources-webinars"},
    { text: "Videos", href :"/product-videos" , id:"resources-videos"},
    { text: "Whitepapers", href :"#" , id:"resources-whitepapers"},
    { text: "Workshops", href :"/ai-insurance-workshops" , id:"resources-workshops"},
    { text: "Masterclass", href :"/dsw-workshop-deeptech-ai-genai-hands-on-masterclass" , id:"resources-masterclass"},
  ]},
  { text: "About Us", href: "/about", id: "about" },
  { text: "Contact", href: "/contact-us", id: "contact" }
];
export const NAVIGATION_FOOTER = [
  // { text: "Home", href: "/", id: "home" },
  { text: "Products", href: "/unifyai", id: "product" , children:[
    { text: "UnifyAI", href :"/unifyai" , id:"products-unify"},
    { text: "AgenticAI", href :"/agentic-ai" , id:"products-agentic"},
  ]},
  { text: "Solutions", href: "/insuraince", id: "solutions" , children:[
    { text: "Insurance", href :"/insuraince" , id:"solutions-insuraince"},
  ]},
  { text: "Pilot Program", href: "/production-pilot", id: "pilot" },
   { text: "Open Source", href: "/infosys-finacle", id: "infosys-finacle" },
  { text: "Resources", href: "/blogs", id: "resources" ,children:[
    { text: "Case Studies", href :"#" , id:"resources-case-studies"},
    { text: "In the news", href :"/news" , id:"resources-news"},
    { text: "Blogs", href :"/blogs" , id:"resources-blog"},
    { text: "Events", href :"/webinars-and-events" , id:"resources-webinars"},
    { text: "Videos", href :"/product-videos" , id:"resources-videos"},
    { text: "Whitepapers", href :"#" , id:"resources-whitepapers"},
    { text: "Workshops", href :"/ai-insurance-workshops" , id:"resources-workshops"},
    { text: "Masterclass", href :"/dsw-workshop-deeptech-ai-genai-hands-on-masterclass" , id:"resources-masterclass"},
  ]},
  

  { text: "Contact Us", href: "/contact-us", id: "contact" },
  
  { text: "About Us", href: "/about", id: "about" },
  { text: "Privacy Policy", href: "/privacy-policy", id: "privacy-policy" },
  { text: "Terms And Conditions", href: "/terms-and-conditions", id: "terms-and-conditions" },
  { text: "Join Community", href: "https://chat.whatsapp.com/4UJBjd1ZjV3JcXWCgYqqRH", id: "community" },

];

// Social media links
export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/datasciencewizards/",
    icon: "facebook"
  },
  {
    id: "linkedin", 
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/data-science-wizards/",
    icon: "linkedin"
  },
  {
    id: "twitter",
    label: "Twitter", 
    href: "https://x.com/dswizards",
    icon: "twitter"
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/datasciencewizards/", 
    icon: "instagram"
  },
   {
    id: "youtube",
    label: "Youtube",
    href: "https://www.youtube.com/@DataScienceWizards", 
    icon: "youtube"
  }
];

// Call-to-action buttons
export const CTA_BUTTONS = {
  primary: {
    text: "Book a Demo",
    href: "#",
    type: "primary"
  },
  secondary: {
    text: "Learn More", 
    href: "#",
    type: "secondary"
  }
};