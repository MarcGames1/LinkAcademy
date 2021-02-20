// let plainText = document.querySelector("#plainText").value
const plainAlphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let shifter = 3;

//functie care decodeaza alfabetul si cere argumentul shifter care inseamna numarul de litere cu
//care derulam alfabetul
function Decode(shifter) {
  let tail = plainAlphabet.slice(plainAlphabet.length - shifter);
  return (newAlphabet = tail.concat(
    plainAlphabet.slice(0, plainAlphabet.length - shifter)
  ));
}

function input() {
  let inputText = document.querySelector('#plainText').value;
  Code(inputText)
  console.log(inputText)
  
//   return inputText
}

function output() {
  let outputText = document.querySelector('#codedText').value;
  console.log(outputText);
}

function Code(text) {
let newAlphabet = Decode(shifter);
let words = text.split() //am separat textul in cuvinte
  words.map(letter =>{
      
  })



//   for (let i = 0; i < plainAlphabet.length; i++) {
//     const alphabetLetter = plainAlphabet[i];
//     letters.forEach((letter) => {
//       if (letter === alphabetLetter) {
//         letter = newAlphabet[i];
//       }
//     });
console.log(`CODE ${words}`)
console.log(newAlphabet)
}



//pt fiecare litera din letters  cauta in plain alphabet si dam valoarea aceluiasi index din newAlphabet

document.getElementById('codeText').addEventListener('click', input);
document.getElementById('translateText').addEventListener('click', output);
