import React from "react";
import Image from "next/image";

const OfficeLocations = () => {
  return (
    <section className="relative h-full  container mb-[20vh]">

         <h2 className='title-1 max-sm:!text-[11.5vw]  text-center headingAnim pb-[5vw]'>
            Our Office Locations
        </h2>
      <div className="w-auto h-[80vh] px-[8vw]  relative ">
        <Image
          src="/assets/images/contact/Group.png"
          width={1200}
          height={1200}
          alt="map"
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="absolute left-[5%] bottom-[25%] w-[20%] space-y-[1vw]">
        <p className="text-head text-[2.6vw]"> USA</p>

        <p className="text-whit-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
      </div>

      <div className="absolute left-[42%] bottom-[5%] w-[20%] space-y-[1vw]">
        <p className="text-head text-[2.6vw]"> Ireland </p>

        <p className="text-whit-300">
          Data Science Wizards Limited, Business Centre, NCI, Mayor Street,
          IFSC, Dublin 1, D01 K6W2
        </p>
      </div>

      <div className="absolute right-[3%] top-[40%] w-[18%] space-y-[1vw]">
        <p className="text-head text-[2.6vw]"> India</p>

        <p className="text-whit-300">
          707, 7th Floor, Lodha Supremus II Road No. 22, Wagle Estate, Thane -
          West - 400604
        </p>
      </div>

      <div className="h-[2.5vw] w-auto absolute top-[38%] left-[25%]">
        <Image src='/assets/images/contact/pin.svg' className="h-full w-full object-cover" width={400} height={400} alt='pin' />
      </div>

       <div className="h-[2.5vw] w-auto absolute top-[30%] left-[44%]">
        <Image src='/assets/images/contact/pin.svg' className="h-full w-full object-cover" width={400} height={400} alt='pin' />
      </div>


       <div className="h-[2.5vw] w-auto absolute bottom-[45%] right-[34%]">
        <Image src='/assets/images/contact/pin.svg' className="h-full w-full object-cover" width={400} height={400} alt='pin' />
      </div>


    </section>
  );
};

export default OfficeLocations;
