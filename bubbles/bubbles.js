var numberOfBubles = 10;

for (let i = 0; i < numberOfBubles; i++) {
  newBuble();
}

function newBuble() {
  let bubble = document.createElement('div');
  bubble.classList.add('bubble');
  let x = randomNumber(100);
  let delay = randomNumber(1000);
  bubble.style.left = x + 'vw';
  bubble.style.animationDelay = delay + 'ms';
  document.querySelector('body').appendChild(bubble);
}
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
