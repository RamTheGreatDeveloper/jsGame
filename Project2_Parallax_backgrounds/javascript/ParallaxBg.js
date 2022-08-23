const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_height = canvas.height = 700;
const canvas_width = canvas.width = 800;

let gameSpeed = 15;
let gameFrame =5;
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/layer-5.png';

class Layer{
    constructor(image,speedModifier){
        this.x = 0;
        this.y =0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        this.x = gameFrame * this.speed % this.width;
    }
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height);
    }
}
const layer1 = new Layer(backgroundLayer1,0.2);
const layer2 = new Layer(backgroundLayer2,0.4);
const layer3 = new Layer(backgroundLayer3,0.6);
const layer4 = new Layer(backgroundLayer4,0.8);
const layer5 = new Layer(backgroundLayer5,1);

const slider = document.getElementById('slider');
slider.value = gameSpeed;
const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;

slider.addEventListener('change',function(e){
    gameSpeed = e.target.value;
    showGameSpeed.innerHTML = e.target.value;
})

const gameLayers = [layer1,layer2,layer3,layer4,layer5];
function animate(){
    ctx.clearRect(0,0,canvas_width,canvas_height);
    gameLayers.forEach(Object =>{
        Object.update();
        Object.draw();
    })
    gameFrame--;
    requestAnimationFrame(animate);
}
animate();