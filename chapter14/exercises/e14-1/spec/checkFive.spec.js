let checkFive = require('../checkFive.js');

describe("checkFive", function(){

    it("should return 'num' is less than 5 if 'num' < 5 is true", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    it("should return 'num' is greater than 5 if 'num' > 5 is true", function(){
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });

    it("should return 'num' is equal to 5 if 'num' === 5 is true", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });
 
 });

//  suite('checkFive', function() {
//     setup(function() {
//       //create object (if need only)
//     });
//   test("should return 'num' is less than 5 if 'num' < 5 is true", function (){
//               //test function
//           });})