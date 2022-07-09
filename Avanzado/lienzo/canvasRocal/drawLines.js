const paintSupport = document.getElementById("workOfArt");
const digitalFabric = paintSupport.getContext("2d");
/*
drawDigitaly("#BB8FCE", 10, 300, 220, 10)
drawDigitaly("#BB8FCE", 10, 250, 220, 50)

function drawDigitaly( color, initialx, initialy, finalx, finaly)
{
    digitalFabric.beginPath();
    digitalFabric.strokeStyle = color;
    digitalFabric.moveTo(initialx, initialy);
    digitalFabric.lineTo(finalx, finaly);
    digitalFabric.stroke();
    digitalFabric.closePath();
}
*/
// Ahora vamos a hacer un ciclo

const lines = 30;
var i = 0;
var yi, xf;

while(i < lines)
{
    yi = 10 * i;
    xf = 10 * (i+1);
    drawDigi("#BB8FCE", 0, yi, xf, 300);
    console.log(`Line ${i}`);
    i = (i + 1);
}

function drawDigi( color, initialx, initialy, finalx, finaly)
{
    digitalFabric.beginPath();
    digitalFabric.strokeStyle = color;
    digitalFabric.moveTo(initialx, initialy);
    digitalFabric.lineTo(finalx, finaly);
    digitalFabric.stroke();
    digitalFabric.closePath();
}