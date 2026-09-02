// Create a variable containing a string. 
var myName = "Ana"; 
// Use the typeof operator to display the data type of the variable. 
document.write(typeof myName);

// Create a number variable. 
var number = 10; 
// Create a string variable. 
var text = "5"; 
// Use type coercion to convert the string to a number during addition. 
var result = number + Number(text); 
// // Display the result in the browser. 
document.write("The result is: " + result);

// 1. Display NaN 
document.write(0 / 0);
// 2. Use isNaN() to display true 
document.write("<br>" + isNaN("Hello")); 
// 3. Use isNaN() to display false 
document.write("<br>" + isNaN(10));

document.getElementById("Infinity").innerHTML = 1E+309;
document.getElementById("Negative_Infinity").innerHTML = -1E+309;

// Boolean logic using the greater than operator 
document.write(10 > 5); 
// Boolean logic using the lesser than operator 
document.write("<br>" + (5 < 10));

// Perform a math operation in the Console
console.log(10 + 5);

// Using == to return true
document.write("<br>" + (10 == 10));

// Using == to return false
document.write("<br>" + (10 == 5));

// === returns true: same data type and same value
document.write("<br>" + (10 === 10));

// === returns false: different data type and different value
document.write("<br>" + (10 === "5"));

// === returns false: different data type but same value
document.write("<br>" + (10 === "10"));

// === returns false: same data type but different value
document.write("<br>" + (10 === 5));


// AND operator - returns true
document.write("<br>" + (10 > 5 && 20 > 10));

// AND operator - returns false
document.write("<br>" + (10 > 5 && 20 < 10));

// OR operator - returns true
document.write("<br>" + (10 > 5 || 20 < 10));

// OR operator - returns false
document.write("<br>" + (10 < 5 || 20 < 10));

// NOT operator - changes false to true
document.write("<br>" + !(10 < 5));

// NOT operator - changes true to false
document.write("<br>" + !(10 > 5));