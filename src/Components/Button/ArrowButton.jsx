import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArrowButton = () => {
    return (
        <>
            <div className="rounded-full  items-center justify-center w-full h-full  flex flex-col flex-nowrap relative overflow-hidden">
                <svg className="w-[1.3vw] max-sm:w-[5vw] h-auto absolute group-hover:translate-y-[-180%] group-hover:translate-x-[120%] group-hover:scale-[0.5] duration-500 ease-in-out transition-all origin-center scale-[1] -rotate-45" width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8041 1.24555C15.3098 1.73981 15.3186 2.52533 15.8041 3.01076L20.7378 7.94454L1.51466 7.94454C0.826224 7.94454 0.270181 8.50058 0.270182 9.18901C0.270181 9.87745 0.826224 10.4335 1.51466 10.4335L20.7378 10.4335L15.8041 15.3673C15.3186 15.8527 15.3186 16.647 15.8041 17.1325C16.2895 17.6179 17.0838 17.6179 17.5693 17.1325L24.6301 10.0716C25.1156 9.58619 25.1156 8.79184 24.6301 8.30641L17.5693 1.24555C17.0838 0.760117 16.2895 0.760117 15.8041 1.24555Z" fill="currentColor" className={`fill-current duration-300 `}/>
</svg>
<svg className="w-[1.3vw] max-sm:w-[5vw] h-auto absolute translate-y-[180%] origin-center  ease-in-out  translate-x-[-120%] group-hover:translate-x-0 group-hover:translate-y-0 duration-500 transition-all scale-[0.5] group-hover:scale-[1] -rotate-45" width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8041 1.24555C15.3098 1.73981 15.3186 2.52533 15.8041 3.01076L20.7378 7.94454L1.51466 7.94454C0.826224 7.94454 0.270181 8.50058 0.270182 9.18901C0.270181 9.87745 0.826224 10.4335 1.51466 10.4335L20.7378 10.4335L15.8041 15.3673C15.3186 15.8527 15.3186 16.647 15.8041 17.1325C16.2895 17.6179 17.0838 17.6179 17.5693 17.1325L24.6301 10.0716C25.1156 9.58619 25.1156 8.79184 24.6301 8.30641L17.5693 1.24555C17.0838 0.760117 16.2895 0.760117 15.8041 1.24555Z" fill="currentColor" className={`fill-current duration-300 `}/>
</svg>
      </div>
        </>
    )
}

export default ArrowButton