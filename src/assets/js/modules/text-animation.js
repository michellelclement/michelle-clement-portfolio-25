import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function textAnimation() {
  const items = Array.from(document.querySelectorAll('.js-animate-in'));
  if (items.length) {
    ScrollTrigger.batch(items, {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: (els) => gsap.to(els, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "expo.out",
        duration: 1.2,
      }),
      once: true,
    });
  }
}

export default textAnimation;