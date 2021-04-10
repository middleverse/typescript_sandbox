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

// What is the point of a type annotation? 
