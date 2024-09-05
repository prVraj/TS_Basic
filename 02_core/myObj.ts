function createUser({ name: string, isActive: boolean }) {}

let newUser = { name: "vraj", isActive: true, age: 30 };

createUser(newUser);

function createCource(): { name: string; isActive: boolean } {
  return { name: "vraj", isActive: true };
}

const course = createCource();

console.log(course);

type User = { name: string; isActive: boolean };

function createUser2(user: User): User {
  return { name: "vraj", isActive: true };
}

const userOne = createUser2({ name: "vraj", isActive: true });

type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}

const greeting = greet({ name: "vraj", age: 30 });
console.log(greeting);


export {};
