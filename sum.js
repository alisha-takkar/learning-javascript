// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann : 160,
    Pete : 130
};

function sum(obj) {
    let sum =0;
    for(let prop in obj){
        sum += obj[prop];
    }
    return sum;
}

console.log(sum(salaries));