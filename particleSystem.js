const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
fixCanvasPositionAndSize();
function fixCanvasPositionAndSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', fixCanvasPositionAndSize);

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1; // 1 to 6
        this.speedX = Math.random() * 3 - 1.5; // -1.5 to 1.5
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    createCircle() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particlesArray = [];
function create100Particles() {
    for (let i = 0; i < 100; i++)
        particlesArray.push(new Particle());
}
create100Particles();

function updateAndDrawParticles() {
    particlesArray.forEach((particle) => {
        particle.update();
        particle.createCircle();
    });
}

function createParticleEffectOnScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateAndDrawParticles();
    requestAnimationFrame(createParticleEffectOnScreen);
}
createParticleEffectOnScreen();