// // const array = [1, 2, 3, 4, 5];
// // for(let i = 0;i<array.length;i++){
// //     console.log(array[i]*2)
// //
// // }
//
// // let fruits = ["Apple", "Banana", "Mango"];
// // for(let i= 0 ;i<fruits.length; i++){
// //     console.log(fruits[i].length)
// // }
// // const Input = [3, 4, -1, 1]
// //
// // for(let i = 0;i<Input.length; i++){
// //     console.log(Math.min(...Input));
// // }
//
// // find the missing numbers
// const num = [1,4,3,8]
// function missing(num){
//     const n = Math.max(...num)
//     const newMissing = new Set(num);
//     let missing = [];
//     for(let i = 0;i<=n; i++){
//         if(!newMissing.has(i)){
//             missing.push(i)
//         }
//     }
//     return missing
//
// }
// console.log(missing(num))
//
// let num2 = [4, 1, 2, 1, 2];
//
// function findUnique(num2) {
//     let sumUnique = 0;
//     let sumAll = 0;
//
//     for(let i = 0;i < num2.length;i++){
//         sumAll += num2[i];
//         let isUnique = true
//         for (let j = 0; j < i; j++){
//             if (num2[i] === num2[j]){
//                 isUnique = false
//                 break
//             }
//         }
//         if (isUnique){
//             sumUnique += num2[i]
//         }
//     }
//     return 2 * sumUnique - sumAll;
//
//
//
// }
//
// console.log(findUnique(num2));





// const name = "leetcode"
// function countKeyWord(name){
//     let removeSpace = name.split(' ').join('')
//     let obj = {}
//     for (let char of removeSpace){
//         obj[char[0]] = (obj[char[0]] || 0) +1
//
//     }
//     for (let i = 0 ; i < name.length ; i++){
//         if ((obj[name[i]]) === 1){
//             return i
//         }
//         console.log(obj[name[i]])
//
//
//
//     }
//     return -1
//
// }
//
// console.log(countKeyWord(name)
// )


// gain = [-5, 1, 5, 0, -7]
//
// function findHighest (gain){
//     let highest = 0;
//     let initial = 0
//     for(let i = 0;i<gain.length;i++){
//         initial += gain[i]
//         highest = Math.max(highest,initial);
//     }
//     return highest
//
// }
//
// const value = findHighest(gain)
// console.log(value)
//
//
//
//


// find the index of a

// const words = ["leet","code"]
// const x  ="e"
// function findIndex(words,x){
// let result = []
// for(let i = 0 ; i < words.length ; i++){
//     if(words[i].includes(x)){
//         result.push(i)
//     }
//
// }
// return result
//
// }
//
// let value = findIndex(words,x)
// console.log(value)
//

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
const nums = [2,7,11,15]
const target = 9
function findtargetIndex (nums,target){
    let result = new Map()
    for (let i = 0 ; i < nums.length ; i++){
        let complement = target - nums[i]
        console.log(complement)
        if (result.has(complement)){
           return [result.get(complement),i]
        }
        result.set(nums[i],i)

    }
    return []

}



const value = findtargetIndex(nums, target);
console.log(value)











