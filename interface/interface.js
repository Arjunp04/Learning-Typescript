"use strict";
//! interface with object
const user = {
    id: "38758345656546",
    name: "Ram",
    welcomeMessage(text) {
        console.log(`${text} ${this.name}`);
    },
};
const loginUser = (name, message) => {
    return `Hello ${name}! ${message}`;
};
console.log(loginUser("Sachin", "Welome to Typescript"));
//! interface with classes
class UserDetails {
    constructor(id, n, age, email) {
        this.id = id;
        this.name = n;
        this.age = age;
        this.email = email;
    }
    loginMsg(text) {
        console.log(`Hii ${this.name}!`);
        console.log(`${text}`);
    }
}
const user1 = new UserDetails(34235345, "Vicky", 33, "vicky@gmail.com");
class Customer {
    constructor(id, name, country, whatsapp) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.whatsapp = whatsapp;
    }
    userInfo() {
        console.log(`Welcome ${this.name} from ${this.country}, ${this.whatsapp}`);
    }
}
const customer = new Customer(235789453, "Rocky", "India", "whatsapp");
const orderDetails = {
    id: 54353456,
    name: "Kanha",
    country: "India",
    product: "Redmi Note 15 Pro 5G",
    price: 30000,
};
console.log(orderDetails);
