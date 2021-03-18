var number = true

while(number){
    var rand = Math.floor(Math.random() * 10 + 1)
    if( rand == 10){
        console.log("This is Ten")
        number = false
    }
    else{
        console.log("These all are randoms " + rand)
    }
}