"use client";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Copy from "../Animations/Copy";

// Use useMemo for ALL_LOGOS for stability (no effect here but for structure similarity).
const ALL_LOGOS = [
  "/assets/images/clients/bon-prix-2.png",
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

// Fastest in-place shuffle (Fisher-Yates)
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Group into six as equally as possible
const make6GroupsOf3to4 = (logos) => {
  const shuffled = shuffle(logos);
  const n = shuffled.length;
  const base = Math.floor(n / 6);
  const remainder = n % 6;
  let idx = 0;
  const groups = Array.from({ length: 6 }, (_, g) => {
    const len = base + (g < remainder ? 1 : 0);
    const group = shuffled.slice(idx, idx + len);
    idx += len;
    return group;
  });
  return groups;
};

// Avoid recreating direction objects
const randomDirection = () => (Math.random() < 0.5
  ? { x: Math.random() < 0.5 ? -270 : 270, y: 0 }
  : { x: 0, y: Math.random() < 0.5 ? -200 : 200 }
);

const getRandomIndex = (exclude, length) => {
  if (length <= 1) return 0;
  let idx;
  do {
    idx = Math.floor(Math.random() * length);
  } while (idx === exclude);
  return idx;
};

const Card = React.memo(function Card({ logos, intervalMs = 3000 }) {
  const imgRefs = useRef([]);
  const currentIndex = useRef(0);
  const nextIndex = useRef(logos.length > 1 ? 1 : 0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!logos.length) {
      setIsInitialized(false);
      return;
    }
    currentIndex.current = Math.floor(Math.random() * logos.length);
    nextIndex.current = getRandomIndex(currentIndex.current, logos.length);

    const imgs = imgRefs.current;
    for (let i = 0; i < imgs.length; ++i) {
      const img = imgs[i];
      if (!img) continue;
      if (i === currentIndex.current)
        gsap.set(img, { x: 0, y: 0, opacity: 1 });
      else
        gsap.set(img, { ...randomDirection(), opacity: 0 });
    }

    setIsInitialized(true);

    let id;
    const animateNext = () => {
      const curr = imgs[currentIndex.current];
      const next = imgs[nextIndex.current];
      if (!curr || !next) return;

      const outDir = randomDirection();
      let inDir;
      do {
        inDir = randomDirection();
      } while (
        (inDir.x !== 0 && inDir.x === outDir.x) ||
        (inDir.y !== 0 && inDir.y === outDir.y)
      );

      gsap.to(curr, { ...outDir, opacity: 0, duration: 1, ease: "power2.out" });
      gsap.fromTo(
        next,
        { ...inDir, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      currentIndex.current = nextIndex.current;
      nextIndex.current = getRandomIndex(currentIndex.current, logos.length);
    };
    id = setInterval(animateNext, intervalMs);
    animateNext();

    return () => clearInterval(id);
    // eslint-disable-next-line
  }, [logos, intervalMs]);

  return (
    <div className="w-[17vw] relative bg-[#081B57] h-[22vh] flex justify-center items-center border border-white/10 rounded-[2vw] overflow-hidden max-md:h-[20vh] max-sm:h-[15vh] max-md:w-[40vw] max-md:rounded-[4vw]">
      {logos.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="absolute h-[6vw] w-auto max-md:h-[15vw]"
          ref={el => imgRefs.current[i] = el}
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
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
      {/* {!logos.length && <div className="text-white/60 text-sm">No logos</div>} */}
    </div>
  );
});

const TechPartners = () => {
  const [groups, setGroups] = useState(() => make6GroupsOf3to4(ALL_LOGOS));

  // Only one shuffle on mount, avoid effect rerun
  useEffect(() => {
    setGroups(make6GroupsOf3to4(ALL_LOGOS));
  }, []);

  const emptyGroups = useMemo(() => Array.from({ length: 6 }, () => []), []);

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
        {(groups ?? emptyGroups).slice(0, 6).map((logos, i) => (
          <Card key={i} logos={logos} />
        ))}
      </div>
    </section>
  );
};

export default TechPartners;
