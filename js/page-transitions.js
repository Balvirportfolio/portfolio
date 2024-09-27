// page-transitions.js

// Page Transitions
const links = document.querySelectorAll('nav a');
const body = document.body;

// Function to handle page transitions
const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    const href = event.currentTarget.getAttribute('href'); // Get link target

    // Fade out the body
    body.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete before navigating
    setTimeout(() => {
        window.location.href = href; // Navigate to the new page
    }, 500); // Match this duration with CSS transition duration
};

// Add event listeners to each link
links.forEach(link => {
    link.addEventListener('click', handleLinkClick);
});

// Fade in effect on page load
window.addEventListener('load', () => {
    body.classList.add('fade-in');
});

// Remove fade-out class on new page load
window.addEventListener('DOMContentLoaded', () => {
    body.classList.remove('fade-out');
});
