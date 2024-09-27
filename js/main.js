// Smooth Scroll Functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Animate the transition
            document.body.classList.add('page-transition');
            setTimeout(() => {
                // Scroll to the target section after the animation
                targetSection.scrollIntoView({ behavior: 'smooth' });
                document.body.classList.remove('page-transition');
            }, 500); // Match this time with the CSS transition duration
        }
    });
});

// Particles.js initialization
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Mouse Pointer Animation
const mousePointer = document.createElement('div');
mousePointer.classList.add('mouse-pointer');
document.body.appendChild(mousePointer);

document.addEventListener('mousemove', (e) => {
    mousePointer.style.left = `${e.pageX}px`;
    mousePointer.style.top = `${e.pageY}px`;
});

// Hide default cursor
document.body.style.cursor = 'none';

