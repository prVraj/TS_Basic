// const superHeroes: string[] = [];
const superHeroes: Array<string> = [];

superHeroes.push("Iron-man");
superHeroes.push("23");

const superVillains: string[][] = [
    ["Lex Luthor", "Brainiac"],
    ["Joker", "Bane"]
]; // 2D array

type Users = {
    name: string;
    age: number;
    email: string;
};
type Admin = {
    userName: string;
    age: number;
    email: string;
};

let vraj: Users | Admin = {
    name: "Vrij",
    age: 23,
    email: "v@v.com"
}

vraj = {
    userName: "Vraj",
    age: 23,
    email: "vraj@Admin.com"
}

function id (id: string|number){
    // id + 2;
    // id.toUpperCase();
    if(typeof id === "string"){
        const name = id.toUpperCase();
        return name;
    }
}
console.log(id("vraj"));

let seatAllotment: "aisle" | "middel" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";





export{};