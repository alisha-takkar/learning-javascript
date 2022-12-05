// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

function sumInput() {

    let arr = new Array();
  
    while (true) {
  
      let input = prompt("Enter a number", 0);

      if (input === " " || input === null || !isFinite(input)) 
      break;
      
      else{
      arr.push(+input);
      }
    }
  
    let sum = 0;
    for (let i of arr) {
      sum += i;
    }
    return sum;
  }
  
  alert( sumInput() );