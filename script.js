

// task =1 employee age calculator

let data1=new Date();
data1.setFullYear(2003);
data1.setMonth(5);
data1.setDate(25);
console.log(data1.getFullYear());

let curdate=new Date();

let age=curdate.getFullYear()-data1.getFullYear();
console.log("Employee age ,",age,"years");

// task =2 online appointment scheduler

let date2=new Date();
date2.setFullYear(2027);
date2.setMonth(11);
date2.setDate(15);
date2.setHours(10);
date2.setMinutes(30);
console.log("appointment updated");
console.log(date2.toLocaleString());

// task =3  Multi-Country Meeting Time

let data3=new Date();
console.log("India time zone");
console.log(data3.toLocaleString("en-us",{timeZone: "Asia/kolkata"}));
console.log("New York Time:");
console.log(data3.toLocaleString("en-US", {timeZone: "America/New_York"}));
console.log("tokyo time zone:");
console.log(data3.toLocaleString("en-us",{timeZone:"Asia/Tokyo"}));

// task =4  Product Warranty Expiry

let today=new Date();
console.log("purcahse date :",today);
let expdate=new Date();
expdate.setFullYear(2028);
expdate.setMonth(6);
expdate.setDate(9);
console.log("expirey date :",expdate);

// task =5  Digital Clock

setInterval(()=>
{
    let clock=new Date();
    console.log(clock.toLocaleTimeString());
    
},1000);













