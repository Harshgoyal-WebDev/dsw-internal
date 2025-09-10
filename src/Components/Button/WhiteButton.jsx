import Link from "next/link";


const WhiteButton = ({ text, className = "",circleColor, ...props }) => {
  return (
    <Link {...props} data-letters-delay data-split='letters' className={`buttonSplit relative inline-flex h-[4vw] group min-w-[10vw] px-[2vw] items-center gap-3 rounded-full text-[#0A0A0A] bg-foreground group hover:scale-95 transition-all duration-500 hover:bg-foreground hover:text-[#0a0a0a] ${className}`}>
      <span className={`bg-background rounded-full h-2 w-2 ${circleColor} group-hover:bg-[#0a0a0a] transition-all duration-500 `}></span>
      <div className="overflow-clip leading-[1.4] mt-[-4px]">
        <p className="text-[1.145vw] leading-[1.4] buttonTextShadow">{text}</p>
      </div>
    </Link>
  );
};

export default WhiteButton; 
