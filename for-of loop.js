// const array = [1, 2, 3, 4, 5];
// for(let i = 0;i<array.length;i++){
//     console.log(array[i]*2)
//
// }

// let fruits = ["Apple", "Banana", "Mango"];
// for(let i= 0 ;i<fruits.length; i++){
//     console.log(fruits[i].length)
// }
// const Input = [3, 4, -1, 1]
//
// for(let i = 0;i<Input.length; i++){
//     console.log(Math.min(...Input));
// }

// find the missing numbers
const num = [1,4,3,8]
function missing(num){
    const n = Math.max(...num)
    const newMissing = new Set(num);
    let missing = [];
    for(let i = 0;i<=n; i++){
        if(!newMissing.has(i)){
            missing.push(i)
        }
    }
    return missing

}
console.log(missing(num))