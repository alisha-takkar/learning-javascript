// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = [];

usersMapped = users.map(user => (
    {
        fullName : user.name + " " + user.surname,
        id : user.id,
    }
))

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
console.log(usersMapped[1].id);
console.log(usersMapped[1].fullName);
console.log(usersMapped[2].id);
console.log(usersMapped[2].fullName);