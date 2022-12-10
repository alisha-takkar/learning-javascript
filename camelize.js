// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str){
    const arr = str.split('-');
    
    let result = "";
    for(let word of arr){
        if(word.length === 0){
            continue;
        }
        
        else{
        result += word[0].toUpperCase() + word.substring(1);
        }
    }

    return result;  
}

let eg1 = camelize("background-color");
console.log(eg1);

let eg2 = camelize("list-style-image");
console.log(eg2);

let eg3 = camelize("-webkit-transition");
console.log(eg3);