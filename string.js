/* -------- String Literal  --------  */
// var str = 'Nasim'

/* --------  string Constructor - used for datatype conversation  -------- */
// var str2 = String('10')

/* --------  Escape Notation --------  */
// var str = 'This is \'naism\''
// console.log(str)

// var str2 = 'This is \n LineBreak'
// console.log(str2)

// var str3 = 'This is \t TAB'
// console.log(str3)

/* --------  String Method --------  */

// var a = "Mohammad"
// var b = "Nasim"

// var c = a.concat(' ' , b)
// var d = c.substr(0, 5)
// var e = c.charAt( 5)
// var f = c.toUpperCase()
// var g = c.toLowerCase()
// var x = c.trim()
// var z = c.split(' ')

// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(x)
// console.log(z)

/* --------  String Length --------  */

var name = "Md Nasim"
var length = 0 

while(true){
    if(name.charAt(length) == ''){
        break
    }
    else{
        length++
    }
}

console.log(length)

