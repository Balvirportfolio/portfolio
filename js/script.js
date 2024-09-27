// Mouse pointer effect
document.addEventListener('mousemove', function(e) {
    const mousePointer = document.querySelector('.mouse-pointer') || createMousePointer();
    mousePointer.style.left = e.pageX + 'px';
    mousePointer.style.top = e.pageY + 'px';
});

function createMousePointer() {
    const mousePointer = document.createElement('div');
    mousePointer.classList.add('mouse-pointer');
    document.body.appendChild(mousePointer);
    return mousePointer;
}

// Typing effect for dynamic text
const words = ['Developer', 'Designer', 'Technologist'];
let wordIndex = 0;
setInterval(() => {
    document.querySelector('.typing').textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}, 3000);

