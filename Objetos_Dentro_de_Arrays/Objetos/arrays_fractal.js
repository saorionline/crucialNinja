const fruits = [ "Apple", "Banana", "Pineapple", "Papaya", "Mango"];
//add
const moreFruits = fruits.push("Strawberries");
//substract
const deleteFruit = fruits.pop("Banana");
// add as first
const updateShelf = fruits.unshift("Melon") ;
//substract the first one most be at first
const deleteOtherFrt = fruits.shift("Melon");
//mutar sin saber cual es su posicion
const organize = fruits.indexOf("Pineapple");

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits);
console.log(organize);