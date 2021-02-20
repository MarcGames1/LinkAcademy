let bubbles = [60, 50, 48, 71, 45, 51, 65, 70, 49, 38]

let fruits = ["ananas", "Mango", "orange", "Tomato", "Cucumber" ]


bubbles.sort()
max = bubbles.pop()
// fruits.sort()
console.log(max)
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector('ul').appendChild(listItem)
}

for (const fruit of fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector('ul').appendChild(listItem)
}

fruits.forEach(fruit => {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector('ul').appendChild(listItem)
});
    
for (const fruit in fruits) {
    let listItem = document.createElement("li")
    listItem.innerText = fruit
    document.querySelector('ul').appendChild(listItem)
}

//Exercitii Array

let singular = ['tomato', 'mango', 'potato']
let plural = singular.map(word=>word+"s")
let sixLetterWords = singular.filter(word => word.length === 6)
let pluralSixLetterWords = singular.map(word=>word+"s").filter(word => word.length === 6)

//=============================================================//

//Cautați într-o listă de cuvinte pe cele care încep cu literă mare și apoi ordonați-le alfabetic


let list = fruits.find(upperCaseLetter => upperCaseLetter[0] === upperCaseLetter[0].toLocaleUpperCase)