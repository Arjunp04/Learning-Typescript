//object,array,tuple, enum
//! --------------------------- array --------------------- //
var numbers = [23, 45, 12, 34];
var fruits = ["apple,banana", "mango"];
//! ------------------- object --------------------- //
var user = {
    name: "Arjun",
    age: 21,
    isStudent: true,
    subjects: ["maths", "english", "hindi"],
};
//! ------------------- tuple --------------------- //
var data;
data = ["Arjun", 21, false, 22];
//! ------------------- enum --------------------- //
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
    Role["SUPERADMIN"] = "superadmin";
})(Role || (Role = {}));
var role = Role.ADMIN;
console.log(role);
var output = document.getElementById("output");
if (output) {
    output.innerHTML = "\n     <h4>-------------------- TypeScript Data Types Example -------------------</h4>\n     <p><strong>Array of Numbers : </strong>".concat(numbers.join(","), "</p>\n       <p><strong>Array of fruits : </strong>").concat(fruits, "</p>\n\n       <br>\n         <p> --------- OBJECT ---------</p>\n        <p><strong>User : </strong>").concat(JSON.stringify(user), "</p>\n        \n    <br>\n         <p> --------- TUPLE ---------</p>\n        <p><strong>Data : </strong>").concat(data.join("|"), "</p>\n\n           <br>\n         <p> --------- ENUM ---------</p>\n        <p><strong>Role : </strong>").concat(role, "</p>\n    ");
}
