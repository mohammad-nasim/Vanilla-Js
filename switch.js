var date = new Date()

var today = date.getDay()

switch(9){
    case 0:
        console.log('today is Sunday')
        break
    case 1:
        console.log('today is Monday')
        break
    case 2:
        console.log('today is Tuesday')
        break
    case 3:
        console.log('today is Wednesday')
        break
    case 5:
        console.log('today is Thursday')
        break
    case 6:
        console.log('today is Friday')
        break
    case 7:
        console.log('today is Saturday ')
        break
    default:
        console.log('Invalid Number')

}