"use client";
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';
import { NextButton, PreviousButton } from '../Button/SliderButtons';
gsap.registerPlugin(Draggable, InertiaPlugin);

export default function OsmoSlider() {
    const wrapperRef = useRef(null);
    const translateX = useRef(0);
    const draggableRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const autoPlayRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const autoPlayDelayRef = useRef(null);

    const infiniteItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items];

    // Calculate item width (20vw + 2vw gap)
    const getItemWidth = () => typeof window !== 'undefined' ? window.innerWidth * 0.22 : 220;

    // Auto play functionality
    const startAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        
        autoPlayRef.current = setInterval(() => {
            if (!isAnimatingRef.current) {
                handleRight();
            }
        }, 2000); // Auto advance every 3 seconds
    };

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    };

    const resetAutoPlayDelay = () => {
        stopAutoPlay();
        
        if (autoPlayDelayRef.current) {
            clearTimeout(autoPlayDelayRef.current);
        }
        
        // Restart autoplay after 5 seconds of inactivity
        autoPlayDelayRef.current = setTimeout(() => {
            startAutoPlay();
        }, 500);
    };

    // Calculate which item is in the center
    const calculateActiveIndex = (currentX) => {
        const itemWidth = getItemWidth();
        const totalItemsWidth = items.length * itemWidth;
        const containerCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;

        // Find the card closest to the center of the screen using DOM measurement
        if (wrapperRef.current) {
            const cards = wrapperRef.current.children;
            let closestIndex = 0;
            let minDistance = Infinity;

            Array.from(cards).forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distance = Math.abs(cardCenter - containerCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            // Get the original index from the data attribute
            const centerCard = cards[closestIndex];
            const originalIndex = parseInt(centerCard?.getAttribute('data-original-index') || '0');

            return originalIndex;
        }

        // Fallback calculation
        const adjustedX = Math.abs(currentX + totalItemsWidth * 3);
        const centerItemIndex = Math.round(adjustedX / itemWidth) % items.length;
        return centerItemIndex;
    };

    // Update active card styling and profile functionality
    const updateActiveCard = (currentX) => {
        const newActiveIndex = calculateActiveIndex(currentX);

        // Apply scaling effect to all cards and active styling
        if (wrapperRef.current) {
            const cards = wrapperRef.current.children;
            const itemWidth = getItemWidth();
            const containerCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;

            Array.from(cards).forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distanceFromCenter = Math.abs(cardCenter - containerCenter);
                const maxDistance = itemWidth;

                // Calculate scale based on distance from center
                const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
                const scale = 1 + (0.1 * (1 - normalizedDistance)); // Scale up to 1.1x for center card

                // Get the original index for this card
                const originalIndex = parseInt(card.getAttribute('data-original-index') || '0');
                const isActive = originalIndex === newActiveIndex && distanceFromCenter < itemWidth / 2;

                // Calculate opacity based on whether card is active
                const opacity = isActive ? 1 : 0.4;

                gsap.to(card, {
                    scale: scale,
                    opacity: opacity,
                    duration: 0.4,
                    ease: "power2.out"
                });

                const activeStyling = card.querySelector('.active-styling');

                // Show active styling only on the center card
                if (activeStyling) {
                    if (isActive) {
                        gsap.to(activeStyling, {
                            opacity: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    } else {
                        gsap.to(activeStyling, {
                            opacity: 0,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                }
            });
        }

        // Only update active index and profile pics if it actually changed
        if (newActiveIndex !== activeIndex) {
            setActiveIndex(newActiveIndex);
            updateProfilePics(newActiveIndex);
        }
    };

    // Update profile pics to reflect active card
    const updateProfilePics = (activeIdx) => {
        const profileElements = document.querySelectorAll('.profiles');

        profileElements.forEach((profile, index) => {
            const innerSpan = profile.querySelector('span');

            if (index === activeIdx) {
                // Active profile styling
                profile.classList.add('ring-2', 'ring-white', 'ring-offset-2', 'ring-offset-zinc-800');
                if (innerSpan) {
                    innerSpan.classList.remove('bg-zinc-300');
                    innerSpan.classList.add('bg-white');
                }
            } else {
                // Inactive profile styling
                profile.classList.remove('ring-2', 'ring-white', 'ring-offset-2', 'ring-offset-zinc-800');
                if (innerSpan) {
                    innerSpan.classList.remove('bg-white');
                    innerSpan.classList.add('bg-zinc-300');
                }
            }
        });
    };

    // Ensure infinite movement by checking bounds and repositioning when needed
    const checkAndRepositionForInfiniteScroll = () => {
        if (!wrapperRef.current || !draggableRef.current) return;
        
        const itemWidth = getItemWidth();
        const totalItemsWidth = items.length * itemWidth;
        const currentX = translateX.current;
        
        // If we've moved too far in either direction, silently reposition to maintain infinite effect
        if (currentX > -totalItemsWidth * 2) {
            // Moved too far right, jump back left
            const newX = currentX - totalItemsWidth;
            translateX.current = newX;
            gsap.set(wrapperRef.current, { x: newX });
            draggableRef.current.update();
        } else if (currentX < -totalItemsWidth * 4) {
            // Moved too far left, jump back right
            const newX = currentX + totalItemsWidth;
            translateX.current = newX;
            gsap.set(wrapperRef.current, { x: newX });
            draggableRef.current.update();
        }
    };

    const handleLeft = () => {
        if (!wrapperRef.current || !draggableRef.current || isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        resetAutoPlayDelay();

        const itemWidth = getItemWidth();
        const newX = translateX.current + itemWidth;

        gsap.to(wrapperRef.current, {
            x: newX,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: () => {
                updateActiveCard(gsap.getProperty(wrapperRef.current, "x"));
            },
            onComplete: () => {
                translateX.current = newX;
                draggableRef.current.update();
                updateActiveCard(newX);
                checkAndRepositionForInfiniteScroll(); // Check bounds after animation
                isAnimatingRef.current = false;
            }
        });
    };

    const handleRight = () => {
        if (!wrapperRef.current || !draggableRef.current || isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        
        // Only reset autoplay delay if this is a manual action (not from autoplay)
        if (autoPlayRef.current === null) {
            resetAutoPlayDelay();
        }

        const itemWidth = getItemWidth();
        const newX = translateX.current - itemWidth;

        gsap.to(wrapperRef.current, {
            x: newX,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: () => {
                updateActiveCard(gsap.getProperty(wrapperRef.current, "x"));
            },
            onComplete: () => {
                translateX.current = newX;
                draggableRef.current.update();
                updateActiveCard(newX);
                checkAndRepositionForInfiniteScroll(); // Check bounds after animation
                isAnimatingRef.current = false;
            }
        });
    };

    useEffect(() => {
        const initializeGSAP = async () => {
            if (!wrapperRef.current) return;

            const wrapper = wrapperRef.current;
            const itemWidth = getItemWidth();
            const totalItemsWidth = items.length * itemWidth;

            // Set initial position to middle set (3rd repetition)
            translateX.current = -totalItemsWidth * 3;
            gsap.set(wrapper, { x: translateX.current });

            // Initial active card update with delay to ensure DOM is ready
            setTimeout(() => {
                updateActiveCard(translateX.current);
                // Start autoplay after initialization
                startAutoPlay();
            }, 300);

            // Improved bounds checking function for drag/scroll
            const checkBounds = (currentX, draggableInstance) => {
                const threshold = itemWidth * 0.5; // Smaller threshold for smoother transitions

                // If we've scrolled too far right (past the first set)
                if (currentX > -totalItemsWidth * 2 + threshold) {
                    const newX = currentX - totalItemsWidth;
                    gsap.set(wrapper, { x: newX });
                    if (draggableInstance) {
                        draggableInstance.update();
                    }
                    translateX.current = newX;
                    return newX;
                }
                // If we've scrolled too far left (past the fifth set)
                else if (currentX < -totalItemsWidth * 4 - threshold) {
                    const newX = currentX + totalItemsWidth;
                    gsap.set(wrapper, { x: newX });
                    if (draggableInstance) {
                        draggableInstance.update();
                    }
                    translateX.current = newX;
                    return newX;
                }

                return currentX;
            };

            const draggable = Draggable.create(wrapper, {
                type: "x",
                inertia: true,
                bounds: { minX: -totalItemsWidth * 5, maxX: -totalItemsWidth }, // Wider bounds
                edgeResistance: 0.05,
                snap: {
                    x: function (endValue) {
                        return Math.round(endValue / itemWidth) * itemWidth;
                    }
                },
                onPress: function() {
                    stopAutoPlay();
                    isAnimatingRef.current = false;
                },
                onDrag: function () {
                    if (isAnimatingRef.current) return;
                    const newX = checkBounds(this.x, this);
                    updateActiveCard(newX);
                },
                onThrowUpdate: function () {
                    const newX = checkBounds(this.x, this);
                    updateActiveCard(newX);
                },
                onDragEnd: function () {
                    translateX.current = this.x;
                    updateActiveCard(this.x);
                    resetAutoPlayDelay();
                },
                onThrowComplete: function () {
                    translateX.current = this.x;
                    updateActiveCard(this.x);
                    resetAutoPlayDelay();
                }
            })[0];

            draggableRef.current = draggable;

            // Handle window resize
            const handleResize = () => {
                const newItemWidth = getItemWidth();
                const newTotalWidth = items.length * newItemWidth;
                const oldTotalWidth = totalItemsWidth;
                const ratio = newTotalWidth / oldTotalWidth;

                const newX = translateX.current * ratio;
                translateX.current = newX;
                gsap.set(wrapper, { x: newX });
                if (draggable) {
                    draggable.update();
                }
                updateActiveCard(newX);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                if (draggable) {
                    draggable.kill();
                }
                window.removeEventListener('resize', handleResize);
            };
        };

        initializeGSAP();

        // Cleanup function
        return () => {
            stopAutoPlay();
            if (autoPlayDelayRef.current) {
                clearTimeout(autoPlayDelayRef.current);
            }
        };
    }, []);

    const handleProfileClick = (clickedIndex) => {
        if (!wrapperRef.current || !draggableRef.current || isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        resetAutoPlayDelay();

        const itemWidth = getItemWidth();

        // Calculate the difference between current active index and clicked index
        const indexDifference = clickedIndex - activeIndex;

        // Calculate new position
        const newX = translateX.current - (indexDifference * itemWidth);

        // Animate to the new position
        gsap.to(wrapperRef.current, {
            x: newX,
            duration: 0.6,
            ease: "power2.out",
            onUpdate: () => {
                updateActiveCard(gsap.getProperty(wrapperRef.current, "x"));
            },
            onComplete: () => {
                translateX.current = newX;
                draggableRef.current.update();
                updateActiveCard(newX);
                checkAndRepositionForInfiniteScroll(); // Check bounds after animation
                isAnimatingRef.current = false;
            }
        });
    };

    // Pause autoplay on hover
    const handleMouseEnter = () => {
        stopAutoPlay();
    };

    const handleMouseLeave = () => {
        if (!isAnimatingRef.current) {
            resetAutoPlayDelay();
        }
    };

    return (
        <div 
            className='h-screen w-full bg-zinc-800 flex flex-col gap-[5vw] items-center justify-center'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className=' h-fit w-fit'>
                <div className='flex gap-[.5vw]'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='flex relative flex-col items-center gap-[1vw]'>
                                <div
                                    onClick={() => handleProfileClick(index)}
                                    className={`h-[3vw] profiles relative cursor-pointer bg-zinc-800 rounded-full w-[3vw] transition-all duration-300`}
                                >
                                    <span className='h-[90%] w-[90%] absolute bg-zinc-300 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-300'>
                                    </span>
                                </div>
                                <p className={`text-center leading-none absolute font-black select-none bottom-[-100%] ${activeIndex === index ? 'opacity-100' : 'opacity-0'} transition-all duration-500 text-sm`}>{activeIndex === index ? item.profileName : ''}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="relative trailContainer select-none py-[2vw] w-full h-fit">
                <div
                    ref={wrapperRef}
                    className="flex gap-[2vw] w-fit cursor-grab active:cursor-grabbing overflow-x-scrollhidden"
                    style={{
                        willChange: 'transform'
                    }}
                >
                    {infiniteItems.map((item, index) => {
                        const originalIndex = index % items.length;
                        return (

                            <div
                                key={`${item.id}-${Math.floor(index / items.length)}`}
                                data-item-id={item.id}
                                data-original-index={originalIndex}
                                className={`h-fit relative flex-shrink-0 w-[20vw] bg-zinc-900/0  rounded-[1vw] flex flex-col p-6 translate-x-[-20%] text-white`}
                            >
                                <div className="flex-1 mb-6">
                                    <p className="text-white text-base leading-relaxed font-normal">
                                        {item.content}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0">
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-white font-semibold text-sm tracking-wide">
                                            {item.profileName}
                                        </h3>
                                        <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <div className='active-styling  h-full w-full absolute left-0 top-0 pointer-events-none opacity-0'>
                                    {[
                                        { position: 'top-0 left-0', borders: 'border-t-2 border-l-2' },
                                        { position: 'top-0 right-0', borders: 'border-t-2 border-r-2' },
                                        { position: 'bottom-0 left-0', borders: 'border-b-2 border-l-2' },
                                        { position: 'bottom-0 right-0', borders: 'border-b-2 border-r-2' }
                                    ].map((corner, index) => (
                                        <span key={index} className={`absolute ${corner.position} w-4 h-4 ${corner.borders} border-white transition-opacity duration-300`}></span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='absolute bottom-[10%] right-[5%] flex gap-[1vw]'>
                <PreviousButton onClick={handleLeft} />
                <NextButton onClick={handleRight} />
            </div>
        </div>
    );
}

const items = [
    {
        id: 0,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "CASSIE EVANS",
        subtitle: "DEVELOPER EDUCATION - GSAP"
    },
    {
        id: 1,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "SARAH DRASNER",
        subtitle: "SENIOR DEVELOPER ADVOCATE"
    },
    {
        id: 2,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "CHRIS GANNON",
        subtitle: "CREATIVE DEVELOPER"
    },
    {
        id: 3,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "VAL HEAD",
        subtitle: "DESIGN ADVOCATE"
    },
    {
        id: 4,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "RACHEL NABORS",
        subtitle: "WEB ANIMATIONS EXPERT"
    },
    {
        id: 5,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "ALEX TROST",
        subtitle: "MOTION DESIGNER"
    },
    {
        id: 6,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "BLAKE BOWEN",
        subtitle: "CREATIVE TECHNOLOGIST"
    },
    {
        id: 7,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "JACK DOYLE",
        subtitle: "GSAP CREATOR"
    }
];