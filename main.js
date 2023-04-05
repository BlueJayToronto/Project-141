song="";

function preload() {
    soundLoad="music.mp3";
}

function setup () {
    createCanvas=(600,500);
    canvas.center;
    video= createCapture(Video);
    video.hide;
}

function draw () {
    image(video, 0, 0, 600, 500);
}
function play () {
    song.play();
}