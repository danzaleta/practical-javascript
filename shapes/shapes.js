// Square
console.group(`Square`);

const squareSide = 5;

const calcSquarePerimeter = side => side*4;
const calcSquareArea = side => side**2;

console.log(`Square perimeter value: ${calcSquarePerimeter(squareSide)}cm`);
console.log(`Square area value: ${calcSquareArea(squareSide)}cm^2`);

console.groupEnd();



// Triangle
console.group(`Triangle`);

const triangleSideA = 6;
const triangleSideB = 6;
const triangleSideC = 4;
const triangleHeight = 5.5;

const calcTrianglePerimeter = (sideA, sideB, base)=> sideA+sideB+base;
const calcTriangleArea = (base, height)=> (base*height)/2;

console.log(`Triangle perimeter value: ${calcTrianglePerimeter(triangleSideA, triangleSideB, triangleSideC)}cm`);
console.log(`Square area value: ${calcTriangleArea(triangleSideC, triangleHeight)}cm^2`);

console.groupEnd();



// Circle
console.group(`Circle`);

const circleRadius = 4;

const calcCircleDiameter = radius => radius*2;
const calcCirclePerimeter = radius => calcCircleDiameter(radius)*Math.PI;
const calcCircleArea = radius => (radius**2)*Math.PI;

console.log(`Circle diameter: ${calcCircleDiameter(circleRadius)}cm`);
console.log(`Circle perimeter: ${calcCirclePerimeter(circleRadius)}cm`);
console.log(`Circle area: ${calcCircleArea(circleRadius)}cm^2`);

console.groupEnd();