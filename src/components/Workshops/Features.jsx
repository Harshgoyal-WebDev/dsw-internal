import Image from 'next/image';
import React from 'react'


const FeaturesCard = ({ icon, title, para }) => {
  return (
    <>
      <div className=" relative group  max-sm:space-y-[10vw] w-[45%]">
       
        <div className=" pt-[3vw] space-y-[1.5vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-[6vw] max-sm:mt-[10vw] fadeup  w-full">
          <Image
            src={icon}
            height={98}
            width={98}
            alt={title}
            className="w-[5vw] h-[5vw] object-contain max-sm:w-[20vw] max-sm:h-[20vw]"
          />
            <h4 className="text-30 text-white-200 max-sm:!text-[7.5vw] max-sm:w-[72%] max-sm:text-center max-sm:h-fit">
              {title}
            </h4>
            <p className="text-white-300  w-[95%] max-sm:w-[80%] max-sm:text-center max-sm:h-auto">
              {para}
            </p>
          
        </div>
      </div>
    </>
  );
};
const Features = ({featuresData}) => {
  return (
    <section className='h-full w-screen' id='features'>
        <div className='h-full w-full container space-y-[3vw]'>
             <h2 className="text-90 headingAnim text-white-200 max-sm:text-center">
              Who It’s For
            </h2>

     <div className=" w-full max-sm:hidden flex  flex-wrap gap-y-[3vw] justify-between">
            {featuresData.map((card, index) => (
              <FeaturesCard
                key={index}
                icon={card.icon}
                title={card.title}
                para={card.para}
                id={card.id}
              />
            ))}
          </div>
        </div>

    </section>
  )
}

export default Features


