LipsX = 0;
LipsY = 0;

function preload() {
    lipsImg = loadImage ('https://i.pinimg.com/564x/07/6c/55/076c556bc319583c6aea90303580b208.jpg');
}

function setup() {
   canvas = createCanvas(300,300);
   canvas.center();

  vedio = createCapture(VIDEO);
  vedio.size(300, 300);
  vedio.hide();

  posenet = ml5.poseNet(vedio, modelLoaded);
  posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Hi poseNet is Enabled');
}



function gotPoses(results) {
 if (results.length>0){
  console.log(results);
  noseX = results[0].pose.lips.x-15;
  noseY = results[0].pose.lips.y-5;
 }
}

function draw() {
    image(vedio, 0, 0, 300, 300);
    image(lipsImg, lipsX, lipsY, 30, 30);
}

function take_snapshot() {
    save('MyFilterImage.jpg');
}