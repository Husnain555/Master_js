// const numbers = [1,2,3,4,5,6,7]
// // const newNumber = numbers.forEach((num)=>{
// //     console.log(num*2)
// // })
// //
// //
// // console.log(newNumber)
//
// const newNumbers = []
//
// numbers.forEach((num)=>{
//     newNumbers.push(num*2)
// })
//
// console.log(newNumbers)

const fruits = ["Apple", "Banana", "Mango", "Grapes"];


fruits.forEach(fruit => fruit)
console.log(fruits)

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num)=>{
    console.log(`the square of ${num} is ${num*num}`)
})




const number = [10, 15, 22, 33, 40, 55, 60];
number.forEach((num)=>{
    num % 2 === 0 ? console.log(`the ${num} is even `) : console.log(`the ${num} is odd`)
})


const words = ["apple", "banana", "strawberry", "grapefruit"];
let longestWord = ""
words.forEach((word)=>{
    if (word.length > longestWord.length ){
        longestWord = word
    }
})
console.log(`longest word is ${longestWord}`)
const words1 = ["apple", "banana", "apple", "orange", "banana", "apple"];
// find the total apple and other total fruite
let wordCount = {}
words1.forEach((find)=>{
    if (wordCount[find]){
        wordCount[find] += 1
    }else {
        wordCount[find] = 1
    }
})
console.log(wordCount)



const students = [
    { name: "Ali", score: 75 },
    { name: "Sara", score: 45 },
    { name: "John", score: 90 },
    { name: "Emma", score: 30 }
];
// add a new property status
students.forEach((add)=>{
    add.status = add.score > 50 ? "pass" : "fail"
})
console.log(students)
const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 15 }
];
people.forEach((add)=>{
    add.staus = add.age >= 17 ? "Minor" : "Adult"
})
console.log(people)


const students1 = [
    { name: "Ali", score: 95 },
    { name: "Sara", score: 82 },
    { name: "John", score: 74 },
    { name: "Emma", score: 65 },
    { name: "David", score: 50 }
];

// students1.forEach(student => {
//     if (student.score >= 90) {
//         student.grade = "A";
//     } else if (student.score >= 80) {
//         student.grade = "B";
//     } else if (student.score >= 70) {
//         student.grade = "C";
//     } else if (student.score >= 60) {
//         student.grade = "D";
//     } else {
//         student.grade = "F";
//     }
// });
//
// // Print the final result outside the loop
// console.log(students1);



// and there is also a better opporch always
const lookUp  =  (score) => {
    return score >= 90 ? "A": score >= 80 ? "B" : score >= 70 ? "C"  : score >= 60 ?"D" : "F"

}

students1.forEach((add)=>{
    add.grade = lookUp(add.score)
})

console.log(students1)