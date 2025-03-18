//! user interface with readonly and optional parameters (?)
interface User {
  readonly id: string | number;
  name: string;
  email?: string; // optional email
  welcomeMessage?(text: string): void;
}

//! interface with object
const user: User = {
  id: "38758345656546",
  name: "Ram",
  welcomeMessage(text: string): void {
    console.log(`${text} ${this.name}`);
  },
};

// console.log(user);
// user.welcomeMessage("Welcome");

//! interface with functions
interface Login {
  (name: string, message: string): string;
}

const loginUser: Login = (name, message) => {
  return `Hello ${name}! ${message}`;
};
console.log(loginUser("Sachin", "Welome to Typescript"));

//! interface with classes
class UserDetails implements User {
  id: number | string;
  name: string;
  age: number;
  email?: string;

  constructor(id: string | number, n: string, age: number, email: string) {
    this.id = id;
    this.name = n;
    this.age = age;
    this.email = email;
  }

  loginMsg(text: string): void {
    console.log(`Hii ${this.name}!`);
    console.log(`${text}`);
  }
}

const user1 = new UserDetails(34235345, "Vicky", 33, "vicky@gmail.com");
// console.log(user1);
// console.log(user1.loginMsg("Welcome to Typescript"));

//! class with multiple interfaces
interface Address {
  city?: string;
  country: string;
}

interface SocialAccounts {
  whatsapp?: string;
  instagram?: string;
}

class Customer implements User, Address, SocialAccounts {
  readonly id: string | number;
  name: string;
  country: string;
  whatsapp?: string;

  constructor(
    id: string | number,
    name: string,
    country: string,
    whatsapp?: string
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.whatsapp = whatsapp;
  }

  userInfo(): void {
    console.log(`Welcome ${this.name} from ${this.country}, ${this.whatsapp}`);
  }
}

const customer = new Customer(235789453, "Rocky", "India", "whatsapp")
// console.log(customer);
// console.log(customer.userInfo());

//! extending interface inhereting properties
interface Order extends User,Address{
    product: string;
    price: number;
}

const orderDetails:Order = {
    id: 54353456,
    name: "Kanha",
    country: "India",
    product: "Redmi Note 15 Pro 5G",
    price: 30000,
}

console.log(orderDetails);


