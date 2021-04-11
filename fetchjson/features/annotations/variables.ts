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
const coordinates1 = JSON.parse(json); // type inferred -> type any, we don't want 'any' 
const coordinates2: { x: number; y: number; z: number } = JSON.parse(json); // type annotated
console.log(coordinates2.x);

// 2) When we declare a variable on one line and 
// initialize it later
let words = ['red', 'green', 'blue'];
let foundWordAnyType; // the inferred type is 'any', we don't want that
let foundWord: boolean; // type annotated, inferred type boolean

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3) When we want a variable to have a type
// that can't be reasonable inferred (super important)
let numbers = [-10, -100, 20];
let numberAboveZero: boolean | number = false; // type annotation in the form of an "or" statement

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}