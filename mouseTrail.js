const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
fixCanvasPositionAndSize();
function fixCanvasPositionAndSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', fixCanvasPositionAndSize);

const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener('mousemove', handleMouseMove);
function handleMouseMove(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    createNParticles(5);
}

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 1; // 1 to 11
        this.speedX = Math.random() * 3 - 1.5; // -1.5 to 1.5
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    createCircle() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particlesArray = [];
function createNParticles(n) {
    for (let i = 0; i < n; i++)
        particlesArray.push(new Particle());
}

function updateAndDrawParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].createCircle();
        if (particlesArray[i].size <= 0.2) {
            particlesArray.splice(i, 1);    // removing particle from array
            i--;
        }
    }
}

function createParticlesAtMousePosition() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateAndDrawParticles();
    requestAnimationFrame(createParticlesAtMousePosition);
}
// createParticlesAtMousePosition();

function createParticlesWithTrails() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    updateAndDrawParticles();
    requestAnimationFrame(createParticlesWithTrails);
}
createParticlesWithTrails();