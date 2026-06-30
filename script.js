

// Task 1 - Employee Login Eligibility

let age = Number(prompt("Enter your age:"));
let hasId = true;
let attendance = Number(prompt("Enter your attendance percentage:"));

if (age >= 18 && hasId && attendance >= 75) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Task 2 - Student Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Task 3 - ATM Withdrawal

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
    balance -= withdraw;
    console.log("Transaction Successful");
    console.log("Remaining Balance: " + balance);
}
else {
    console.log("Transaction Failed");
}

// Task 4 - Food Ordering App

let choice = Number(prompt(
    "1. Pizza\n2. Burger\n3. Shawarma\n4. Biryani\n5. Juice\n\nEnter your choice:"
));

switch (choice) {

    case 1:
        console.log("You Ordered Pizza");
        break;

    case 2:
        console.log("You Ordered Burger");
        break;

    case 3:
        console.log("You Ordered Shawarma");
        break;

    case 4:
        console.log("You Ordered Biryani");
        break;

    case 5:
        console.log("You Ordered Juice");
        break;

    default:
        console.log("Invalid Choice");
}

// Task 5 - E-Commerce Discount

let price = Number(prompt("Enter Purchase Amount:"));

let premiumUser = true;

let discount = 0;

if (price > 5000 && premiumUser) {

    discount = price * 0.20;

}
else {

    discount = price * 0.10;

}

console.log("Original Price : " + price);
console.log("Discount : " + discount);
console.log("Final Price : " + (price - discount));

// Task 6 - Attendance Report

for (let i = 1; i <= 30; i++) {

    console.log("Day " + i + " Present");

}

// Task 7 - Even Number Generator

for (let i = 2; i <= 100; i++) {

    if (i % 2 === 0) {

        console.log(i);

    }

}


// Task 8 - Mobile Number Validation

let mobile = prompt("Enter Mobile Number:");

if (
    mobile.length === 10 &&
    (
        mobile.startsWith("6") ||
        mobile.startsWith("7") ||
        mobile.startsWith("8") ||
        mobile.startsWith("9")
    )
) {

    console.log("Valid Mobile Number");

}
else {

    console.log("Invalid Mobile Number");

}
// Task 9 - Shopping Cart=

let cart = [
    "Milk",
    "Bread",
    "Egg",
    "Rice",
    "Oil"
];

console.log("First Item : " + cart[0]);
console.log("Last Item : " + cart[cart.length - 1]);
console.log("Total Items : " + cart.length);

// Task 10 - Employee Database

let employee = {

    name: "Bhanu",

    salary: 35000,

    department: "Software",

    experience: 3

};

console.log("Employee Name : " + employee.name);
console.log("Department : " + employee.department);
console.log("Experience : " + employee.experience + " Years");

// Task 11 - Company ID Generator

let empName = "Bhanu";
let empId = 1520;
let empDept = "Development";

console.log(`Welcome ${empName}`);
console.log(`Your Employee ID is EMP${empId}`);
console.log(`Department : ${empDept}`);

// Task 12 - User Registration

let userName = prompt("Enter Your Name:");
let userAge = Number(prompt("Enter Your Age:"));

let terms = confirm("Do you accept Terms and Conditions?");

if (terms) {

    alert("Registered Successfully");

}
else {

    alert("Registration Cancelled");

}


// =======================================
// Task 13 - Salary Increment Calculator
// =======================================

let salary = 62500;

let increment = 15;

let incrementAmount = salary * increment / 100;

let newSalary = salary + incrementAmount;

console.log("Old Salary : " + salary);

console.log("Increment Amount : " + incrementAmount);

console.log("New Salary : " + newSalary);


// Task 14 - Restaurant Bill Generator

let burger = 150;

let pizza = 300;

let juice = 80;

let subtotal = burger + pizza + juice;

let gst = subtotal * 18 / 100;

let grandTotal = subtotal + gst;

console.log("Subtotal : " + subtotal);

console.log("GST : " + gst);

console.log("Grand Total : " + grandTotal);


