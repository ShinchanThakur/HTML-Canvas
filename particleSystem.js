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

canvas.addEventListener('mousemove', setXYAtMousePosition);
function setXYAtMousePosition(event) {
    mouse.x = event.x;
    mouse.y = event.y;
}

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random * 5 + 1; // 1 to 6
        this.speedX = Math.random * 3 - 1.5; // -1.5 to 1.5
        this.speedY = Math.random * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    createCircle() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        ctx.fill();
    }
}