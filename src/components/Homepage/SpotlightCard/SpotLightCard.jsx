'use client';
import { useRef, useEffect } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
  lerpSpeed = 0.1 // smaller = smoother, larger = snappier
}) => {
  const divRef = useRef(null);

  // target position (mouse)
  const targetPos = useRef({ x: 0, y: 0 });
  // animated position (lerped)
  const currentPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    targetPos.current.x = e.clientX - rect.left;
    targetPos.current.y = e.clientY - rect.top;
  };

  const animate = () => {
    // lerp formula
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerpSpeed;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerpSpeed;

    if (divRef.current) {
      divRef.current.style.setProperty('--mouse-x', `${currentPos.current.x}px`);
      divRef.current.style.setProperty('--mouse-y', `${currentPos.current.y}px`);
      divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
