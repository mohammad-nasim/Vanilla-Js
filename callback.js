//Callback is function passed into a another funcution as a argument

function calculate(a , b , callback) {
    var value1 = a + b
    return callback(value1 , b)

}

function sum( c , d){
    return c * d
}

var result = calculate(10, 2 , sum)

console.log(result)