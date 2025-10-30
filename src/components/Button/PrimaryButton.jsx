import Link from "next/link";

const PrimaryButton = ({ text, background = "", className = "", unify, ...props }) => {
  // const handleClick = (e) => {
  //   if (props.href?.startsWith('#')) {
  //     e.preventDefault();
  //     const id = props.href.slice(1);
  //     const el = document.getElementById(id);
  //     el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };
  return (
    <Link {...props}  data-letters-delay data-split='letters' className={`buttonSplit relative inline-flex items-center h-[4vw] min-w-[10vw] px-[2vw] gap-3 rounded-full overflow-hidden text-white-200 group max-sm:h-fit max-sm:py-[5vw] max-sm:px-[6vw] max-sm:min-w-[30vw]  max-sm:gap-[4vw]  max-md:gap-[2vw]  max-md:py-[5vw] max-md:px-[4vw] max-md:w-fit ${className}`}>
      <span className={`bg-foreground rounded-full h-2 w-2 max-sm:w-[2.5vw] max-sm:h-[2.5vw] z-[1] mt-[-0.2vw] max-md:w-[1.2vw] max-md:h-[1.2vw] ${unify?"!bg-black":""}`}></span>
      <div className="overflow-clip leading-[1.4] mt-[-4px] max-sm:mt-0 z-[1]">
        <p className={`text-[1.145vw] max-md:text-[3vw] leading-[1.4] buttonTextShadow max-sm:text-[4vw] ${unify?"text-black":""}`}>{text}</p>
      </div>
      <span className={`absolute inset-0 group-hover:scale-95 transition-transform duration-500 rounded-full ${background} ${unify?"!bg-white":"bg-gradient-to-r from-primary-2 to-primary-3"}`} />
    </Link>
  );
};

export default PrimaryButton; 
