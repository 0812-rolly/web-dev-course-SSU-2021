import '../scss/app.scss';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let frames = 0;
const DEGREE = Math.PI/180;

const sprite = new Image();
sprite.src = "images/content/sprite.png";

const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

document.addEventListener("click", function(e) {
    switch(state.current){
        case state.getReady:
            state.current = state.game;
            break;
        case state.game:
            bird.flap();
            break;
        case state.over:
            state.current = state.getReady;
            break;
    }
});

const background = {
    sX: 0,
    sY: 0,
    w: 275, 
    h: 226,
    x: 0, 
    y: canvas.height - 226,

    draw: function() {
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }

}

const foreground = {
    sX: 276,
    sY: 0,
    w: 224, 
    h: 112,
    x: 0, 
    y: canvas.height - 112,
    dx: 2,

    draw: function() {
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },

    update: function() {
        if(state.current == state.game) {
            this.x = (this.x - this.dx) % (this.w/2);
        }
    }
}

const bird = {
    animation: [
        {sX: 276, sY: 112},
        {sX: 276, sY: 139},
        {sX: 276, sY: 164},
        {sX: 276, sY: 139},
    ],
    x: 50,
    y: 150,
    w: 34,
    h: 26,

    frame: 0,

    speed: 0,
    gravity: 0.25,
    jump: 4,
    rotation: 0,

    draw: function() {
        let bird = this.animation[this.frame];

        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);

        context.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, - this.w/2, - this.h/2, this.w, this.h);
    
        context.restore();
    },

    flap: function() {
        this.speed = - this.jump;
    },

    update: function() {
        this.period = state.current == state.getReady ? 10 : 5;

        this.frame += frames % this.period == 0 ? 1 : 0;

        this.frame = this.frame % this.animation.length;

        if(state.current == state.getReady) {
            this.y = 150;
            this.speed = 0;
            this.rotation = 0 * DEGREE;
        } else {
            this.speed += this.gravity;
            this.y += this.speed;

            if(this.y + this.h/2 >= canvas.height - foreground.h) {
                this.y = canvas.height - foreground.h - this.h/2;

                if(state.current == state.game) {
                    state.current = state.over;
                }
            }

            if(this.speed >= this.jump) {
                this.rotation = 25 * DEGREE;
                this.frame = 1;
            } else {
                this.rotation = -10 * DEGREE;
            }
        }
    }
}

const getReady = {
    sX: 0,
    sY: 228,
    w: 173, 
    h: 152,
    x: canvas.width/2 - 173/2, 
    y: 80,

    draw: function() {
        if(state.current == state.getReady){
            context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

const gameOver = {
    sX: 175,
    sY: 228,
    w: 225, 
    h: 202,
    x: canvas.width/2 - 225/2, 
    y: 90,

    draw: function() {
        if(state.current == state.over){
            context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
}

function draw() {
    context.fillStyle = "#70c5ce";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const body = document.getElementById("body");
    background.draw();
    foreground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

function update() {
    bird.update();
    foreground.update();
}

function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();