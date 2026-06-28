// Task 1

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

console.log("My name is " + name);
console.log("I am " + age + " years old");

// Task 2 

let degree = prompt("Did you complete degree? (yes/no)");

if (degree == "yes") {
    console.log("Degree Completed");
} else {
    console.log("Degree Not Completed");
}

// Task 3 

let mobPrice = 15000;
let discount = 800;

let finalPrice = mobPrice - discount;

console.log("Final Price : " + finalPrice);

// Task 4 

let checkAge = Number(prompt("Enter your age:"));

if (checkAge >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}

// Task 5

let cart = ["Rice", "Milk", "Sugar", "Tea Powder"];

console.log("First Product : " + cart[0]);
console.log("Last Product : " + cart[cart.length - 1]);
console.log("Total Products : " + cart.length);

// Task 6 

let student = {
    name: "Bhanu",
    age: 18,
    course: "Java Developer"
};

console.log("Student Name : " + student.name);
console.log("Student Course : " + student.course);

// Task 7 

let sal = Number(prompt("Enter Salary:"));
let bonus = Number(prompt("Enter Bonus:"));

let finalSal = sal + bonus;

console.log("Total Salary : " + finalSal);

// Task 8

let username = "admin";
let password = "1234";

let userNameInput = prompt("Enter Username:");
let passwordInput = prompt("Enter Password:");

if (userNameInput == username && passwordInput == password) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// Task 9

let foodPrice = Number(prompt("Enter Food Price:"));
let deliveryCharge = Number(prompt("Enter Delivery Charge:"));

let totalBill = foodPrice + deliveryCharge;
let gst = totalBill * 0.05;
let grandTotal = totalBill + gst;

console.log("Total Bill : " + totalBill);
console.log("GST : " + gst);
console.log("Grand Total : " + grandTotal);

// Task 10 - E-Commerce Product Details

let product = {
    name: prompt("Enter Product Name:"),
    price: Number(prompt("Enter Product Price:")),
    brand: prompt("Enter Brand Name:"),
    stock: prompt("Stock Available? (true/false)")
};

console.log("Product Name : " + product.name);
console.log("Brand : " + product.brand);
console.log("Price : " + product.price);
console.log("Stock Available : " + product.stock);

// Task 11 - Attendance System

let present = confirm("Are you Present?");

if (present) {
    console.log("Attendance Marked");
} else {
    console.log("Absent");
}

// Task 12 - Banking Application

let balance = Number(prompt("Enter Current Balance:"));
let withdraw = Number(prompt("Enter Withdraw Amount:"));

if (withdraw <= balance) {

    let remaining = balance - withdraw;

    console.log("Transaction Successful");
    console.log("Remaining Balance : " + remaining);

} else {

    console.log("Insufficient Balance");

}

// Challenge Task

let employee = {

    name: prompt("Enter Employee Name:"),
    age: Number(prompt("Enter Employee Age:")),
    department: prompt("Enter Department:"),
    salary: Number(prompt("Enter Salary:"))

};

console.log("Employee Name : " + employee.name);
console.log("Employee Age : " + employee.age);
console.log("Department : " + employee.department);
console.log("Annual Salary : " + (employee.salary * 12));

if (employee.salary > 30000) {

    console.log("Senior Employee");

} else {

    console.log("Junior Employee");

}