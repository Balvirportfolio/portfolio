// Mouse Pointer Animation
const mousePointer = document.createElement('div');
mousePointer.classList.add('mouse-pointer');
document.body.appendChild(mousePointer);

// Create a brightening effect element
const brightnessEffect = document.createElement('div');
brightnessEffect.classList.add('brightness-effect');
document.body.appendChild(brightnessEffect);

// Update mouse pointer position
document.addEventListener('mousemove', (e) => {
    // Move the custom mouse pointer
    mousePointer.style.left = `${e.pageX}px`;
    mousePointer.style.top = `${e.pageY}px`;

    // Position the brightness effect at the cursor's position
    brightnessEffect.style.left = `${e.pageX}px`;
    brightnessEffect.style.top = `${e.pageY}px`;

    // Add the class to make it visible
    brightnessEffect.classList.add('active');

    // Remove the class after a short delay
    setTimeout(() => {
        brightnessEffect.classList.remove('active');
    }, 150); // Adjust this duration as needed
});

// Optional: Hide the default cursor (can remove if not desired)
// document.body.style.cursor = 'none';

