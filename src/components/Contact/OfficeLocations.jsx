import React from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";

const OfficeLocations = () => {
  return (
    <section className="relative h-full  py-[7%] px-[5vw] mb-[20vh] max-sm:px-0">

         <h2 className='title-1 max-sm:pl-[7vw] max-sm:!text-[11.5vw] max-sm:text-left text-center headingAnim pb-[5vw] max-sm:pb-[15vw]'>
            Our Office Locations
        </h2>
      <div className="w-[100vw] h-[80vh] max-sm:h-full px-[8vw] max-sm:px-[2vw]  relative ">
        <Image
          src="/assets/images/contact/Group.png"
          width={1000}
          height={1000}
          alt="map"
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="absolute max-sm:hidden left-[5%] bottom-[25%] w-[20%] space-y-[1vw]">
        <p className="text-head text-[2.6vw]"> USA</p>

        <p className="text-whit-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
      </div>

      <div className="absolute max-sm:hidden left-[42%] bottom-[5%] w-[20%] space-y-[1vw]">
        <p className="text-head text-[2.6vw]"> Ireland </p>

        <p className="text-whit-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
      </div>

      <div className="absolute max-sm:hidden right-[3%] top-[54%] w-[18%] space-y-[1vw]">
        <p className="text-head text-[2.6vw]"> India</p>

        <p className="text-whit-300">
          707, 7th Floor, Lodha Supremus II Road No. 22, Wagle Estate, Thane -
          West - 400604
        </p>
      </div>

      <div className="h-[2.5vw] w-auto absolute max-sm:h-[5.5vw] bottom-[47%] max-sm:top-[28%] max-sm:left-[18%] left-[25%]">
        <Image src='/assets/images/contact/pin.svg' className="h-full w-full object-cover" width={400} height={400} alt='pin' />
      </div>

       <div className="h-[2.5vw] w-auto absolute max-sm:h-[5.5vw] bottom-[53%] max-sm:top-[26%] max-sm:left-[40%] left-[43%]">
        <Image src='/assets/images/contact/pin.svg' className="h-full w-full object-cover" width={400} height={400} alt='pin' />
      </div>


       <div className="h-[2.5vw] w-auto absolute max-sm:h-[5.5vw] bottom-[37%] max-sm:top-[32%] max-sm:right-[28%] right-[32%]">
        <Image src='/assets/images/contact/pin.svg' className="h-full w-full object-cover" width={400} height={400} alt='pin' />
      </div>

      <div className="hidden max-sm:block max-sm:px-[7vw]  max-sm:pt-[7vw] max-sm:space-y-[9vw]">
        <div className=" w-full space-y-[1vw] max-sm:space-y-[3vw]">
          <Copy>

        <p className="text-head text-[2.6vw] max-sm:text-[8vw]"> USA</p>

        <p className="text-whit-300 ">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
          </Copy>
      </div>

      <div className=" w-full space-y-[1vw] max-sm:space-y-[3vw]">
        <Copy>

        <p className="text-head text-[2.6vw] max-sm:text-[8vw]"> India</p>

        <p className="text-whit-300">
          707, 7th Floor, Lodha Supremus II Road No. 22, Wagle Estate, Thane -
          West - 400604
        </p>
        </Copy>
      </div>

      <div className=" w-full space-y-[1vw] max-sm:space-y-[3vw]">

        <Copy>
          
        <p className="text-head text-[2.6vw] max-sm:text-[8vw]"> Ireland </p>

        <p className="text-whit-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
        </Copy>
      </div>

      </div>


    </section>
  );
};

export default OfficeLocations;
