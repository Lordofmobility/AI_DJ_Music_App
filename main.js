song_1 = ""
song_2 = ""
leftWristX = ""
leftWristY = ""
rightWristX = ""
rightWristY = ""
scoreleftWrist = 0
status_song_1 = ""
status_song_2 = ""

function preload() {
    song_1 = loadSound("Harry_Potter_Theme_Song.mp3")
    song_2 = loadSound("Believer_Imagine_Dragons.mp3")
}

function setup() {
    canvas = createCanvas(550, 550)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses())
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("Left Wrist X is " + leftWristX + ", Left Wrist Y is " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X is " + rightWristX + ", Right Wrist Y is " + rightWristY);

        scoreleftWrist = results[0].pose.keypoints[9].score
        console.log(scoreleftWrist);
    }
}

function draw() {
    image(video, 0, 0, 550, 550)
    song_1.isPlaying()
    status_song_1 = song_1.isPlaying()
    stroke("red")
    fill("red")
    if (scoreleftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20)
        song_2.stop()
        if (status_song_1 = false) {
           song_1.play()
           document.getElementById("song_name").innerHTML = "Harry Potter Theme Song"
        }
    }
}