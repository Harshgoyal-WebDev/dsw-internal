"use client";
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

// Default slide data
const defaultSlides = [
    {
        id: 0,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "CASSIE EVANS",
        subtitle: "DEVELOPER EDUCATION - GSAP",
        profileImage: null
    },
    {
        id: 1,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "SARAH DRASNER",
        subtitle: "SENIOR DEVELOPER ADVOCATE",
        profileImage: null
    },
    {
        id: 2,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "CHRIS GANNON",
        subtitle: "CREATIVE DEVELOPER",
        profileImage: null
    },
    {
        id: 3,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "VAL HEAD",
        subtitle: "DESIGN ADVOCATE",
        profileImage: null
    },
    {
        id: 4,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "RACHEL NABORS",
        subtitle: "WEB ANIMATIONS EXPERT",
        profileImage: null
    },
    {
        id: 5,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "ALEX TROST",
        subtitle: "MOTION DESIGNER",
        profileImage: null
    },
    {
        id: 6,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "BLAKE BOWEN",
        subtitle: "CREATIVE TECHNOLOGIST",
        profileImage: null
    },
    {
        id: 7,
        content: "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
        profileName: "JACK DOYLE",
        subtitle: "GSAP CREATOR",
        profileImage: null
    }
];

// Default Navigation Buttons
const DefaultPreviousButton = ({ onClick, className = "" }) => (
    <button
        onClick={onClick}
        className={`bg-zinc-700 hover:bg-zinc-600 text-white p-3 rounded-full transition-all duration-300 ${className}`}
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

const DefaultNextButton = ({ onClick, className = "" }) => (
    <button
        onClick={onClick}
        className={`bg-zinc-700 hover:bg-zinc-600 text-white p-3 rounded-full transition-all duration-300 ${className}`}
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
);

export default function OsmoSlider({
    // Core Data
    slides = defaultSlides, //ARRAY OF SLIDES

    // Layout & Styling
    containerClassName = "h-screen w-full bg-zinc-800 flex flex-col gap-[5vw] items-center justify-center",
    slideWidth = "20vw",
    slideGap = "2vw",
    slideClassName = "h-fit relative flex-shrink-0 bg-zinc-900/10  rounded-[1vw] flex flex-col p-6 text-white",

    // Profile Configuration
    showProfiles = true,
    profilesPosition = "top", // "top" | "bottom" | "none"
    profileClassName = "h-[3vw] w-[3vw] relative cursor-pointer bg-zinc-800 rounded-full transition-all duration-300",
    profileInnerClassName = "h-[90%] w-[90%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-300",
    profileNameClassName = "text-center leading-none absolute font-black select-none bottom-[-100%] transition-all duration-500 text-sm",

    // Active Styling
    showActiveCorners = true,
    activeOpacity = 1,
    inactiveOpacity = 0.15,
    activeScale = 1.05,
    inactiveScale = 1,

    // Animation Settings
    animationDuration = 0.6,
    animationEase = "power2.out",
    autoPlay = true,
    autoPlaySpeed = 5000, 
    autoPlayDelay = 500, 

    // Navigation
    showNavigation = true,
    navigationPosition = "bottom-right", // "bottom-left" | "bottom-right" | "top-left" | "top-right" | "custom"
    navigationClassName = "flex gap-[1vw]",
    customNavigationPosition = "bottom-[10%] right-[5%]",
    PreviousButton = DefaultPreviousButton,
    NextButton = DefaultNextButton,

    // Interaction
    enableDrag = true,
    enableProfileClick = true,
    enableAutoPlayPause = true, // pause on hover
    snapToSlides = true,

    // Responsive
    responsiveBreakpoints = {
        mobile: { slideWidth: "80vw", profileSize: "8vw" },
        tablet: { slideWidth: "40vw", profileSize: "5vw" },
        desktop: { slideWidth: "20vw", profileSize: "3vw" }
    },

    // Callbacks
    onSlideChange = null, // (activeIndex, slideData) => {}
    onSlideClick = null, // (slideIndex, slideData) => {}
    onProfileClick = null, // (profileIndex, slideData) => {}

    // Custom Renderers
    renderSlideContent = null, // (slide, index, isActive) => JSX
    renderProfileContent = null, // (slide, index, isActive) => JSX

    // Advanced
    infiniteLoop = true,
    edgeResistance = 0.05,
    boundsMultiplier = 5, // affects scroll bounds
}) {
    // Refs
    const wrapperRef = useRef(null);
    const translateX = useRef(0);
    const draggableRef = useRef(null);
    const autoPlayRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const autoPlayDelayRef = useRef(null);

    // State
    const [activeIndex, setActiveIndex] = useState(null);

    // Computed values
    const infiniteItems = infiniteLoop
        ? [...slides, ...slides, ...slides, ...slides, ...slides, ...slides, ...slides]
        : slides;

    // Utility Functions
    const getItemWidth = () => {
        if (typeof window === 'undefined') return 220;
        const vwValue = parseFloat(slideWidth.replace('vw', ''));
        const gapValue = parseFloat(slideGap.replace('vw', ''));
        return window.innerWidth * ((vwValue + gapValue) / 100);
    };

    const getNavigationPositionClass = () => {
        const positions = {
            "bottom-left": "absolute bottom-[10%] left-[5%]",
            "bottom-right": "absolute bottom-[10%] right-[5%]",
            "top-left": "absolute top-[10%] left-[5%]",
            "top-right": "absolute top-[10%] right-[5%]",
            "custom": `absolute ${customNavigationPosition}`
        };
        return positions[navigationPosition] || positions["bottom-right"];
    };

    // Auto Play Functions
    const startAutoPlay = () => {
        if (!autoPlay) return;
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        autoPlayRef.current = setInterval(() => {
            if (!isAnimatingRef.current) {
                handleRight();
            }
        }, autoPlaySpeed);
    };

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    };

    const resetAutoPlayDelay = () => {
        if (!autoPlay) return;
        stopAutoPlay();

        if (autoPlayDelayRef.current) {
            clearTimeout(autoPlayDelayRef.current);
        }

        autoPlayDelayRef.current = setTimeout(() => {
            startAutoPlay();
        }, autoPlayDelay);
    };

    // Active Index Calculation
    const calculateActiveIndex = (currentX) => {
        const itemWidth = getItemWidth();
        const totalItemsWidth = slides.length * itemWidth;
        const containerCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;

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

            const centerCard = cards[closestIndex];
            const originalIndex = parseInt(centerCard?.getAttribute('data-original-index') || '0');
            return originalIndex;
        }

        if (!infiniteLoop) {
            const adjustedX = Math.abs(currentX);
            return Math.min(Math.max(Math.round(adjustedX / itemWidth), 0), slides.length - 1);
        }

        const adjustedX = Math.abs(currentX + totalItemsWidth * 3);
        const centerItemIndex = Math.round(adjustedX / itemWidth) % slides.length;
        return centerItemIndex;
    };

    // Update Functions
    const updateActiveCard = (currentX) => {
        const newActiveIndex = calculateActiveIndex(currentX);

        if (wrapperRef.current) {
            const cards = wrapperRef.current.children;
            const itemWidth = getItemWidth();
            const containerCenter = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;

            Array.from(cards).forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const distanceFromCenter = Math.abs(cardCenter - containerCenter);
                const maxDistance = itemWidth;

                const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
                const scale = inactiveScale + ((activeScale - inactiveScale) * (1 - normalizedDistance));

                const originalIndex = parseInt(card.getAttribute('data-original-index') || '0');
                const isActive = originalIndex === newActiveIndex && distanceFromCenter < itemWidth / 2;

                const opacity = isActive ? activeOpacity : inactiveOpacity;

                gsap.to(card, {
                    scale: scale,
                    opacity: opacity,
                    duration: 0.4,
                    ease: animationEase
                });

                if (showActiveCorners) {
                    const activeStyling = card.querySelector('.active-styling');
                    if (activeStyling) {
                        gsap.to(activeStyling, {
                            opacity: isActive ? 1 : 0,
                            duration: 0.4,
                            ease: animationEase
                        });
                    }
                }
            });
        }

        if (newActiveIndex !== activeIndex) {
            setActiveIndex(newActiveIndex);
            updateProfilePics(newActiveIndex);

            // Trigger callback
            if (onSlideChange && slides[newActiveIndex]) {
                onSlideChange(newActiveIndex, slides[newActiveIndex]);
            }
        }
    };

    const updateProfilePics = (activeIdx) => {
        if (!showProfiles) return;

        const profileElements = document.querySelectorAll('.profiles');
        profileElements.forEach((profile, index) => {
            const innerSpan = profile.querySelector('span');

            if (index === activeIdx) {
                profile.classList.add('ring-2', 'ring-white', 'ring-offset-2', 'ring-offset-zinc-800');
                if (innerSpan) {
                    innerSpan.classList.remove('bg-zinc-300');
                    innerSpan.classList.add('bg-white');
                }
            } else {
                profile.classList.remove('ring-2', 'ring-white', 'ring-offset-2', 'ring-offset-zinc-800');
                if (innerSpan) {
                    innerSpan.classList.remove('bg-white');
                    innerSpan.classList.add('bg-zinc-300');
                }
            }
        });
    };

    // Infinite Scroll Positioning
    const checkAndRepositionForInfiniteScroll = () => {
        if (!infiniteLoop || !wrapperRef.current || !draggableRef.current) return;

        const itemWidth = getItemWidth();
        const totalItemsWidth = slides.length * itemWidth;
        const currentX = translateX.current;

        if (currentX > -totalItemsWidth * 2) {
            const newX = currentX - totalItemsWidth;
            translateX.current = newX;
            gsap.set(wrapperRef.current, { x: newX });
            draggableRef.current.update();
        } else if (currentX < -totalItemsWidth * 4) {
            const newX = currentX + totalItemsWidth;
            translateX.current = newX;
            gsap.set(wrapperRef.current, { x: newX });
            draggableRef.current.update();
        }
    };

    // Navigation Handlers
    const handleLeft = () => {
        if (!wrapperRef.current || (!infiniteLoop && !draggableRef.current) || isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        resetAutoPlayDelay();

        const itemWidth = getItemWidth();
        let newX;

        if (infiniteLoop) {
            newX = translateX.current + itemWidth;
        } else {
            newX = Math.min(translateX.current + itemWidth, 0);
        }

        gsap.to(wrapperRef.current, {
            x: newX,
            duration: animationDuration,
            ease: animationEase,
            onUpdate: () => {
                updateActiveCard(gsap.getProperty(wrapperRef.current, "x"));
            },
            onComplete: () => {
                translateX.current = newX;
                if (draggableRef.current) {
                    draggableRef.current.update();
                }
                updateActiveCard(newX);
                if (infiniteLoop) {
                    checkAndRepositionForInfiniteScroll();
                }
                isAnimatingRef.current = false;
            }
        });
    };

    const handleRight = () => {
        if (!wrapperRef.current || (!infiniteLoop && !draggableRef.current) || isAnimatingRef.current) return;

        isAnimatingRef.current = true;

        if (autoPlayRef.current === null) {
            resetAutoPlayDelay();
        }

        const itemWidth = getItemWidth();
        let newX;

        if (infiniteLoop) {
            newX = translateX.current - itemWidth;
        } else {
            const maxScroll = -(slides.length - 1) * itemWidth;
            newX = Math.max(translateX.current - itemWidth, maxScroll);
        }

        gsap.to(wrapperRef.current, {
            x: newX,
            duration: animationDuration,
            ease: animationEase,
            onUpdate: () => {
                updateActiveCard(gsap.getProperty(wrapperRef.current, "x"));
            },
            onComplete: () => {
                translateX.current = newX;
                if (draggableRef.current) {
                    draggableRef.current.update();
                }
                updateActiveCard(newX);
                if (infiniteLoop) {
                    checkAndRepositionForInfiniteScroll();
                }
                isAnimatingRef.current = false;
            }
        });
    };

    // Click Handlers
    const handleProfileClick = (clickedIndex) => {
        if (!enableProfileClick || !wrapperRef.current || isAnimatingRef.current) return;

        isAnimatingRef.current = true;
        resetAutoPlayDelay();

        const itemWidth = getItemWidth();
        const indexDifference = clickedIndex - activeIndex;
        const newX = translateX.current - (indexDifference * itemWidth);

        gsap.to(wrapperRef.current, {
            x: newX,
            duration: animationDuration,
            ease: animationEase,
            onUpdate: () => {
                updateActiveCard(gsap.getProperty(wrapperRef.current, "x"));
            },
            onComplete: () => {
                translateX.current = newX;
                if (draggableRef.current) {
                    draggableRef.current.update();
                }
                updateActiveCard(newX);
                if (infiniteLoop) {
                    checkAndRepositionForInfiniteScroll();
                }
                isAnimatingRef.current = false;
            }
        });

        // Trigger callback
        if (onProfileClick && slides[clickedIndex]) {
            onProfileClick(clickedIndex, slides[clickedIndex]);
        }
    };

    const handleSlideClick = (slideIndex) => {
        if (onSlideClick && slides[slideIndex]) {
            onSlideClick(slideIndex, slides[slideIndex]);
        }
    };

    // Mouse Event Handlers
    const handleMouseEnter = () => {
        if (enableAutoPlayPause) {
            stopAutoPlay();
        }
    };

    const handleMouseLeave = () => {
        if (enableAutoPlayPause && !isAnimatingRef.current) {
            resetAutoPlayDelay();
        }
    };

    // Content Renderers
    const defaultSlideRenderer = (slide, index, isActive) => (
        <>
            <div className="flex-1 mb-6 max-md:mb-[3vw]">
                <p className="text-white text-base leading-relaxed font-normal">
                    {slide.content}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0">
                    {slide.profileImage && (
                        <img
                            src={slide.profileImage}
                            alt={slide.profileName}
                            className="w-full h-full rounded-full object-cover"
                        />
                    )}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white  text-sm tracking-wide">
                        {slide.profileName}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                        {slide.subtitle}
                    </p>
                </div>
            </div>
        </>
    );

    const defaultProfileRenderer = (slide, index, isActive) => (
        <>
            <span className={`${profileInnerClassName}  ${isActive ? 'bg-white' : 'bg-zinc-300'}`}></span>
            {slide.profileImage && (
                <img
                    src={slide.profileImage}
                    alt={slide.profileName}
                    className="h-[85%] w-[85%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full object-cover"
                />
            )}
        </>
    );

    // Components
    const ProfilesSection = () => {
        if (!showProfiles) return null;

        return (
            <div className='h-fit w-fit'>
                <div className='flex gap-[.5vw]'>
                    {slides.map((slide, index) => (
                        <div key={index} className='flex relative flex-col items-center gap-[1vw]'>
                            <div
                                onClick={() => handleProfileClick(index)}
                                className={`profiles hover:border-white hover:border ${profileClassName}`}
                            >
                                {renderProfileContent
                                    ? renderProfileContent(slide, index, activeIndex === index)
                                    : defaultProfileRenderer(slide, index, activeIndex === index)
                                }
                            </div>
                            <p className={`${profileNameClassName} ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                {activeIndex === index ? slide.profileName : ''}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Effects
    useEffect(() => {
        const initializeGSAP = async () => {
            if (!wrapperRef.current) return;

            const wrapper = wrapperRef.current;
            const itemWidth = getItemWidth();
            const totalItemsWidth = slides.length * itemWidth;

            if (infiniteLoop) {
                translateX.current = -totalItemsWidth * 3;
            } else {
                translateX.current = 0;
            }

            gsap.set(wrapper, { x: translateX.current });

            setTimeout(() => {
                updateActiveCard(translateX.current);
                if (autoPlay) {
                    startAutoPlay();
                }
            }, 300);

            if (enableDrag) {
                const checkBounds = (currentX, draggableInstance) => {
                    if (!infiniteLoop) return currentX;

                    const threshold = itemWidth * 0.5;

                    if (currentX > -totalItemsWidth * 2 + threshold) {
                        const newX = currentX - totalItemsWidth;
                        gsap.set(wrapper, { x: newX });
                        if (draggableInstance) {
                            draggableInstance.update();
                        }
                        translateX.current = newX;
                        return newX;
                    }
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

                const bounds = infiniteLoop
                    ? { minX: -totalItemsWidth * boundsMultiplier, maxX: -totalItemsWidth }
                    : { minX: -(slides.length - 1) * itemWidth, maxX: 0 };

                const draggable = Draggable.create(wrapper, {
                    type: "x",
                    inertia: true,
                    bounds: bounds,
                    edgeResistance: edgeResistance,
                    snap: snapToSlides ? {
                        x: function (endValue) {
                            return Math.round(endValue / itemWidth) * itemWidth;
                        }
                    } : false,
                    onPress: function () {
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
            }

            const handleResize = () => {
                const newItemWidth = getItemWidth();
                const newTotalWidth = slides.length * newItemWidth;
                const oldTotalWidth = totalItemsWidth;
                const ratio = newTotalWidth / oldTotalWidth;

                const newX = translateX.current * ratio;
                translateX.current = newX;
                gsap.set(wrapper, { x: newX });
                if (draggableRef.current) {
                    draggableRef.current.update();
                }
                updateActiveCard(newX);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                if (draggableRef.current) {
                    draggableRef.current.kill();
                }
                window.removeEventListener('resize', handleResize);
            };
        };

        initializeGSAP();

        return () => {
            stopAutoPlay();
            if (autoPlayDelayRef.current) {
                clearTimeout(autoPlayDelayRef.current);
            }
        };
    }, [slides]);

    // Render
    return (
        <div
            className={containerClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {profilesPosition === "top" && <ProfilesSection />}

            <div className="relative  trailContainer select-none py-[2vw] w-full h-fit">
                <div
                    ref={wrapperRef}
                    className={`flex w-fit ${enableDrag ? 'cursor-grab active:cursor-grabbing' : ''} `}
                    style={{
                        willChange: 'transform',
                        gap: slideGap
                    }}
                >
                    {infiniteItems.map((slide, index) => {
                        const originalIndex = index % slides.length;
                        const isActive = originalIndex === activeIndex;

                        return (
                            <div
                                key={`${slide.id}-${Math.floor(index / slides.length)}`}
                                data-item-id={slide.id}
                                data-original-index={originalIndex}
                                className={slideClassName}
                                style={{ width: slideWidth }}
                                onClick={() => handleSlideClick(originalIndex)}
                            >
                                {renderSlideContent
                                    ? renderSlideContent(slide, originalIndex, isActive)
                                    : defaultSlideRenderer(slide, originalIndex, isActive)
                                }

                                {showActiveCorners && (
                                    <div className='active-styling h-full w-full absolute left-0 z-[10] top-0 pointer-events-none opacity-0'>
                                        {[
                                            { position: 'top-0 left-0', borders: 'border-t-2 border-l-2' },
                                            { position: 'top-0 right-0', borders: 'border-t-2 border-r-2' },
                                            { position: 'bottom-0 left-0', borders: 'border-b-2 border-l-2' },
                                            { position: 'bottom-0 right-0', borders: 'border-b-2 border-r-2' }
                                        ].map((corner, index) => (
                                            <span key={index} className={`absolute ${corner.position} w-4 h-4 ${corner.borders} border-white transition-opacity duration-300`}></span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {profilesPosition === "bottom" && <ProfilesSection />}

            {showNavigation && (
                <div className={`${getNavigationPositionClass()} ${navigationClassName}`}>
                    <PreviousButton onClick={handleLeft} />
                    <NextButton onClick={handleRight} />
                </div>
            )}
        </div>
    );
}