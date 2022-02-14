import '../scss/app.scss';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let frames = 0;

const sprite = new Image();
sprite.src = "images/content/sprite.png";

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

    draw: function() {
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        context.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
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

    draw: function() {
        let bird = this.animation[this.frame];

        context.drawImage(sprite, bird.sX, bird.sY, this.w, this.h, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
    }
}

function draw() {
    context.fillStyle = "#70c5ce";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const body = document.getElementById("body");
    background.draw();
    foreground.draw();
    bird.draw();
}

function update() {

}

function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}
loop();