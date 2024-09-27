const mousePointer = document.createElement('div');
mousePointer.className = 'mouse-pointer';
document.body.appendChild(mousePointer);

document.addEventListener('mousemove', (e) => {
    mousePointer.style.left = `${e.pageX}px`;
    mousePointer.style.top = `${e.pageY}px`;
});
