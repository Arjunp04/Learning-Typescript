//object,array,tuple, enum

//! --------------------------- array --------------------- //

const numbers: number[] = [23, 45, 12, 34];
const fruits: string[] = ["apple,banana", "mango"];

//! ------------------- object --------------------- //

const user: {
  name: string;
  age: number;
  isStudent: boolean;
  subjects: string[]; // array of string
} = {
  name: "Arjun",
  age: 21,
  isStudent: true,
  subjects: ["maths", "english", "hindi"],
};


//! ------------------- tuple --------------------- //

let data: [string, number, boolean, number];
data = ["Arjun", 21, false, 22];

//! ------------------- enum --------------------- //
enum Role{
    USER ="user",ADMIN="admin",SUPERADMIN="superadmin"
}

const role: Role = Role.ADMIN;
console.log(role)

const output = document.getElementById("output");
if (output) {
  output.innerHTML = `
     <h4>-------------------- TypeScript Data Types Example -------------------</h4>
     <p><strong>Array of Numbers : </strong>${numbers.join(",")}</p>
       <p><strong>Array of fruits : </strong>${fruits}</p>

        <br>
         <p> --------- OBJECT ---------</p>
        <p><strong>User : </strong>${JSON.stringify(user)}</p>
        
       <br>
         <p> --------- TUPLE ---------</p>
        <p><strong>Data : </strong>${data.join("|")}</p>

        <br>
         <p> --------- ENUM ---------</p>
        <p><strong>Role : </strong>${role}</p>
    `;
}
