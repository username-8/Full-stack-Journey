
// Arithmetic Operators

// 1. Calculate the total price of items in a shopping cart
let item_1=20;
let item_2=15;
let item_3=10;
let total=item_1+item_2+item_3;
console.log("1. total price = " + total);

// 4. Calculate the area of a rectangle

let length = 5;
let width = 10;
area = length * width;
console.log("4. area = "+ area)

// 7. Calculate the average score of a student

let score1 = 85
let score2 = 90
let score3 = 95
average = ((score1+score2+score3)/3)
console.log("7. average score = " + average) 


// 10. Determine if a number is even or odd

let check_number = 10;
let test_for_odd = ((check_number / 2) == 0);

if (test_for_odd === false) {
    console.log("10. number is odd" );
}
else{
    console.log("10. number is even" );
}

// --------------------  Relational Operators  ----------------------------

// 2. Check if a user is eligible for a discount based on their age
let user_age = 17;
let get_discount = user_age >= 18;
if (get_discount === false) {
    console.log("2. user is not eligible for discount");
}
else{
    console.log("2. user is eligible for discount");
}

// 5. Check if a user’s input matches the required password.

const username = "blackdog";
const password = "Pasword123";

let input_name = "blackdog";
let input_password = "Pasword123";

if (username === input_name && password === input_password) {
    console.log("5. access Granted, welcome");
}
else{
    console.log("5. wrong pw!!! WHO ARE YOU !?!?!?");
}

// 8. Check if a number is less than a certain threshold

let number = 45;
let threshold = 50;

console.log("8. is value less than threshold "+ (number<threshold))

// ----------------------  Logical Operators  -------------------------

//3. Determine if a user can access a restricted area based on their membership and age. 

let is_member = true
let age = 20 

if (is_member = true && age >=18) {
    console.log("3. welcome user");
}
else {
    console.log("3. get out of here");
}


// 6. Check if a student has passed based on grades in two subjects 

let math_grade=60;
let english_grade=55;

if (math_grade >= 40 && english_grade >= 45) {
    console.log("6. Pass")
}
else{
    console.log("6. FAIL!!!")
}

// 9. Check if a user is not logged in

let sample_input = false;
let logged_in = true;

console.log("9. user not logged in: " + (sample_input == !logged_in))












