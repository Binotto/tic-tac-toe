const numbers = [1, 2, 3];

//arrow function
const doubled = numbers.map(number => number * 2);

//normal function
const number = numbers.map(function(number){
    return number * 2
})


console.log(`doubled = ${doubled}`);

console.log(`number = ${number}`);