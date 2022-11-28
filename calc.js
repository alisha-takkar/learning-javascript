// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calc = {
     read(){
      this.a = +prompt("Enter first number" , 0);
      this.b = +prompt("Enter second number" , 0);
    },

    sum(){
        let sum =0;
        sum += this.a + this.b;
        return sum;
    },

    mul(){
        let mul =1;
        mul *= this.a * this.b;
        return mul;
    }
} 

calc.read();
alert(calc.sum());
alert(calc.mul());