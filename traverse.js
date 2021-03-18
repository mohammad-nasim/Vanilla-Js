/* --------  Array Traverse --------  */

var arr = [ 1 , 2, 3, 4, 5]

// console.log(arr[1])
// for ( var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }



/* --------  Array Update using Traverse --------  */

// for(var i = 0; i < arr.length; i++){
//     arr[i] = arr[i] + 3
// }

// console.log(arr)


/* --------  Array element sum using Traverse --------  */
// var sum = 0;

// for(var i = 0; i < arr.length; i++){
//     sum =+ arr[i]
// }

// console.log(sum)


/* --------  Finding even number  using Traverse --------  */
for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
