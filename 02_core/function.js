"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a) {
    // return a + b;
    return a;
}
console.log(add(1));
function toUpper(val) {
    return val.toUpperCase();
}
var val = 30;
var greet = "Hello buddy!!";
console.log(toUpper(greet));
console.log(toUpper("Vraj") + val);
function user(name, age, email) {
    return {
        name: name,
        age: age,
        email: email,
    };
}
var userOne = user("Vraj", 25, "lullaBhai@gmail.com");
console.log(userOne);
function userData(name, age, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return {
        name: name,
        age: age,
        isPaid: isPaid,
    };
}
var userTwo = userData("Vraj", 25);
console.log(userTwo);
var superHero = ["Ironman", "Thor", "Hulk", "Captain America"];
// const superHero = [1,2,3,4]
var heros = superHero.map(function (hero) {
    return "".concat(hero, " is a super hero");
});
console.log(heros);
function logError(error) {
    console.log(error);
}
function handleError(error) {
    console.log(error);
    throw new Error(error);
}
