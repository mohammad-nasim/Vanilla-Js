var arr = [1, 2, 3, 4, 5]

var sum = 0
arr.forEach(function(value , index , arr) {
    //console.log(value , index , arr)
    sum += value

})

console.log(sum)

//Add 5 for every arr value
arr.forEach(function(value , index , arr) {
    arr[index] = value + 4

})

console.log(arr)
