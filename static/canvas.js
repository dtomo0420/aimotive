var c = document.getElementById("ex");
var ctx = c.getContext("2d");
console.log("oke")
var planeImg;

planeImg = new Image();
planeImg.src = "plane.png";

var planeW;
var planeH;

planeImg.onload = function () {
    planeW = planeImg.width;
    planeH = planeImg.height;

    animate();
};

function animate() {
    draw()
}

function draw() {
    drawPlane()
}

function drawPlane() {
    drawBackground();
}

function drawBackground() {
    ctx.fillStyle = "#1b6072";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 500, c.width, 100);
}