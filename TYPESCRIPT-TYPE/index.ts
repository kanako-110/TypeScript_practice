let hasValue: boolean = false;
let count: number = 10;
let float : number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back:string = `hello`;


// -----object
const person = {
  name:{
    first: "Jack",
    last: "Smith"

  } ,
  age: 21
}

const fruits: string[] = ["Apple", "Banana", "Grape"]

const book: [string, number, boolean] = ["business", 1500, false]

enum CoffeeSize  {
  SHORT= "SHORT",
  TALL= "TALL",
  GRANDE= "GRADE",
  VENTI= "VENTI"
}

const cofee = {
  hot: true,
  size: CoffeeSize.TALL
}

// anythingに関してはもう何でもでき放題になっちゃう
let anything: any= true;
anything = "hello";
anything = 1;
anything = true;

let banana = "banana";
banana = anything;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"]