//! ----------- Union Type ----------------//

// function printId(id: string | number) {
//   console.log(`Your ID is: ${id}`);
// }

// printId(123);     // ✅ Output: Your ID is: 123
// printId("ABC");   // ✅ Output: Your ID is: ABC

//! ----------- Literal Type ----------------//

type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

function updateOrder(status: OrderStatus) {
  console.log(`your order status : ${status}`);
}

updateOrder("cancelled");

//! ----------- Type Alias ----------------//
type userId = number | string; //  union type
type userRole = "user" | "admin" | "superadmin"; //literal type

//custom type / type alias
type UserDetails = {
  name: string;
  age: number;
  id: userId;
  role: userRole;
};

const user: UserDetails = {
  name: "Arun",
  age: 20,
  id: "11111117847",
  role: "admin",
};

console.log(user);
