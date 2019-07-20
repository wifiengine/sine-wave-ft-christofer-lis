var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
var dx = 0.01;
var dy = 300;
var amplitude = 50;
var j = 0;

canvas.width = 1000;
canvas.height = 600;



function animate() {
    requestAnimationFrame(animate);

    draw.fillStyle = "rgba(0,0,0,0.2)";
    draw.fillRect(0,0,1000,600);
    draw.fill
//draw waves
    draw.beginPath();
    draw.strokeStyle = "#00fff0";
    draw.moveTo(0,300);
    for(var i = 0; i < 1000; i++) {
    draw.lineTo(i,300 + Math.sin(i / 50 + dx) * amplitude );
    }
    draw.stroke();

    draw.beginPath();
    draw.strokeStyle = "#ffff00";
    draw.moveTo(0,500);
    for(var i = 0; i < 1000; i++) {
    draw.lineTo(i,500 + Math.sin(i / 50 + dx) * amplitude );
    }
    draw.stroke();

    draw.beginPath();
    draw.strokeStyle = "#ff0000";
    draw.moveTo(0,100);
    for(var i = 0; i < 1000; i++) {
    draw.lineTo(i,100 + Math.sin(i / 50 + dx) * amplitude );
    }
    draw.stroke();

    draw.beginPath();
    draw.strokeStyle = "#f0f0f0";
    draw.moveTo(0,200);
    for(var i = 0; i < 1000; i++) {
    draw.lineTo(i,200 + Math.sin(i / 50 + dx) * amplitude );
    }
    draw.stroke();
 
    draw.beginPath();
    draw.strokeStyle = "#34623F";
    draw.moveTo(0,400);
    for(var i = 0; i < 1000; i++) {
    draw.lineTo(i,400 + Math.sin(i / 50 + dx) * amplitude );
    }
    draw.stroke();
    

         j += 0.1;
        amplitude = Math.sin(j) * 50;
    
 
    dx += 0.1;
    console.log(Math.sin(j));
}
animate();