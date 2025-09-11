import Image from "next/image";

const Newsletter = () => {
    return (
        <div className=" text-foreground max-sm:py-[5vw] ">
            <p  className="mb-6 font-medium ">Subscribe to our newsletter for the latest tech insights and updates.</p>
            <form className="relative max-sm:px-[5vw]">
                <input type="email" placeholder="Enter Your Email" className="w-full  pb-2 !border-none !outline-none placeholder:text-[#F1F1F1] max-sm:px-[4vw] max-sm:placeholder:text-[3vw] placeholder:text-[1vw]" />
                <span className="w-full h-[1px] bg-white block"/>
                <button type="button"  className="flex cursor-pointer absolute right-0 items-center gap-1 bottom-2  group hover:scale-[0.95] transition-all duration-300 ease max-sm:right-5">
                    <span className="uppercase max-sm:text-[3.5vw]">
                        Subscribe
                    </span>
                    <Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={10} height={10} className="w-4 h-4 group-hover:-rotate-45 transition-all duration-300 ease" />
                </button>
            </form>
        </div>
    )
}

export default Newsletter;