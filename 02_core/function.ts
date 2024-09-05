function add(a: number): number {
  // return a + b;
  return a;
}

console.log(add(1));

function toUpper(val: string) {
  return val.toUpperCase();
}

let val = 30;
let greet = "Hello buddy!!";

console.log(toUpper(greet));
console.log(toUpper("Vraj") + val);

function user(name: string, age: number, email: string) {
  return {
    name,
    age,
    email,
  };
}
let userOne = user("Vraj", 25, "lullaBhai@gmail.com");

console.log(userOne);

function userData(name: string, age: number, isPaid: boolean = false) {
  return {
    name,
    age,
    isPaid,
  };
}

let userTwo = userData("Vraj", 25);
console.log(userTwo);

const superHero = ["Ironman", "Thor", "Hulk", "Captain America"];
// const superHero = [1,2,3,4]

let heros = superHero.map((hero: string) => {
  return `${hero} is a super hero`;
});

console.log(heros);

function logError(error: string): void{
  console.log(error);
}
function handleError(error: string): never{
  console.log(error);
  throw new Error(error);
}


export {};
