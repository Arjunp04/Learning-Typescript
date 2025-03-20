"use strict";
var _a;
//! generics for array
{
    /*
  const cars: Array<string> = ["Maruti", "MG", "Hyundai"];
  cars.push("BMW")
  console.log(cars)
  */
}
//! array of objects
{
    /**
     type User = {
    name: string;
    age: number;
  };
  
  const usersList: Array<User> = [{ name: "Raj", age: 20 }];
  console.log(usersList);
      **/
}
//! generics for objects
{
    /**
      function mergeObjects<T, U, S>(obj1: T, obj2: U, obj3: S) {
    return { ...obj1, ...obj2, ...obj3 };
  }
  
  const result = mergeObjects(
    { name: "Arjun" },
    { age: 32 },
    { profession: "Developer" }
  );
  console.log(result)
      **/
}
//! generics with constraints
//! Function with Number, String, and Boolean Constraints
{
    /*
      function createObject<T extends number, U extends string, V extends boolean>(
    id: T,
    name: U,
    isActive: V
  ): { id: T; name: U; isActive: V } {
    return { id, name, isActive };
  }
  
  const user = createObject(1, "Alice", true);
  console.log(user);
  
  const product = createObject(101, "Laptop", false);
  console.log(product);
      */
}
// Using DataStore with a user object and an array of numbers
const userStore = {
    data: { id: 1, name: "Alice" },
    items: [10, 20, 30],
    isActive: true, // Uses default type (boolean)
};
console.log(userStore);
// Using DataStore with a product object and an array of strings
const productStore = {
    data: { id: 101, title: "Laptop" },
    items: ["RAM", "SSD", "Keyboard"],
    isActive: false, // Explicitly specifying boolean type as false
};
console.log(productStore);
// Class implementing IUser
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getUserInfo() {
        return `User: ${this.name}, Email: ${this.email}`;
    }
}
// Generic class for managing users
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User added: ${user.name}`);
    }
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    getAllUsers() {
        return this.users;
    }
}
// Usage
const user1 = new User(1, "John Doe", "john@example.com");
const user2 = new User(2, "Jane Doe", "jane@example.com");
const userManager = new UserManager();
userManager.addUser(user1);
userManager.addUser(user2);
console.log((_a = userManager.getUserById(1)) === null || _a === void 0 ? void 0 : _a.getUserInfo()); // User: John Doe, Email: john@example.com
console.log(userManager.getAllUsers()); // Array of users
