// 1. Write a program that determines whether a given number is positive, negative, or zero

let x = -3;
let z= 0;
let odd_even_check = x/=0; //idk why this is .005 second faster
//let odd_even_check= ((x/2)==0);
if (odd_even_check == true){
    console.log("x is even");
}
else {
    console.log("x is odd");
}


// 2. Write a program that takes the temperature as input and tells the user whether to wear a jacket, t-shirt, or sweater based on the temperature

let temperature=50;
if (temperature<=20 && temperature>=5){
    console.log("wear a sweater");
}
else if (temperature>20 && temperature <30){
    console.log("wear a jacket");
}
else if (temperature>=30 && temperature<=42){
    console.log("wear a t-shirt");
} 
else{
    console.log("error: Abnormal weather Don't leave home");
}



//3. Write a program that determines the grade of a student based on their percentage score,
//using the following criteria:
//- Above 90% = A
//- 80% to 89% = B
//- 70% to 79% = C
//- 60% to 69% = D
//- Below 60% = F

let score=20;

if (score>89 && score<= 100) {
    console.log("A");
} 
else if (score>79 && score < 90) {
    console.log("B");
} 
else if (score>69 && score < 80) {
    console.log("C");
}
else if (score> 59 && score < 70) {
    console.log("D");
} 
else if (score > 0 && score < 60) {
    console.log("F");
}
else{
    console.log("error: someone doesn't understand how % works");
}


// 4. Write a program that prompts the user to enter a month number and then displays the corresponding month name.

let month_number = 1; // Manually set the month number

if (month_number === 1) {
    console.log("January");
} else if (month_number === 2) {
    console.log("February");
} else if (month_number === 3) {
    console.log("March");
} else if (month_number === 4) {
    console.log("April");
} else if (month_number === 5) {
    console.log("May");
} else if (month_number === 6) {
    console.log("June");
} else if (month_number === 7) {
    console.log("July");
} else if (month_number === 8) {
    console.log("August");
} else if (month_number === 9) {
    console.log("September");
} else if (month_number === 10) {
    console.log("October");
} else if (month_number === 11) {
    console.log("November");
} else if (month_number === 12) {
    console.log("December");
} else {
    console.log("Invalid month number");
}

// 5. Write a program that asks the user to enter a day of the week (1-7), and then displays whether it is a weekday or a weekend

let input=4;
const Weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] 

if (input>=1 && input <=5){
    console.log(Weekdays[input-1] + ": is a week day");
}
else if (input >5 && input <=7){
    console.log(Weekdays[input-1] + ": is a week end");
}
else {
    console.log("ERROR: alien or anomaly detected: this one doesn't know how many days are there in a week")
}

//  6. Write a program that asks the user to enter their age. Based on their age, display the appropriate message:
// - If the age is less than 18, display "You are a minor".
// - If the age is between 18 and 65 (inclusive), display "You are an adult".
// - If the age is greater than 65, display "You are a senior citizen".

source = /jstask/agelimit

//  7. Write a program that takes the user's total purchase amount and determines the discount they are eligible for:
// - If the purchase amount is less than $50, no discount is applied.
// - If the purchase amount is between $50 and $100 (inclusive), apply a 10% discount.
// - If the purchase amount is greater than $100, apply a 20% discount.

let purchase = 55;
let bill;

bill = price * 0.95

//  8. Write a program that asks the user to enter a number and determines whether it is even or odd using a switch statement. Print "Even" if the number is even and "Odd" if the number is odd.




//  Write a program that asks the user to enter the day of the week (1-7) and displays the corresponding name of the day using a switch statement.




//  10. Write a program that prompts the user to enter a grade (A, B, C, D, or F) and displays the corresponding message:
//  - If the grade is A, display "Excellent!"
//  - If the grade is B, display "Good job!"
//  - If the grade is C, display "Keep up the effort!"
//  - If the grade is D or F, display "Better luck next time!"



