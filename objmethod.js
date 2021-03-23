var obj = {
    a: 2,
    b: 44,
    v: 23,
    d: 12
}

//this method return all the keys of object in a Array
// console.log(Object.keys(obj))

//this method return all the values of object in a Array
// console.log(Object.values(obj))

//this method return all the keys & values of object in a Array
// console.log(Object.entries(obj))

//clone a object 
 var obj2 = Object.assign({} , obj)

obj2.v = 66

console.log(obj)
console.log(obj2)