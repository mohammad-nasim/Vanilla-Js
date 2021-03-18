while(true){
    var rand = Math.floor(Math.random() * 10 + 1)
    if( rand == 10){
        console.log("This is Ten")
        break
    }
    else{
        console.log("These all are randoms " + rand)
    }
}