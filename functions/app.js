//! function returns value and return type is number
function add(a, b) {
    return a + b;
}
// console.log(add(20, 40));
//! function don't return anything so return type is void
function text(data) {
    console.log("hiii ".concat(data));
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
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 100));
//! callback function
function sum(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
sum(200, 500, function (result) {
    console.log("Your callback result : ".concat(result));
});
