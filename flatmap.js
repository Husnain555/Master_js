// const words = ["spray", "elite", "exuberant", "destruction", "present"];
//
// const result = words.filter((word) => word.length > 6).map((item)=>{
//     console.log(item.length)
// })
//
// const newArray = [{
//     name:"husnain",
//     age:25,
// }]
//
//
// const result2 = newArray.flatMap((name,age)=>{
//     age === 27 ? console.log(...name) : console.log(age)
//
// })
// console.log(result2,'result2')



const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 22 },
    { id: 3, name: "Charlie", age: 22 }
];

console.log(users[0].name);


// simple fillter if we wana skip index 2
const filltered = users.filter((_,index)=>index !== 1)
console.log(filltered)

// if we wana skip index 3

const filltered2 = users.filter((_,index)=>index !== 2)
console.log(filltered2)
const fillter3 = users.filter((_,index)=>index !== 0)
console.log(fillter3)


// lets fillter only names alice


const filltered4 = users.filter((user)=>user.name === "Alice")
console.log(filltered4)


// lets fillter on age 25


const ageFillter = users.filter((user)=>user.age === 22).map((m)=>m.name)
console.log(ageFillter)

// yes for fillter and map we need o use both diffrent

const flatmap = users.flatMap((user)=>user.age === 22 ?? [user.name] )


console.log(flatmap)



const flatname = users.flatMap((user)=>user.age === 22 ? [user.name] : [])
console.log(flatname)