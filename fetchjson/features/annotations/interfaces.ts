// =======================================================================
// without interfaces
// =======================================================================
const oldCivic = {
  name: "civic",
  year: 2000,
};

// the following line gets really long
const printVehicle = (vehicle: { name: string; year: number }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
};

printVehicle(oldCivic);

// =======================================================================
// we can improve this!
// with interfaces
// =======================================================================
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// argument space is so much cleaner!
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// won't work because oldCivic doesn't have a 'broken' property
printVehicle2(oldCivic);

// =======================================================================
// Interfaces just need to be "satisfied",
// an object being implemented as an interface can
// have other attributes as well
// =======================================================================
interface SalesStand {
  summary(): string;
}

const lemonade_stand = {
  type: "Lemonade",
  sales: 29,
  summary(): string {
    return `Type: ${this.type}`;
  },
};

const printSummary = (item: SalesStand): void => {
  console.log(item.summary);
};

printSummary(lemonade_stand);
