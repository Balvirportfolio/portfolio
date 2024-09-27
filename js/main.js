// Select the background element
const backgroundAnimation = document.querySelector('.background-animation');

// Mouse Pointer Animation
const mousePointer = document.createElement('div');
mousePointer.classList.add('mouse-pointer');
document.body.appendChild(mousePointer);

// Update mouse pointer and background brightness effect on mousemove
document.addEventListener('mousemove', (e) => {
    // Move the custom mouse pointer
    mousePointer.style.left = `${e.pageX}px`;
    mousePointer.style.top = `${e.pageY}px`;

    // Update background gradient around the cursor
    const xPercent = (e.pageX / window.innerWidth) * 100;
    const yPercent = (e.pageY / window.innerHeight) * 100;

    backgroundAnimation.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(243, 156, 18, 0.3), rgba(0, 0, 0, 0.2))`;
});


