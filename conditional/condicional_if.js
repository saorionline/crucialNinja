// primero declaro e inicializo, luego defino dos escenarios posibles para que me regrese un resultado
var momento = "dia";
if(true){
    console.log("Hi");
} else {
    console.log("Soy falso");
}

// dos condiciones
var guest = "Dolphin";
if ( guest === "Dragon"){
    console.log(`Hola ${guest}`);
} else if ( guest === "Dolphin" ) {
    console.log(`You are from here ${guest}`)
} else {
    console.log("You are weird");
}


// votacion
var edadVotacion = 20;
if ( edadVotacion === 18){
    console.log("Weolcome to democracy");
} else if ( edadVotacion > 18 ) {
    console.log("Keep your voice up");
} else {
    console.log("Sorry you can not vote yet")
}

//hay un operador ternario que es para general el if y el else en una sola linea
// ejemplo    condition ? true : false;

var num = 4
var result = num === 1 ? "I am the number one" : "I am not the one"

console.log(result);

/*// ejercicio práctico Juego
var primera_option = "Stone";
var segunda_option = "Paper";
var third_option = "Sissors";

var tie = false && false; // "Stone" && "Stone"; // // false a tie
//var ronda_tres = "Paper" === "Paper"; //false && false // false a tie
//var ronda_cuatro = "Sissors" === "Sissors"; //false && false // false a tie

var robot_wins = false || true; //false || true // true wins
//var ronda_siete = "Paper" === "Sissors"; //false || true // true wins
//var ronda_cinco = "Sissors" === "Stone"; //false || true // true wins

var user_wins = true || false; //true || false // false wins
//var ronda_ocho = "Stone" === "Sissors"; //true || false // false wins
//var ronda_siete = "Paper" === "Stone"; //true || false // true wins

var play = user_wins;
if(user_wins) {
        console.log("Robot wins");
    } else if (false || true) {
        console.log("User wins");
    } else {
        console.log("Tie");
    };
}

console.log(play);
*/