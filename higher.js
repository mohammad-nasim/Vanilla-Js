function add(a , b) {
    return a + b
}

function Manupulation(c , d , func) {
    g = c + d

    function mul() {
       var fun = func( c , d )
       return g * fun
    }

    return mul
}

var multi =  Manupulation( 2, 4 , add())

console.log(multi())