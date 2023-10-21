const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
createRectangle();
function createRectangle() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(10, 20, 150, 50);
}

window.addEventListener('resize', fixRectanglePostionAndSize);
function fixRectanglePostionAndSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(10, 20, 150, 50);
}