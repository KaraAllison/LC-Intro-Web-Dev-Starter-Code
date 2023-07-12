let checkFive = require('../checkFive.js');

describe("checkFive", function(){

    it("should return 'num' is less than 5 if 'num' < 5 is true", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
 
 });

//  suite('checkFive', function() {
//     setup(function() {
//       //create object (if need only)
//     });
//   test("should return 'num' is less than 5 if 'num' < 5 is true", function (){
//               //test function
//           });})