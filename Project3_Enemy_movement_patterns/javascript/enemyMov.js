/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let canvas_width = canvas.width = 500;
let canvas_height = canvas.height = 1000;

let enemy1 = {
    x:0,
    y:0,
    width:200,
    height:200,
}

function animate(){
    ctx.clearRect(0,0,canvas_width,canvas_height);
    ctx.fillRect(enemy1.x,enemy1.y,enemy1.width,enemy1.height);
    enemy1.x++;
    requestAnimationFrame(animate);
}
animate();