interface User {
  readonly Id: number;
  name: string;
  age: number;
  isMale: boolean;
  googleMail?: string;
  // gertStarted: () => string;
  couponName(specialName: string): string;
}


interface User {
    GitHub: string;
}

const user: User = {
  Id: 1,
  name: "Vraj",
  GitHub : "Vraj",
  age: 23,
  isMale: true,
  couponName: (name: "Sensei") => {
    return "Hello";
  },
};
