var a = 30
var b = 20
var c = 50
var d = 40

//Using of && Operator
if(a > b && c > d){
    console.log('A & C both greated than B & D')
}
else{
    console.log('Atleast 1 condition is wrong')
}

//Using of || Operator
if(a > b || c < d){
    console.log('OR Operator Worked')
}
else{
    console.log('Atleast 1 condition is wrong')
}

//Using of Not
if(! a < b ){
    console.log("Not Is working")
}

var check = !(c < d)
console.log(check)