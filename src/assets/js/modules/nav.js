// Define the toggleBodyScroll function
function toggleBodyScroll() {
  const body = document.body;
  const checkbox = document.getElementById('circleMenu');
  
  if (checkbox.checked) {
    body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    body.style.overflow = ''; // Re-enable scrolling
  }
}

// Export the function for use in other files
export default toggleBodyScroll;
