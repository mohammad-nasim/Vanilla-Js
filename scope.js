function test(n){

    function a(){
        return n%3 == 0
    }

    function b(){
        return n%5 == 0
    }

    if ( a() && b()){
        console.log(n + " is divisable by 3 & 5")
    }
    else{
        console.log("Invalid Number")
    }
}

test(15)

//Parent function can't able to access child's data
function nasim(){
    function nabil(){
        var n = 24
    }

    console.log(n)
}

nasim()