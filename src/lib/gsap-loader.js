// Lazy load GSAP and ScrollTrigger only when needed
let gsapInstance = null;
let ScrollTriggerInstance = null;

export async function loadGsap() {
  if (!gsapInstance) {
    const gsapModule = await import("gsap");
    gsapInstance = gsapModule.default;
  }
  return gsapInstance;
}

export async function loadScrollTrigger() {
  if (!ScrollTriggerInstance) {
    const [gsap, scrollTriggerModule] = await Promise.all([
      loadGsap(),
      import("gsap/dist/ScrollTrigger")
    ]);
    ScrollTriggerInstance = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTriggerInstance);
  }
  return ScrollTriggerInstance;
}

export async function loadGsapWithPlugins() {
  const [gsap, ScrollTrigger] = await Promise.all([
    loadGsap(),
    loadScrollTrigger()
  ]);
  return { gsap, ScrollTrigger };
}
