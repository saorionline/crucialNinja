/*
// mientras adentro de ese loop se cumpla una condicion esa tarea pasa 
const disciples = ["Jorge", "Adam", "Sweetie", "Nicole", "David"]
//saludar a cada uno
function firstClass(disciple) {
    console.log(`Dear ${disciple}`);
}

/* este dice Hola Jorge, Adam, Sweetie, Nicole, David
for (var i = 0; i < disciples.lenght; i++) {
    firstClass( disciples [i]);
}
*/

/*este dice 
Hola Jorge
Hola Adam
Sweetie
Nicole 
David


for (var disciple of disciples) {
    firstClass(disciple);
}


// práctica: escribe un códido en Javascript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos el mensaje, felicitaciones sino volvemos a empezar.
var start = prompt("Hi please answer how much is 2 + 2");
*/
var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['2+2'], function (result) {
    //
    // Log the results.
    //
    if (result = 4) {
        console.log('Nice!');
    } else {
        console.log('Try again');
    }
}) 