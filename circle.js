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
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.stroke();
}
window.addEventListener('resize', createCircularBoundary);