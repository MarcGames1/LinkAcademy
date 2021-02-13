var numberOfBubles = 10;

for (let i = 0; i < numberOfBubles; i++) {
  newBuble();
}

function newBuble() {
  let bubble = document.createElement('div');
  let x = randomNumber(100);
  let delay = randomNumber(5000);
  let blue = randomNumber(255)
  let green = randomNumber(255)
  let red = randomNumber(255)
  let size = randomNumber(3) + 1
  let shadowColor = 10
  bubble.classList.add('bubble');
  bubble.style.height = bubble.style.width = `${size}em`
  bubble.style.left = `${x}vw`;
  bubble.style.animationDelay = `${delay}ms`;
  bubble.style.borderColor = `rgb(${red}, ${green}, ${blue})`
  bubble.style.boxShadow = `0.1em 0.1em 0.1em 0.1em 
  rgb(${red -shadowColor}, ${green -shadowColor}, ${blue -shadowColor}) inset`
  document.querySelector('body').appendChild(bubble);
}
  
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
