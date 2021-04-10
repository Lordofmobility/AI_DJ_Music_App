bfunjirdkxndfiqesdkfnqaeiuszxk

song_1 = ""
song_2 = ""

function preload() {
    song_1 = loadSound("Harry_Potter_Theme_Song.mp3")
    song_2 = loadSound("Believer_Imagine_Dragons.mp3")
}

function setup() {
    canvas = createCanvas(550, 550)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 550, 550)
}