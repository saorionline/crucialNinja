//declarar
var color;
//inicializa
color = "blue";

// declarar e inicializar 
var color = "blue";

// ejemplo de hoisting para variables
console.log(myName);
// automaticamente se define como indefinida
var myName= "Freddy";

// ejemplo de hoisting para las funciones
greeting();

function greeting() {
    console.log(`Hey ${myName}`);
}

