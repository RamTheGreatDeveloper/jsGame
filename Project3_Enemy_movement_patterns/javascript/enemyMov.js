/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

let canvas_width = canvas.width = 500;
let canvas_height = canvas.height = 1000;
const numberOfEnemies = 200;
const enemiesArray = [];
let gameFrame = 0;
class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src ='assets/enemy1.png';
        this.x = Math.random() * canvas_width;
        this.y = Math.random() * canvas_height;
        this.speed = Math.random()*4-2;
        this.spritWidth = 293;
        this.spritHeight = 155;
        this.width = this.spritWidth / 2.5;
        this.height = this.spritHeight / 2.5;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        this.x+=this.speed;
        this.y+=this.speed;
        //animate sprites
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0:this.frame++;
        }
    }
    draw(){
        ctx.drawImage(this.image,this.frame * this.spritWidth,0,this.spritWidth,this.spritHeight,this.x,this.y,this.width,this.height);
    }
}
for(let i = 0; i < numberOfEnemies;i++){
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,canvas_width,canvas_height);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();        
    });
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();