//1. Square Every Number:  Given an array of numbers, write a function using map that returns a new array where every number is squared.
// Expected Output: [4, 16, 36, 64]

let numbers = [2, 4, 6, 8];
let numsqare = numbers.map(square)

function square(num) {
    return num * num;
}
console.log(numsqare);