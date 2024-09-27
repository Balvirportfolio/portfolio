// Particles.js configuration
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Smooth scrolling for internal links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Get the target section
        
        // Add the fade-out class to the body for transition
        document.body.classList.add('page-transition');

        setTimeout(() => {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Remove the fade-out class after the transition
            document.body.classList.remove('page-transition');
        }, 500); // Match this with the animation duration
    });
});

// Custom mouse pointer functionality
const mousePointer = document.createElement('div');
mousePointer.className = 'mouse-pointer';
document.body.appendChild(mousePointer);

document.addEventListener('mousemove', (e) => {
    mousePointer.style.left = `${e.pageX}px`;
    mousePointer.style.top = `${e.pageY}px`;
});

// Optional: Hide the default cursor (included in CSS)
document.body.style.cursor = 'none';
