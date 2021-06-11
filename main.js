song="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristY="";

function setup()
{
  canvas=createCanvas(600,480);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide()
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
   if (results.length > 0)
   {
     console.log("results");
     leftwristX = results[0].pose.leftWrist.x;
     leftwristY = results[0].pose.leftWrist.y;
     console.log("leftwristX = " + leftwristX + " leftwristY = " + leftwristY);

     rightwristX = results[0].pose.rightWrist.x;
     rightwristY = results[0].pose.rightWrist.y;
     console.log("rightwristX = " + rightwristX + " rightwristY = " + rightwristY);
   }
}

function stop()
{
  song.stop();
}

function draw()
{
   image(video, 0 , 0 , 600 , 480);
}

function preload()
{
 song=loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}