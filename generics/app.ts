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

//! generics functions to filter array of objects returning objects
// const users = [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Charlie", role: "admin" },
//   { id: 4, name: "David", role: "user" },
//   { id: 5, name: "Cameron", role: "admin" },
// ];

// function filterItems<T, K extends keyof T, V extends T[K]>(
//   arr: T[],
//   key: K,
//   value: V
// ) {
//   return arr.filter((item) => item[key] === value);
// }

// const allAdmins = filterItems(users,"role","admin")
// console.log(allAdmins);

// const allUsers = filterItems(users, "role", "user");
// console.log(allUsers);

//! generic interface
// interface Box<T> {
//   value: T;
// }

// const box1: Box<number> = { value: 300 };
// console.log(box1);

// const stringBox: Box<string> = { value: "Hiii" };
// console.log(stringBox);

//! ----------- example 2 ----------------
interface DataStore<T extends object, U extends Array<any>, V extends boolean = boolean> {
  data: T; // object
  items: U; // array
  isActive: V; // boolean
}

// Using DataStore with a user object and an array of numbers
const userStore: DataStore<{ id: number; name: string }, number[]> = {
  data: { id: 1, name: "Alice" },
  items: [10, 20, 30],
  isActive: true, // Uses default type (boolean)
};

console.log(userStore);


// Using DataStore with a product object and an array of strings
const productStore: DataStore<{ id: number; title: string }, string[], false> = {
  data: { id: 101, title: "Laptop" },
  items: ["RAM", "SSD", "Keyboard"],
  isActive: false, // Explicitly specifying boolean type as false
};

console.log(productStore);


//! example demonstrating interfaces, classes, and type generics together in a user management scenario.

// Interface defining user properties
interface IUser {
  id: number;
  name: string;
  email: string;
}

// Class implementing IUser
class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}

  getUserInfo(): string {
    return `User: ${this.name}, Email: ${this.email}`;
  }
}

// Generic class for managing users
class UserManager<T extends IUser> {
  private users: T[] = [];

  addUser(user: T): void {
    this.users.push(user);
    console.log(`User added: ${user.name}`);
  }

  getUserById(id: number): T | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): T[] {
    return this.users;
  }
}

// Usage
const user1 = new User(1, "John Doe", "john@example.com");
const user2 = new User(2, "Jane Doe", "jane@example.com");

const userManager = new UserManager<User>();

userManager.addUser(user1);
userManager.addUser(user2);

console.log(userManager.getUserById(1)?.getUserInfo()); // User: John Doe, Email: john@example.com
console.log(userManager.getAllUsers()); // Array of users



