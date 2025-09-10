import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Insuraince = () => {
    const cardRefs = useRef([]);
    const sectionRef = useRef();
    const spanRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });

            spanRefs.current.forEach((span, i) => {
                tl.fromTo(
                    span,
                    {
                        scaleX: 0,
                        transformOrigin: 'left center',
                    },
                    {
                        scaleX: 1,
                        duration: 1,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(span, {
                                scaleX: 0,
                                duration: 0.2,
                            });
                        },
                    },
                    i * 0.5
                );

                tl.fromTo(
                    cardRefs.current[i],
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power2.out',
                    },
                    i * 0.5
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-screen h-full pb-[10vw] pt-[5vw] overflow-hidden" ref={sectionRef}>
            <div className="w-full pt-0 pb-15 space-y-20 px-20">
                <div className="text-center space-y-2 w-fit mx-auto">
                    <h3 className="bg-linear-to-r from-primary-1 to-primary-2 bg-clip-text text-transparent text-[5.2vw] font-medium font-head">
                        InsurAInce
                    </h3>
                    <p data-para-anim className="text-[#CACACA] content-p">
                        Fast-track your Insurance Use Cases with InsurAInce
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    {content.map((data, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="w-[28%] opacity-0"
                        >
                            <Card data={data} spanRef={(el) => (spanRefs.current[index] = el)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insuraince;

const Card = ({ data, spanRef }) => {
    return (
        <div className="w-full space-y-5 relative group">
            <div className=''>
                <Image
                    src={data.icon}
                    height={98}
                    width={98}
                    alt={data.title}
                    className="w-[5vw] h-[5vw] object-contain"
                />
                <h4 className="text-[2.6vw] text-white-200 leading-[1.25]">{data.title}</h4>
                <p className="text-white-300 content-p h-28">{data.desc}</p>
            </div>
            <div className="relative w-full h-[1px] bg-[#616161] mt-30">
                <span
                    ref={spanRef}
                    className="absolute top-0 left-0 h-full bg-primary-1 w-full scale-x-0 origin-left"
                />
                <span
                    className="absolute top-0 left-0 h-full bg-primary-1 w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

const content = [
    {
        title: 'Rapid AI/ML Deployment',
        desc: 'Bring use cases into production in as little as 3-4 weeks.',
        icon: '/assets/icons/rapid.svg',
    },
    {
        title: 'Scalability & Transparency',
        desc: 'Enterprise-grade infrastructure that offers complete control over deployment, monitoring, and retraining.',
        icon: '/assets/icons/scalability.svg',
    },
    {
        title: 'Future-Proofed Innovation',
        desc: 'Stay at the forefront of technology with a solution that seamlessly integrates with the latest advancements in AI and data science.',
        icon: '/assets/icons/rapid.svg',
    },
];
