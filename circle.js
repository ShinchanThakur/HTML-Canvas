const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

createCircularBoundary();
function createCircularBoundary() {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.stroke();
}