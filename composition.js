//Function Composition
function print(params) {
    console.log("Ans is " + params)
}

function mul(n) {
    return n * 2
}

function add(a , b) {
    return a + b
}


print(mul(add(2, 3)))