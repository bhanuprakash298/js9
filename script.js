

// task =1 Employee login

function emplogin ()
{
    if(true)
    {
        var companyName = "Stackly IT";
        let employeeId =21;
        const password ="stack123";
        console.log(companyName);
        console.log(employeeId);
        console.log(password);
        
    }
    console.log(emplogin);
    
}
emplogin()

// Task 2== ATM machine hoisting
console.log(balance);
var balance=2041;

let amount=2569;
const pin=1234;


// Task 3== Food Delivery App (Named Function)

function orderFood(foodName)
{
    console.log("order placed :"+foodName);
    
}
orderFood("chicken biryani")

// Task ==4 WhatsApp Status (Anonymous Function)

let status=function(message)
{
    console.log("staus updated :"+message);
    
}
status("Busy in meeting")

// Task ==5 Weather App (Arrow Function)

const wheather =(city,temprature)=>
{
    console.log(city +" temperature is "+temprature);
}
wheather("chennai"," 36°C")

// Task ==6  Flipkart Offer (IIFE)

// (function(){

//     console.log("Today's Offer");
//     console.log("Flat 60% Discount");

// })();


// tASK ==7 Online Payment (Higher Order + Callback)

function paymentSuccess() {
    console.log("Payment Successful");
}

function makePayment(callback){
    console.log("Payment Processing...");
    callback();
}
makePayment(paymentSuccess);

//Task ==8 YouTube Playlist (Generator Function)

function * playlist()
{
    yield "viedo 1";
    yield "viedo 2";
    yield "viedo 3";
    yield "viedo 4";
}
let play=playlist();
console.log(play.next().value);
console.log(play.next().value);
console.log(play.next().value);
console.log(play.next().value);
console.log("Playlist Completed");

// 9. Student Result (Return)

function calculateTotal(){
    return 485;
}
let total = calculateTotal();
console.log("Total Marks : " + total);


// 10. Shopping Cart (Return)

function cartTotal(price1, price2, price3){

    return price1 + price2 + price3;

}
let amountTotal = cartTotal(500,1000,1500);
console.log("Total Amount : " + amountTotal);


// 11. Salary Calculator (Normal Function)

function salary(basic,hra,bonus){

    console.log("Total Salary : " + (basic + hra + bonus));
}

salary(40000,10000,8000);

// 12. Food Bill (Currying)

function foodBill(food){

    return function(drinks){
        return function(dessert){
            return food + drinks + dessert;
        }
    }
}
console.log(foodBill(200)(100)(80));

// 13. Coupon Generator (Generator)
function* coupons(){

    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "MEGA50";

}
let coupon = coupons();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log("No More Coupons");

// 14. Bank Transaction

function success()
{
    console.log("Transaction Successful");
}
function withdraw(callback){
    console.log("Processing...");
    callback();
}
withdraw(success);


// 15. Employee Profile (Scope)

function employeeProfile(){

    if(true){
        var company = "Stackly";
        let designation = "MERN Developer";
        const salary = 50000;
    }
    console.log(company);
    // console.log(designation); // Error
    // console.log(salary);      // Error
}
employeeProfile();
