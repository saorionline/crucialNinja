console.log("Obra de arte")
console.group("Square");
// Square code
    //const squareSide = 5; ----> esto queda ahora como parámetro dentro de la función sideSquare 
    //console.log(`Each side of the square measures ${squareSide} cm` ); --> esto queda listo cuando hago una función
    
    //  const squarePerimeter = squareSide * 4;
function squarePerimtr (sideSquare) {
    return sideSquare * 4;
}
    //console.log(`The perimeter of the square measures ${squarePerimeter} cm`);

    //const squareArea = Math.pow(squareSide, 2);
function squrArea (sideSquare) {
    return Math.pow(sideSquare, 2);
}
    //console.log(`The area of the square measures ${squareArea} cm^2`);
console.groupEnd();

console.group("Triangle");
// Triangle code
    /*const triangleBase = 6;
    const triangleHeight = 5;
    const triangleSide = 3;
    const triangleSideOne = 3;
    console.log(`All sides of the triangle measures ${triangleSide} cm ${triangleSideOne} cm ${triangleBase} cm`);
    console.log(`Triangle height ${triangleHeight} cm `);
    
    const trianglePerim = triangleSide + triangleSideOne + triangleBase;
    console.log(`The perimeter of this triangle measures ${trianglePerim} cm`);
    */
function perimTriangle (baseTriangle, sideTriangle) {
       return sideTriangle + sideTriangle + baseTriangle
   }
       
    /*const triangleArea = (triangleHeight * triangleBase ) / 2;
    console.log(`The area of this triangle measures ${triangleArea} cm^2`);
     */
function areaTriangle (baseTriangle, heightTriangle) {
    return (heightTriangle * baseTriangle ) / 2;
}
console.groupEnd();

console.group("Circle");
//Circle code
const pi = Math.PI;
    /*const circleRadio = 4;
    const circleDiam = circleRadio * 2;
    
    const circlePerim = circleDiam * pi ;
    console.log(`The perimeter of the circle is ${circlePerim} cm`);
    
    const circleArea = pi * (circleRadio * circleRadio);
    console.log(`The area of the circle is ${circleArea} cm^2`)
    
     */
function diameterCircle(radio) {
    return radio * 2;
}
function perimCircle (radioCircle) {
    const diamtr = diameterCircle(radioCircle); 
    return diamtr * pi;
}

function areaCircle (radioCircle) {
    return pi * (radioCircle * radioCircle);
}
console.groupEnd()
/*
console.log(`The total perimeter of the triangle is ${trianglePerimeter} cm`);

console.log(`The area of this triangle is ${triangleArea} cm^2` );
*/
  
// Cuando se haga click en el botón Calculate Perimeter se hace un llamado a una funciòn en JS

function squareCalcuPerimt() {
    //entrar a lo que dice el input 
    const input = document.getElementById('square');
    //seleccionar solamente el numero
    const value = input.value;
    //crear un alert diciendo cuál es el perimetro
    const alerPerim = squarePerimtr(value);
    alert(alerPerim);
}

function squareCalcuArea() {
    const input = document.getElementById('square');
    const value = input.value;
    const alerArea = squrArea(value);
    alert(alerArea);
    
}