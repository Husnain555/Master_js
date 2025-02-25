function multiply (a,b){
    try{
        return a * b
    }catch (error){
        throw new error("this is gently thrown error example")
    }
}

const ans = multiply(13,12)
console.log(ans)



// we can also use nested try catch
function dividation (a,b){
    try{try {
        const divide = a / b ;
        return divide

    }catch (e){
        console.log(e)
    }

    }catch (e){
        console.log(e)
    }finally {
        console.log("some thing went wrong ")
    }
}

const divide = dividation(1,0.2565665665656565326856565632212)
console.log(divide)