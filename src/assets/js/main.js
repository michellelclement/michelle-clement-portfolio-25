//import '/assets/css/main.scss'

// Focus Visible Polyfill
import 'focus-visible'

// Internal Modules
import toggleBodyScroll from './modules/nav';
import heroAnimation from './modules/hero-animation';
import contentAnimations from './modules/content-animations';
import heroSubAnimation from './modules/hero-sub-animation';

toggleBodyScroll();
heroAnimation();
contentAnimations();
heroSubAnimation();

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('circleMenu');
  
  // Attach the toggleBodyScroll function to the checkbox's change event
  checkbox.addEventListener('change', toggleBodyScroll);
});

// JavaScript to handle scroll event and apply fade effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {  // You can adjust the scroll threshold as needed
    header.classList.add('hidden');
    header.classList.remove('visible');
  } else {
    header.classList.add('visible');
    header.classList.remove('hidden');
  }
});

// No JS
const rootEL = document.documentElement;
rootEL.classList.remove('no-js');