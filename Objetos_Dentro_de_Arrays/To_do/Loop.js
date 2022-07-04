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
 */

for (var disciple of disciples) {
    firstClass(disciple);
}
    
