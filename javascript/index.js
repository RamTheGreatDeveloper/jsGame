let playerState= 'idle';
const dropDown = document.getElementById('animations');
dropDown.addEventListener('change',function(e){
    playerState = e.target.value;
})

const canvas= document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width=600;
const canvas_height = canvas.height=600;

const playerImg = new Image();
playerImg.src= "assets/images/shadow_dog.png";
const spriteWidth= 575;
const spriteHeight=523;
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations= [];
const animationState=[
    {
        name:'idle',
        frames:7,
    },
    {
        name:'jump',
        frames:7,
    },
    {
        name:'fall',
        frames:7,
    },
    {
        name:'run',
        frames:9,
    },
    {
        name:'dizzy',
        frames:11,
    },
    {
        name:'sit',
        frames:5,
    },
    {
        name:'roll',
        frames:7,
    },
    {
        name:'bite',
        frames:7,
    },
    {
        name:'ko',
        frames:12,
    },
    {
        name:'getHit',
        frames:4,
    },
]

animationState.forEach((state,index)=>{
    let frames = {
        loc: [],
    }
    for(let j=0;j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({
            x: positionX,
            y: positionY
        })
    }
    spriteAnimations[state.name]=frames;
})
console.log(spriteAnimations);
function animate() {
    ctx.clearRect(0,0,canvas_width,canvas_height);
    let position = Math.floor(gameFrame/staggerFrames )% spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImg,frameX ,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();