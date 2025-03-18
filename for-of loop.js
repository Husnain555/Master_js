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

let num2 = [4, 1, 2, 1, 2];

function findUnique(num2) {
    let sumUnique = 0;
    let sumAll = 0;

    for(let i = 0;i < num2.length;i++){
        sumAll += num2[i];
        let isUnique = true
        for (let j = 0; j < i; j++){
            if (num2[i] === num2[j]){
                isUnique = false
                break
            }
        }
        if (isUnique){
            sumUnique += num2[i]
        }
    }
    return 2 * sumUnique - sumAll;



}

console.log(findUnique(num2));
