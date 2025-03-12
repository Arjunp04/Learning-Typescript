const n1: number = 10;
const n2: number = 30;
const userName: string = "Arjun";
const stringText: string = "Sum of two numbers : ";
const printAns: boolean = true;

function add(
  num1: number,
  num2: number,
  stringText: string,
  printAns: boolean
) {
  if (printAns) {
    console.log(`${stringText} ${num1 + num2}`);
    return `${stringText} ${num1 + num2}`;
  } else {
    return num1 + num2;
  }
}

const output = document.getElementById("output");
if (output) {
  output.innerHTML = `
    <h5>Hii! ${userName}</h5>
    ${add(n1, n2, stringText, printAns)}
    `;
}
