// we are going to print
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



for ( var i = 1; i <= 5 ; i++){
    var result = '';
    for ( var j = 1; j <= i; j++){
        result += j + ''
    }

    console.log(result)
}