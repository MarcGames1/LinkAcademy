var a = 10;

function multiply(a) {
    a *= 2
    console.log(`multiply a = ${a}`)
}

multiply(a)

console.log(`Global a = ${a}`)

function init(){
    var a = 7
}
function double(){
    a = 10
    a*=2
}
init()
double()
console.log(a)