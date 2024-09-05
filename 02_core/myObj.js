"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = { name: "vraj", isActive: true, age: 30 };
createUser(newUser);
function createCource() {
    return { name: "vraj", isActive: true };
}
var course = createCource();
console.log(course);
function createUser2(user) {
    return { name: "vraj", isActive: true };
}
var userOne = createUser2({ name: "vraj", isActive: true });
function greet(person) {
    return "Hello " + person.name;
}
var greeting = greet({ name: "vraj", age: 30 });
console.log(greeting);
var person = {
    _id: [1, 2, 3],
    name: "vraj",
    age: 30,
    isActive: true,
};
person.age = 31;
