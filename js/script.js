// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mouse Animation
const mousePointer = document.createElement('div');
mousePointer.classList.add('mouse-pointer');
document.body.appendChild(mousePointer);

document.addEventListener('mousemove', (e) => {
    mousePointer.style.left = `${e.clientX}px`;
    mousePointer.style.top = `${e.clientY}px`;
});

// Background Animation
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelector('.background-animation').style.background = 
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5))`;
});
