// Square
console.group(`Square`);

const squareSide = 5;
console.log(`Square side value: ${squareSide}cm`);

const squarePerimeter = squareSide * 4;
console.log(`Square perimeter value: ${squarePerimeter}cm`);

const squareArea = squareSide ** 2;
console.log(`Square area value: ${squareArea}cm^2`);

console.groupEnd();



// Triangle
console.group(`Triangle`);

const triangleSideA = 6;
const triangleSideB = 6;
const triangleSideC = 4;
console.log(`Triangle side values: A:${triangleSideA}cm, B:${triangleSideB}cm, C:${triangleSideC}cm`);

const triangleHeight = 5.5;
console.log(`Triangle height value: ${triangleHeight}cm`)

const trianglePerimeter = triangleSideA + triangleSideB + triangleSideC ;
console.log(`Triangle perimeter value: ${trianglePerimeter}cm`);

const triangleArea = (triangleSideC*triangleHeight) / 2;
console.log(`Square area value: ${triangleArea}cm^2`);

console.groupEnd();



// Circle
console.group(`Circle`);

const circleRadius = 4;

const circleDiameter = circleRadius * PictureInPictureWindow;

console.groupEnd();