// primitive types
let apples: number = 10; // example of type annotation
let speed: string = 'fast';
let nothing_much: null = null;
let nothing: undefined = null; // explained below
// null !== undefined # strictly unequivalent
// null == undefined # loosely equivalent

// built in objects
let now: Date = new Date();

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







// What is the point of a type annotation? 
