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
  { text: "Product", href: "#", id: "product" },
  { text: "Solutions", href: "#", id: "solutions" },
  { text: "About Us", href: "/about", id: "about" },
  { text: "Resources", href: "#", id: "resources" },
  { text: "Pilot Program", href: "/pilot-program", id: "pilot" },
  { text: "Contact", href: "/contact-us", id: "contact" }
];

// Social media links
export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: "facebook"
  },
  {
    id: "linkedin", 
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: "linkedin"
  },
  {
    id: "twitter",
    label: "Twitter", 
    href: "https://www.twitter.com",
    icon: "twitter"
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com", 
    icon: "instagram"
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