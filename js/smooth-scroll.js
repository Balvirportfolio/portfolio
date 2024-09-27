// smooth-scroll.js

// Select all anchor links with hashes
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Add click event to each link
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Select target section

        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align the top of the target section to the top of the viewport
            });
        }
    });
});
