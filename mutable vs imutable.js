// Before going into mutable and immutable types, let's debug primitive and reference types.

// Primitive Types?
//     - Simple, atomic values stored directly in a variable.


// Reference Types?
//     - Stored as references in memory and consist of multiple properties.


// Primitive Types:
//     - undefined
//     - null
//     - boolean
//     - number
//     - string
//     - symbol


// Reference Types:
//     - Objects
//     - Functions
//     - Arrays


// Example of Primitive Type:
let person = "John";
let person2 = person;
// Here, both values are stored separately in memory.


// Example of Reference Type:
let person3 = {
    name: "Husnain",
    age: 23
};
let person4 = person3; // person4 stores a reference to person3.
console.log(person4);
// person4 is not a separate copy but a reference to person3.


// Immutable:
// - Something that cannot be changed or modified, like primitive values.


// Example of Immutability:
let name1 = "John";
let name2 = name1;
name2 = "Doe";
console.log(name1); // John
console.log(name2); // Doe
// The change in name2 does not affect name1 since primitive types are stored separately.


// Example of Mutability:
let obj1 = { name: "Husnain" };
let obj2 = obj1;
obj2.name = "Doe";
console.log(obj1.name); // Doe
console.log(obj2.name); // Doe
// Since obj2 is just a reference to obj1, changing obj2 also modifies obj1.
