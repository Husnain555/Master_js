// Yes! Even in an empty JavaScript file, the JavaScript engine does a lot of setup behind the scenes. Let's break it down:
//
// 1. Where Does this Come From?
//     The this keyword is automatically available in JavaScript.
//     At the global level, this refers to the global object.
//     In a browser, the global object is window, so this === window is true.
//     In Node.js, the global object is global, so this === global is true (but not in modules).
// 2. What Happens in an Empty JS File?
//     Even if you don't write any code, JavaScript still does:
//
// Creates a Global Execution Context (GEC):
// Memory Component (Variable Environment): Reserves space for variables and functions.
//     Code Component (Thread of Execution): Executes the code.
//     Creates the this keyword and binds it to the global object (window in browsers).
//     Creates a Call Stack: Even an empty script runs inside the global execution context.
// 3. Code Execution Example
// js
// Copy
// Edit
// console.log(this === window); // true in the browser
// When this line runs, JavaScript first creates the execution context and binds this to window.
// 4. How Does this Change?
//     Inside a function: this may refer to the global object or undefined in strict mode.
//     Inside an object: this refers to that object.
//     Inside a class: this refers to the instance.


// let's practice some this and winf=dow keyword


 this.a = 10
// Why Use this.a = 10;?
//     In the global scope (Node.js), this is not global
//
// In a browser, this === window, so global variables attach to window automatically.
//     In Node.js, this in the global scope is just {} (an empty object), not global.
//     That’s why a = 10; does not attach to this automatically in Node.js.

// console.log(window.a)but why its giving undefine
console.log(this.a)
function add () {
     a = 2
    // console.log(window.a)
    console.log(this.a)
}
add();