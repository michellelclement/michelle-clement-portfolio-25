import { gsap } from "gsap-trial";

import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText);

function heroAnimation() {
  const splitText = new SplitText(".js-hero-heading", { type: "chars" });

  // Create a timeline to control the sequence of animations
  const tl = gsap.timeline();
  
  // Loop through each character
  splitText.chars.forEach((char, index) => {
    const animations = [
      // Flip in from upside down
      (char, index) => {
        gsap.from(char, {
          duration: 1.4,
          opacity: 0,
          rotationX: 180,
          y: 20,
          delay: index * 0.1,
          ease: "back.out(1.7)",
        });
      },
      // Spin in
      (char, index) => {
        gsap.from(char, {
          duration: 2,
          opacity: 0,
          rotation: 720,
          scale: 0,
          delay: index * 0.1,
          ease: "elastic.out(1, 0.5)",
        });
      },
      // Slide up as though emerging from the ground
      (char, index) => {
        // Wrap the character in a clipping container for this animation only
        const wrapper = document.createElement("div");
        wrapper.style.display = "inline-block";
        wrapper.style.overflow = "hidden";
        wrapper.style.position = "relative";
        wrapper.style.verticalAlign = "bottom"; // Align wrapper to the baseline

        // Set wrapper height based on the character's bounding box
        const boundingBox = char.getBoundingClientRect();
        wrapper.style.height = `${boundingBox.height}px`;

        char.parentNode.insertBefore(wrapper, char);
        wrapper.appendChild(char);

        // Slide up animation
        gsap.from(char, {
          duration: 1,
          y: `${boundingBox.height}px`, // Slide up by the character's height
          ease: "power2.out",
          delay: index * 0.1,
        });
      },
    ];

    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    randomAnimation(char, index);
  });

  // After the animations complete, target a specific character (e.g., the 3rd character)
  const targetCharIndex = 1; // Change this to target a different character (e.g., 2nd character = index 1)

  // Add a spinning animation every 2 seconds for the selected character
  tl.to(splitText.chars[targetCharIndex], {
    duration: 2,            // Duration of each spin
    rotationX: 360,         // Perform a full rotation along the X-axis
    ease: "back.out(1.7)",  // Easing for smooth rotation
    repeat: -1,             // Repeat the animation indefinitely
    repeatDelay: 2,         // Add a 2-second delay between each repeat
  });
}


export default heroAnimation;