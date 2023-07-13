// 12.8.2. Orbit Calculations

// Code your orbitCircumference function here:

function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:

function missionDuration (orbitCount, radius = 2000, speed = 28000) {
  return Math.round((orbitCount * orbitCircumference(radius) / speed)*100)/100;
}

// console.log(missionDuration(5));
// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(array) {
  return array[Math.floor(Math.random()* array.length)];
}

function smallestOxygen (arr) {
  let object;
  let min = arr[0].o2Used(1);
  for (i = 0; i < arr.length; i++){
    if (min > arr[i].o2Used(1)) {
    min = arr[i].o2Used(1);
    object = arr[i];
    }
  }
return object;
} 




// Code your oxygenExpended function here:

function oxygenExpended (object, radius, speed) {
  let hrs = missionDuration(3, radius, speed)
  let oxygen = object.o2Used(hrs);
  return `${object.name} will perform the spacewalk, which will last ${hrs} hours and require ${oxygen} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  let crew = [candidateA,candidateC,candidateE];

  console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)
  
  console.log(oxygenExpended(selectRandomEntry(crew))); 
  console.log(oxygenExpended(smallestOxygen(crew)));