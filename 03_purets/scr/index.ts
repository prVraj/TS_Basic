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
    
    constructor(
        private name: string, 
        public Email: string,
        // public Id?: number
        public Id: number
    ){}

    get add():number{
        return this.Id;
    }
    set add(number: number){
        this.Id = number;
    }    
}

let Vraj = new User("Vraj", "V@V.com", 43)
























// class nope {
//     name = "lullabhai";
//     name2: string;
//     constructor(){
//         this.name2 = "lullabhai";
//     }
// }

