import '../scss/app.scss';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let frames = 0;

const sprite = new Image();
sprite.src = "images/content/sprite.png";
