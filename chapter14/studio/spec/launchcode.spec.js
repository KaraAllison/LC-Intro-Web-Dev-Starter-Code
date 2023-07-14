// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  it("Should include property 'organization' with value 'nonprofit.", function() {
    let output = launchcode.organization;
    expect(output).toEqual('nonprofit');
  })

  it("Should include property 'executiveDirector' with value 'Jeff.", function() {
    let output = launchcode.executiveDirector;
    expect(output).toEqual('Jeff');
  })

  it("Should include property 'percentageCoolEmployees' with value '100.", function() {
    let output = launchcode.percentageCoolEmployees;
    expect(output).toEqual(100);
  })

  it("Should include property 'programsOffered' with value '['LC101', 'LaunchCode Women+', 'CodeCamp'].", function() {
    let output = launchcode.programsOffered;
    expect(output[0]).toEqual('LC101');
    expect(output[1]).toEqual('LaunchCode Women+');
    expect(output[2]).toEqual('CodeCamp');
    expect(output.length).toEqual(3);
  })
  
});

describe("Testing launchOutput", function(){
  
  it("Should return 'Launch!' when passed a number only divisible by 2", function() {
    let output = launchcode.launchOutput(8);
    expect(output).toEqual('Launch!');
  })

  it("Should return 'Code!' when passed a number only divisible by 3", function() {
    let output = launchcode.launchOutput(9);
    expect(output).toEqual('Code!');
  })

  it("Should return 'Rocks!' when passed a number only divisible by 5", function() {
    let output = launchcode.launchOutput(25);
    expect(output).toEqual('Rocks!');
  })

  it("Should return 'LaunchCode!' when passed a number divisible by 2 and 3", function() {
    let output = launchcode.launchOutput(6);
    expect(output).toEqual('LaunchCode!');
  })

  it("Should return 'Code Rocks!' when passed a number divisible by 3 and 5", function() {
    let output = launchcode.launchOutput(15);
    expect(output).toEqual('Code Rocks!');
  })

  it("Should return 'Launch Rocks!!' when passed a number divisible by 2 and 5", function() {
    let output = launchcode.launchOutput(10);
    expect(output).toEqual('Launch Rocks! (CRASH!!!!)');
  })

  it("Should return 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", function() {
    let output = launchcode.launchOutput(30);
    expect(output).toEqual('LaunchCode Rocks!');
  })

  it("Should return 'Rutabagas! That doesn't work.' when passed a number not divisible by 2, 3, or 5", function() {
    let output = launchcode.launchOutput(7);
    expect(output).toEqual("Rutabagas! That doesn't work.");
  })
});