import React from "react";
import Image from "next/image";
import Copy from "../Animations/Copy";
import { WorldMap } from "@/components/ui/world-map";

const OfficeLocations = () => {
  return (
    <section className="relative h-full  container space-y-[5vw]  max-sm:!px-[4vw] max-sm:space-y-[7vw]">

         <h2 className='text-90  max-sm:text-left max-sm:px-[3vw] text-center headingAnim'>
            Our Office Locations
        </h2>
        <div className="w-full">
        <WorldMap />
        </div>
      

      <div className="absolute max-sm:static max-sm:px-[3vw] left-[5%] bottom-[25%] w-[20%] space-y-[1vw] max-sm:w-[80%]  max-sm:space-y-[3vw]">
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

      <div className="absolute max-sm:static max-sm:px-[3vw] left-[40%] bottom-[15%] w-[20%] space-y-[1vw] max-sm:w-[80%]  max-sm:space-y-[3vw]">
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

      <div className="absolute max-sm:static max-sm:px-[3vw] right-[3%] top-[47%] w-[18%] space-y-[1vw] max-sm:w-[90%]  max-sm:space-y-[3vw]">
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
