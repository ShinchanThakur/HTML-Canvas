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

function createCircle() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}

function setXYAtMousePosition(event) {
    mouse.x = event.x;
    mouse.y = event.y;
}

canvas.addEventListener('mousemove', setXYAtMousePosition);

function highlightMouse() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createCircle();
    requestAnimationFrame(highlightMouse);
}
highlightMouse();