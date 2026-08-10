// Create a JavaScript object containing key-value pairs. 
var Animal = { 
    Species: "Dog", 
    Color: "Brown", 
    Breed: "Labrador", 
    Age: 5 
}; 
// Delete the Color key-value pair before displaying its value. 
delete Animal.Color; 
// Create a function to display a value from the dictionary. 
function myDictionary() { 
    // Display the deleted Color value in the HTML element.
     document.getElementById("Dictionary").innerHTML = Animal.Color; 
}