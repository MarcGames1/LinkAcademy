let startButton = document.querySelector("input[type='button']");
startButton.addEventListener('click', startGame);
//cand este apasata o tasa apelam functia pressKey
window.addEventListener('keydown', pressKey);

let interval = 1000; //intervalul este de o secunda (1000ms)

function pressKey(event) {
  let letter = event.key.toUpperCase();
  //gasim primul div care are clasa literei apasate
  let div = document.querySelector('.' + letter);
  //facem divul sa dispara
  div.remove();
}

function startGame() {
  //ascunde butonul
  startButton.classList.add('hidden');
  //cream o noua litera la fiecare secunda
  setInterval(createNewLetter, interval);
}

//genereaza un nr aleatoriu intre 0 si max (inclusiv)
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//genereaza o litera aleatorie mare intre A si Z
function randomLetter() {
  let codeOfA = 'A'.charCodeAt(0); // charCodeAt returneaza codul caracterului de pe pozitia 0
  let codeOfZ = 'Z'.charCodeAt(0);
  let randomCode = randomNumber(codeOfA, codeOfZ);
  //convertim codul ASCII in caracterul asociat lui
  return String.fromCharCode(randomCode);
}

//genereaza o culoare aleatorie
function randomColor() {
  let red = randomNumber(0, 255);
  let green = randomNumber(0, 255);
  let blue = randomNumber(0, 255);
  return `rgb(${red},${green},${blue})`;
}

//genereaza o pozitie aleatorie intre 0 % si 90%
function randomPosition() {
  let position = randomNumber(0, 90);
  return `${position}%`;
}

//creeaza un nou element div cu o litera aleatorie si adauga elementul in HTML
function createNewLetter() {
  let letter = randomLetter();
  let color = randomColor();
  let top = randomPosition();
  let right = randomPosition();
  //cream un nou element div (initial este gol si nu are stil)
  let div = document.createElement('div');
  //adaugam clasa letter elementului nostru
  div.classList.add('letter');
  //setam textul din interiorul divului sa fie litera aleatorie
  div.innerText = letter;
  //setam culoarea css
  div.style.backgroundColor = color;
  // setam top si right in Css
  div.style.top = top;
  div.style.right = right;
  //setam o clasa cu valoarea literei aleatorii
  div.classList.add(`${letter}`);
  //adaugam elementul div in body
  document.querySelector('body').appendChild(div);
  interval--; //creste viteza dupa fiecare litera
}
