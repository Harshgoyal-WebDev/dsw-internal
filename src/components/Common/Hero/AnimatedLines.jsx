import gsap from 'gsap';
import React, { memo, useLayoutEffect } from 'react'

/** GSAP-only animated vertical line */
const AnimatedLine = memo(function AnimatedLine({ delay }) {
    const LINE_COUNT = 4;
    
    const lineRef = useRef(null);
    const dotRef = useRef(null);

    useLayoutEffect(() => {
        if (!lineRef.current || !dotRef.current) return;

        const ctx = gsap.context(() => {
            // grow the line
            gsap.fromTo(
                lineRef.current,
                { scaleY: 0, transformOrigin: "top" },
                { scaleY: 1, duration: 1.2, delay, ease: "power2.out" }
            );

            // sliding "dot"
            gsap.to(dotRef.current, {
                y: "100vh",
                duration: 1.2,
                delay,
                repeat: -1,
                repeatDelay: 2 + delay,
                ease: "none",
            });
        }, lineRef);

        return () => ctx.revert();
    }, [delay]);
    return (
        <div
            ref={lineRef}
            className="w-[0.5px] h-full bg-gradient-to-b from-white/20 to-transparent origin-top overflow-y-hidden will-change-transform"
        >
            <span ref={dotRef} className="block w-full h-3 bg-white blur-[1px]" />
        </div>
    );
});

export default AnimatedLine