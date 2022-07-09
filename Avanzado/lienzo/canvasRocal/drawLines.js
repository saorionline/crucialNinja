const question = document.getElementById("ask_lines");
const buttonGraph = document.getElementById("button_like");
const paintSupport = document.getElementById("workOfArt");

var canvas_side = paintSupport.width;
const digitalFabric = paintSupport.getContext("2d");
buttonGraph.addEventListener("click", drawForClick);
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



function drawForClick() {

    const lines = parseInt(question.value);
    var yi, xf;
    var primar = "#BB8FCE";
    var segment = canvas_side / lines ;

    for( i = 0; i < lines; i++)
    {
        yi = segment * i;
        xf = segment * (i+1);
        drawDigi(primar, 1, yi, xf, 300);
        console.log(`Line ${i}`);
    }
    drawDigi(primar, 1, 300, 1, 1)
    drawDigi(primar, 300, 300, 1, 300)

    function drawDigi( color, initialx, initialy, finalx, finaly)
    {
        digitalFabric.beginPath();
        digitalFabric.strokeStyle = color;
        digitalFabric.moveTo(initialx, initialy);
        digitalFabric.lineTo(finalx, finaly);
        digitalFabric.stroke();
        digitalFabric.closePath();
    }
    //console.log("question");
    //*alert()
}