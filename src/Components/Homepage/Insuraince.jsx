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
        <section className="w-screen h-full py-[7%] overflow-hidden" ref={sectionRef}>
            <div className="w-full space-y-[5vw]">
                <div className="text-center gap-y-[2.5vw] w-[65%] mx-auto flex flex-col items-center">
                    <h2 className="title-2">
                        Introducing insurAInce — Purpose-Built AI platform for Insurance Enterprises​
                    </h2>
                    <p data-para-anim className="text-[#CACACA] w-[70%]">
                        Over 75% of insurers are experimenting with AI. Fewer than 20% have scaled a second use case. And, insurAInce changes that. ​
                    </p>
                </div>

                <div className="flex items-center justify-between px-[5vw]">
                    {content.map((data, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="w-[20%] opacity-0"
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
        <div className="w-full space-y-[2vw] relative group">
            <div className=' space-y-[3vw]'>
                <Image
                    src={data.icon}
                    height={98}
                    width={98}
                    alt={data.title}
                    className="w-[5vw] h-[5vw] object-contain"
                />
                <h4 className="text-[2vw] text-white-200 leading-[1.25]">{data.title}</h4>
                <p className="text-white-300 content-p h-28">{data.desc}</p>
            </div>
            <div className="relative w-full h-[1px] bg-[#616161]">
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
        title: 'Built with Insurance DNA​',
        desc: 'Bring use cases into production in as little as 3-4 weeks.',
        icon: '/assets/images/homepage/insuraince-icon-1.svg',
    },
    {
        title: 'One Platform, Infinite Use Cases ​',
        desc: 'Enterprise-grade infrastructure that offers complete control over deployment, monitoring, and retraining.',
        icon: '/assets/images/homepage/insuraince-icon-2.svg',
    },
    {
        title: 'Fast-Track Your AI Rollout​',
        desc: 'Enterprise-grade infrastructure that offers complete control over deployment, monitoring, and retraining.',
        icon: '/assets/images/homepage/insuraince-icon-3.svg',
    },
    {
        title: 'Flexible Deployment, Zero Vendor Lock-In​',
        desc: 'Stay at the forefront of technology with a solution that seamlessly integrates with the latest advancements in AI and data science.',
        icon: '/assets/images/homepage/insuraince-icon-4.svg',
    },
];
