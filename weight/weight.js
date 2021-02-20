const MERCURY = { name: 'Mercury', mass: 3.303e23, radius: 2.4397e6 };
const VENUS = { name: 'Venus', mass: 4.869e24, radius: 6.0518e6 };
const EARTH = { name: 'Earth', mass: 5.976e24, radius: 6.37814e6 };
const MARS = { name: 'Mars', mass: 6.421e23, radius: 3.3972e6 };
const JUPITER = { name: 'Jupiter', mass: 1.9e27, radius: 7.1492e7 };
const SATURN = { name: 'Saturn', mass: 5.688e26, radius: 6.0268e7 };
const URANUS = { name: 'Uranus', mass: 8.686e25, radius: 2.5559e7 };
const NEPTUNE = { name: 'Neptune', mass: 1.024e26, radius: 2.4746e7 };
G = 6.673e-11;

const planets = [MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE]

function surfaceGravity(planet) {
  return (G * planet.mass) / (planet.radius * planet.radius)
}

function surfaceWeight(yourMass, planet) {
  return yourMass * surfaceGravity(planet)
}

document.querySelector("input[type='button']")
  .addEventListener('click', calculateAndShowWeights)

function calculateAndShowWeights() {


  let weightOnEarth = document.querySelector('#weight').value
  let mass = weightOnEarth / surfaceGravity(EARTH);
  let weightsOnPlanets = planets.map(planet => surfaceWeight(mass, planet))

  //for
  for (let index = 0; index < planets.length; index++) {
    let planet = planets[index];
    let weightOnPlanet = weightsOnPlanets[index]
    //cream un nou rand
    let row = document.createElement('tr');
    //cream o celula pt numele planetei
    let planetNameCell = document.createElement('td')
    planetNameCell.innerText = planet.name;
    //cream o celula pentru greutatea pe acea planeta
    let weightCell = document.createElement('td')
    weightCell.innerText = weightOnPlanet
    //adaugam celulele la rand
    row.appendChild(planetNameCell)
    row.appendChild(weightCell)
    //adaugam randul in tabel
    document.querySelector('table').appendChild(row)
  }
  //scoatem clasa hidden de pe tabel
  document.querySelector('table').classList.remove('hidden')
  //facem tabelul sa devina vizibil
  //cleanup 
}


