//function can be stored in a varibale

function add(a, e){
    return a + e
}

var sum = add 
console.log(sum(2, 4))

//function can be stored in an array
var arr = []

arr.push(add)
console.log(arr)
console.log(arr[0](1, 7))

//function can be stored in a obj
var obj = {
    sum: add 
}

console.log(obj)
console.log(obj.sum(9,8))

//We can create function as we need
setTimeout(function () {
    console.log('I will be created after 3 sec')
}, 3000)