const number = 1;
// switch (true)
switch (number) {
    case 1:
        console.log("I am one");
        break;
    case 10:
        console.log("I am a ten");
        break;
    case 100:
        console.log("I am a hundred");
        break;
    default:
        console.log("No soy nada");
}
/*
// juego

//const stone = "Hammer";
//const cutter = "Sharp Boomerang";
//const paper = "Origami";*/
const choices = ["hammer", "sharp boomerang", "origami"];
const robot = choices[Math.floor(Math.random() * choices.length)];
const name =  choices[Math.floor(Math.random() * choices.length)];
let fight = ("hammer" === "sharp boomerang");
//switch (fight_arena) {
  //  case (true): {
        switch (fight) {
            case (robot === "hammer" && name === "origami"):
                console.log("User wins with a origami");
                break;
            case (robot === "origami" && name === "sharp boomerang"):
                console.log("User wins with a sharp boomerang");
                break;
             case (robot === "sharp boomerang" && name === "hammer"):
                console.log("User wins with a hammer");
                break;
            default:
                console.log("Everything is quiet");
        }
    