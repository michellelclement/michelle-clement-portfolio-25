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
