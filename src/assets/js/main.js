//import '/assets/css/main.scss'

// Focus Visible Polyfill
import 'focus-visible'

// Internal Modules
import toggleBodyScroll from './modules/nav';

toggleBodyScroll();


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