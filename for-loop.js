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
// const nums = [2,7,11,15]
// const target = 9
// function findtargetIndex (nums,target){
//     let result = new Map()
//     for (let i = 0 ; i < nums.length ; i++){
//         let complement = target - nums[i]
//         console.log(complement)
//         if (result.has(complement)){
//            return [result.get(complement),i]
//         }
//         result.set(nums[i],i)
//
//     }
//     return []
//
// }
//
//
//
// const value = findtargetIndex(nums, target);
// console.log(value)
//
//
//
//





// Running Sum of 1d Array

// const array = [0,63,-23,60,-27,-73,-53,-5,63,68,-85,-82,-1,-11,96,19,33,-72,-93,-44,-65,-60,17,95,-98,-43,-67];
// function sumOfArray(num) {
//     let sum = [];
//     let count = 0;
//     for(let i = 0;i<num.length;i++) {
//         console.log(num[i],'here the num i ');
//         count += num[i];
//             sum.push(count);
//
//     }
//     return sum;
// }
// const value = sumOfArray(array)
// console.log(value)
//


// Richest Customer Wealth

//
// const input = [[1,5],[7,3],[3,5]]
//
// function findTheRichest(input){
//     let sum = 0
//     for(let i = 0;i<input.length;i++){
//         let count = 0
//
//         for(let j=0;j<input[i].length;j++){
//             count+=input[i][j]
//             sum = Math.max(sum,count)
//         }
//     }
//     return sum
// }
//
// const value = findTheRichest(input)
// console.log(value)
//

const nums = [1,5,11,5]
function canPartition(nums){
    let sum = 0
    for (let i = 0 ; i < nums.length ; i++){
        sum += nums[i]
    }
    console.log(sum,'here the totAL')
    let checkOdd = sum % 2 === 0
    const target = sum /2
    if (checkOdd === true ){
        let currentSum = 0;

        for (let i = 0 ; i < nums.length ; i++){
            currentSum += nums[i];
            if(target === currentSum){
                console.log(currentSum,'target found')
                return true
            }
        }

    }else{
        return false

    }


}

let ans = canPartition(nums)
