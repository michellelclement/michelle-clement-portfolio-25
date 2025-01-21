import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function contentAnimations() {

  // Text Animation
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

  // Card Animation
  const cards = Array.from(document.querySelectorAll('.js-card-animate-in'));
  if (cards.length) {
    ScrollTrigger.batch(cards, {
      start: 'top 80%',
      end: 'bottom 10%',
      onEnter: (els) => gsap.fromTo(els, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: "back.out(1.7)", duration: 0.7 }
      ),
      once: true,
    });
    
  };
} 

export default contentAnimations;