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


// Create highlight effect
const highlightEffect = document.createElement('div');
highlightEffect.classList.add('highlight-effect');
document.body.appendChild(highlightEffect);

// Update highlight effect position
document.addEventListener('mousemove', (e) => {
    highlightEffect.style.left = `${e.pageX}px`;
    highlightEffect.style.top = `${e.pageY}px`;
});

// Style for the highlight effect
const style = document.createElement('style');
style.innerHTML = `
    .highlight-effect {
        position: fixed;
        width: 100px; /* Adjust size as needed */
        height: 100px; /* Adjust size as needed */
        background: rgba(243, 156, 18, 0.5); /* Brightening color */
        border-radius: 50%;
        pointer-events: none; /* Ignore pointer events */
        transform: translate(-50%, -50%); /* Center the highlight */
        transition: background 0.2s ease; /* Smooth transition for background */
    }
`;
document.head.appendChild(style);

