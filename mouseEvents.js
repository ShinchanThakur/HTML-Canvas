const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
fixCanvasPositionAndSize();
function fixCanvasPositionAndSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', fixCanvasPositionAndSize);

const mouse = {
    x: null,
    y: null
}

canvas.addEventListener('click', drawCircleAtMouseClickPosition);
function drawCircleAtMouseClickPosition(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    createCircle();
}

function createCircle() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}
createCircle();