"use client";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import { NextButton, PreviousButton } from "../Button/SliderButtons";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function SwiperV2({
  renderProfileContent,
  offSetMultiplier = 2,
  showProfiles = true,
  autoplay = true,
  autoplayDelay = 3000,

  profileInnerClassName = "h-[85%] w-[85%]  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-300",
  profileClassName = "h-[3vw] w-[3vw] max-md:w-[8vw] max-md:h-[8vw] relative cursor-pointer bg-zinc-800 hover:border hover:border-white rounded-full transition-all duration-100",

  profileNameClassName = "text-center leading-none  font-black select-none text-sm",
}) {
  const wrapperRef = useRef(null);
  const boxesRef = useRef([]);
  const loopRef = useRef(null);
  const cleanupRef = useRef(null);
  const autoplayRef = useRef(null);
  const isInitializedRef = useRef(false);

  // Calculate initial index based on screen size
  const getInitialIndex = useCallback(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 1025;
    return isMobile ? 3 : 3;
  }, []);

  const [activeIndex, setActiveIndex] = useState(getInitialIndex);

  const highlightActiveCard = useCallback((element, index) => {
    // Remove active class from all cards and set opacity to 0.4
    boxesRef.current.forEach((box, i) => {
      if (box) {
        box.classList.remove("active");
        gsap.to(box, { 
          opacity: 0.4, 
          duration: 0.3,
          ease: "cubic-bezier(0.625, 0.05, 0, 1)" 
        });
        const activeStyleEl = box.querySelector(".active-styling");
        if (activeStyleEl) {
          gsap.to(activeStyleEl, { 
            opacity: 0, 
            duration: 0.3,
            ease: "cubic-bezier(0.625, 0.05, 0, 1)" 
          });
        }
      }
    });

    // Add active class to current element and set opacity to 1
    if (element) {
      element.classList.add("active");
      gsap.to(element, { 
        opacity: 1,
        duration: 0.3,
        ease: "cubic-bezier(0.625, 0.05, 0, 1)"
      });
      const activeStyleEl = element.querySelector(".active-styling");
      if (activeStyleEl) {
        gsap.to(activeStyleEl, { 
          opacity: 1,
          duration: 0.3,
          ease: "cubic-bezier(0.625, 0.05, 0, 1)"
        });
      }
      setActiveIndex(index);
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!autoplay || !loopRef.current) return;

    autoplayRef.current = setInterval(() => {
      if (loopRef.current) {
        loopRef.current.next({
          duration: 0.8,
          ease: "cubic-bezier(0.625, 0.05, 0, 1)",
        });
      }
    }, autoplayDelay);
  }, [autoplay, autoplayDelay]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const resetAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleProfileClick = useCallback(
    (index) => {
      if (loopRef.current) {
        loopRef.current.toIndex(index, {
          duration: 0.8,
          ease: "cubic-bezier(0.625, 0.05, 0, 1)",
        });
        resetAutoplay();
      }
    },
    [resetAutoplay]
  );

  //FALTU
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 1025;
    if (loopRef.current) {
      loopRef.current.toIndex(5, {
        duration: 0.8,
        ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      });
    }
  }, []);

  const defaultProfileRenderer = useCallback(
    (slide, index, isActive) => {
      return (
        <>
          <span
            className={`${profileInnerClassName} ${isActive ? "bg-zinc-500" : "bg-zinc-500"}`}
          ></span>
          {slide.profileImage && (
            <img
              src={slide.profileImage}
              alt={slide.profileName}
              className="h-[85%] w-[85%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full object-cover"
            />
          )}
        </>
      );
    },
    [profileInnerClassName]
  );

  const ProfilesSection = useMemo(() => {
    if (!showProfiles) return null;

    return (
      <div className="h-fit absolute flex items-center justify-center top-[15%]  w-[100vw]">
        <div className="flex max-md:flex-wrap gap-[.5vw]">
          {items.map((slide, index) => (
            <div
              key={index}
              className="flex relative  flex-col items-center gap-[1vw]"
            >
              <div
                onClick={() => handleProfileClick(index)}
                className={`profiles hover:bg-white/10 hover:scale-90 ${profileClassName}`}
              >
                {renderProfileContent
                  ? renderProfileContent(slide, index, activeIndex === index)
                  : defaultProfileRenderer(slide, index, activeIndex === index)}
              </div>
              <p
                className={`${profileNameClassName} absolute bottom-[-80%] max-md:bottom-[-100%] bg-black transition-opacity duration-500  ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                {slide.profileName}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }, [
    showProfiles,
    activeIndex,
    handleProfileClick,
    profileClassName,
    profileNameClassName,
    renderProfileContent,
    defaultProfileRenderer,
  ]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const boxes = boxesRef.current.filter(Boolean);
    let activeElement = null;

    const horizontalLoop = (items, config) => {
      let timeline;
      items = gsap.utils.toArray(items);
      config = config || {};
      gsap.context(() => {
        let onChange = config.onChange,
          lastIndex = 0,
          tl = gsap.timeline({
            repeat: config.repeat,
            onUpdate:
              onChange &&
              function () {
                let i = tl.closestIndex();
                if (lastIndex !== i) {
                  lastIndex = i;
                  onChange(items[i], i);
                }
              },
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () =>
              tl.totalTime(tl.rawTime() + tl.duration() * 100),
          }),
          length = items.length,
          startX = items[0].offsetLeft * offSetMultiplier,
          times = [],
          widths = [],
          spaceBefore = [],
          xPercents = [],
          curIndex = 0,
          indexIsDirty = false,
          center = config.center,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap =
            config.snap === false
              ? (v) => v
              : gsap.utils.snap(config.snap || 1),
          timeOffset = 0,
          container =
            center === true
              ? items[0].parentNode
              : gsap.utils.toArray(center)[0] || items[0].parentNode,
          totalWidth,
          getTotalWidth = () =>
            items[length - 1].offsetLeft +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            spaceBefore[0] +
            items[length - 1].offsetWidth *
              gsap.getProperty(items[length - 1], "scaleX") +
            (parseFloat(config.paddingRight) || 0),
          populateWidths = () => {
            let b1 = container.getBoundingClientRect(),
              b2;
            items.forEach((el, i) => {
              widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
              xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) *
                  100 +
                  gsap.getProperty(el, "xPercent")
              );
              b2 = el.getBoundingClientRect();
              spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
              b1 = b2;
            });
            gsap.set(items, {
              xPercent: (i) => xPercents[i],
            });
            totalWidth = getTotalWidth();
          },
          timeWrap,
          populateOffsets = () => {
            timeOffset = center
              ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
              : 0;
            center &&
              times.forEach((t, i) => {
                times[i] = timeWrap(
                  tl.labels["label" + i] +
                    (tl.duration() * widths[i]) / 2 / totalWidth -
                    timeOffset
                );
              });
          },
          getClosest = (values, value, wrap) => {
            let i = values.length,
              closest = 1e10,
              index = 0,
              d;
            while (i--) {
              d = Math.abs(values[i] - value);
              if (d > wrap / 2) {
                d = wrap - d;
              }
              if (d < closest) {
                closest = d;
                index = i;
              }
            }
            return index;
          },
          populateTimeline = () => {
            let i, item, curX, distanceToStart, distanceToLoop;
            tl.clear();
            for (i = 0; i < length; i++) {
              item = items[i];
              curX = (xPercents[i] / 100) * widths[i];
              distanceToStart =
                item.offsetLeft + curX - startX + spaceBefore[0];
              distanceToLoop =
                distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
              tl.to(
                item,
                {
                  xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                  duration: distanceToLoop / pixelsPerSecond,
                },
                0
              )
                .fromTo(
                  item,
                  {
                    xPercent: snap(
                      ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                  },
                  {
                    xPercent: xPercents[i],
                    duration:
                      (curX - distanceToLoop + totalWidth - curX) /
                      pixelsPerSecond,
                    immediateRender: false,
                  },
                  distanceToLoop / pixelsPerSecond
                )
                .add("label" + i, distanceToStart / pixelsPerSecond);
              times[i] = distanceToStart / pixelsPerSecond;
            }
            timeWrap = gsap.utils.wrap(0, tl.duration());
          },
          refresh = (deep) => {
            let progress = tl.progress();
            tl.progress(0, true);
            populateWidths();
            deep && populateTimeline();
            populateOffsets();
            deep && tl.draggable && tl.paused()
              ? tl.time(times[curIndex], true)
              : tl.progress(progress, true);
          },
          onResize = () => refresh(true),
          proxy;
        gsap.set(items, { x: 0 });
        populateWidths();
        populateTimeline();
        populateOffsets();
        window.addEventListener("resize", onResize);
        function toIndex(index, vars) {
          vars = vars || {};
          Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length);
          let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
          if (time > tl.time() !== index > curIndex && index !== curIndex) {
            time += tl.duration() * (index > curIndex ? 1 : -1);
          }
          if (time < 0 || time > tl.duration()) {
            vars.modifiers = { time: timeWrap };
          }
          curIndex = newIndex;
          vars.overwrite = true;
          gsap.killTweensOf(proxy);
          return vars.duration === 0
            ? tl.time(timeWrap(time))
            : tl.tweenTo(time, vars);
        }
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.closestIndex = (setCurrent) => {
          let index = getClosest(times, tl.time(), tl.duration());
          if (setCurrent) {
            curIndex = index;
            indexIsDirty = false;
          }
          return index;
        };
        tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
        tl.next = (vars) => toIndex(tl.current() + 1, vars);
        tl.previous = (vars) => toIndex(tl.current() - 1, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true);
        if (config.reversed) {
          tl.vars.onReverseComplete();
          tl.reverse();
        }
        if (config.draggable && typeof Draggable === "function") {
          proxy = document.createElement("div");
          let wrap = gsap.utils.wrap(0, 1),
            ratio,
            startProgress,
            draggable,
            lastSnap,
            initChangeX,
            wasPlaying,
            align = () =>
              tl.progress(
                wrap(startProgress + (draggable.startX - draggable.x) * ratio)
              ),
            syncIndex = () => tl.closestIndex(true);
          typeof InertiaPlugin === "undefined" &&
            console.warn(
              "InertiaPlugin required for momentum-based scrolling and snapping."
            );
          draggable = Draggable.create(proxy, {
            trigger: items[0].parentNode,
            type: "x",
            onPressInit() {
              let x = this.x;
              gsap.killTweensOf(tl);
              wasPlaying = !tl.paused();
              tl.pause();
              startProgress = tl.progress();
              refresh();
              ratio = 1 / totalWidth;
              initChangeX = startProgress / -ratio - x;
              gsap.set(proxy, { x: startProgress / -ratio });
              stopAutoplay(); // Stop autoplay when user starts dragging
            },
            onDrag: align,
            onThrowUpdate: align,
            overshootTolerance: 0,
            inertia: true,
            snap(value) {
              if (Math.abs(startProgress / -ratio - this.x) < 10) {
                return lastSnap + initChangeX;
              }
              let time = -(value * ratio) * tl.duration(),
                wrappedTime = timeWrap(time),
                snapTime = times[getClosest(times, wrappedTime, tl.duration())],
                dif = snapTime - wrappedTime;
              Math.abs(dif) > tl.duration() / 2 &&
                (dif += dif < 0 ? tl.duration() : -tl.duration());
              lastSnap = (time + dif) / tl.duration() / -ratio;
              return lastSnap;
            },
            onRelease() {
              syncIndex();
              draggable.isThrowing && (indexIsDirty = true);
            },
            onThrowComplete: () => {
              syncIndex();
              wasPlaying && tl.play();
              startAutoplay(); // Restart autoplay after dragging is complete
            },
          })[0];
          tl.draggable = draggable;
        }

        // Set the initial index correctly
        const initialIndex = getInitialIndex();
        curIndex = initialIndex;
        tl.closestIndex(true);

        // Initialize the onChange callback with the correct index
        if (onChange) {
          onChange(items[initialIndex], initialIndex);
        }

        // cleanup
        cleanupRef.current = () =>
          window.removeEventListener("resize", onResize);
        timeline = tl;
        return () => window.removeEventListener("resize", onResize);
      });
      return timeline;
    };

    const loop = horizontalLoop(boxes, {
      paused: true,
      draggable: true,
      center: true,
      onChange: (element, index) => {
        highlightActiveCard(element, index);
      },
    });
    loopRef.current = loop;

    boxes.forEach((box, i) =>
      box.addEventListener("click", () => {
        loop.toIndex(i, {
          duration: 0.8,
          ease: "cubic-bezier(0.625, 0.05, 0, 1)",
        });
        resetAutoplay();
      })
    );

    // Initialize active card with proper synchronization
    if (boxes.length > 0 && !isInitializedRef.current) {
      const initialIndex = getInitialIndex();

      // Set the timeline to the correct position
      loop.toIndex(initialIndex, { duration: 0 });

      // Highlight the active card
      highlightActiveCard(boxes[initialIndex], initialIndex);

      isInitializedRef.current = true;
    }

    // Start autoplay after initialization
    if (autoplay && isInitializedRef.current) {
      setTimeout(() => {
        startAutoplay();
      }, 100);
    }

    return () => {
      boxes.forEach((box) => box.replaceWith(box.cloneNode(true))); // remove listeners
      cleanupRef.current && cleanupRef.current();
      stopAutoplay(); // Clean up autoplay on unmount
      isInitializedRef.current = false;
    };
  }, [
    highlightActiveCard,
    getInitialIndex,
    autoplay,
    startAutoplay,
    stopAutoplay,
    resetAutoplay,
  ]);

  const handleNext = useCallback(() => {
    loopRef.current &&
      loopRef.current.next({
        duration: 0.4,
        ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      });
    resetAutoplay();
  }, [resetAutoplay]);

  const handlePrev = useCallback(() => {
    loopRef.current &&
      loopRef.current.previous({
        duration: 0.4,
        ease: "cubic-bezier(0.625, 0.05, 0, 1)",
      });
    resetAutoplay();
  }, [resetAutoplay]);

  return (
    <div
      className="w-full h-screen  select-none flex flex-col justify-center items-center  py-10 pb-[20vw] text-white"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {ProfilesSection}

      <div className="wrapper relative  h-fit  w-[100%] " ref={wrapperRef}>
        <div className="carousel h-full translate-x-[30%] max-md:translate-x-[47%]   max-md:translate-y-[-40%] min-h-[50vh] absolute inset-0 flex items-center  max-md:gap-[5vw] justify-center">
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (boxesRef.current[i] = el)}
              className="box p-2 w-[20%] max-md:translate-x-[0%]  max-md:w-[90%] h-fit flex-shrink-0"
            >
              <div className="box__inner py-[3vw]   relative w-full h-full flex flex-col items-center justify-center rounded-lg border-2 border-transparent bg-zinc-800/10 p-6">
                <div className="active-styling h-full w-full absolute left-0 z-[10] top-0 pointer-events-none opacity-0">
                  {[
                    {
                      position: "top-0 left-0",
                      borders: "border-t-2 border-l-2",
                    },
                    {
                      position: "top-0 right-0",
                      borders: "border-t-2 border-r-2",
                    },
                    {
                      position: "bottom-0 left-0",
                      borders: "border-b-2 border-l-2",
                    },
                    {
                      position: "bottom-0 right-0",
                      borders: "border-b-2 border-r-2",
                    },
                  ].map((corner, index) => (
                    <span
                      key={index}
                      className={`absolute ${corner.position} w-4 h-4 ${corner.borders} border-white transition-opacity duration-300`}
                    ></span>
                  ))}
                </div>

                <div className=" mb-4">
                  <p className="text-sm text-gray-300 mb-2 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="flex items-center gap-[1vw] max-md:gap-[4vw] w-full ">
                  {item.profileImage ? (
                    <img
                      src={item.profileImage}
                      alt={item.profileName}
                      className="w-12 h-12 rounded-full mb-2"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 flex-shrink-0 to-purple-500 mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {item.profileName.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="w-full">
                    <h3 className="text-white font-bold text-sm mb-1">
                      {item.profileName}
                    </h3>

                    <p className="text-gray-400  text-xs w-full ">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex absolute bottom-[10%] max-md:left-[50%] max-md:translate-x-[-50%] right-[10%] items-center justify-center flex-wrap gap-3 mb-4">
        <PreviousButton onClick={handlePrev} />
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}

const items = [
  {
    id: 0,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "CASSIE EVANS",
    subtitle: "DEVELOPER EDUCATION - GSAP",
    profileImage: null,
  },
  {
    id: 1,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "SARAH DRASNER",
    subtitle: "SENIOR DEVELOPER ADVOCATE",
    profileImage: null,
  },
  {
    id: 2,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "CHRIS GANNON",
    subtitle: "CREATIVE DEVELOPER",
    profileImage: null,
  },
  {
    id: 3,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "VAL HEAD",
    subtitle: "DESIGN ADVOCATE",
    profileImage: null,
  },
  {
    id: 4,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "RACHEL NABORS",
    subtitle: "WEB ANIMATIONS EXPERT",
    profileImage: null,
  },
  {
    id: 5,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "ALEX TROST",
    subtitle: "MOTION DESIGNER",
    profileImage: null,
  },
  {
    id: 6,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "BLAKE BOWEN",
    subtitle: "CREATIVE TECHNOLOGIST",
    profileImage: null,
  },
  {
    id: 7,
    content:
      "Osmo combines high-quality resources with intuitive guides, making the process of designing standout websites faster and easier, helping creatives to achieve great results in less time.",
    profileName: "JACK DOYLE",
    subtitle: "GSAP CREATOR",
    profileImage: null,
  },
];
