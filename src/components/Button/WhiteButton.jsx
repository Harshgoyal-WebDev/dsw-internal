import Link from "next/link";

const WhiteButton = ({
  text,
  background = "",
  className = "",
  circleColor,
  "aria-label": ariaLabel,
  ...props
}) => {
  return (
    <Link
      {...props}
      aria-label={ariaLabel} 
      data-letters-delay
      data-split="letters"
      className={`buttonSplit relative inline-flex h-[4vw] group min-w-[10vw] px-[2vw] items-center gap-3 rounded-full text-[#0A0A0A] group max-sm:h-fit max-sm:py-[5vw] max-sm:px-[6vw] max-sm:gap-[4vw] max-sm:min-w-[30vw] max-md:gap-[2vw]  max-md:py-[5vw] max-md:px-[4vw] ${className}`}
    >
      <span
        className={`bg-background rounded-full h-2 w-2  max-sm:w-[2.5vw] max-sm:h-[2.5vw] z-[1] mt-[-0.2vw] max-md:w-[1.2vw] max-md:h-[1.2vw] ${circleColor} group-hover:bg-[#0a0a0a] transition-all duration-500 `}
      ></span>
      <div className="overflow-clip leading-[1.4] mt-[-4px] max-sm:mt-0 z-[1]">
        <p className="text-[1.145vw] leading-[1.4] buttonTextShadow max-sm:text-[4.2vw] max-md:text-[3vw]">
          {text}
        </p>
      </div>
      <span
        className={`absolute inset-0 group-hover:scale-95 transition-transform duration-500 rounded-full bg-foreground ${background}`}
      />
      <div className="w-[1px] h-[1px] overflow-hidden">{ariaLabel}</div>
    </Link>
  );
};

export default WhiteButton;
