let button = document.getElementById('check');
let redPlanet = document.getElementById('redplanet');
button.addEventListener('click', function () {
  redPlanet.innerText = 'Alien invasion!';
  redPlanet.classList.add('alert');
});


document.getElementById("reset")
    .addEventListener("click", () => {
        redPlanet.innerText = 'Nothing to report';
        redPlanet.classList.remove('alert');
})

document.getElementById("greenplanet")
.addEventListener("click", () => {
    document.getElementById("greenplanet").classList
    .add("alert")
})