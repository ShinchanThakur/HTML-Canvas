const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
fixCanvasPositionAndSize();
function fixCanvasPositionAndSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', fixCanvasPositionAndSize);

createCircularBoundary();
function createCircularBoundary() {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.stroke();
}
window.addEventListener('resize', createCircularBoundary);

createCircle();
function createCircle() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.fill();
}

createCircleWithBoundary();
function createCircleWithBoundary() {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}