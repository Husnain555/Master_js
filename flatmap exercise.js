const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 27 }
];


const agegreater = users.flatMap((user)=>user.age > 25 ? [user.name] : [])
console.log(agegreater)


// extract the first name only
const people = [
    { fullName: "John Doe", age: 28 },
    { fullName: "Jane Smith", age: 35 },
    { fullName: "Sam Wilson", age: 22 }
];


const flatfirst = people.flatMap((user)=>[user.fullName.split(" ")[0]])
console.log(flatfirst)


const numbers = [[1, 2], [3, 4], [5, 6]];


const singlearray = numbers.flatMap((n)=>n)
console.log(singlearray)


const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evenflat = nums.flatMap((n)=>n % 2 ? [n * 2] :[])
console.log(evenflat)


const users2 = [
    { name: "Alice", email: "alice@email.com" },
    { name: "Bob", email: null },
    { name: "Charlie", email: "charlie@email.com" },
    { name: "David" }  // No email property
];


const emailflat = users2.flatMap((e)=>e.email ? [e.email]:[])
console.log(emailflat)