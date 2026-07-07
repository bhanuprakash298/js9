
// Task 1 ==Employee Bonus (Spread Operator)


let emp={
    name : "Bhanu",
    salary : 25000
};
let newemp={
    ...emp,
    bonous : 5000,
    depart : "Software"
};

console.log(newemp);


// Task 2 == Shopping Cart (Rest Operator)

function calculateBill(... items)
{
    let total=0;
    for(let i=0; i<items.length ; i++)
    {
        total +=items[i];
    }
    console.log("items",items.length);
    console.log("Total :"+total);
}
calculateBill(10,30,40,50);


// Task 3 == Student Details (Object Destructuring) 

let student = {
  name:"Rahul",
  age:22,
  course:"MERN",
  city:"Chennai"
};

let {name,age,course,city}=student;
console.log(name);
console.log(age);
console.log(course);
console.log(city);

// Task 4 == Online Food Order 

let food= ["pizza", "Burger" , "Fries"];
food.push("coke");
food.push("Ice cream");

food.splice(2,1);
console.log(food);

// Task 5 == Bank Transactions 

let transactions =[1000,5500,9510,15000,20000];
transactions.shift();
transactions.unshift(500);
console.log(transactions);

// Task 6 ==  Company Departments

let dept1=["HR","Sales"];
let dept2=["Developer","Testing"];

let finaldept=dept1.concat(dept2);
console.log(finaldept);

// Task 7 == Product Search

let products=[
"Laptop",
"Mouse",
"Keyboard",
"Monitor"];

if (products.includes("Mouse"))
{
     console.log("Available");
     
}
else
{
    console.log("Not available");
}

// Task =8 User login - callback

function dashboard() {
    console.log("Dashboard Opened");
}

function loginn(callback) {
    console.log("Login Success");
    callback();
}

loginn(dashboard);

// Task =9 Coupon Generator (Generator Function)

function * coupons()
{
   yield "WELCOME10",
   yield "save10",
   yield "mega50"
   yield "free100"
}

let coupon=coupons();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);

// Task = 10 course registartion 

function coursee(a)
{
    return function(b)
    {
        return function(c)
        {
            console.log("course :",a);
            console.log("Batch :",b);
            console.log("Room :",c);
        }
    }
}
coursee("JavaScript")("Morning")("Batch-36")


// Task = 11 Movie collection

let movies=[
"Leo",
"GOAT",
"Dragon",
"Retro",
"Coolie"
];

let print=movies.slice(2,4);
console.log(print);

// Task = 12 Employee ids 

let ids=[101,102,103,104,105];

// ids.splice(2,1,501);
// ids.splice(3,1,502);
ids.splice(2,2,501,502)
console.log(ids);

// Task =13  Sort product prices 

let price=[
5000,
250,
700,
12000,
50
];
price.sort((a,b) =>a-b);
console.log(price);


// Task =14 -- Nested categories

let data=[
"Electronics",
[
"Mobiles",
[
"Samsung",
"Apple"
]
]
];

let [a,[b,[c1,c2]]] =data;
console.log(a);
console.log(b);
console.log(c1);
console.log(c2);


// Task =15 - Company team

let developers=[
"John",
"David"
];

let designers=
[ ...developers,
"Ram",
"Kiran"
];

console.log(designers);

// Task ==16 Return function

function calculateSalary(salary,bonous)
{
    return salary+bonous;
}
let totalsal=calculateSalary(25000,5000);
console.log(totalsal);

// Task ==17 scope checking

if (true) {
    var x = "I am var";
    let y = "I am let";
    const z = "I am const";
}

console.log(x);
//console.log(y);
//console.log(z);

// answer : here we are getting two errors they are y, z beacause let and const are block scoped and give errors outside

// Task = 18 customer orders

let orders=[
"Pizza",
"Burger",
"Pizza",
"Sandwich",
"Pizza"
];
console.log("First Index :", orders.indexOf("Pizza"));
console.log("Last Index :", orders.lastIndexOf("Pizza"))

// Task =19 Flatten Product Categories

let items=[
1,
2,
[
3,
4,
[
5,
6
]
]
] ;

let flateditem=items.flat(2);
console.log(flateditem);

// task 20==Mini Shopping Cart Challenge

let cart=["Mouse","Keyboard"];
cart.push("Monitor");
cart.unshift("laptop");
cart.splice(2,1);
if(cart.includes("Mouse"))
{
    console.log("exist");
    
}
else
{
    console.log("not there");
}
let accessories=[ ...cart,"Webcam","Speaker"];
console.log(accessories);













