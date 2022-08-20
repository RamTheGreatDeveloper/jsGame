const canvas= document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width=600;
const canvas_height = canvas.height=600;

const playerImg = new Image();
playerImg.src= "assets/images/shadow_dog.png";
const spriteWidth= 575;
const spriteHeight=523;
let frameX = 0;
let frameY = 1;
let gameFrame = 0;
const staggerFrames = 5;
function animate() {
    ctx.clearRect(0,0,canvas_width,canvas_height);
    // ctx.fillRect(100,50,100,100);
    let position = Math.floor(gameFrame/staggerFrames )% 6;
    frameX = spriteWidth * position;
    ctx.drawImage(playerImg,frameX ,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    // if(gameFrame % staggerFrames == 0){
    //     if(frameX < 6 ) frameX ++;
    //     else frameX = 0;
    // }
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();