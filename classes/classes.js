"use strict";
//! --------- basic classes with access modifiers-----------
// class Person {
//   public name: string;
//   public age: number;
//   private income: number;
//   protected secured: boolean;
//   constructor(name: string, age: number, income: number, secured: boolean) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//     this.secured = secured;
//   }
//   message(): number {
//     if (!this.secured) {
//       console.log(
//         `Hey ${this.name}, not secured with $${this.income} at ${this.age} yrs old`
//       );
//     } else {
//       console.log(
//         `Hey ${this.name}, secured with $${this.income} at ${this.age} yrs old`
//       );
//     }
//     return this.income;
//   }
// }
// const user1 = new Person("Arun", 21, 2000, false);
// const user2 = new Person("Kajal", 40, 40000, true);
// user1.message();
// user2.message();
// console.log(user1.message());
//! ----------- inheritance ------------
// class Animal {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
//   makeSound(): void {
//     console.log("Animal makes sound");
//   }
// }
// class Dog extends Animal {
//   breed: string;
//   life: number;
//   constructor(name: string, prajati: string, jindagi: number) {
//     super(name);
//     this.breed = prajati;
//     this.life = jindagi;
//   }
//   //method
//   makeSound(): void {
//     console.log("Dog barks...");
//   }
// }
// const dog = new Dog("Tommy", "Labrador", 40);
// dog.makeSound();
// console.log(dog);
//! --------- read only, override, and prtected, get and set functions --------
// class Person {
//   private readonly id: string;
//   public name: string;
//   protected phone: number;
//   private income: number;
//   constructor(id: string, name: string, income: number, phone: number) {
//     this.id = id;
//     this.name = name;
//     this.income = income;
//     this.phone = phone;
//   }
//   // getter for income
//   get getIncome(): number {
//     if (this.income < 0) {
//       console.log("Income cannot be negative");
//       throw new Error("Income cannot be negative");
//     }
//     return this.income;
//   }
//   // settter for income
//   set setIncome(value: number) {
//     if (!value) {
//       console.log("not found income");
//       throw new Error("Income not found");
//     } else if (value < 0) {
//       console.log("Income cannot be negative");
//       throw new Error("Income cannot be negative");
//     } else {
//       this.income = value;
//     }
//   }
//   message(): number {
//     console.log("USER ID :", this.id);
//     console.log(`Hey ${this.name}, secured with $${this.income}`);
//     console.log(`phone : ${this.phone}`); // ✅ Accessible inside the class
//     return this.income;
//   }
// }
// //! subclass employee extending person
// class Employee extends Person {
//   jobtitle: string;
//   constructor(
//     id: string,
//     name: string,
//     income: number,
//     phone: number,
//     jobtitle: string
//   ) {
//     super(id, name, income, phone);
//     this.jobtitle = jobtitle;
//   }
//   // overriding method from class Person
//   message(): number {
//     console.log(`Employee ${this.name} is a ${this.jobtitle}`);
//     console.log(`Contact : ${this.phone}`); // phone is protected & can be accessible in subclass
//     return super.message(); // calls the parent class method
//   }
// }
// const user1 = new Person("ksn8387abd9y8", "Arun", 2000, 1111111111);
// const emp = new Employee(
//   "emp123456789",
//   "Raj",
//   200000,
//   9672834657,
//   "Developer"
// );
// // user1.message();
// // emp.message(); // callling overidden method
// // ✅ Using getter to access private income
// console.log(`Current Income: ${emp.getIncome}`);
// // ✅ Using setter to update income
// emp.setIncome = 100000
// console.log(`Updated Income: ${emp.getIncome}`);
// // ❌ Error: 'phone' is protected and cannot be accessed outside the class
// //! console.log(emp.phone)
//! ------------- static ----------
// class Person {
//   name: string;
//   static city: string; // Static property shared across all instances
//   constructor(name: string, city: string) {
//     this.name = name;
//     Person.city = city; // ✅ Correct way to assign a static property
//   }
//   welcome(): void {
//     console.log(`Welcome ${this.name}`);
//   }
//   static printCity(): void {
//     console.log(`City: ${Person.city}`); // ✅ Accessing static property using class name
//   }
// }
// // ✅ Assign a default value to the static property (optional)
// Person.city = "Delhi";
// Person.printCity();
// const user = new Person("Arun", "Mumbai"); // This updates the static 'city' property
// user.welcome();
// Person.printCity();
//! -------- abstract classes --------//
class Animal {
    constructor(n) {
        this.name = n;
    }
    //concrete method can be inherited by all subclasses
    move() {
        console.log(`${this.name} is moving...`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    sounds() {
        console.log(`${this.name} Barks`);
    }
}
const dog = new Dog("Tommy");
dog.move();
dog.sounds();