// Task 15 - Company Attendance Dashboard


let companyEmployees = [

    { name: "Rahul", status: "Present" },

    { name: "Arun", status: "Absent" },

    { name: "Kamal", status: "Present" },

    { name: "Priya", status: "Present" },

    { name: "Divya", status: "Absent" }

];

let present = 0;

let absent = 0;

console.log("===== Present Employees =====");

for (let emp of companyEmployees) {

    if (emp.status === "Present") {

        console.log(emp.name);

        present++;

    }

}

console.log("===== Absent Employees =====");

for (let emp of companyEmployees) {

    if (emp.status === "Absent") {

        console.log(emp.name);

        absent++;

    }

}

console.log("Total Present : " + present);

console.log("Total Absent : " + absent);



// Mini Project - Employee Management System
// =======================================

let employeeList = [];
let menuChoice;

do {

menuChoice = Number(prompt("===== Employee Management System =====\n\n1. Add Employee\n2. View All Employees\n3. Search Employee by ID\n4. Calculate Salary with Bonus\n5. Check Experience Level\n6. Delete Employee\n7. Exit\n\nEnter Your Choice:"));

switch(menuChoice){

case 1:

let id = Number(prompt("Enter Employee ID:"));
let name = prompt("Enter Employee Name:");
let department = prompt("Enter Department:");
let salary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience (Years):"));

let employee = {
id:id,
name:name,
department:department,
salary:salary,
experience:experience
};

employeeList.push(employee);

alert("Employee Added Successfully");

break;

case 2:

if(employeeList.length===0){

alert("No Employees Found");

}
else{

console.clear();

console.log("===== Employee List =====");

for(let emp of employeeList){

console.log(`ID : ${emp.id}`);
console.log(`Name : ${emp.name}`);
console.log(`Department : ${emp.department}`);
console.log(`Salary : ${emp.salary}`);
console.log(`Experience : ${emp.experience} Years`);
console.log("-------------------------");

}

alert("Employee Details Printed in Console");

}

break;

case 3:

let searchId = Number(prompt("Enter Employee ID:"));

let found = false;

for(let emp of employeeList){

if(emp.id===searchId){

alert(`Employee Found

Name : ${emp.name}
Department : ${emp.department}
Salary : ${emp.salary}
Experience : ${emp.experience} Years`);

found=true;

break;

}

}

if(!found){

alert("Employee Not Found");

}

break;

case 4:

let bonusId = Number(prompt("Enter Employee ID:"));

let salaryFound = false;

for(let emp of employeeList){

if(emp.id===bonusId){

let bonus = emp.salary*0.10;

let totalSalary = emp.salary+bonus;

alert(`Employee : ${emp.name}

Salary : ${emp.salary}

Bonus : ${bonus}

Total Salary : ${totalSalary}`);

salaryFound=true;

break;

}

}

if(!salaryFound){

alert("Employee Not Found");

}

break;
case 5:

let expId = Number(prompt("Enter Employee ID:"));

let expFound = false;

for (let emp of employeeList) {

    if (emp.id === expId) {

        let level = "";

        if (emp.experience >= 10) {
            level = "Senior";
        }
        else if (emp.experience >= 5) {
            level = "Mid-Level";
        }
        else {
            level = "Junior";
        }

        alert(`Employee : ${emp.name}

Experience : ${emp.experience} Years

Level : ${level}`);

        expFound = true;

        break;

    }

}

if (!expFound) {

    alert("Employee Not Found");

}

break;


case 6:

let deleteId = Number(prompt("Enter Employee ID to Delete:"));

let deleted = false;

for (let i = 0; i < employeeList.length; i++) {

    if (employeeList[i].id === deleteId) {

        employeeList.splice(i, 1);

        deleted = true;

        alert("Employee Deleted Successfully");

        break;

    }

}

if (!deleted) {

    alert("Employee Not Found");

}

break;


case 7:

alert("Thank You!");

break;


default:

alert("Invalid Choice");

}

} while (menuChoice !== 7);
