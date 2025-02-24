const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6).map((item)=>{
    console.log(item.length)
})

const newArray = [{
    name:"husnain",
    age:25,
}]


const result2 = newArray.flatMap((name,age)=>{
    age === 27 ? console.log(...name) : console.log(age)

})
console.log(result2,'result2')