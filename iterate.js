/* --------  Iterate OBJ Properties --------  */

var obj = {
    a: 2,
    b: 44,
    v: 23,
    b: 12
}

//console.log("v" in obj) Uses of In Operator


//Iterate object using ForIn loop

for ( var x in obj){
    console.log(obj)
    console.log(obj[x])
}