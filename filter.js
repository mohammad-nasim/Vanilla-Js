//We can make a new array based on logic 
var arr = [1, 2, 3, 4, 5]

var filteredarray = arr.filter(function(value){
    return value % 2 == 1
})

console.log(filteredarray)

//HOmeMade Filter

// var arr1 = [ 10, 11, 12, 13, 14, 15 ]

// function myFilter(arr) {
   
//     var newArray = []

//     for(var i = 0; i < arr1.length; i++){
//         if(arr[i] % 2 == 0){
//             newArray.push(arr[i])
//         }
//     }

//     return newArray
// }

// console.log("The Result is " + myFilter(arr1))

//Multiple Filter Using Callback
var arr1 = [ 20, 21, 22, 23, 24, 25 ]

function myFilter(arr , cb) {
   
    var newArray = []

    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i] , i , arr)){
            newArray.push(arr[i])
        }
    }

    return newArray
}

console.log(myFilter(arr1 , function( value ){
    return value > 22
}))