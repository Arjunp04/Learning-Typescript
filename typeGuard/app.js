"use strict";
//! type guard -> typeof , instanceof, on
// type Admin = {
//   name: string;
//   orders: string[];
// };
// type User = {
//   id: string | number;
//   name: string;
//   startDate: Date;
// };
// type ElevatedUser = Admin & User;
// type UnknownUser = Admin | User;
// function PrintUserInfo(user: UnknownUser, input: string | number) {
//   console.log(`Processing action for ${user.name}...`);
//   //! Using "in" operator to check user type
//   if ("id" in user) {
//     console.log(
//       `User ID: ${user.id}, Start Date: ${user.startDate.toDateString()}`
//     );
//   }
//   if ("orders" in user) {
//     console.log(`Admin Orders: ${user.orders.join(", ")}`);
//   }
//   //! Using "typeof" to check input type
//   if (typeof input === "string") {
//     console.log(`Message: ${input.toUpperCase()}`);
//   } else {
//     console.log(`Processing Order ID: ${input}`);
//   }
// }
// const user: User = { id: "U123", name: "John", startDate: new Date() };
// const admin: Admin = { name: "Alice", orders: ["Laptop", "Phone"] };
// // Function Calls
// PrintUserInfo(user, "Welcome to our store!");
// PrintUserInfo(admin, 101);
//! typegaurd using class
//! admin class
// class Admin {
//   name: string;
//   orders: string[];
//   constructor(name: string, orders: string[]) {
//     this.name = name;
//     this.orders = orders;
//   }
//   manageOrders() {
//     console.log(`${this.name} is managing orders: ${this.orders.join(", ")}`);
//   }
// }
// //! user class
// class User {
//   id: string | number;
//   name: string;
//   startDate: Date;
//   constructor(id: string | number, name: string, startDate: Date) {
//     this.id = id;
//     this.name = name;
//     this.startDate = startDate;
//   }
//   placeOrder(product: string) {
//     console.log(`${this.name} placed an order for ${product}`);
//   }
// }
// //! superadmin class extending user
// class SuperAdmin extends User {
//   orders: string[];
//   constructor(
//     id: string | number,
//     name: string,
//     startDate: Date,
//     orders: string[]
//   ) {
//     super(id, name, startDate);
//     this.orders = orders;
//   }
//   manageOrders() {
//     console.log(
//       `${this.name} (SuperAdmin) is managing orders: ${this.orders.join(", ")}`
//     );
//   }
// }
// //!handle functions implmenting logic of type od, instance of and in
// function handleUserAction(
//   user: Admin | User | SuperAdmin,
//   input: string | number
// ) {
//   console.log(`Processing action for ${user.name}...`);
//   //! Using "instanceof" to check object type
//   if (user instanceof User) {
//     console.log(
//       `User ID: ${user.id}, Start Date: ${user.startDate.toDateString()}`
//     );
//     user.placeOrder("New Product");
//   }
//   if (user instanceof Admin || user instanceof SuperAdmin) {
//     console.log(`Admin Orders: ${user.orders.join(", ")}`);
//     user.manageOrders();
//   }
//   //! Using "in" operator to check if a property exists
//   if ("id" in user) {
//     console.log(`Verified User ID: ${user.id}`);
//   }
//   if ("orders" in user) {
//     console.log(`Verified Admin Orders: ${user.orders}`);
//   }
//   //! Using "typeof" to handle input types
//   if (typeof input === "string") {
//     console.log(`Message to User/Admin: ${input.toUpperCase()}`);
//   } else if (typeof input === "number") {
//     console.log(`Processing Order ID: ${input}`);
//   }
// }
// //! Creating User, Admin, and SuperAdmin objects
// const user1 = new User("U123", "John", new Date("2023-01-15"));
// const admin1 = new Admin("Alice", ["Laptop", "Phone"]);
// const superAdmin1 = new SuperAdmin("SA999", "Charlie", new Date("2020-05-10"), [
//   "Macbook",
//   "Camera",
// ]);
// // Function Calls
// handleUserAction(user1, "Welcome to our platform!");
// handleUserAction(admin1, 1001);
// handleUserAction(superAdmin1, "Super Admin Alert");
//! ---------- type assertion / type casting ----------- //
//? Sometimes, TypeScript doesn't recognize an element type automatically, so we use type assertion.
// const inputElement = <HTMLInputElement>document.getElementById("user-input")!;
const inputElement = document.getElementById("user-input");
inputElement.value = "Hii there...";
