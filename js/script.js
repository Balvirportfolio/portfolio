// JavaScript for mouse pointer effect
document.addEventListener('mousemove', function(e) {
    const mousePointer = document.createElement('div');
    mousePointer.className = 'mouse-pointer';
    document.body.appendChild(mousePointer);

    mousePointer.style.left = e.pageX + 'px';
    mousePointer.style.top = e.pageY + 'px';

    setTimeout(() => {
        mousePointer.remove();
    }, 100);
});

// Add any other interactivity you need here

