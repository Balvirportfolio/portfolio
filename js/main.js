// Smooth Scroll Functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Create a div for the brightness effect
const brightnessEffect = document.createElement('div');
brightnessEffect.classList.add('brightness-effect');
document.body.appendChild(brightnessEffect);

// Update brightness effect position and size
document.addEventListener('mousemove', (e) => {
    brightnessEffect.style.left = `${e.pageX}px`;
    brightnessEffect.style.top = `${e.pageY}px`;
});

// Style for the brightness effect
const style = document.createElement('style');
style.innerHTML = `
    .brightness-effect {
        position: fixed;
        width: 100px; /* Size of the brightening area */
        height: 100px; /* Size of the brightening area */
        background: rgba(243, 156, 18, 0.3); /* Brightening color */
        border-radius: 50%; /* Circular shape */
        pointer-events: none; /* Ignore pointer events */
        transform: translate(-50%, -50%); /* Center the highlight */
        transition: background 0.2s ease; /* Smooth transition for background */
        filter: brightness(1.5); /* Increase brightness */
        z-index: 1; /* Ensure it appears above content */
    }
`;
document.head.appendChild(style);

