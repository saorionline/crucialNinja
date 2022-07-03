//cuando cambiamos un tipo de valor por otro
var a = 4 + "7";

console.log(typeof a);

var b = 4 * "7";
console.log(typeof b);

var a = 20;
var b = a + "";

console.log(typeof b);

//queremos que el numero 20 se convierta en un string sin concatenarlo es una explicita
 var c = String(a);
console.log(typeof c);

var d = Number(c)
console.log(typeof d);

//cada vez que un usuario me regresa un valor me lo regresa como string y si yo quiero hacer una funcion debo hacer una coercion
