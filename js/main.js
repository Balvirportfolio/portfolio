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

// Remove default cursor
document.body.style.cursor = 'none';


