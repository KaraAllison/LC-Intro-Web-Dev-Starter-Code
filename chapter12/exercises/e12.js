let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function () {
      return Math.round(Math.random()*10);
    }
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function () {
      return Math.round(Math.random()*10);
    }
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 3,
  move: function () {
      return Math.round(Math.random()*10);
    }
};

let beagleOne = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 4,
  move: function () {
      return Math.round(Math.random()*10);
    }
}

let tardigradeOne = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 5,
  move: function () {
      return Math.round(Math.random()*10);
    }
}

let crew = [superChimpOne, salamander, superChimpTwo, beagleOne, tardigradeOne];

function crewReports(animal) {
  console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
}

function fitnessTest(array) {
  let results = [];
  for (item in array) {
    let steps = 0;
    let turn = 0;
    while (steps < 20) {
      steps += array[item].move();
      turn++;
    }
    let string = `${array[item].name} took ${turn} turns to take 20 steps.`
    results.push(string);
  }
  return results;
}

crewReports(superChimpOne);
crewReports(salamander);
crewReports(superChimpTwo);
crewReports(beagleOne);
crewReports(tardigradeOne);

let resultsArray = fitnessTest(crew);
for (item in resultsArray) {
  console.log(resultsArray[item]);
}



// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!