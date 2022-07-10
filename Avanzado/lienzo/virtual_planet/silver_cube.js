//Cómo funcionan las ecuaciones de numeros aleatorios con números enteros?
// floor(random * (maxi-min+1)+min)+min
/*
var z;
for(var i=0; i<10; i++)
{
    z = pickPicker(-11, 5);
    document.write(z+", ");

}
*/
let frame = document.getElementById("space_high");
let cardBoard = frame.getContext("2d");
//var mainMap = "background.png";
let backSky = {
    url: "sky.png",
    cargaOk: false,
};

let alienFig = {
    url : "alien.png",
    cargaOk: false,
};

let dollFig = {
    url : "doll.png",
    cargaOk: false,
};
let robotFig = {
    url : "robot.png",
    cargaOk: false,
};

let neoFig = {
    url : "alien.png",
    cargaOk: false,
};

var stickers = pickPicker(3, 6);
console.log(stickers);


backSky.object = new Image();
backSky.object.src = backSky.url;
backSky.object.addEventListener("load", loadBack);

alienFig.object = new Image ();
alienFig.object.src = alienFig.url;
alienFig.object.addEventListener("load", loadAliens);

dollFig.object = new Image ();
dollFig.object.src = dollFig.url;
dollFig.object.addEventListener("load", loadDolls);

robotFig.object = new Image ();
robotFig.object.src = robotFig.url;
robotFig.object.addEventListener("load", loadRobots);

neoFig.object = new Image ();
neoFig.object.src = neoFig.url;
neoFig.object.addEventListener("load", loadNeo);

function loadBack()
{
    backSky.cargaOk = true;
    pictureOut();
}
function loadAliens()
{
    alienFig.cargaOk = true;
    pictureOut();
}
function loadDolls()
{
    dollFig.cargaOk = true;
    pictureOut();
}
function loadRobots()
{
    robotFig.cargaOk = true;
    pictureOut();
}

function loadNeo()
{
    neoFig.cargaOk = true;
    pictureOut();
}
/*
var alienFig = new Image();
alienFig.src = "alien.png";
alienFig.addEventListener("load", loadOutAliens);

var dollFig = new Image ();
dollFig.src = "doll.png";
dollFig.addEventListener("load", loadOutDolls);

var robotFig = new Image();
robotFig.src = "robot.png";
robotFig.addEventListener("load", loadOutRobots);
*/

function pictureOut()

{
   // cardBoard.drawImage( backgroundSky, -250, -250);
    if(backSky.cargaOk)
    {
        cardBoard.drawImage( backSky.object, 0, 0);
    }
    if(alienFig.cargaOk)

    {
        console.log(stickers);

        for(var a = 0; a < stickers; a++)
        {
        var x = pickPicker(1, 420);
        var y = pickPicker(1, 420);

        cardBoard.drawImage( alienFig.object, x, y);
        }
    }
    if(dollFig.cargaOk)
    {
        console.log(stickers);
        for(var a = 0; a < stickers; a++)
        {
            var x = pickPicker(1, 420);
            var y = pickPicker(1, 420);

            cardBoard.drawImage( dollFig.object, x, y);
        }
    }
    if(robotFig.cargaOk)
    {
        console.log(stickers);
        for(var a = 0; a < stickers; a++)
        {
            var x = pickPicker(1, 420);
            var y = pickPicker(1, 420);

            cardBoard.drawImage( robotFig.object, x, y);
        }
    }
    if(neoFig.cargaOk)
    {
        var neox = 250;
        var neoy = 250;

        cardBoard.drawImage( neoFig.object, neox, neoy);
    }
}
/*
function pictureOutAliens()
{
    //cardBoard.drawImage( alienFig, 10, 10);

}
function pictureOutDolls()
{
    cardBoard.drawImage( dollFig, 10, 300);
}
function pictureOutRobots()
{
    cardBoard.drawImage( robotFig, 300, 150);
}
*/
function pickPicker (min, maxi)
{
    let result;
    result = Math.floor(Math.random() * (maxi-min+1))+min;
    return result;
}







function placeNeo()
{

}

//Know interact keys with figs
var keys = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
};
console.log(keys);
document.addEventListener("keyup", );



function moveFig (event){
    var movementRange = 10;
    switch(event.keyCode){

    }
}