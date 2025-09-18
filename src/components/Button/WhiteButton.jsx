import Link from "next/link";


const WhiteButton = ({ text, background = "", className = "",circleColor, ...props }) => {
  return (
    <Link {...props} data-letters-delay data-split='letters' className={`buttonSplit relative inline-flex h-[4vw] group min-w-[10vw] px-[2vw] items-center gap-3 rounded-full text-[#0A0A0A] group max-sm:h-fit max-sm:py-[4vw] max-sm:px-[6vw] max-sm:gap-[4vw] max-sm:min-w-[30vw] ${className}`}>
      <span className={`bg-background rounded-full h-2 w-2  max-sm:w-[2.5vw] max-sm:h-[2.5vw] z-[1] ${circleColor} group-hover:bg-[#0a0a0a] transition-all duration-500 `}></span>
      <div className="overflow-clip leading-[1.4] mt-[-4px] max-sm:mt-0 z-[1]">
        <p className="text-[1.145vw] leading-[1.4] buttonTextShadow max-sm:text-[4.2vw]">{text}</p>
      </div>
      <span className={`absolute inset-0 group-hover:scale-95 transition-transform duration-500 rounded-full bg-foreground ${background}`} />
    </Link>
  );
};

export default WhiteButton; 
