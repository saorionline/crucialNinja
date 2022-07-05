console.log("Obra de arte")
console.group("Square");
// Square code
    const squareSide = 5;
    console.log(`Each side of the square measures ${squareSide} cm` );
    
    const squarePerimeter = squareSide * 4;
    console.log(`The perimeter of the square measures ${squarePerimeter} cm`);
    
    const squareArea = Math.pow(squareSide, 2);
    console.log(`The area of the square measures ${squareArea} cm^2`);
console.groupEnd();

console.group("Triangle");
// Triangle code
    const triangleBase = 6;
    const triangleHeight = 5;
    const triangleSide = 3;
    const triangleSideOne = 3;
    console.log(`All sides of the triangle measures ${triangleSide} cm ${triangleSideOne} cm ${triangleBase} cm`);
    console.log(`Triangle height ${triangleHeight} cm `);
    
    const trianglePerim = triangleSide + triangleSideOne + triangleBase;
    console.log(`The perimeter of this triangle measures ${trianglePerim} cm`);
    
    const triangleArea = (triangleHeight * triangleBase ) / 2;
    console.log(`The area of this triangle measures ${triangleArea} cm^2`);
        
console.groupEnd();

console.group("Circle");
//Circle code
    const circleRadio = 4;
    const circleDiam = circleRadio * 2;
    const pi = Math.PI;
    const circlePerim = circleDiam * pi ;
    console.log(`The perimeter of the circle is ${circlePerim} cm`);
    
    const circleArea = pi * (circleRadio * circleRadio);
    console.log(`The area of the circle is ${circleArea} cm^2`)
console.groupEnd()
/*
console.log(`The total perimeter of the triangle is ${trianglePerimeter} cm`);

console.log(`The area of this triangle is ${triangleArea} cm^2` );
*/
 