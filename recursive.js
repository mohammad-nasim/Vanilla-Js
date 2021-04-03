//Uses of Recursive function

function HelloWorld(n) {
    if(n == 1){
        return
    }
    console.log("Hi there!")
    HelloWorld(n - 1)
}

HelloWorld(10)