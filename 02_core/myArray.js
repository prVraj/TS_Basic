"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const superHeroes: string[] = [];
var superHeroes = [];
superHeroes.push("Iron-man");
superHeroes.push("23");
var superVillains = [
    ["Lex Luthor", "Brainiac"],
    ["Joker", "Bane"]
]; // 2D array
var vraj = {
    name: "Vrij",
    age: 23,
    email: "v@v.com"
};
vraj = {
    userName: "Vraj",
    age: 23,
    email: "vraj@Admin.com"
};
function id(id) {
    // id + 2;
    // id.toUpperCase();
    if (typeof id === "string") {
        var name_1 = id.toUpperCase();
        return name_1;
    }
}
console.log(id("vraj"));
var seatAllotment;
seatAllotment = "aisle";
