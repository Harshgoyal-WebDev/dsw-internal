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
    default: "rounded-full block p-3 border overflow-hidden bg-white/5 group-hover:bg-white group-hover:scale-[0.95] duration-300",
    footer: "rounded-full block p-3 border overflow-hidden bg-white/5 group-hover:bg-white group-hover:scale-[0.95] duration-300",
    header: "rounded-full block p-2 border overflow-hidden bg-white/5 group-hover:bg-white/20 duration-300"
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
          size="w-4 h-4 max-sm:h-8  max-sm:w-8 max-md:h-10 max-md:w-10 "
        />
      </div>
    </Link>
  );
};

export default SocialLink;