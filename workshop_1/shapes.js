// Square
const calcSquarePerimeter = side => side * 4;
const calcSquareArea = side => Math.pow(side, 2);

// Triangle
const calcTrianglePerimeter = (sideA, sideB, base) => sideA + sideB + base;
const calcTriangleArea = (base, height) => (base * height) / 2;

// Circle
const calcCircleDiameter = radius => radius * 2;
const calcCirclePerimeter = radius => calcCircleDiameter(radius) * Math.PI;
const calcCircleArea = radius => (Math.pow(radius, 2)) * Math.PI;

// HTML interaction
function SquarePerimeter() {
    const input = document.getElementById("square-input");
    const value = parseFloat(input.value);

    const perimeter = calcSquarePerimeter(value);
    alert(perimeter);
}
function SquareArea() {
    const input = document.getElementById("square-input");
    const value = parseFloat(input.value);

    const area = calcSquareArea(value);
    alert(area);
}
function TrianglePerimeter() {
    const inputA = document.getElementById("triangle-sideA-input");
    const valueA = parseFloat(inputA.value);

    const inputB = document.getElementById("triangle-sideB-input");
    const valueB = parseFloat(inputB.value);

    const inputBase = document.getElementById("triangle-base-input");
    const base = parseFloat(inputBase.value);

    const perimeter = calcTrianglePerimeter(valueA, valueB, base);
    alert(perimeter);
}
function TriangleArea() {
    const inputBase = document.getElementById("triangle-base-input");
    const base = parseFloat(inputBase.value);

    const inputHeight = document.getElementById("triangle-height-input");
    const height = parseFloat(inputHeight.value);

    const area = calcTriangleArea(base, height);
    alert(area);
}
function CircleDiameter() {
    const input = document.getElementById("circle-input");
    value = parseFloat(input.value);

    const diameter = calcCircleDiameter(value);
    alert(diameter);
}
function CirclePerimeter() {
    const input = document.getElementById("circle-input");
    value = parseFloat(input.value);

    const perimeter = calcCirclePerimeter(value);
    alert(perimeter);
}
function CircleArea() {
    const input = document.getElementById("circle-input");
    value = parseFloat(input.value);

    const area = calcCircleArea(value);
    alert(area);
}