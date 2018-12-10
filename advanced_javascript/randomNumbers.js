var numberOne
var numberTwo
function getRandomizer(bottom, top) {
    
    numberOne = bottom
    numberTwo = top
    return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    
}

var output = getRandomizer(1,10)


console.log(numberOne)
console.log(numberTwo)
console.log('genertated random number: '+ output)