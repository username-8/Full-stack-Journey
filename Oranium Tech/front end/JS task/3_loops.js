// 1.To print Hello 10 times to the console using while loop

let count = 1;
const Helloarray = []
while (count <= 10) {
    Helloarray.push("hello")
    count++;
}
console.log(Helloarray);

// 2.To print first 10 numbers using while loop

let num = 1;
const seq = []
while (num<=10){
    seq.push(num);
    num++;
}
console.log(seq);


// 3.To print all numbers divisible by 3 AND 5 between 5 and 100?using while loop

let number = 5;
const numarray = []
while (number <= 100) {
    if (number % 3 === 0 && number % 5 === 0) {
        numarray.push(number);
    }
    number++;
}
console.log(numarray);

// 4.Write program to read actor name from the end user until entering 'Vijay' by using while loop
// Sample input:
// Enter Your Favorite Actor: Ajith
// Enter Your Favorite Actor: Surya
// Enter Your Favorite Actor: STR
// Enter Your Favorite Actor: Vijay
// Output:
// Alert: Thanks for Confirmation as your Favorite actor: Vijay


// 5.To print all numbers which are divisible by 7 from 1 to 100 using for loop

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// 6.To print first 10 numbers using do-while loop

let int = 1;
const instar = []
do {
    instar.push(int);
    int++;
}
while (int <= 10);

console.log(instar);