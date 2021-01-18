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

const apple = "apple"
let clothSize: "small" | "medium" | "large" = "small";

type ClothSize = "small" | "medium" | "large"
const cloth : {
  color: string,
  size: ClothSize
} = {
  color: "white",
  size: "medium"
}

//function funcName( , ): 戻り値の型{}
function add(num1: number, num2: number): number{
  return num1 + num2
}

// undefinedはreturn がないと使えない
// voidは合ってもなくても使える　基本こっちを使う
function sayHello(): undefined {
  console.log("Hello")
  return 
}

// 関数の型注釈　
// いつ使うか：関数を保持する変数を作るときなど：
// parameter のあと => 
// ※定義はコロン
const anotherAdd: (n1: number, n2: number) => number = function(num1, num2){
  return num1 * num2
};

// arrow関数
// arrow関数の関数制限
const doubleNumber2 = (number : number): number => number * 3;
// これだとせっかくarrow関数にしてきれいにreturn文を見えるようにしたのに意味ないじゃん
// →変数名に型注釈する
const doubleNumber: (num: number) => number = number => number * 2;

// 第二引数にコールバック関数を指定。その数式を第二引数で書く。
function doubleAndHandle(num: number, cb:(num: number)=> number): void {
  const doubleNum = cb(num*3)
  console.log(num * 2)
}
doubleAndHandle(20, doubleNum => {
  return doubleNum
})

let unknownInput : unknown; //unknown型
let anyInput : any; //any型
let text: string;
unknownInput = "hello"
unknownInput = 21
unknownInput = true; //なんでも入れれる! が、中身がstring/num/booleanと複数入っていると、新しい変数に代入はできない。anyはできる
text = anyInput
// unknownInputを変数に代入したいときはif文にする
if (typeof unknownInput === 'string'){ //unknownInputがstringのとき
  text = unknownInput
}

function error(message: string): never{
  throw new Error(message);
}


