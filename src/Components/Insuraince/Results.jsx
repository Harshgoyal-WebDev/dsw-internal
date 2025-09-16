import Image from 'next/image'
import React from 'react'
import Copy from "../Animations/Copy";

const results = [
      {
        id: "01",
        src: "/assets/icons/insuraince/underwriting.svg",
        title: 'Underwriting',
        description: "Predict risk, segment customers, and reduce manual decisioning ",
        },
         {
        id: "02",
        src: "/assets/icons/insuraince/claims.svg",
        title: 'Claims',
        description: "Classify documents, assess claim legitimacy, and optimize settlement cycles ",
        },
         {
        id: "03",
        src: "/assets/icons/insuraince/fraud.svg",
        title: 'Fraud',
        description: "Detect early signs of fraud with real-time pattern recognition ",
        },
]

const Results = () => {
  return (
    <section className='h-fit w-screen container space-y-[7vw]'>

        <div className='flex justify-center items-center flex-col gap-[2vw]'>
             <h2 className='title-1 text-center headingAnim'>
           
                AI That Drives Results in 
                <br />
                Underwriting, Claims, Fraud, and CX 
            </h2>

            <Copy>                

             <p className='text-white-300 text-center w-[70%]'>
                Go live in 30 days with enterprise-grade models that work from day one. insurAInce brings a library of ready-to-deploy AI/ML models designed specifically for insurers to solve core challenges across the policy lifecycle. 
            </p>
                      </Copy>
        </div>

        <div className='flex justify-between w-full  items-center mx-auto pt-[4vw]'>
            {results.map((result) => (

                <div key={result.id} className='flex flex-col  pl-[1.5vw] gap-[1vw] justify-start  w-[30%]'>

                    <div className='w-[5.2vw] h-[5vw]'>
                        <Image src={result.src} width={400} height={400} alt='results-logo' className='h-full w-full object-cover' />
                        </div>
                                 
                        <p className='text-[2.5vw] font-head text-white-200'>
                            {result.title}
                        </p>
                                
                        <Copy>                
                        <p className='text-white-300'>
                            {result.description}
                        </p>
                                  </Copy>
                </div>
            ))}
        </div>

    </section>
  )
}

export default Results