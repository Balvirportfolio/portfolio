// main.js

// Initialize particles.js
document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // Initialize smooth scroll
    import('./smooth-scroll.js').then(module => {
        module.default(); // Call the default function if needed
    });

    // Initialize mouse pointer
    import('./mouse-pointer.js').then(module => {
        module.default(); // Call the default function if needed
    });
});
