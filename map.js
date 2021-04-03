//using map function we can make a modifiyed array from original one

var arr = [ 1, 2, 3]

var sqrArr = arr.map(function(value , index) {
    return Math.random() * 10
})

console.log(arr)
console.log(sqrArr[1])