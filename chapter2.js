console.log("chapter 2 Exercises")
console.log("Exercises 2.1")
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log("str1 is ",typeof str1)
console.log("str2 is ",typeof str2)
console.log("val1 is ",typeof val1)
console.log("val2 is ",typeof val2)
console.log("myNum is ",typeof myNum)
console.log("Exercises 2.2")
let name = "Hafsa"
let age = 19
let test = true
console.log("Hello! My name is " + name + ". I am " + age + " years old and I can code JavaScript: " + test);
console.log("Exercises 2.3")
let a1 = prompt("Enter the value of perpendicular \"a\"")
let b1 = prompt("Enter the value of base \"b\"")
console.log("The hypotenuse of right angle triangle is ",Math.sqrt((a1**2)+(b1**2)))
console.log("Exercises 2.4")
let a=8;
let b=5;
let c=10;
console.log("Initial value of a,b,c: ",a,b,c);
a += b;
a /= c;
c %= b;
console.log("The value of a: ", a);
console.log("The value of b: ", b);
console.log("The value of c: ", c);
console.log("Chapter Project");
console.log("Miles-to-Kilometers Converter");

let miles = 10;
let kilometers = miles * 1.60934;
console.log(`The distance of ${miles} miles is equal to ${kilometers} kilometers.`);

console.log("BMI calculator");

let height_Inches = 70;
let Weight_Pounds = 150;
const Inches_Centimeters = 2.54;
const Pounds_Kilos = 0.453592;

let height_Centimeters = height_Inches * Inches_Centimeters;
let weight_Kilo = Weight_Pounds * Pounds_Kilos;

const height_Meters = height_Centimeters / 100;
const bmi = weight_Kilo / (height_Meters ** 2);
console.log(`Height: ${height_Inches} inches (${height_Centimeters} cm)`);
console.log(`Weight: ${Weight_Pounds} pounds (${weight_Kilo} kg)`);
console.log(`BMI: ${bmi}`);




