// Task --1 == employee name

let empname = prompt("Enter Employee Name:");
console.log(empname);
document.writeln("Welcome " + empname + "<br><br>");


// Task 2 -=- Company Entry Confirmation

let training = confirm("Are you ready to join today's JavaScript training?");
console.log(training);


// Task ==3 - Customer Greeting

alert("Welcome to Stackly Solutions!");
console.log("Customer entered the website.");


// Task ==4 - Student Details

let stuName = prompt("Enter Student Name:");
let stuAge = prompt("Enter Student Age:");
console.log("Student Name :", stuName);
console.log("Student Age :", stuAge);

// Task ==5 - Product Price

let prodPrice = 500;
prodrice = 750;
console.log("Updated Price :", prodtPrice);


// Task 6 - Login Validation
let username = prompt("Enter Username:");
if (username == "")
{
    console.warn("Warning: Username is empty.");
}

else 
{

  console.log("Login Successful: " + username);

}



// Task ==7 - Website Maintenance

alert("Website is under maintenance.");
console.error("Error: Website is currently unavailable.");


// Task ==8 - Feedback Collection

let feedback = prompt("How was today's JavaScript session?");
console.log("Feedback :", feedback);
document.writeln("Thank you for your feedback!<br><br>");


// Task ==9 - Profile Information

let name = prompt("Enter Your Name:");
let city = prompt("Enter Your City:");
let language = prompt("Enter Your Favorite Programming Language:");
console.log("Name :", name);
console.log("City :", city);
console.log("Programming Language :", language);


// Task 10 - Mini Registration Form

let fullName = prompt("Enter Full Name:");
let email = prompt("Enter Email:");
let mobile = prompt("Enter Mobile Number:");
console.log("Registration Details");
console.log("Name   :", fullName);
console.log("Email  :", email);
console.log("Mobile :", mobile);

alert("Registration Successful!");