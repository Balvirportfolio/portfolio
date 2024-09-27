// mouse-pointer.js

// Create custom mouse pointer
const mousePointer = document.createElement('div');
mousePointer.classList.add('mouse-pointer');
document.body.appendChild(mousePointer);

// Update mouse pointer position
document.addEventListener('mousemove', (e) => {
    mousePointer.style.left = `${e.clientX}px`;
    mousePointer.style.top = `${e.clientY}px`;
});

// Optional: Add mouse click effect
document.addEventListener('click', (e) => {
    const clickEffect = document.createElement('span');
    clickEffect.classList.add('click-effect');
    clickEffect.style.left = `${e.clientX}px`;
    clickEffect.style.top = `${e.clientY}px`;
    document.body.appendChild(clickEffect);

    // Remove effect after animation
    setTimeout(() => {
        clickEffect.remove();
    }, 500);
});
