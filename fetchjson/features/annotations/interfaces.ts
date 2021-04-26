// without interfaces
// ------------------
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

// we can improve this!
// with interfaces
// --------------------

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
}

// won't work because oldCivic doesn't have a 'broken' property
printVehicle2(oldCivic) 