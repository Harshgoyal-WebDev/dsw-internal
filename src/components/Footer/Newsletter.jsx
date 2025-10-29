import Image from "next/image";
import { Input } from "../ui/input";

const Newsletter = () => {
    return (
        // <div className=" text-foreground  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-sm:py-[5vw] max-md:py-[3vw] ">
        //     <p  className="mb-6 font-medium max-md:w-[85%] max-sm:w-[95%] ">Subscribe to our newsletter for the latest tech insights and updates.</p>
        //     <form className="relative max-sm:px-[5vw] max-md:px-[5vw] max-md:w-[90%] ">
        //         <input type="email" placeholder="Enter Your Email" className="w-full  pb-2 !border-none !outline-none placeholder:text-[#F1F1F1] max-sm:px-[2vw]  max-md:px-[3vw] max-sm:placeholder:text-[3vw] max-md:placeholder:text-[2.5vw] placeholder:text-[1vw]" />
        //         <span className="w-full h-[1px] bg-white block"/>
        //         <button type="button"  className="flex cursor-pointer absolute right-0 items-center gap-1 bottom-2  group hover:scale-[0.95] transition-all duration-300 ease max-md:right-10 max-sm:right-5">
        //             <span className="uppercase max-md:text-[3vw] max-sm:text-[3.5vw]">
        //                 Subscribe
        //             </span>
        //             <Image src="/assets/icons/arrow.svg" alt="arrow-right" width={10} height={10} className="w-4 h-4 group-hover:-rotate-45 transition-all duration-300 ease" />
        //         </button>
        //     </form>
        // </div>
        <div className=" text-foreground  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-sm:py-[5vw] max-md:py-[3vw] relative max-sm:items-start ">
             <p  className="mb-6 font-medium max-md:w-[75%] max-sm:w-[95%] ">Subscribe to our newsletter for the latest tech insights and updates.</p>
        <div className='group relative w-full max-w-[65%] max-sm:max-w-[70%] max-md:max-w-[45%]  max-md:ml-[-10vw]  max-sm:pl-[15vw]'>  
      <label
        htmlFor="Newsletter"
        className='origin-start  has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
      >
        <span className='bg-transparent inline-flex text-[0.85vw] max-sm:text-[3vw] max-md:text-[2vw]'>Enter your email</span>
      </label>
      <Input id="newsletter-input" type='email' placeholder=' ' className='dark:bg-transparent border-b border-white !rounded-xs' />
    </div>
    <button type="button"  className="flex cursor-pointer absolute right-0 items-center gap-1 bottom-2  group hover:scale-[0.95] transition-all duration-300 ease max-md:right-15 max-sm:right-5 bg-gradient-to-r from-primary-2 to-primary-3 text-white rounded-full px-5 py-3 max-md:bottom-8 max-sm:bottom-6 ">
                    <span className="uppercase text-[0.8vw] max-md:text-[2vw] max-sm:text-[2.5vw]">
                         Subscribe
                     </span>
                     <Image src="/assets/icons/arrow.svg" alt="arrow-right" width={10} height={10} className="w-4 h-4 group-hover:-rotate-45 transition-all duration-300 ease" />
                 </button>
    </div>
    )
}

export default Newsletter;