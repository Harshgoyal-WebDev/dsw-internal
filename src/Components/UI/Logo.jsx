import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/siteConfig";

// Reusable Logo Component
export const Logo = ({ 
  className = "",
  variant = "default",
  href = "/",
  width,
  height
}) => {
  const variants = {
    default: "w-[7vw] h-[5vw] object-contain",
    footer: "w-2/3",
    header: "w-[7vw] h-[5vw] object-contain",
    mobile: "w-[10vw] h-[7vw] object-contain"
  };

  const variantClass = variants[variant] || variants.default;
  
  // Default dimensions based on variant
  const defaultDimensions = {
    default: { width: 132, height: 67 },
    footer: { width: 338, height: 172 },
    header: { width: 132, height: 67 },
    mobile: { width: 100, height: 60 }
  };

  const dimensions = defaultDimensions[variant] || defaultDimensions.default;

  return (
    <Link href={href} className={className}>
      <Image
        src={SITE_CONFIG.logo}
        width={width || dimensions.width}
        height={height || dimensions.height}
        alt={`${SITE_CONFIG.name} logo`}
        className={variantClass}
        priority={variant === "header" || variant === "default"}
      />
    </Link>
  );
};

export default Logo;