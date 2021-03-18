/* --------  Array Search --------  */

var arr = [1, 2, 3, 4, 55, 45, 23 , 76, 9];

var find = 90

var isFound = false

for( var i = 0; i < arr.length; i++ ){
    if(arr[i] == find){
        console.log('Data found on index ' + arr[i])
        isFound = true
    }
}

if ( !isFound ){
    console.log("Data not found")
}
