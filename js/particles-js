// particles.js - A library for particle effects

particlesJS.load = function (tagId, path, callback) {
    // Fetch the JSON configuration file
    fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(config => {
            // Initialize particles with the fetched configuration
            particlesJS(tagId, config);
            if (callback) callback();
        })
        .catch(error => console.error("Error loading particles.json:", error));
};

// Main particlesJS function to configure and render particles
function particlesJS(tagId, params) {
    // Canvas and context setup
    const canvasEl = document.getElementById(tagId);
    const ctx = canvasEl.getContext('2d');

    // Configuration variables
    let particles = [];
    const { number, color, shape, opacity, size, line_linked, move } = params.particles;

    // Create particles based on the configuration
    function initParticles() {
        for (let i = 0; i < number.value; i++) {
            particles.push(createParticle());
        }
    }

    // Create a single particle
    function createParticle() {
        return {
            x: Math.random() * canvasEl.width,
            y: Math.random() * canvasEl.height,
            radius: Math.random() * size.value,
            color: color.value,
            opacity: opacity.value,
            direction: Math.random() * 2 * Math.PI,
            velocity: {
                x: Math.cos(Math.random() * 2 * Math.PI) * move.speed,
                y: Math.sin(Math.random() * 2 * Math.PI) * move.speed
            }
        };
    }

    // Draw particles on the canvas
    function drawParticles() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${parseInt(particle.color.slice(1, 3), 16)}, ${parseInt(particle.color.slice(3, 5), 16)}, ${parseInt(particle.color.slice(5, 7), 16)}, ${particle.opacity})`;
            ctx.fill();
            ctx.closePath();
        });
    }

    // Update particle positions
    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;

            // Wrap particles around the canvas
            if (particle.x > canvasEl.width) particle.x = 0;
            else if (particle.x < 0) particle.x = canvasEl.width;

            if (particle.y > canvasEl.height) particle.y = 0;
            else if (particle.y < 0) particle.y = canvasEl.height;
        });
    }

    // Main animation loop
    function animate() {
        drawParticles();
        updateParticles();
        requestAnimationFrame(animate);
    }

    // Set canvas size
    function setCanvasSize() {
        canvasEl.width = window.innerWidth;
        canvasEl.height = window.innerHeight;
    }

    // Event listeners for resizing
    window.addEventListener('resize', () => {
        setCanvasSize();
        initParticles();
    });

    // Initialization
    setCanvasSize();
    initParticles();
    animate();
}

// Load particles configuration from particles.json
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});

