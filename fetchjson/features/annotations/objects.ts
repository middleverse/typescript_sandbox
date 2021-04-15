export {}

const profile = {
  name: "arshi",
  age: 28,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number, name: string } = profile;

const myname: string = profile.name;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

console.log(lat, lng)

// Summary
// The above is a example on how/when to use type annotation
// for objects and a lesson on destructuring