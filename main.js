// Background effect when mouse moves
const background = document.getElementById('background-animation');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    background.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2))`;
});


