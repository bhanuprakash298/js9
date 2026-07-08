

// Task =1  Employee Salary Dashboard


let employees = [
  { name: "Bhanu", salary: 45000 },
  { name: "Ravi", salary: 60000 },
  { name: "Anjali", salary: 120000 },
  { name: "Kiran", salary: 55000 }
];
let employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

// sal greater than 50000
let empsalname=employees.filter(emp =>emp.salary >50000);
console.log(empsalname);

let firstHighSalary = employees.find(emp => emp.salary > 100000);
console.log("first emp salary with 100000 :",firstHighSalary);

let findtotalexp=employees.reduce((total,emp)=>total+emp.salary,0);
console.log("Total expense :",findtotalexp);


// task =2  E-Commerce Cart Management

let cart1=["milk","powder","bag"];
let cart2=["vegetables","fruits","non-veg"];

let combinedprod=[...cart1,...cart2];
console.log("Merged products :",combinedprod);

let addnewprod=[...combinedprod,"mutton"];
console.log("after adding new product :",addnewprod);

function  checkout(...products)
{
    console.log("prodcuts :",products);
    console.log("total products :",products.length);
}
checkout("monitor","mobile","keyboard","mouse");


// task =3 Student Report Card

let student={
    name :"bhanu",dept :"cse",marks:[55,69,85,98]
};

let {name,dept,marks}=student;
let{sub1,sub2,sub3}=marks;

let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
let averageMarks = totalMarks / marks.length;
console.log("Student Name:", name);
console.log("Department:", dept);
console.log("First Subject:", sub1);
console.log("Second Subject:", sub2);
console.log("Third Subject:", sub3);
console.log("total marks :",totalMarks);
console.log("average marks :",averageMarks);


//task =4 product search system

let searchText = "   Laptop   ";
let trimmed = searchText.trim();
console.log("Trimmed:", trimmed);

let lower = trimmed.toLowerCase();
console.log("Lowercase:", lower);
let product = "gaming laptop";
console.log("Contains Search:", product.includes(lower));
let highlighted = product.replace("laptop", "[LAPTOP]");
console.log("Highlighted:", highlighted);

// task =5 movie collection manager
let movies = ["Bahubali", "RRR", "Pushpa"];
movies.push("Salaar");
console.log("After Push:", movies);
movies.pop();
console.log("After Pop:", movies);
movies.shift();
console.log("After Shift:", movies);
movies.unshift("Kalki");
console.log("After Unshift:", movies);

movies.splice(1, 1, "Devara");
console.log("After Splice:", movies);
let ratings = [4.2, 4.8, 3.9, 5.0, 4.5];
ratings.sort((a, b) => b - a);
console.log("Ratings Descending:", ratings);
console.log("Movie Exists:", movies.includes("RRR"));






