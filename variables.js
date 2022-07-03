let name = "Sandra";
console.log(name);

//declarar
let age;
//inicializar
age = 30;

const web_site= ["Home", "About_Us", "Contact"];
console.log(web_site);

const user = {
    name: "Roberto",
    age: 30
}
console.log(user)

//Función declarativa
function sayHi(student){
    console.log(`Hello ${student}`);
}
sayHi('Mona')


function sum(a, b) {
    let result = a + b;
    console.log(result);
}
sum(1,3);

//Función expresiva

let myOtherFunction = function(a, b){
    console.log (a + b);
}

myOtherFunction(4,5);       