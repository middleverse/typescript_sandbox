// tuple example
const pepsi: [string, string, number] = ["abs", "bbs", 1];

// hover over lhs, type is string
pepsi[0] = "another string";

// type alias
type Drink = [string, string, number]; // can do this to make it reusable
const pepsi2: Drink = ["brown", "carbonated", 1000];


// We don't use tuples that often in TS, why?
// ==========================================

const carSpecs: [number, number] = [400, 3345];
// What are these numbers? We don't really know anything about
// them except that they're numbers

// in an object format, since we're forced to put in a key,
// we can immediately look at an object and figure out what
// it is, what each attribute defines
const carStats = {
    horsepower: 400,
    weight: 3354
};