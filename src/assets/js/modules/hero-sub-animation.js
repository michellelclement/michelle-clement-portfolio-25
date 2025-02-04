import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function heroSubAnimation() {
  const subText = new SplitText(".js-sub-hero-heading", { type: "chars" });

  const tl = gsap.timeline({ delay: 2 });

  subText.chars.forEach((char, index) => {
    tl.from(char, {
      opacity: 0,
      y: -20,
      ease: "power2.inOut",
      duration: 0.5,
    }, index * 0.07);
  });
}

export default heroSubAnimation;