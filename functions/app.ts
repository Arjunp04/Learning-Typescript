//! function returns value and return type is number
function add(a: number, b: number): number {
  return a + b;
}
// console.log(add(20, 40));

//! function don't return anything so return type is void
function text(data: string): void {
  console.log(`hiii ${data}`);
}

//! different way of writing function
//!  XXXXXX   BAD PRACTISE
// let combineFunction: Function;
// // combineFunction = function(){} // valid

// combineFunction = add // valid
// combineFunction = text
// console.log(combineFunction(100, 300))
// // console.log(combineFunction("jsvn"))

//! GOOOOOD PRACTISE
let combineFunction: (a: number, b: number) => number;
combineFunction = add;
console.log(combineFunction(100, 100));

//! callback function
function sum(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

sum(200, 500, (result: number) => {
  console.log(`Your callback result : ${result}`);
});
