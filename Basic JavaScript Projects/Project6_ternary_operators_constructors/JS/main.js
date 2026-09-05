// Function for Ride Height Assignment
function Ride_Function() {

    var Height = document.getElementById("Height").value;

    // Nested function to check the rider's height
    function Check_Height() {
        return Height >= 52;
    }

    // Ternary operator determines if the rider can ride
    var Can_ride = Check_Height() ? "You are tall enough" : "You are too short";

    // Display the result in the HTML paragraph
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


// Function for Voting Age Assignment
function Vote_Function() {

    var Age, Can_Vote;

    // Get the age entered by the user
    Age = document.getElementById("Age").value;

    // Ternary operator determines if the person can vote
    Can_Vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";

    // Display the result
    document.getElementById("Vote").innerHTML = Can_Vote;
}


// Constructor Function using "this"
function Vehicle(Make, Model, Year, Color) {

    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}


// Create object instances using the "new" keyword
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


// Function to display the constructor results
function myFunction() {

    document.getElementById("New_and_This").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color +
        "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}


// Display the reserved word
var reservedWord = "new";

document.getElementById("Reserved").innerHTML = reservedWord;F