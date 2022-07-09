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
// Ahora vamos a hacer un ciclo i = (i + 2) ===>>> i++  while(i<lines) ---> for(i=0;i<lineas,i++)

const lines = 30;
var yi, xf;
var primar = "#BB8FCE";
for( i = 0; i < lines; i++)
{
    yi = 10 * i;
    xf = 10 * (i+1);
    drawDigi(primar, 300, yi, xf, 1);
    console.log(`Line ${i}`);
}
drawDigi(primar, 1, 1, 300, 1)
function drawDigi( color, initialx, initialy, finalx, finaly)
{
    digitalFabric.beginPath();
    digitalFabric.strokeStyle = color;
    digitalFabric.moveTo(initialx, initialy);
    digitalFabric.lineTo(finalx, finaly);
    digitalFabric.stroke();
    digitalFabric.closePath();
}