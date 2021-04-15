const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates: Date[] = [new Date(), new Date()];

const carsByMake = [
    ['f1540'],
    ['corolla'],
    ['camaro']
];

// Why Typed arrays?

// help with inference when extracting values
// check car type
const car = carMakers[0];

// help with 'map'
carMakers.map((car: string): string => {
    return car; 
    // type script makes sure we return string
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), 'arshi']; // only strings and Date objects
const checkType: any[] = [new Date(), 1, 2, 'arshi', false] // super flexible any type