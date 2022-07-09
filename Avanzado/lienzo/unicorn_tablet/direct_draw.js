var keys = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
};
console.log(keys);
document.addEventListener("keyup", drawKeyboard);
var drawSupport = document.getElementById("draw_tablet");
const paper = drawSupport.getContext("2d");
var x = 150;
var y = 150;

drawDigi("#fe6e6", 149, 149, 151, 151, paper);

function drawDigi( color, initialx, initialy, finalx, finaly, digiLine)
{
    digiLine.beginPath();
    digiLine.strokeStyle = color;
    digiLine.lineWidth = 3;
    digiLine.moveTo(initialx, initialy);
    digiLine.lineTo(finalx, finaly);
    digiLine.stroke();
    digiLine.closePath();
}

function drawKeyboard(event)
{
    /*console.log("pressed keyboard");
    //console.log(event.keyCode);
    if (event.keyCode == keys.UP) {
        console.log("Vamo' pa'rriba");
        */
    var color = "#ccb3ff";
    var movement = 10;
    switch(event.keyCode){
        case keys.UP :
            drawDigi(color, x, y, x, y - movement,  paper);
            y = y - movement;
            break;
        case keys.DOWN:
            drawDigi(color, x, y, x, y + movement,  paper);
            y = y + movement;
            break;
        case keys.LEFT:
            drawDigi(color, x, y, x - movement, y,  paper );
            x = x - movement;
            break;
        case keys.RIGHT:
            drawDigi(color, x, y, x + movement, y,  paper);
            x = x + movement;
        default:
            console.log("No environment");
            break;
    }
}