import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { NextButton, PreviousButton } from '../Button/SliderButtons';

const data = [
  {
    img: "/assets/images/testimonial-1.png",
    name: "Michael Carter",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img: "/assets/images/testimonial-2.png",
    name: "Michael Johnson",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img: "/assets/images/testimonial-3.png",
    name: "Michael Brown",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img: "/assets/images/testimonial-4.png",
    name: "Michael Clark",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img: "/assets/images/testimonial-5.png",
    name: "Michael Davis",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img: "/assets/images/testimonial-6.png",
    name: "Michael Garcia",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
  {
    img: "/assets/images/testimonial-7.png",
    name: "Michael Martinez",
    designation: "Chief Technology Officer, Quantum Insurance",
    title: '"Revolutionized Our AI Workflow"',
    para: "UnifyAI seamlessly integrated into our existing infrastructure, cutting our AI deployment time by 60%. The flexibility to manage multiple AI models in one place has been a game-changer!"
  },
]

const TestimonialCard = ({ item, onSwipe }) => {
  return (
    <>
      <motion.div
        key={item.name + item.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.25 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(event, info) => {
          if (info.offset.x > 100) {
            onSwipe('prev');
          } else if (info.offset.x < -100) {
            onSwipe('next');
          }
        }}
        className="pt-30 pb-16 px-24 w-full h-full flex flex-col items-center space-y-10 text-center"
      >
        <div className='space-y-1'>
          <p className="text-[2.6vw] font-head text-primary-1">{item.name}</p>
          <p data-para-anim className='font-medium text-[1.145vw] text-white-300'>{item.designation}</p>
        </div>
        <div className='space-y-2 flex items-center justify-center flex-col'>
          <p  className='text-[1.145vw] text-white-300'>{item.title}</p>
          <p  className='text-[1.145vw] text-white-300 w-[82%]'>"{item.para}"</p>
        </div>
      </motion.div>
    </>
  );
};


const Testimonials = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % data.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + data.length) % data.length);

  const getThumbOrder = (index) => {
    const total = data.length;
    const half = Math.floor(total / 2);
    let relativeIndex = (index - active + total) % total;
    return relativeIndex <= half ? relativeIndex : relativeIndex - total;
  };

  return (
    <section className='h-full w-screen py-20 relative'>
      <div className='w-full space-y-20'>

        <div className='w-[55%] mx-auto'>
          <h2 className='text-[5.2vw] font-head leading-[1.2] text-center headingAnim text-white-200'>
            Don&apos;t Take It from Us, Take It from Our Clients
          </h2>
        </div>

        {/* Main testimonial */}
        <div className='relative'>
          <div className="relative w-3/5 mx-auto rounded-4xl border border-stone-700 bg-white/5 overflow-hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={data[active].name + data[active].title}
                item={data[active]}
                onSwipe={(dir) => {
                  if (dir === 'next') handleNext();
                  if (dir === 'prev') handlePrev();
                }}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="flex w-[100%] justify-center items-center absolute -top-5 left-1/2 -translate-x-1/2">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                style={{ order: getThumbOrder(index) }}
                className={`w-[5vw] h-[5vw] rounded-full -ml-[20px] ${index === active ? "bg-linear-to-r from-primary-1 to-primary-2 p-1.5 z-10 ml-[20px] mr-[40px] scale-220" : ""
                  } transition-transform duration-500 overflow-hidden  `}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-6 mt-6">
            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
