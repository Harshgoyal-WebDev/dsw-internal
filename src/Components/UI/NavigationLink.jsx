"use client"
import Link from "next/link";

// Reusable Navigation Link Component
export const NavigationLink = ({ 
  text, 
  href, 
  className = "", 
  variant = "default",
  onClick
}) => {
  const baseClasses = "buttonSplit transition-all duration-300 ease-in-out";
  
  const variants = {
    default: "text-[#E8E8E8] hover:text-white",
    footer: "text-foreground hover:text-white content-p",
    mobile: "text-white text-xl"
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <Link 
      href={href} 
      data-split="letters" 
      data-letters-delay 
      className={`${baseClasses} ${variantClass} ${className}`}
      onClick={onClick}
    >
      <div className="overflow-clip">
        <p className="buttonTextShadow leading-[1.4] mt-[-4px]">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default NavigationLink;