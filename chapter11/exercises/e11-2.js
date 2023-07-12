function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

function irs(fuel, cargo) {
  let irsFuel = fuelTest(fuel);
  let irsCargo = loadTest(cargo);
  return `Raided ${irsFuel} kg of fuel from the tanks, and stole ${irsCargo[0]} and ${irsCargo[1]} from the cargo hold.`
}

let fuelTest = function(check) {
  let testValue;
  if (check > 100000) {
    testValue = check - 99999;
    fuelLevel = 100001;
  } else if (check > 50000) {
    testValue = check -49999;
    fuelLevel = 50001;
  } else {
    testValue = check;
    fuelLevel = 0;
  }
  return testValue;
}

let loadTest = function(check) {
  loadValue = [];
  loadValue.push(check.pop());
  check.push('sack of grain');
  loadValue.push(check.splice(4,1,'deck of cards'));
  return loadValue;
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log(irs(fuelLevel, cargoHold));
console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
