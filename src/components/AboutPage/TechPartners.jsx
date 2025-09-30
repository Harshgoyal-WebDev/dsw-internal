"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Copy from "../Animations/Copy";

const ALL_LOGOS = [
 "/assets/images/clients/bon-prix.png",
  "/assets/images/clients/canara-hsbc.png",
  "/assets/images/clients/ciek.png",
  "/assets/images/clients/craft-silicon.png",
  "/assets/images/clients/earc.png",
  "/assets/images/clients/edelweiss-tokio-life.png",
  "/assets/images/clients/edge-verve.png",
  "/assets/images/clients/iifl-capital.png",
  "/assets/images/clients/kelmac-grop.png",
  "/assets/images/clients/manipal-cigna.png",
  "/assets/images/clients/oxsde.png",
  "/assets/images/clients/sodexo.png",
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const make6GroupsOf3to4 = (logos) => {
  const shuffled = shuffle(logos);
  const groups = [[], [], [], [], [], []];

  let i = 0;
  const give = (limit) => {
    let moved = true;
    while (moved && i < shuffled.length) {
      moved = false;
      for (let g = 0; g < 6 && i < shuffled.length; g++) {
        if (groups[g].length < limit) {
          groups[g].push(shuffled[i++]);
          moved = true;
        }
      }
    }
  };

  give(1); 
  give(3);
  give(4);


  let g = 0;
  while (i < shuffled.length) groups[g++ % 6].push(shuffled[i++]);

  return groups;
};


const randomDirection = () => {
  if (Math.random() < 0.5) return { x: Math.random() < 0.5 ? -270 : 270, y: 0 };
  return { y: Math.random() < 0.5 ? -200 : 200, x: 0 };
};

const getRandomIndex = (exclude, length) => {
  if (length <= 1) return 0;
  let idx;
  do { idx = Math.floor(Math.random() * length); } while (idx === exclude);
  return idx;
};

const Card = ({ logos, intervalMs = 3000 }) => {
  const imgRefs = useRef([]);

  const currentIndex = useRef(0);
  const nextIndex = useRef(logos.length > 1 ? 1 : 0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!logos.length) return;
    currentIndex.current = Math.floor(Math.random() * logos.length);
    nextIndex.current = getRandomIndex(currentIndex.current, logos.length);

    const imgs = imgRefs.current;

    imgs.forEach((img, i) => {
      if (!img) return;
      if (i === currentIndex.current) {
        gsap.set(img, { x: 0, y: 0, opacity: 1 });
      } else {
        gsap.set(img, { ...randomDirection(), opacity: 0 });
      }
    });

    setIsInitialized(true);

    const animateNext = () => {
      const curr = imgs[currentIndex.current];
      const next = imgs[nextIndex.current];
      if (!curr || !next) return;

      const outDir = randomDirection();
      let inDir;
      do { inDir = randomDirection(); }
      while (
        (inDir.x !== 0 && inDir.x === outDir.x) ||
        (inDir.y !== 0 && inDir.y === outDir.y)
      );

      gsap.to(curr, { ...outDir, opacity: 0, duration: 1, ease: "power2.out" });
      gsap.fromTo(next, { ...inDir, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" });

      currentIndex.current = nextIndex.current;
      nextIndex.current = getRandomIndex(currentIndex.current, logos.length);
    };

    const id = setInterval(animateNext, intervalMs);
    animateNext(); // start immediately
    return () => clearInterval(id);
  }, [logos, intervalMs]);

  return (
    <div className="w-[17vw] relative bg-[#081B57] h-[22vh] flex justify-center items-center border border-white/10 rounded-[2vw] overflow-hidden max-md:h-[20vh] max-sm:h-[15vh] max-md:w-[40vw] max-md:rounded-[4vw]">
      {logos.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="absolute"
          ref={(el) => (imgRefs.current[i] = el)}
          style={{
            opacity: isInitialized ? undefined : 0,
            visibility: isInitialized ? "visible" : "hidden",
          }}
        >
          <Image
            src={src}
            width={200}
            height={200}
            alt={`logo-${i}`}
            className="h-[6vw] w-auto max-md:h-[15vw]"
            priority={i === 0}
          />
        </div>
      ))}
      {/* {!logos.length && <div className="text-white/60 text-sm">No logos</div>} */}
    </div>
  );
};

const TechPartners = () => {
  const [groups, setGroups] = useState(null);

  useEffect(() => {
    setGroups(make6GroupsOf3to4(ALL_LOGOS));
  }, []);

  return (
    <section className="flex justify-start items-start container max-md:flex-col" id="tech-partners">
      <div className="w-[40%] space-y-[2vw] max-md:w-full max-md:space-y-[10vw] max-md:pb-[10vw]">
        <h2 className="text-60 text-white-200 headingAnim w-[80%]">Technology Partners</h2>
        <Copy>
          <p className="text-white-300 w-[80%] max-md:w-[100%]">
            At Data Science Wizards, we believe that building world-class AI
            solutions requires more than just great ideas—it takes a powerful
            ecosystem. That’s why we partner with industry-leading technology
            providers, cloud platforms, and AI innovators to deliver secure,
            scalable, and future-proof solutions for our clients.
          </p>
        </Copy>
      </div>

      {/* While groups are null during SSR/first paint, render empty cards (no images) to keep markup stable */}
      <div className="h-full w-[60%] grid grid-cols-3 fadeup gap-[1vw] max-md:w-full max-md:grid-cols-2 max-md:gap-[3vw]">
        {(groups ?? [[], [], [], [], [], []]).slice(0, 6).map((logos, i) => (
          <Card key={i} logos={logos} />
        ))}
      </div>
    </section>
  );
};

export default TechPartners;
