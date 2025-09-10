import Link from "next/link";

const PrimaryButton = ({ text, className = "",unify, ...props }) => {
  return (
    <Link {...props} data-letters-delay data-split='letters' className={`buttonSplit relative inline-flex items-center h-[4vw] min-w-[10vw] px-[2vw] gap-3 rounded-full  text-white-200 group hover:scale-95 transition-transform duration-500 ${className} ${unify?"!bg-white":"bg-gradient-to-r from-primary-2 to-primary-3"}`}>
      <span className={`bg-foreground rounded-full h-2 w-2 ${unify?"!bg-black":""}`}></span>
      <div className="overflow-clip leading-[1.4] mt-[-4px]">
        <p className={`text-[1.145vw] leading-[1.4] buttonTextShadow ${unify?"text-black":""}`}>{text}</p>
      </div>
    </Link>
  );
};

export default PrimaryButton; 
