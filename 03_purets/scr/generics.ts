const arr1: Array<number> = []

function idOne(arg: number): number{
    return arg;
}

function idTwo<Type>(arg: Type): Type{          // instead of Type you can use any name like T, vraj, etc
    return arg;
}

idTwo<string>("Vraj");
idTwo("Vraj");

idTwo(2);
idTwo<number>(2); // This is optional but good way to write


