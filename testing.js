const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const gravity = 0.8;

canvas.width = 1024;
canvas.height = 576;

ctx.fillRect(0, 0 , canvas.width, canvas.height);

class Sprite {
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.lastKey 
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, 50, this.height)
    }
    update(){
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y;
        
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0;
        } else this.velocity.y += gravity;
    }
}

const player = new Sprite({
    position : {
        x : 0,
        y : 0, 
    },
    velocity: {
        x: 0,
        y: 10,
    }
    
});
player.draw();

const enemy = new Sprite({
    position : {
        x : 400,
        y : 200, 
    },
    velocity: {
        x: 0,
        y: 0,
    }
})
enemy.draw();
const keys = {
    a : {
        pressed : false
    },
    d : {
        pressed : false
    },
    w: {
        pressed : false
    },
    ArrowRight: {
        pressed : false
    },
    ArrowLeft : {
        pressed : false
    }
}

function animation () {
    window.requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemy.update();


    player.velocity.x = 0;
    enemy.velocity.x = 0;
    //player movement
    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -1;
    } else if(keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 1;
    }
    // enemey movement
    if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -1
    } else if(keys.ArrowRight && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 1;
    }
}
animation();
// 

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = true;
            player.lastKey = 'd';
            break;
        case 'a':
            keys.a.pressed = true;
            player.lastKey = 'a';
            break;
        case 'w': 
            keys.w.pressed = true;
            player.velocity.y = -10;
            break;
        
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            enemy.lastKey = 'ArrowRight'
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            enemy.lastKey = 'ArrowLeft';
            break;
        case 'ArrowUp':
            enemy.velocity.y = -10;
            break;
    }
    
})
window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;
    }

    switch(event.key){
        case 'ArrowRight': 
              keys.ArrowRight.pressed = false;
              break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;  
    }
    
})



