// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

function Calculator(){
    this.methods = {
        "+" : (a,b) => a + b,
        "-" : (a,b) => a - b,
    };

    this.calculate = function(str){
        let elem = str.split(" ");
        let a = +elem[0];
        let op = elem[1];
        let b = +elem[2];
    

    if(!this.methods[op] || isNaN(a) || isNaN(b)){
        return NaN;
    }

    return this.methods[op](a,b);
};

this.addMethod = function(methodName, func) {
    this.methods[methodName] = func;
};
}

let powerCalc = new Calculator;

let eg1 = powerCalc.calculate("3 + 7") ;
console.log(eg1);

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let eg2 = powerCalc.calculate("2 ** 3");
console.log(eg2);