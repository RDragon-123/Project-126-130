shakeItOff = '';
readyForIt = '';

function preload(){

    song = loadSound("Taylor_Swift_-_Shake_It_Off_[NaijaGreen.Com]_.mp3")
    song = loadSound("Taylor Swift -_Ready For It_(MP3_128K).Irc")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}