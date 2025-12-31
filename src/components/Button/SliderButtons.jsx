import Image from "next/image";

export function PreviousButton({ onClick, isDisabled }) {
  return (
    <button
      aria-label="previous slide"
      disabled={isDisabled} onClick={onClick}
      className={`h-[4vw] w-[4vw] px-[1.2vw] group rounded-full relative cursor-pointer max-sm:h-[16vw] max-sm:w-[16vw] max-md:h-[10vw] max-md:w-[10vw] max-sm:px-[5.4vw] max-md:px-[3vw] ${isDisabled ? "opacity-50 pointer-events-none hover:scale-100 hover:border-stone-700" : ""}`}
    >
      <span className="absolute h-[4vw] w-[4vw] max-sm:h-[16vw] max-sm:w-[16vw] max-md:h-[10vw] max-md:w-[10vw] border bg-white/5 border-white/20 top-0 left-0 duration-400 group-hover:scale-90 group-hover:border-transparent rounded-full" />
      <span className="block w-[4vw] h-[4vw] absolute !bg-gradient-to-r !from-[#F16B0D] !to-[#E61216] group-hover:scale-100 scale-0 duration-400 rounded-full left-0 top-0 max-sm:h-[16vw] max-sm:w-[16vw] max-md:h-[10vw] max-md:w-[10vw] " />
      <Image
        src="/assets/icons/arrow-left.svg"
        width={20}
        height={20}
        className="h-full w-full relative z-10"
        alt="arrow-left"
      />
    </button>
  );
}

export function NextButton({ onClick, isDisabled }) {
  return (
    <button
      aria-label="next slide"
      disabled={isDisabled}
      onClick={onClick}
      className={`h-[4vw] w-[4vw] px-[1.2vw] group rounded-full relative cursor-pointer max-sm:h-[16vw] max-sm:w-[16vw] max-md:h-[10vw] max-md:w-[10vw] max-sm:px-[5.4vw] max-md:px-[3vw]  ${isDisabled ? "opacity-50 pointer-events-none hover:scale-100 hover:border-stone-700" : ""}`}
    >
      <span className="absolute h-[4vw] w-[4vw] max-sm:h-[16vw] max-sm:w-[16vw] max-md:h-[10vw] max-md:w-[10vw] border bg-white/5 border-white/20 top-0 left-0 duration-400 group-hover:scale-90 group-hover:border-transparent rounded-full" />

      <span className="block w-[4vw] h-[4vw] absolute !bg-gradient-to-r !from-[#F16B0D] !to-[#E61216]   group-hover:scale-100 scale-0 duration-400 rounded-full left-0 top-0 max-sm:h-[16vw] max-sm:w-[16vw] max-md:h-[10vw] max-md:w-[10vw] " />
      <Image
        src="/assets/icons/arrow-right.svg"
        width={20}
        height={20}
        className="h-full w-full relative z-10"
        alt="Next"
      />
    </button>
  );
}
