import React from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";

const OfficeLocations = () => {
  return (
    <section className="relative h-full  container  max-sm:px-0 max-sm:space-y-[7vw]">

         <h2 className='text-90  max-sm:text-left text-center headingAnim'>
            Our Office Locations
        </h2>
      <div className="w-[80vw] h-full max-sm:h-full  relative  fadeup mx-auto">
        <Image
          src="/assets/images/contact/location-map.png"
          width={1565}
          height={1043}
          alt="map"
          className="h-full w-full object-contain scale-[1.2]"
        />
      </div>

      <div className="absolute max-sm:static left-[5%] bottom-[25%] w-[20%] space-y-[1vw] max-sm:w-[80%]  max-sm:space-y-[3vw]">
        <Copy>
        <p className="text-head text-50"> USA</p>
        </Copy>
<Copy>
        <p className="text-white-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
        </Copy>
      </div>

      <div className="absolute max-sm:static left-[40%] bottom-[15%] w-[20%] space-y-[1vw] max-sm:w-[80%]  max-sm:space-y-[3vw]">
        <Copy>
        <p className="text-head text-50"> Ireland </p>
        </Copy>
        <Copy>
        <p className="text-white-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
        </Copy>
      </div>

      <div className="absolute max-sm:static right-[3%] top-[50%] w-[18%] space-y-[1vw] max-sm:w-[80%]  max-sm:space-y-[3vw]">
        <Copy>
        <p className="text-head text-50"> India</p>
        </Copy>
<Copy>
        <p className="text-white-300">
          707, 7th Floor, Lodha Supremus II Road No. 22, Wagle Estate, Thane -
          West - 400604
        </p>
        </Copy>      
        </div>

    </section>
  );
};

export default OfficeLocations;
