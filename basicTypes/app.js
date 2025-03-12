var n1 = 10;
var n2 = 30;
var userName = "Arjun";
var stringText = "Sum of two numbers : ";
var printAns = true;
function add(num1, num2, stringText, printAns) {
    if (printAns) {
        console.log("".concat(stringText, " ").concat(num1 + num2));
        return "".concat(stringText, " ").concat(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var output = document.getElementById("output");
if (output) {
    output.innerHTML = "\n    <h1>Hii! ".concat(userName, "</h1>\n    ").concat(add(n1, n2, stringText, printAns), "\n    ");
}
