
function divisibleTwo(num) {
  return (num % 2 === 0);
}
function divisibleThree(num) {
  return (num % 3 === 0);
}
function divisibleFive(num) {
  return (num % 5 === 0);
}
let launchOutput = function (num) {
  if (divisibleTwo(num) && divisibleThree(num) && divisibleFive(num)){
    return 'LaunchCode Rocks!';
  } else if (divisibleTwo(num) && divisibleThree(num)) {
    return 'LaunchCode!';
  } else if (divisibleThree(num) && divisibleFive(num)) {
    return 'Code Rocks!';
  } else if (divisibleTwo(num) && divisibleFive(num)) {
    return 'Launch Rocks! (CRASH!!!!)';
  } else if (divisibleTwo(num)) {
    return 'Launch!';
  } else if (divisibleThree(num)) {
    return 'Code!';
  } else if (divisibleFive(num)) {
    return 'Rocks!';
  } else {
    return "Rutabagas! That doesn't work."
  }
}

let launchcode = {
  'organization': 'nonprofit',
  'executiveDirector': 'Jeff',
  'percentageCoolEmployees': 100,
  'programsOffered': ['LC101', 'LaunchCode Women+', 'CodeCamp'],
  'launchOutput': launchOutput
};


let array = [];
array.sort

module.exports = launchcode;


