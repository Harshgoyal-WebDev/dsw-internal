import { fontClassNames } from "@/styles/fonts";

// Site-wide configuration and data
export const SITE_CONFIG = {
  name: "Data Science Wizards",
  logo: "/dsw-logo.png",
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
  { text: "Home", href: "/", id: "home" },
  { text: "Product", href: "#", id: "product" , children:[
    { text: "Unify AI", href :"/unify" , id:"products-unify"},
    { text: "Insuraince", href :"/insuraince" , id:"products-insuraince"}
  ]},
  { text: "Solutions", href: "#", id: "solutions" , children:[
    { text: "Solution 1", href :"/#" , id:"solution-1"},
    { text: "Solution 2", href :"#" , id:"solution-2"}
  ]},
  { text: "About Us", href: "/about", id: "about" },
  { text: "Resources", href: "#", id: "resources" ,children:[
    { text: "Blogs", href :"/resources/blog" , id:"resources-blog"},
    { text: "News And PR", href :"/resources/news-and-pr" , id:"resources-news"},
    { text: "Videos", href :"/resources/product-videos" , id:"resources-videos"},
    { text: "Webinars And Events", href :"/resources/webinars-and-events" , id:"resources-webinars"},
    { text: "AI for insurance workshop", href :"/resources/webinars-and-workshops/ai-for-insurance-workshop" , id:"resources-workshops"},
    { text: "AI & GenAI masterclass", href :"/resources/webinars-and-workshops/ai-and-gen-ai-masterclass" , id:"resources-workshops"},
    { text: "Whitepapers", href :"/resources/whitepapers" , id:"resources-whitepapers"},
  ]},
  { text: "Pilot Program", href: "/pilot-program", id: "pilot" },
  { text: "Contact", href: "/contact-us", id: "contact" }
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