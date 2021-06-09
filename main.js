noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    video.position(50,50);

    canvas=createCanvas(500,425);
    canvas.position(560,160);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is intialized!");
}
function draw(){
    background("#00d1ce");
    document.getElementById("name_size").innerHTML="Width and height of the Font="+difference+"px";
    text("Coding",noseX,noseY,difference,leftWrist,rightWrist);
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("Nose X="+noseX+"Nose Y="+noseY);
    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    difference=floor(leftWrist-rightWrist);
    console.log("left wrist="+leftWrist+"right wrist="+rightWrist+"difference");
    }
}
