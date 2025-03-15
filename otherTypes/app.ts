//! unknown type
//! must check the type before using it
let data: unknown 
data = "Hello";
data = 42;
data = true;

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

//!  It is used in functions that throw errors or never return.
//!throw error 
function throwError(message: string): never {
  throw new Error(message);
}

//!infinite loop
function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}
