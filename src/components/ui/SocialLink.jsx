"use client"
import Link from "next/link";
import { Icon } from "./Icons";

// Reusable Social Link Component
export const SocialLink = ({ 
  href, 
  label, 
  icon, 
  className = "",
  variant = "default"
}) => {
  const baseClasses = "group transition-all duration-300 ease";
  
  const variants = {
    default: "rounded-full block p-3 border overflow-hidden bg-white/5 group-hover:bg-white group-hover:scale-[0.95] duration-300 max-md:p-[3vw]",
    footer: "rounded-full block p-3 border overflow-hidden bg-white/5 group-hover:bg-white group-hover:scale-[0.95] duration-300 max-md:p-[3vw]",
    header: "rounded-full block p-2 border overflow-hidden bg-white/5 group-hover:bg-white/20 duration-300 max-md:p-[3vw]"
  };

  const iconVariants = {
    default: "text-white group-hover:text-black transition-all duration-500 ease",
    footer: "text-white group-hover:text-black transition-all duration-500 ease",
    header: "text-white group-hover:text-white transition-all duration-300 ease"
  };

  const variantClass = variants[variant] || variants.default;
  const iconVariantClass = iconVariants[variant] || iconVariants.default;

  return (
    <Link 
      href={href} 
      aria-label={label}
      className={`${baseClasses} ${className}`}
    >
      <div className={variantClass}>
        <Icon 
          name={icon} 
          className={iconVariantClass}
          size="w-4 h-4 max-sm:h-[5vw]  max-sm:w-[5vw] max-md:h-[3vw] max-md:w-[3vw] "
        />
      </div>
    </Link>
  );
};

export default SocialLink;