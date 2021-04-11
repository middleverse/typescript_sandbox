// primitive types
let apples = 10; // example of type annotation
let speed = 'fast';
let nothing_much = null;
let nothingned = null; // explained below
// null !== undefined # strictly unequivalent
// null == undefined # loosely equivalent

// built in objects
let now = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']
let truths: boolean[] = [true, true, false]

// since the test variable isn't defined on this line, 
// we need type annotation to define the type
let test: string = undefined; 
test = 'test';

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number; z: number } = { 
    x: 10, 
    y: 20,
    z: 10
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// Summary
// All the above are written in type annotations,
// but not even a single example above requires type annotations

// When to use annotations?
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20, "z": 10}';
const coordinates = JSON.parse(json)
console.log(coordinates.x)
