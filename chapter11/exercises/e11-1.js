//Create an anonymous fucntion and set it equal to a variable.

let tripleArr = function(num) {
    if (isNaN(Number(num))) {
      return 'ARRR!';
    } else {
      return num * 3;
    }
  }
  console.log(tripleArr(3));
  console.log(tripleArr("nope"));
  
  /* Your function should:
  a) If passed a number, return the tripled value.
  b) If passed a string, return the string “ARRR!”
  c) Be sure to test your function before moving on the next part. */
  
  
  
  /* Use your fuction and the map method to change an array  as follows:
  a) Triple any the numbers.
  b) Replace any strings with “ARRR!”
  c) Print the new array to confirm your work.
  */
  
  let arr = ['Elocution', 21, 'Clean teeth', 100];
  
  arr = arr.map(tripleArr);
  console.log(arr);
  