// Task 1
let empname = prompt("Enter Employee Name");
console.log("Employee Name: " + empname);
document.writeln("Welcome " + empname + "<br><br>");


// Task 2
let training = confirm("Are you ready to join today's JavaScript training?");
console.log("Training Confirmation: " + training);


// Task 3
alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");


// Task 4
let studentname = prompt("Enter Student Name");
let studentage = prompt("Enter Student Age");

console.log("Student Name: " + studentname);
console.log("Student Age: " + studentage);


// Task 5
let productprice = 500;
productprice = 750;

console.log("Updated Product Price: " + productprice);


// Task 6
let username = prompt("Enter Username");

if (username == "" || username == null) {
    console.warn("Warning: Username is empty.");
} else {
    console.log("Login Successful: " + username);
}


// Task 7
alert("Website is under maintenance.");
console.error("Error: Website is currently unavailable.");


// Task 8
let feedback = prompt("How was today's JavaScript session?");

console.log("Feedback: " + feedback);

document.writeln("Thank you for your feedback!<br><br>");


// Task 9
let name = prompt("Enter Your Name");
let city = prompt("Enter Your City");
let language = prompt("Enter Your Favorite Programming Language");

console.log("Name: " + name);
console.log("City: " + city);
console.log("Favorite Programming Language: " + language);


// Task 10
let fullname = prompt("Enter Full Name");
let email = prompt("Enter Email");
let mobile = prompt("Enter Mobile Number");

console.log("===== Registration Details =====");
console.log("Name   : " + fullname);
console.log("Email  : " + email);
console.log("Mobile : " + mobile);

alert("Registration Successful!");