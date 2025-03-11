

const array = new Float32Array([1,2,3,3,4,4,5,5,65,6,67,8,87,89,89,8,76,45,4]).map((a)=>a*2)

console.log(array)

// in 32 but we have 4 byte of data good for if we are working with webgl graphics and scientific cal


const array2 = new Float64Array([1,2,3,4,4,5,6,6])
console.log(array2)


// it's good if we are working with physics ,finance or a simulations


// we cannot use push pop shift unshift splice concat slice and other array method  here

// let's try to concat I know its fail but let's try


const newarray = array.concat(array2)
console.log(newarray)



const newarray2 = array.concat([1,2,3,4,4,5,6,6])
console.log(newarray2)

// both fail

