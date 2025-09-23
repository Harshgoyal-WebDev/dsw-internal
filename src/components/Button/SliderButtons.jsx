import Image from "next/image"

export function PreviousButton({ onClick }) {
    return (
        <button aria-label='previous slide' onClick={onClick} className="h-[4vw] w-[4vw] px-[1.2vw] group rounded-full relative border border-stone-700 hover:border-transparent duration-400 hover:scale-90 bg-white/5 cursor-pointer max-sm:h-[18vw] max-sm:w-[18vw] max-md:h-[10vw] max-md:w-[10vw] max-sm:px-[5vw] max-md:px-[3vw]">
            <span className='block w-[4vw] h-[4vw] absolute !bg-gradient-to-r !from-[#F16B0D] !to-[#E61216] group-hover:scale-100 scale-0 duration-400 rounded-full left-0 top-0' />
            <Image src="/assets/icons/arrow-left.svg" width={20} height={20} className='h-full w-full relative z-10' alt="Previous" />
        </button>
    )
}

export function NextButton({ onClick }) {
    return (
        <button aria-label='next slide' onClick={onClick} className="h-[4vw] w-[4vw] px-[1.2vw] group rounded-full relative border border-stone-700 hover:border-transparent duration-400 hover:scale-90 bg-white/5 cursor-pointer  max-sm:h-[18vw] max-sm:w-[18vw] max-md:w-[10vw] max-md:h-[10vw] max-sm:px-[5vw] max-md:px-[3vw]">
            <span className='block w-[4vw] h-[4vw] absolute !bg-gradient-to-r !from-[#F16B0D] !to-[#E61216]   group-hover:scale-100 scale-0 duration-400 rounded-full left-0 top-0' />
            <Image src="/assets/icons/arrow-right.svg" width={20} height={20} className='h-full w-full relative z-10' alt="Next" />
        </button>
    )
}