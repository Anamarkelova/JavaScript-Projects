// Function using the addition operator (+). 
function addition_Function() {
    var result = 10 + 5;
    // Display the addition result. 
    document.getElementById("Addition").innerHTML = "10 + 5 = " + result;
}
// Function using the subtraction operator (-). 
function subtraction_Function() {
    var result = 10 - 5;
    // Display the subtraction result. 
    document.getElementById("Subtraction").innerHTML = "10 - 5 = " + result;
}
// Function using the multiplication operator (*). 
function multiplication_Function() {
    var result = 10 * 5;
    // Display the multiplication result. 
    document.getElementById("Multiplication").innerHTML = "10 * 5 = " + result;
}
// Function using the modulus operator (%).
function modulus_Function() {
    var result = 10 % 3;
    // Display the modulus result. 
    document.getElementById("Modulus").innerHTML = "10 % 3 = " + result;
}
// Function using the increment operator (++). 
function increment_Function() {
    var number = 10; number++;
    // Display the increment result. 
    document.getElementById("Increment").innerHTML = "Increment result = " + number;
}
// Function using the decrement operator (--). 
function decrement_Function() {
    var number = 10; number--;
    // Display the decrement result. 
    document.getElementById("Decrement").innerHTML = "Decrement result = " + number;
}
// Function using the Math.random() method. 
function random_Function() {
    var randomNumber = Math.random();
    // Display the random number. 
    document.getElementById("Random").innerHTML = "Random number = " + randomNumber;
}