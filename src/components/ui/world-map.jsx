"use client";
import { useRef } from "react";
import { motion } from "motion/react";

export function WorldMap() {
  const svgRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;

  // Convert lat/lng -> svg coords
  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (420 / 180);
    return { x, y };
  };

  // Function to create curved arc path
  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 60;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Locations
  const locations = [
    {
      name: "USA",
      address:
        "Data Science Wizards Limited, Business Centre, NCI, Mayor Street, IFSC, Dublin 1, D01 K6W2",
      coords: { lat: 80.9, lng: -150 },
    },
    {
      name: "Ireland",
      address:
        "Data Science Wizards Limited, Business Centre, NCI, Mayor Street, IFSC, Dublin 1, D01 K6W2",
      coords: { lat: 95, lng: -30.2 },
    },
    {
      name: "India",
      address:
        "707, 7th Floor, Lodha Supremus II Road No. 22, Wagle Estate, Thane - West - 400604",
      coords: { lat: 38, lng: 95 },
    },
  ];

  // Define connections between locations (pairs)
  const connections = [
    { start: locations[0].coords, end: locations[1].coords }, // USA → Ireland
    { start: locations[1].coords, end: locations[2].coords }, // Ireland → India
    { start: locations[0].coords, end: locations[2].coords }, // USA → India
  ];

  return (
    <div className="relative w-full aspect-[2/1] rounded-lg max-sm:p-0 ">
      {/* Background static map image */}
      <img
        src="/assets/images/contact/location-map.png"
        className="h-auto w-[90%] max-sm:w-[100%] mx-auto absolute inset-0  object-contain pointer-events-none select-none opacity-80"
        alt="world map"
        draggable={false}
      />

      {/* Overlay paths + markers */}
      <svg
        ref={svgRef}
        viewBox="0 -200 800 650"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Curved animated lines */}
      {connections.map((dot, i) => {
  const startPoint = projectPoint(dot.start.lat, dot.start.lng);
  const endPoint = projectPoint(dot.end.lat, dot.end.lng);
  return (
    <motion.path
      key={i}
      d={createCurvedPath(startPoint, endPoint)}
      fill="none"
      stroke="url(#path-gradient)"
      strokeWidth={isMobile ? 5 : 1.5}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 0, 1] }}
      transition={{
        duration: 6, 
        times: [0, i * 0.33, (i * 0.33) + 0.33], 
        delay: 0,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "restart",
        repeatDelay: 1.5,
      }}
    />
  );
})}

        {/* Gradient for line fade */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="orange" stopOpacity="0" />
            <stop offset="10%" stopColor="orange" stopOpacity="1" />
            <stop offset="90%" stopColor="orange" stopOpacity="1" />
            <stop offset="100%" stopColor="orange" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Location markers */}
        {locations.map((loc, i) => {
          const point = projectPoint(loc.coords.lat, loc.coords.lng);
          return (
            <g key={i}>
              <circle cx={point.x} cy={point.y}  r={isMobile ? 15 : 4} fill="#F97316" />
              <circle
                cx={point.x}
                cy={point.y}
                 r={isMobile ? 15 : 4}
                fill="#F97316"
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="12"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
