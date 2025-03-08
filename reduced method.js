// reduced method is used to reduce the array to a single value.
//     It executes the provided function for each value of the array and returns the final value.
//     The function takes four arguments: accumulator, current value, current index, and the array.
//     The accumulator is the value returned by the last execution of the function.
// The initial value of the accumulator is the first element of the array. If the initial value is not provided,
//     the first element of the array is used as the initial value. The syntax of the reduced method is:
//


const price = [10, 20, 30, 40, 50];
const newPric = Math.max(...price);
console.log(newPric,'here the new price');
const newPrice = price.reduce(sum)
function sum(accumulator, current) {
    return accumulator + current;
}

console.log(newPrice,'here the new price');


const name = ['a', 'b', 'c', 'd', 'e'];
const newName= name.reduce((accumulator, current) => accumulator + current);
console.log(newName,'here the new name');

const nums = [2, 3, 4];
const newNum = nums.reduce(multipply)



function multipply(accumulator, current) {
    return accumulator * current;
}

console.log(newNum,'here the new num');


const arr = [[1, 2], [3, 4], [5, 6]];

const flatterarray = arr.reduce((acc,curr)=>acc.concat(curr),[])
console.log(flatterarray,'here the flatter array');

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = words.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0 ) + 1
    return acc;
},{})

console.log(count, 'here the new words');





const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
];


// GROUP THEM BY THERE AGE

const group = people.reduce((acc,cur)=>{
    if (!acc[cur.age]){
        acc[cur.age] = [];
    }
    acc[cur.age].push(cur)
    return acc;
},{})

console.log(group)



