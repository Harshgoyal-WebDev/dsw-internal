import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Copy from "@/components/Animations/Copy";
import { Suspense } from "react";
import ShaderComp from "@/components/BgShader/ShaderComp";


// const DynamicShaderComp = dynamic(() => import("../BgShader/ShaderComp"), {
//   ssr: true,
// });

export default function NotFoundPage() {

    return (
        <>
        <Header/>
         <section className="w-screen relative h-screen  max-sm:pb-0 bg-background overflow-hidden">
       <div className="absolute top-0 left-0 h-full !w-full hidden max-sm:block max-md:block">
          <Image src={"/assets/images/homepage/gradient-mobile.png"} height={852} width={393} alt="hero-bg" className="h-full w-full"/>
        </div>
      <div className="relative h-screen max-md:h-[80vh] max-sm:h-[80vh] max-sm:pt-[15vh] w-full flex flex-col items-center justify-center max-sm:items-start max-sm:px-[2vw]">
       <div  className="absolute top-[30%] left-0 h-screen w-screen max-sm:hidden">
               <Suspense>
                 {/* <DynamicShaderComp /> */}
                 <ShaderComp/>
               </Suspense>
             </div>
       
        <div
          className={`h-fit pointer-events-none w-full pt-20 flex-col flex items-center justify-center z-[9999] text-foreground max-sm:items-start text-center max-sm:pl-[5vw] max-sm:pt-[0vw]`}
        >
          <Copy delay={0.5}>
            <h1
              className={`text-[20vw] leading-[1.1] font-display w-[80%] max-md:w-[90%]  text-white-200 max-sm:w-[90%]`}
            >
              404
            </h1>
          </Copy>
          <div
            className={`w-[60%] max-md:w-[80%] pt-5 text-content-20 text-gray-2 max-sm:w-full max-md:pt-[5vw] max-sm:pt-[10vw]`}
          >
            <Copy delay={0.5 + 0.5}>
              <p className="leading-[1.5] text-white-300 max-sm:text-content-20 max-sm:leading-[1.5] max-sm:pr-[5vw] max-md:text-[3vw]">
                Go back to <Link href="/" className="link-line pointer-events-auto">Homepage!!!</Link>
              </p>
            </Copy>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}