var arr = [ 1, 2, 4, 3, 5, 6]

// var sum = arr.reduce( function(prev , curr ){
//     return prev + curr
// } , 20)

// var max = arr.reduce( function(prev , curr ){
//     return Math.max(prev , curr)
// })

// console.log(sum)
// console.log(max)

//HandMade Reduce
function myReduce( arr, cb ){
    var init = 0
    for(i = 0; i < arr.length; i++){
        init = cb(init , arr[i])
    }

    return init
}

var sum = myReduce(arr , function(prev , curr){
    return prev + curr
})

console.log(sum)