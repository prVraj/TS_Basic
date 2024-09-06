"use strict";
// class User {
//     private name: string;
//     Email: string;
//     city?: string;
//     constructor(name: string, Email: string, city?: string){
//         this.name = name;
//         this.Email = Email;
//         this.city = city;
//     }
// }
class User {
    constructor(name, Email, 
    // public Id?: number
    Id) {
        this.name = name;
        this.Email = Email;
        this.Id = Id;
    }
    get add() {
        return this.Id;
    }
    set add(number) {
        this.Id = number;
    }
}
let Vraj = new User("Vraj", "V@V.com", 43);
// class nope {
//     name = "lullabhai";
//     name2: string;
//     constructor(){
//         this.name2 = "lullabhai";
//     }
// }
